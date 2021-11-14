import { useState, useEffect} from "react";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import {ErrorMessage} from "../ErrorMessage";
import { SendButton, Wrapper } from "./PaymentCard.styles";
import Loading from "../Loading/loading";
import { Acct } from "../../Interfaces";



 

 // Network ID
 const netID = 3;


 export default function Payment(props:Acct) {
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [txs, setTxs] = useState("");
    const [addrs, setAddrs] = useState("");
    const [amount,setAmount] = useState("");
    const [account, setAccount] = useState("");
    const [showLink, setShowLink] = useState(false);
    const [loading, setLoading] = useState(false)

    const sendEther = async (e:any) => {
     try{
      e.preventDefault();
     
      // Check if wallet is connected
      if(account === ""){
        throw new Error ("Please connect wallet");
      }

      // Validate receiving address
      if(addrs === "") throw new Error ("Enter a receiving address");
      if(!window.web3.utils.isAddress(addrs)) throw new Error ("Enter a valid address");
      // Validate network
      const netid = await window.web3.eth.net.getId();
      if(netid !== netID) throw new Error  ("Please change to Ropsten network");

      // Validate input amount
      const amt = parseFloat(amount);
      if(amount === "") throw new Error  ("Enter Eth amount");

      if(isNaN(amt)) throw new Error  ("Please type in a number value")
      
      if(amt <= 0) throw new Error  ("Eth amount must be greater than zero")
      setLoading(true)
      const gasPrice = await window.web3.eth.getGasPrice();
      const txParameters = {
          from: account,
          to: addrs,
          value: window.web3.utils.toWei(amount, 'ether'),
          gasPrice: gasPrice,
          gas: 50000
      };
      const data= await window.web3.eth.sendTransaction(txParameters);
      const txHash = data.transactionHash;
          
      const expectedBlockTime = 1000;
      const sleep = (milliseconds:number) => {
          return new Promise(resolve => setTimeout(resolve, milliseconds))
      };
      let transactionReceipt = null;
      
      while (transactionReceipt == null) {
          transactionReceipt = await window.web3.eth.getTransactionReceipt(txHash);
          await sleep(expectedBlockTime);
      }

      if(transactionReceipt.status){
          // Do something here for successful tx
          setLoading(false)
          const hash = transactionReceipt.transactionHash         
          // const hash = "https://ropsten.etherscan.io/tx/" + transactionReceipt.transactionHash;
          setTxs(hash);
          setSuccess(true);
          setShowLink(true);
      }else{
        setErrorMsg("Transaction failed");
      }
     } catch(err: any) {
       if(err){
         setErrorMsg(err.message);
       }else if(err.code === 4001){
          setErrorMsg("Transaction signing rejected");
       }else{
         setErrorMsg("Transaction failed");
       }

       setError(true);
       setSuccess(false);
     }
    };


    useEffect(() => {
      setAddrs(props.acct);
      (async function run(){
        const MetaMProvider = await detectEthereumProvider();
        if(MetaMProvider === window.ethereum){
          
          window.web3 = new Web3(window.ethereum as any);
          // const accts= await window.web3.eth.getAccounts();
          // setAccount(accts[0]);
        }else if(window.web3){
          window.web3 = new Web3(window.web3.currentProvider);
          // const accts= await window.web3.eth.getAccounts();
          // setAccount(accts[0]);
        }else{
        }

      })();
      

  }, []);

  useEffect(() => {
    setAccount(props.acct);
  }, [props.acct]);


  useEffect(() => {
    if(success){
        const notify = setTimeout(() => {
            setShowLink(false);
        }, 6000);
        return () => clearTimeout(notify);
    }else{
        const notify = setTimeout(() => {
            setErrorMsg('');
          }, 3000);
          return () => clearTimeout(notify);
    }
    
  }, [errorMsg, success]);

  return (
    <Wrapper>
{
  loading ? <div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}><h2 style={{textAlign: 'center'}}>Transaction in pr0gress...</h2> <Loading /></div>
  : 
  <div className="parent">
  <div className="son">
    <div className="container">
      <div className="left">
      <div style={{color: success ? "green": "red", padding:'20px'}} className="img">
          {error && 
               <ErrorMessage  message={errorMsg} />
          }               

          {success && txs && <a target="_blank" style={{display: showLink ? "block" : "none", color: "green"}} rel="noreferrer"  href={`https://ropsten.etherscan.io/tx/${txs}`}>Click here to view Transaction status</a>}
          </div>
      <div className="info">
 
       
      </div>
        <div className="circle1">
          <div className="circle">
            <span>Connect</span>
            <span>Wallet</span>
          </div>
        </div>
    </div>
    <div className="right">
      <div className="up">
        <ul>
          <li><h3>Send Eth Payment</h3></li>
          <li>Connect your wallet to metamask, Fill in the fields below and click "Send" to make a successful transaction</li>
        </ul>
        <ul>

        </ul>
      </div>
      <div className="down">
         <div className="payment">
        <form onSubmit={sendEther}>
          
          <div className="form-group">
                
                <label className="cardNumber">Recipient Address</label>
                <input 
                name="ether" 
                type="text" 
                className="form-control1"
                value={addrs}
                onChange ={(e) => {setAddrs(e.target.value)}}
                />
                            <label className="cardNumber">Amount in ETH</label>
                <input 
                name = "address"
                type="text" 
                className="form-control1"
                value={amount}
                onChange ={(e) => setAmount(e.target.value)}
                />
            </div>

            <SendButton  type="submit"   className=" btn-7">
              <span> Send</span>
            </SendButton>

        </form>    
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
}
   </Wrapper>
  );
}


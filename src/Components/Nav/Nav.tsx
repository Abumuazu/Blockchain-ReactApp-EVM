import  { useEffect, useState} from 'react';
import {Balance, ConnectButton, Wrapper} from "./Nav.styles";
import Web3 from 'web3';
interface INav{
    Acctbalance: string;
    Connect: string;
}

declare global {
    interface Window {
        web3:any
        ethereum?: any
    }
}	
	interface GetAcct {
        getAcct: Function
    }

// Network ID
const netID = 3;


const Nav = (props:GetAcct) => {

    const [errorMessage, setErrorMessage] = useState("");
	const [defaultAccount, setDefaultAccount] = useState("");
	const [userBalance, setUserBalance] = useState(0);
    const [isWeb3Installed, setIsWeb3Installed] = useState(false);
    const [isMetaMask, setIsMetaMask] = useState(false);
    const [formattedAcct, setFormattedAcct] = useState("");
    const [connected, setConnected] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    
    const connectWalletHandler = async () => {
        console.log("Connect Wallet Handler");
        if(isWeb3Installed){
            if(isMetaMask){
                await loadMetaMaskWeb3();
            }else{
                await loadWeb3();
            }
        }else{
            setSuccess(false);
            setError(true);
            setErrorMessage("No wallet detected");
        }
    
    }

    const loadMetaMaskWeb3 = async () => {
        const netid = await window.web3.eth.net.getId();
        if(netid !== netID){
            setSuccess(false);
            setError(true);
            setErrorMessage('Please change to Ropsten Network');
            console.log("NetID error");
            return;
        }

        try{
            if(defaultAccount === ''){
                const accounts = await window!.ethereum!.request({method: 'eth_requestAccounts'});
                setDefaultAccount(accounts[0]);
                setConnected(true);
                getEthBalance(accounts[0]);
                formatWallet(accounts[0]);
                props.getAcct(accounts[0]);
            }
        }catch(error){
            console.error(error);
            setSuccess(false);
            setError(true);
            setErrorMessage('MetaMask wallet connection error');
        }
    };

    const loadWeb3 = async () => {
        const netid = await window.web3.eth.net.getId();
        if(netid !== netID){
            setError(true);
            setSuccess(false);
            setErrorMessage('Please change to Ropsten Network');
            return;
        }

        try {
            if(defaultAccount === ''){
                const accounts = await window.web3.eth.net.getAccounts();
                setDefaultAccount(accounts[0]);
                setConnected(true);
                getEthBalance(accounts[0]);
                formatWallet(accounts[0]);
                props.getAcct(accounts[0]);
            }
            
        } catch (error) {
            console.error(error);
            setSuccess(false);
            setError(true);
            setErrorMessage('Wallet connection error');
        }
    };

    const getEthBalance = async (acct: string) => {
        try {
            if(acct !== ''){
                const bal = await window.web3.utils.fromWei(await window.web3.eth.getBalance(acct));
                
                const roundedBal = Number((parseFloat(bal)).toFixed(5));
                setUserBalance(roundedBal);
    
            }
        } catch (error) {
            setSuccess(false);
            setError(true);
            setErrorMessage("Get Eth Balance")
            console.log(error);
        }
        
    };

    const formatWallet = (acct: string) => {
        const dots = '...';
        const firstFour = acct.substring(0, 4);
        const lastFour = acct.substring(38, 42);
        const displayAcct = " " + firstFour + dots + lastFour;
        setFormattedAcct(displayAcct);
    }

    useEffect(() => {
        if(window.ethereum){
            setIsWeb3Installed(true);
            setIsMetaMask(true);
            window.web3 = new Web3(window.ethereum);
        }else if(window.web3){
            setIsWeb3Installed(true);
            window.web3 = new Web3(window.web3.currentProvider);
        }

    }, []);
    
    useEffect(() => {
        props.getAcct(defaultAccount);
    }, [defaultAccount])


    return(
        <>
            <Wrapper>
                <Balance>
                Balance:  {userBalance}
               
                </Balance>
                <ConnectButton  onClick={connectWalletHandler} className=" btn-7">
                    <span> {connected ? formattedAcct : "Connect Wallet"}</span>
                </ConnectButton>
        
            </Wrapper>

        </>
    )
}

export default Nav






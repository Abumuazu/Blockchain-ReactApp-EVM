import React, {useState} from 'react'
import Nav from '../../Components/Nav/Nav'
import Payment from '../../Components/PaymentCard/PaymentCard'
import { Wrapper } from '../../Components/PaymentCard/PaymentCard.styles'


function Transaction() {
    const [acct, setAcct] = useState("");
    const getAcct = (addr: string) => {
        setAcct(addr);
    }


    return (
       <Wrapper>
               <Nav getAcct={getAcct} />
               <Payment acct={acct}/>

       </Wrapper>
    )
}

export default Transaction

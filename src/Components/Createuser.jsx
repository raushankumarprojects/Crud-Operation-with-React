import React, { useState } from "react";
import style from './homecrud.module.css'
import axios from "axios"

import { useNavigate } from "react-router-dom";
const Createuser =()=>{
let [account,setAccount]=useState("")
let [userName,setUserName]=useState("")
let [amount,setAmount]=useState("")

let goto = useNavigate()
let accountData =(e)=>{
setAccount(e.target.value)
}
let userNameData =(e)=>{
    setUserName(e.target.value)
  
  }
  let amountData =(e)=>{
    setAmount(e.target.value)
    
    }

let formHandle=(e)=>{

  e.preventDefault()
  let payload ={account,userName,amount}
  axios.post("http://localhost:3000/users",payload)

  .then(()=>{
    console.log("DATA HAS BEEN ADDED")
  })
.catch(()=>{
  console.log("somthing went wrong")
})

 goto('/users')

}
    return(
<div>
<nav id={style.form}>
<h1>FORM</h1>
 <label htmlFor="">Account:</label>
<input type="text"  value={account} onChange={accountData} /><br /><br /><br />

  <label htmlFor="">UserName:</label>
<input type="text" value={userName} onChange={userNameData} /> <br /> <br /><br />
 <label htmlFor="">Amount:</label>
<input type="text" value={amount} onChange={amountData} /> <br /><br /><br />
<button onClick={formHandle}>SUBMIT</button>
</nav>
</div>
    )
}
export default Createuser;
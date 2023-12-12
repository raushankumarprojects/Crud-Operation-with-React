import { useState } from "react";
import React, { useEffect } from "react";
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

const Edituser =()=>{

    let [account,setAccount]=useState("")
    let [userName,setUserName]=useState("")
    let [amount,setAmount]=useState("")
    

    let navigate =useNavigate()

    let {abc}=useParams()
    
// console.log (abc)
    
useEffect(()=>{
    axios.get(`http://localhost:3000/users/${abc}`)
    .then((resp)=>{
        // console.log(resp.data)

setAccount(resp.data.account)
setUserName(resp.data.userName)
setAmount(resp.data.amount)


    })
.catch(()=>{
    console.log("something went wrong")
})
},[])

let accountData=(e)=>{
    setAccount(e.target.value)
}
let userNameData=(e)=>{
    setUserName(e.target.value)
}
let amountData=(e)=>{
    setAmount(e.target.value)
}

let formhandle =(e)=>{
e.preventDefault()
let payload ={account,userName,amount}
axios.put(`http://localhost:3000/users/${abc}`,payload)
.then(()=>{
    console.log("DATA ADDED")
})
.catch(()=>{
    console.log("something wrong")
})

navigate("/users")

}


return (
<div>
<nav id={style.form2}>

<h1>UPDATE USERS</h1>

 <label htmlFor="">Account:</label>
<input type="text" value={account} onChange={accountData} /><br /><br /><br />

  <label htmlFor="">UserName:</label>
<input type="text" value={userName} onChange={userNameData} /> <br /> <br /><br />

 <label htmlFor="">Amount:</label>
<input type="text"  value={amount} onChange={amountData} /> <br /><br /><br />

<button onClick={formhandle}>UPDATE</button>

</nav>
</div>





)


}
export default Edituser; 
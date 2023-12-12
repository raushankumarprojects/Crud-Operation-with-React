import { useEffect, useState } from "react";
import axios from "axios"
import style from "./homecrud.module.css"
import { Link } from "react-router-dom";


const User =()=>{

    let [content,setContent]=useState([])

    useEffect(()=>{
        axios.get("  http://localhost:3000/users")
.then((resp)=>{
    console.log(resp.data);
    setContent(resp.data)
})

.catch(()=>{
    console.log("something went wrong");
})


    })

    let deleteData=(x)=>{
axios.delete(`http://localhost:3000/users/${x}`)

 window.location.assign("/users")
    }
    return(
<div id={style.userPage}>
    {content.map((x)=>{
        return(
<div id={style.profile}>
<table>
<tr>
    <th> USER {x.id}</th> 
</tr>
Account
: {x.account}
<tr>
    <td>UserName</td>
<td>:{x.userName} </td>
</tr>
<tr>
    <td>Amount</td>
<td>:{x.amount}</td>
</tr>
</table>
<Link to={`/edituser/${x.id}`}> <button>Edit</button></Link> 

<button  onClick={()=>{deleteData(x.id)}} >Delete</button>
</div>

        )
    })}
</div>
    )
}
export default User;
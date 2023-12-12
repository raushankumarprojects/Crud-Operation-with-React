import React from "react";
import style from './homecrud.module.css'
import { Link } from "react-router-dom";
const Homecrud =()=>{
    return(

        <div>
<section id={style.nav}>
<Link to="/">CREATE-USER</Link>
<Link to="/users">USER</Link>
<Link to ="/Edit/:abc"></Link>
</section>


        </div>
    )
}
export default Homecrud;







import React from "react";
const Headerstyles={
    alignItems :"center",
    textAlign:"center",
    color:"white",
    paddingTop:"0px",
    marginTop:"0px",
    backgroundColor:"black",
    width:"100%",boxShadow:"5px 5px 10px  teal"
}
function Header(){
    return(
        <div style={Headerstyles}>
            <header style={{marginTop:"0px"}}  >
               <h1 style={{}}>  Contact Manager</h1>
            </header>
        </div>
    );
}
export default Header;
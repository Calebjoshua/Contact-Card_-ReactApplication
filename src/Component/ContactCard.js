import React from 'react';
const Contactcard = (props) =>{
 const {id, name, email} = props.contacts
      return(
        <div> <div style={{display:"flex",width:"100%",
        backgroundColor:"white",boxShadow:"5px 5px 10px solid gray"}}>
        <div style={{width:"50%", padding:"5px",fontSize:"15px"}}>
            <p>{name}</p>
            <p>{email}</p>
        </div>
        <div style={{float:"right",marginTop:"12px"}}>
        <button style={{marginRight:"0px",borderColor:"black",borderSize:"3px"}}className="btn btn-danger" onClick={() => props.clickHandler(id)} >delete</button>
        </div>
     
    </div>
    <hr style={{height:"3px", backgroundColor:"black"}} /></div>
);
}

export default Contactcard;
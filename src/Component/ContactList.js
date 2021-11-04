import React from 'react';
import Contactcard from './ContactCard';
function Contactlist(props){
    console.log(props)
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }
    const renderContactList = props.contactlist.map((contacts) => {
        return(
            <div>
                <Contactcard contacts={contacts} clickHandler={deleteContactHandler}
                key={contacts.id}/>
            </div>
            )
    })
    return(
        <div>
            <h2 style={{backgroundColor:'black',color:"white"}}>Contact List</h2>
            {renderContactList}
        </div>
    )
}
export default Contactlist;
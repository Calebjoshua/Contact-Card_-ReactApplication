import React,{useState, useEffect} from 'react';
import Addcontacts from './Component/Addcontacts';
import ContactList from './Component/ContactList';
import Header from './Component/Header';
import {uuid} from 'uuidv4';
function App(){
  const local_storage_key="contact";
  const [contactList,setContactList] = useState([])
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContactList([...contactList,{id:uuid(),...contact} ])
  }
  const removeContactHandler = (id) =>{
    const newContactList = contactList.filter((contact)=>{
      return contact.id !== id;
    })
    setContactList(newContactList);
  }
  useEffect(()=>{
   const retrieveContact = JSON.parse(localStorage.getItem(local_storage_key));
   if(retrieveContact) setContactList(retrieveContact);
  },[]);
  useEffect(()=>{
    localStorage.setItem(local_storage_key,JSON.stringify(contactList))
  },[contactList])
  return (
    <div style={{backgroundColor:"darkblue",paddingTop:"15px",}}>
    <div className="container" style={{backgroundColor:"lightblue",boxShadow:"10px 10px 10px solid black"}} >
      <div>
      <Header /><br />
      <Addcontacts addContacts ={addContactHandler}/>
      <ContactList contactlist={contactList} getContactId ={removeContactHandler}/>
    </div>
    </div>
    </div>
);
}
export default App;

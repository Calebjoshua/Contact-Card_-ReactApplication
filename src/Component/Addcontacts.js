import React, {Component} from 'react';
class Addcontacts extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
        }
    }
    addHandlerfunc = (e) =>{
        e.preventDefault()
        if (this.state.name === "" || this.state.email === ""){
            alert("all fields are mandatory")
            return ;
        }
        else{
            this.props.addContacts(this.state)
            console.log(this.state);
            this.setState({name:"",email:""})
        }
    }
    render(){
        return(
            <div>
                <h2 style={{backgroundColor:"black",color:"white"}}>Add Contacts</h2>
                <div >
                    <form onSubmit={this.addHandlerfunc}>
                        <div>
                        <label style={{marginRight:"5px"}}>Name</label>
                        <input style={{width:"50%",height:"30px"}} type="text" placeholder="name" name="name"
                        value={this.state.name} 
                        onChange={(e) =>this.setState({name :e.target.value})}
                        />
                        </div><br />
                        <div>
                        <label style={{marginRight:"8px"}}>Email</label>
                        <input style={{width:"50%",height:"30px",color:"black"}} type="text" placeholder="Email" name="email" value={this.state.email}
                        onChange={(e) =>this.setState({email :e.target.value})}/>
                        </div><br /><br/>
                        <button style={{borderColor:"white",borderSize:"3px"}} className="btn btn-primary" type="submit">Add Contact</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Addcontacts;
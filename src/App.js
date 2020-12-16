import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
//import { Link,  Router } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './App.css'
//import '/home/sushmitha/helloworld/src/Editlist.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from './Items';
class App extends Component {
    constructor(props) {
        super(props);
  this.state={
    name:"",
    gender:"",
    qualification:"",
    mobile:"",
    email:"",
    address:"",
    items:[],
    show:false
  }
}
  onsub=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
 }
//  onsub1=(event)=>{
//   this.setState({
//     address:event.target.value
//   })
// }
// onsub2=(event)=>{
//   this.setState({
//     qualification:event.target.value
//   })
// }
// onsub3=(event)=>{
// this.setState({
//   mobile:event.target.value
// })
// }
// onsub4=(event)=>{
//   this.setState({
//     email:event.target.value
//   })
// }
 store=(event)=>{
  event.preventDefault();
  // const{input}=this.state;
  this.setState({
    items:[...this.state.items,{name:this.state.name,gender:this.state.gender,qualification:this.state.qualification,mobile:this.state.mobile,email:this.state.email,address:this.state.address}],
  })
 }
 deletelist=key=>{
   const allitems=this.state.items;
   allitems.splice(key,1);
   this.setState({
       items:allitems})
 };
 editFunction=(e,index)=>{
    console.log('6020 EVENT : ',e ,'index ',index)
}
saveData = (index,data) =>{

  let existItems = this.state.items;
  existItems[index] = data ;
  this.setState({items:existItems})

 }

 


  render() {
    const{items}=this.state;
    return (
      <form >
        <h1>Enter Details</h1>
        <div >
          <label>Employee ID</label>
          <input className="name" placeholder="enter ID" name="id"></input>
          </div>
          <br></br>
          <div >
          <label>Employee Name</label>
          <input className="name" placeholder="enter Name" name="name"  onChange={this.onsub}></input>
          </div><br></br>
          <div>
          <label>Gender</label>
          <input className="fe" type="radio" name="gender" value="Female" checked={this.state.gender === "Female"}
            onChange={this.onsub}  ></input>Female<input className="ma" name="gender" type="radio" value="Male" checked={this.state.gender === "Male"}
            onChange={this.onsub}  ></input>Male
          </div><br></br>
          <div>
          <label>Qualification</label>
          <select className="qu"  name="qualification" onChange={this.onsub} >
          <option >select</option>
            <option >MCA</option>
            <option >MBA</option>
            <option >MCOM</option>
            <option >MA</option>
          </select>
          </div><br></br>
          <div >
          <label>Mobile Number</label>
          <input className="phnno" placeholder="enter Number" name="mobile" onChange={this.onsub}></input>
          </div>
          <br></br>
          <div >
          <label>Email ID</label>
          <input className="em" name="email" placeholder="enter Email" onChange={this.onsub}></input>
          </div><br></br>
            <div>
          <label>Address</label>
          <textarea className="add" placeholder="enter address" name="address" onChange={this.onsub}></textarea>
          </div>
          <br></br>
        <button className="su" type="button" onClick={this.store}>Submit</button>
        <button className="re" type="submit">Reset</button>
        <ul>{items.map((data,index)=>(
          <Items data={data} index={index} deletelist={(index)=>{this.deletelist(index)}} edit={(index,data)=>this.saveData(index,data)}/>
        ))}
       </ul>
      </form>
    );
  }
}
export default App;
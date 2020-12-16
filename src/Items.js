import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
//import { Link,  Router } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './App.css'
//import '/home/sushmitha/helloworld/src/Editlist.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditModal from './EditModal';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state ={show:false}  }

        

           handleClose=()=>{
            this.setState({show:false})
          }

  render() {
   
   const {data,index} = this.props
    return (
        <li key={index}> Name: {data.name} Gender:{data.gender} Qualification:{data.qualification} mobile:{data.mobile} email:{data.email} Address: {data.address}
        <u> <i onClick={()=>this.props.deletelist(index)}>delete</i></u>
        <u> <i onClick={()=>this.setState({show:true})}>edit</i></u><br></br>
            
         <EditModal data={data} show={this.state.show} close={()=>{this.setState({show:false})}}  key={index} edit={(data)=>this.props.edit(index,data)} />
        </li>
    );
  }
}
export default Items;
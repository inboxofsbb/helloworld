import React, { Component } from 'react';
import { Modal,Button } from 'react-bootstrap';
//import { Link,  Router } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './App.css'
//import '/home/sushmitha/helloworld/src/Editlist.js'
import 'bootstrap/dist/css/bootstrap.min.css';
class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state ={show:false}  }

        componentDidUpdate(prevProps, prevState) { 
            if(prevProps.show!==this.props.show&&this.props.show&&!this.state.show)     {  
                this.setState({...this.state,show:true})
                if(this.props.show) this.setState(this.props.data)
            }
          }
          
        componentDidMount() { 
            console.log('6020 state check ',this.props.show)
            if(this.props.show) this.setState(this.props.data)
         }
        onsub=(event)=>{
            this.setState({...this.state,
              [event.target.name]:event.target.value
            })
         }

         save = () =>{
            this.props.edit(this.state);
            this.props.close();
         }



  render() {
    const {data}=this.props;
    console.log('6020 item : ',data,'props : ',this.props,'state : ',this.state)

    console.log('6020 state : ',this.state)

    return (<Modal
        show={this.props.show}
        onHide={()=>{this.props.close()}}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
          <label>Employee Name</label>
          <input className="name" placeholder="enter Name" value={this.state.name} name="name"  onChange={this.onsub}></input>
          </div><br></br>
          <div>
          <label>Gender</label>
          <input className="fe" type="radio" name="gender" value="Female" checked={this.state.gender==="Female"}
            onChange={this.onsub}  ></input>Female<input  className="ma" name="gender" type="radio" value="Male" checked={this.state.gender==="Male"}
            onChange={this.onsub}  ></input>Male
          </div><br></br>
          <div>
          <label>Qualification</label>
          <select className="qu" value={this.state.qualification} name="qualification" onChange={this.onsub} >
          <option >select</option>
            <option >MCA</option>
            <option >MBA</option>
            <option >MCOM</option>
            <option >MA</option>
          </select>
          </div><br></br>
          <div >
          <label>Mobile Number</label>
          <input className="phnno" placeholder="enter Number"  value={this.state.mobile}  name="mobile" onChange={this.onsub}></input>
          </div>
          <br></br>
          <div >
          <label>Email ID</label>
          <input className="em" name="email" placeholder="enter Email" onChange={this.onsub} value={this.state.email} ></input>
          </div><br></br>
            <div>
          <label>Address</label>
          <textarea className="add" placeholder="enter address" name="address" value={this.state.address} onChange={this.onsub}></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer><Button variant="secondary" onClick={()=>{this.props.close()}}>
            Close
          </Button>
          <Button onClick={this.save} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default EditModal;
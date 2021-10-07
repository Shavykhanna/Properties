import React, {Component} from 'react';
import './Modal.css'
import axios from 'axios'



class Popup extends React.Component {  
  constructor(props) {
    super(props)

    this.state = {
         address:'',
         valuation:''
    }
}

handleChange=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}

handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('https://take-home.hasura.app/api/rest/properties/add',this.state, {
        headers:{
            'x-hasura-user-id': 'B+wLEAoqARQ=',
            'Content-Type':'application/json'
        }
    })
    .then(response =>{
        this.setState({
            properties: response.data
        })
        console.log(response)
    })
}
  render() {  
    const{address, valuation} = this.state
    return (  
 <div className='popup'>  
     <div className='popup_open'>
  <h1>Enter property details</h1>
  <form onSubmit={this.handleSubmit}>
      <div>
          <label>Address</label>
          <input type='text' name='address' value={address} onChange={this.handleChange}></input>
         
      </div>

      <div>
          <label>Valuation</label>
          <input type='number' name='valuation' value={valuation} onChange={this.handleChange} ></input>
      </div>
      <div>
      <button type='submit'> Submit </button>
      <button onClick={this.props.closePopup}>Cancel</button>
      </div>
  </form>
</div>
    </div>
);  
}  
}
export default Popup;
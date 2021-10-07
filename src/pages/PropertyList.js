import React, {Component} from 'react'
import axios from 'axios'
//import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Modal, {closeStyle} from 'simple-react-modal'
import Popup from './Popup'; 
import './Modal.css';


class PropertyList extends Component {
                              
   
    constructor(props){
        super(props)

        this.state = {
            properties: [],
            showPopup: false
        }
    }
    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
      }  
     

    componentDidMount(){
        axios.get('https://take-home.hasura.app/api/rest/properties/all',{
            headers:{
                'x-hasura-user-id': 'B+wLEAoqARQ='
            }
        })
        .then(response =>{
            this.setState({
                properties: response.data
            })
            console.log(response.data)
        })
    }
    render() {
        const {properties} = this.state
        return(
            <div>
                <h1>Properties</h1>
                 <Button variant="contained" color="primary" onClick={this.togglePopup.bind(this)}>
                    Add Property
                </Button>

                
                {this.state.showPopup ?  
                <Popup  
                    text='X'  
                    closePopup={this.togglePopup.bind(this)}  
                />  
                : null  
                }  
                
                 <br/> <br/>
                <table id="simple-board" border="1" width="100%">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Address</td>
                        <td>Valuation</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>10 PATAMBA STREET KOORINGAL NSW 2650</td>
                        <td>$10,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>6 Middlemiss St. Lavender Bay NSW 2060</td>
                        <td>$50,000</td>
                    </tr>
                    </tbody>
                </table>
                <p style={{
                        marginRight:"150px", textAlign:'right'
                      }}>Total  $60,000</p> 
                
                {
                    this.properties ?
                    this.properties.map(property => <div key={property.id}> {property.address} </div>)
                    :
                    null
                
                }
             </div>
        )
    }
}
export default PropertyList

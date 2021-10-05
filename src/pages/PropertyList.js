import React, {Component} from 'react'
import axios from 'axios'

class PropertyList extends Component {

    constructor(props){
        super(props)

        this.state = {
            properties: []
        }
    }

    componentDidMount(){
        axios.get('https://take-home.hasura.app/api/rest/properties/all')
        .then(response =>{
            this.setState({
                properties: response.data
            })
            console.log(response.data)
        },{
            headers:{
                'x-hasura-user-id': 'B+wLEAoqARQ='
            }
        })
    }
    render() {
        const {properties} = this.state
        return(
            <div>
                <h1>Properties</h1>
                {
                properties.map(property => <div key={property.id}> {property.address} </div>)
                }
             </div>
        )
    }
}
export default PropertyList

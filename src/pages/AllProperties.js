import React, { Component } from 'react'
import axios from 'axios'
import PropertyList from './PropertyList'

export class AllProperties extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             allproperties: []
        }
    }
    
    componentDidMount(){
        axios.get('https://take-home.hasura.app/api/rest/properties/all',{
            headers:{
                'x-hasura-user-id': 'B+wLEAoqARQ='
            }
        })
        .then(Response => {
            this.setState({
                allproperties: Response.data
            })
            console.log(Response.data)
        })
    }

    render() {
        const {allproperties} =  this.state
        return (
            <div>
                <h1> Properties </h1>
                {
                    allproperties.map(property => <div key={property.id}>{property.address}</div>)
                }
                   </div>
        )
    }
}

export default AllProperties

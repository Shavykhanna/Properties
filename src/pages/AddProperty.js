import React, { Component } from 'react'
import axios from 'axios'

export class AddProperty extends Component {

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
        console.log(e.target)
    }
    
    render() {
        const{id, address, valuation, hidden} = this.state
        return (
            <div>
                <h1>Enter property details</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Address</label>
                        <input type='text' name='address' value={address} onChange={this.handleChange}></input>
                    </div>

                    <div>
                        <label>Valuation</label>
                        <input type='text' name='valuation' value={valuation} onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <button type='submit'> Submit </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddProperty

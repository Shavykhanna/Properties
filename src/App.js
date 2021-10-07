import './App.css';
import './modal.css';
import PropertyList from './pages/PropertyList';
import React, { Component } from 'react';  
import Popup from './pages/Popup';  
// import AddProperty from './pages/AddProperty';

class App extends Component {  
  constructor(props){  
  super(props);  
  this.state = { showPopup: false };  
  }
  togglePopup() {  
  this.setState({  
       showPopup: !this.state.showPopup  
  });  
   }  
  render() {  
  return (  
  <div className="App">
     <PropertyList></PropertyList>
  </div>  
  );  
  }  
  }  
  export default App;


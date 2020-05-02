import React from 'react';
import {Form} from 'react-bootstrap'

class Select  extends React.Component {
  handleChange =()=> {    
    var country = '';
    if("select a country"==this.inputEl.value){
      country = '';
    }else{
      country = this.inputEl.value
    }
    this.props.onClick(country)
  }

render(){
  const options = this.props.ad.map((country)=>{
    return (
      <option value={country.name}>{country.name}</option>

    )
  });
  return ( 
  <div className="Select">
<Form.Group controlId="exampleForm.SelectCustomSizeSm">
<Form.Control id="selected" as="select" size="sm" custom   ref={ el => this.inputEl=el } onChange={this.handleChange}>
<option value="select a country">select a country</option>
{options}
</Form.Control>
</Form.Group>

 </div>
  );
}
}
export default Select
import React from 'react';
import logo from './Image.png';
import './App.css';
import Select from './Select'
import Result from './Result'
import Spinners from './Spinners'
import GetCountries from './GetCountries'
import GetVal from './GetVal'
import PieChart from './PieChart'

 
class  App extends React.Component {
  state={
    countries:null,
    error:null,
    loading:true,
    data:null,
  }

  async componentDidMount(){
    let res = await GetCountries();
    let d= await GetVal("");
    if(res==null && d==null){
      this.setState({error:true,loading:false});
    }else{
      this.setState({countries:res,loading:false,data:d});
    }
      console.log(d)
  }
  onCountry = async (c)=>{
    let d= await GetVal(c);
    if( d==null){
      this.setState({error:true,loading:false});
    }else{
      this.setState({loading:false,data:d});
    }
  }
  render(){
    const {error,loading,countries,data} = this.state;
    if(error){
      return (<div className="error">
        <h1 className="ou"> Oups ! </h1> 
        <p className="there"> There was an error, try again!!!</p>  
      </div>)
    }

    if(loading){
      return (<div className="LoadingContainer" >
        <Spinners />
      </div>)
    }
    return (
      <div className="all">
        <img  className="img" src={logo} alt="logo" />  
          <Select ad={countries} onClick={this.onCountry} />
          <Result data={data} />
          <PieChart data={data}  />
      </div>
  );
  }
}
export default App
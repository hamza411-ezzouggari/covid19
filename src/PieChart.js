import React from 'react';
import Chart from "react-apexcharts"

class PieChart extends React.Component {
    handleChange =(data)=> {
        var res= '';
    }
    state = {
        options: { 
            labels: ['Active Cases', 'deaths', 'recovered']
        },

        series: [],
        data:[],
    };
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    componentDidMount(){
        const {data}=this.props;
        var active=((data.confirmed.value-data.deaths.value-data.recovered.value))
        var deaths=(data.deaths.value)
        var recovered=(data.recovered.value)
        this.setState({series:[active,deaths,recovered]})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data!=this.state.data){
            const {data}=nextProps;
            var active=((data.confirmed.value-data.deaths.value-data.recovered.value))
            var deaths=(data.deaths.value)
            var recovered=(data.recovered.value)
            this.setState({series:[active,deaths,recovered]})
        }
    }
    
    render() {
        return(
            <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut"/>
            </div>
        );
    }
} 
export default PieChart
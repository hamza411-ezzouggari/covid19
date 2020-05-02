import React from 'react';
import {} from 'react-bootstrap';

export default function Select({data}){
    return (
        <div className="res">
            <div className=" item confirmed">
                <h1>confirmed</h1>
              <p class='p1'><span>{data.confirmed.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
              <div className='conf'></div>
            </div>
            <div className="item Active">
                <h1>Active Cases</h1>
             <p class='p1'><span>{(data.confirmed.value-data.deaths.value-data.recovered.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
            </div>
            <div className="item deaths">
                <h1>deaths</h1>
                <p class='p1'><span>{data.deaths.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
            </div>
            <div className="item recovered">
                <h1>recovered</h1>
               <p class='p1'>{data.recovered.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
        </div>
);
}
import React from 'react';
// import home from './home'
import styles from './Style.css'
const Get =(props)=>{
    return(
         <div>
            {/* <h3>{props.homedata.name}</h3>
            <p><b className = "rate">Ratings:{props.homedata.rating},<br/>Cost:{props.homedata.cost}</b></p>
            <img src = {props.homedata.image}/>  */}
            <div className="card-deck float-left display" >
                <div className="card ">
                     <h5 className = "head">{props.data.name}</h5>
                     <p className = "rate">Ratings:{props.data.para}</p>
                        <p>price:{props.data.rating}</p>
                    <img  style = {{height:"300px", width:"400px"}}src={props.data.image}/>
                </div>
            </div>
        </div>
    
    // className = "display"
    // style = {{width:"900px", height:"400px"}}
    )
}
export default Get;


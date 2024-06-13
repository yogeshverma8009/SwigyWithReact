import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// }

// const ResturantCard =(props) =>{
//     console.log(props);
//     return (
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mejvlnqz6ux58juoyetq"/>
//             <h3>{props.resName}</h3> 
//             <h4>{props.cuisine}</h4>
//             <h4>4.4 Stars</h4>
//             <h4>38 Minutes</h4>
//         </div>
//     )
// } 

//also cann we write
// const ResturantCard =({resName, cuisine}) =>{
    
//     return (
//         <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mejvlnqz6ux58juoyetq"/>
//             <h3>{resName}</h3> 
//             <h4>{cuisine}</h4>
//             <h4>4.4 Stars</h4>
//             <h4>38 Minutes</h4>
//         </div>
//     )
// }

//also can we write for pass a props




  


const AppLayout =() => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
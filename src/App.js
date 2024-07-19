import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


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




  
// *************************Buddling the app***************************
//Lazy Loading

const Grocery = lazy(() => import("./components/Grocery"))

const About = lazy(()=> import("./components/About"))

const AppLayout =() => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback="Laoding ...."><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resid",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>,
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
//for routing the page
root.render(<RouterProvider router={appRouter}/>);
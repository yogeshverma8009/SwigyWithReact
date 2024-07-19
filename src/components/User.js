import { useEffect, useState } from "react";
const User = ({name,loaction,contact}) =>{
    const [count]  = useState(0)
    const [count1] = useState(1)

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("ComponentWillUnmount");
        },1000);
        console.log("useEffect");
//its a componenet will unmount when will leave the page
        return () =>{
            clearInterval(timer);
            console.log("useEffect Return");
        };
    },[]);
    return (
        <div className="user-card">
        <h1>Count : {count},{count1} </h1>
        <h1>Name:{name}</h1>
        <h2>Loaction: {loaction}</h2>
        <h3>Contact :{contact}</h3>
        </div>
    );
};

export default User;
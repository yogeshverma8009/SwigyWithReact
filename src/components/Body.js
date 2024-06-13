import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body =() =>{
    //react hooks //Local State Variable
    //you can also write this , is array destructing
    //What actually and how react hooks works in deep
// const arr = useState(resList);
// const [listOfRestaurant,setListOfRestaurant]=arr;
// const listOfRestaurant = arr[0];
// const setListOfRestaurant = arr[1];
    const [listOfRestaurant,setListOfRestaurant]= useState(resList);

    return (
        <div className="body">
            <div className="filter">
            <button className="fiter-btn"
            onClick={()=>{
               const filteredList = listOfRestaurant.filter((res)=>res.data.avgRating>4);
                setListOfRestaurant(filteredList);
            }}>
                Top Rated Restaurant
            </button>
            </div>
            <div className="res-container">
                {/* <ResturantCard 
                // resName= "Meghna Food"
                // cuisine ="Biryani, Nrth Indian, Asian"
                resData= {resList[0]}
                /> */}
                {listOfRestaurant.map((restaurant) => (
                <ResturantCard key={restaurant.data.id} resData={restaurant}/>
                //if you dont have a uniqe key then use index as a key
                // {resList.map((restaurant,index) => (
                //     <ResturantCard key={index} resData={restaurant}/>
            ))}
                
                
                {/* <ResturantCard resName="KFC" cuisine="Burger, Fast Food"/>         */}
            </div>
        </div>
    )
}

export default Body;
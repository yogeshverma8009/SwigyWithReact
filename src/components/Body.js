import ResturantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

 // Filter the restaurant data according input type
 function filterData(searchText, restaurants) {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }
const Body =() =>{

   
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [searchText, setSearchText] = useState("");
    const [listOfRestaurant,setListOfRestaurant]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

   
    useEffect(()=>{
        fetchData();
    },[]);


    const apiUrl="https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

    const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const json = await response.json();
          console.log(json);
        // initialize checkJsonData() function to check Swiggy Restaurant data
        function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setListOfRestaurant(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
          const filteredData = filterData(searchText, restaurants);
          setFilteredRestaurants(filteredData);
          setErrorMessage("");
          if (filteredData?.length === 0) {
            setErrorMessage("No matches restaurant found");
          }
        } else {
          setErrorMessage("");
          setFilteredRestaurants(restaurants);
        }
      };
    
    
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer></Shimmer>; 
    // }
      // if allRestaurants is empty don't render restaurants cards
        if (!listOfRestaurant) return null;

    return (
        <div className="body">
            <div className="filter">
                <input type="text" className="search-input" 
                placeholder="Search a restaurant you want..."
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}>
                </input>
            <button 
            className="fiter-btn" 
            onClick={()=>{
                searchData(searchText, listOfRestaurant);
            }}>
                Search
            </button>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}
            {/* <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                <ResturantCard key={restaurant.data.id} resData={restaurant}/>
            ))}
            </div> */}
            {listOfRestaurant?.length === 0 ? (
            <Shimmer />
            ) : (
            <div className="res-container">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <ResturantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            );
          })}
        </div>
      )}
        </div>
    )
}

export default Body;



import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import RestaurantCard from "./RestaurantCard";

import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(listOfRestaurant);

  const apiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

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
      // console.log(fetchData);
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setListOfRestaurant(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  };

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

  const onLineStatus = useOnlineStatus();
  if (onLineStatus === false)
    return <h1>Looks like you're offline!! Please check the internetra</h1>;
  //change username
  const { loggedInUser,setUserName } = useContext(UserContext);

  return (
    <div className="body bg-slate-900 p-4 ">
      <div className="flex sm:flex flex-col md:flex-row items-center justify-center md:justify-start ">
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-3/4 md:w-2/4 sm:w-3/4 lg:w-2/5 border border-slate-300 rounded-md py-2 pl-4 mx-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="fiter-btn items-center rounded-xl  mt-4 md:mt-0 md:py-0 md:px-5 md:ml-4 md:h-10 w-36 h-10 md:w-24 bg-sky-500 text-white text-lg italic hover:bg-sky-600 focus:outline-none focus:ring font-semibold"
          onClick={() => {
            searchData(searchText, listOfRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <label>UserName: </label>
        <input
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
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
        <div className="flex:col md:flex sm:flex flex-wrap">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard {...restaurant?.info} />

                {/* {restaurant?.data?.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : (
              <ResturantCard resData={restaurant}/>)} */}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;

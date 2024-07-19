import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>{
    //custom hookss *********************************************************
    //const resInfo = useRestaurantMenu(resId);
    
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);

    // const params = useParams();
    // console.log(params);
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[resId])


    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.80060&lng=86.42830&restaurantId=10576");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    // if(resInfo === null) return <Shimmer />;
    if (!resInfo === null) return <Shimmer />;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards?.[2]?.card?.card?.info || {};
    const {itemCards}= resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card || [];
    // console.log( resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories =
     resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
       c.card?.["card"]?.["@type"] ===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories)
    // return  resInfo === null ?(
    //     <Shimmer/>
    // ):(
    return (
        <div className="text-center">
            {name && <h1 className="font-bold my-6 text-2xl">{name}</h1>}
            {cuisines && <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>}
            
            {/*categories accordians*/}
            {categories && categories.map((category,index)=>(
                //controlled component
              <RestaurantCategory key={category?.card?.card?.title} 
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              //lifting state up
              setShowIndex={()=> setShowIndex(index)}/>
              ))}
        </div>
    )
};

export default RestaurantMenu;
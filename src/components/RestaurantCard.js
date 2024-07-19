import { CDN_URL } from "../utils/constants";

const RestaurantCard =({
        // const {resName, cuisine} = props;
            cloudinaryImageId,
            name,
            cuisines,
            areaName,
            sla,
            costForTwo,
            avgRatingString,  
        }) => {
        return(
            <div className="">
                <div className="font-sans  sm:ml-20 md:scroll-mx-32  p-4 mt-9  w-[530px] lg:w-[250px] sm:w-[530px]  rounded-lg bg-gradient-to-r from-green-100 to-amber-100  focus:outline-none focus:ring focus:ring-violet-300"  >
                <img className="res-logo rounded-lg  " alt="res-logo" src={CDN_URL +
                 cloudinaryImageId}/>
                 <h3 className="font-semibold font-serif  pt-3 ">{name}</h3> 
                 <div className=""> 
                <h5 className="">{(cuisines || []).join(", ")}</h5>
                <h4>{areaName}</h4>
                <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
                <h4>₹{costForTwo/100} FOR TWO</h4>
                <h4>{avgRatingString} </h4>
                 </div>
                
            </div>
         </div>
         
        );
    }

    //Higher Order Component

    // Input - RestaurantCard ==> RestaurantCardPromoted

    // export const withPromotedLabel = (RestaurantCard) => {
    //     return (props) =>{
    //         return (
    //             <div>
    //                 <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
    //                 <ResturantCard {...props}/>
    //             </div>
    //         );
    //     };
    // };


  

export default RestaurantCard;
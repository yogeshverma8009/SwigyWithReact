import { CDN_URL } from "../utils/constants";

// const ResturantCard = (props) =>{
//     // const {resName, cuisine} = props;
//     const {resData}  = props;
//     const {
//         cloudinaryImageId,
//         name,
//         cuisines,
//         totalRatingsString,
//         costForTwo,
//         deliveryTime,
//     } = resData?.data;
    

//     return(
//      <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
//             <img className="res-logo" alt="res-logo" src={CDN_URL +
//              cloudinaryImageId}/>
//             <h3>{name}</h3> 
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{totalRatingsString}</h4>
//             <h4>₹{costForTwo/100} FOR TWO</h4>
//             <h4>{deliveryTime} minutes</h4>
//         </div>
//     );
// }

const ResturantCard =({
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
         <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
                <img className="res-logo" alt="res-logo" src={CDN_URL +
                 cloudinaryImageId}/>
                <h3>{name}</h3> 
                <h4>{cuisines.join(", ")}</h4>
                <h4>{areaName}</h4>
                <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
                <h4>₹{costForTwo/100} FOR TWO</h4>
                <h4>{avgRatingString} </h4>
            </div>
        );
    }


///////******************************************************** */
// const ResturantCard = ({
//     cloudinaryImageId,
//     name,
//     cuisines,
//     areaName,
//     sla,
//     costForTwo,
//     avgRatingString,
//   }) => {
//     return (
//       <div className="card">
//         <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
//         <h3>{name}</h3>
//         <h5>{cuisines.join(", ")}</h5>
//         <h5>{areaName}</h5>
//         <span>
//           <h4
//             style={
//               avgRatingString < 4
//                 ? { backgroundColor: "var(--light-red)" }
//                 : avgRatingString === "--"
//                   ? { backgroundColor: "white", color: "black" }
//                   : { color: "white" }
//             }
//           >
//             <i className="fa-solid fa-star"></i>
//             {avgRatingString}
//           </h4>
//           <h4>•</h4>
//           <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
//           <h4>•</h4>
//           <h4>{costForTwo ?? '₹200 for two'}</h4>
//         </span>
//       </div>
//     );
//   };
  

export default ResturantCard;
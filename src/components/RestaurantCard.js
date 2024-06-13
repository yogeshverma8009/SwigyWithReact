import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) =>{
    // const {resName, cuisine} = props;
    const {resData}  = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        totalRatingsString,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    
    // return (
    //     <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
    //         <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    //          resData.data.cloudinaryImageId}/>
    //         <h3>{resData.data.name}</h3> 
    //         <h4>{resData.data.cuisines.join(", ")}</h4>
    //         <h4>{resData.data.totalRatingsString}</h4>
    //         <h4>₹{resData.data.costForTwo/100} FOR TWO</h4>
    //         <h4>{resData.data.deliveryTime} minutes</h4>
    //     </div>
    // )/
    return(
     <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
            <img className="res-logo" alt="res-logo" src={CDN_URL +
             cloudinaryImageId}/>
            <h3>{name}</h3> 
            <h4>{cuisines.join(", ")}</h4>
            <h4>{totalRatingsString}</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default ResturantCard;
import { useDispatch } from "react-redux";
import { addItem } from "../ReduxSlice/cartSlice";
import { CDN_URL } from "../utils/constants";
//items as a props from api
const ItemList = ({ items }) => {
  // console.log(items);



  //dispatch by redux
  const dispatch = useDispatch();


  const handleAddItem = (item) =>{
    //dispatch an action by redux
    dispatch(addItem(item));
    
  }
  return (
    <div>
      {items.map((items) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={items?.card?.info?.id}
        >
            
          <div className="w-9/12">
          <div className="py-2">
            <span>{items?.card?.info?.name}</span>
            <span>
              - ₹{" "}
              {items?.card?.info?.price
                ? items?.card?.info?.price / 100
                : items?.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <p className="text-xs">{items?.card?.info?.description}</p>
        </div>
        <div className="w-3/12 p-4 ">
        <div className="absolute">
        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg "
       
        onClick={() => handleAddItem(items)}
        
        >
          Add +</button>
        </div>
        
        <img src={CDN_URL + items?.card?.info?.imageId}
            /> 
        </div>
        </div>
            
      ))}
    </div>
  );
};

export default ItemList;

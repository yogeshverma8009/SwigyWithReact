import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    // const [showItems, setShowItems] = useState(false);
  // console.log(data)
  const handleClick=()=>{
    setShowIndex();
    // setShowItems(!showItems);
    //when showitems is false make it true
    //when showitems is true make it false
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"
         onClick={handleClick}
         >
          {/* Header */}
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

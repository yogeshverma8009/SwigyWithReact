//custom hooks
import { MENU_API_URL } from "./constants";
import {useEffect , useState} from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch (MENU_API_URL + {resId});
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;
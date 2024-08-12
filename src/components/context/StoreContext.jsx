import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState({});

    const addToCart = (itemID) => {
            if(!cartItems[itemID]){
                setCartItems((prev) => ({...prev, [itemID] : 1}))
            }else{
                setCartItems((prev) => ({...prev, [itemID] : prev[itemID] + 1}))
            }
    }

    const removeCart = () => {

    }

    const ContextValue = {
        food_list
    }

    return (
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
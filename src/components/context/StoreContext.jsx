import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [ cartItems, setCartItems ] = useState({}); 
    //The default value of useState is object because we want to display cart items as object {}

    const addToCart = (itemID) => {
            if(!cartItems[itemID]){
                setCartItems((prev) => ({...prev, [itemID] : 1}))
            }else{
                setCartItems((prev) => ({...prev, [itemID] : prev[itemID] + 1}))
            }
    }

    const removeCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID] : prev[itemID] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for( const item in cartItems ){
            if(cartItems[item] > 0){
            let itemInfo = food_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,    
        removeCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
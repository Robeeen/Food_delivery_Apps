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

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const ContextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,    
        removeCart
    }

    return (
        <StoreContext.Provider value={ContextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
import { createContext, useState } from "react";

export const cartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    console.log(products)

    const addProductToCart =(product) => {
        const duplicate = products.find(x=> x.id === product.id);
        if(duplicate){
            const updatedToDo = products.map((prod)=> {
                if(prod.id === duplicate.id){
                    return { ...prod, quantity: prod.quantity+=1 };
                }else{
                    return prod;
                }
            })
            setProducts(updatedToDo)
        }else{
            setProducts([...products, {id: product.id, name: product.name, quantity: 1}])
        }
    }

    const removeProductFromCart = (product)=>{
        const updatedProducts = products.filter(x=> x.id !== product.id);
        setProducts(updatedProducts)
    }

    const emptyCart =()=> {
        setProducts([])
    }
    
    const values = {
        products,
        addProductToCart,
        removeProductFromCart,
        emptyCart
    }

    return <cartContext.Provider value={values}>{children}</cartContext.Provider>

}
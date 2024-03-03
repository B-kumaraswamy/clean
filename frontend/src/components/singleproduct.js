
import { useState } from "react"
import { useAuthContext } from "./context"

function SingleProductComponent(props) {

    const {imageUrl, title, price, vendor, id} = props.product
    const {cart, setCart, products, setProducts} = useAuthContext()
    const [q, setQ] = useState(2)

    const onDecrease = () => {
        if(q > 0) {
            setQ(q => q-1)
          setProducts((prevProduct) => (
            prevProduct.map((eachProduct) => eachProduct.id === id ?
            {
                ...eachProduct,
                quantity : eachProduct.quantity -1
            } : eachProduct
            
            )
          ))

          console.log('today products after decreasing', products)
        }
        
    }

    const onIncrease = () => {
        setQ(q => q+1)
          setProducts((prevProduct) => (
            prevProduct.map((eachProduct) => eachProduct.id === id ?
            {
                ...eachProduct,
                quantity : eachProduct.quantity +1
            } : eachProduct
            
            )
          ))

          console.log('today products after increasing', products)
    }

    /*
    cart = []

    cart = [{id : id, quantity : quantity}, {id : 1, quantity : 2}]
    ...cart
    */

    const onAddtoCart = () => {
        
        setCart((prevCart) => (
            [
                ...prevCart,
                {
                    id : id,
                   quantity : q
                }
            ]
        ))

        console.log('march 03 ', cart)
    }

    /*
    products = [
        {
            id : 1,
            quantity : 0,
            vendor : fiat
        },

        {
            id : 2,
            quantity : 3,
            vendor : nike
        }
    ]
    */
    return (
        <li className="cart-container">
        
            
            <img src = {imageUrl} alt = "loading" width = "20%"/>
            
            <h1 className="cart-heading">{title}</h1>
            <p className="cart-price">{`${price}/-`}</p>
            <p className="cart-vendor">{vendor}</p> 
            <button onClick={onDecrease}>-</button> &nbsp;
            <label>{q}</label>  &nbsp;
            <button onClick={onIncrease}>+</button>  &nbsp;  &nbsp;  &nbsp;

            <button onClick={onAddtoCart}>Add to cart</button>
          
       
        </li>
    )
}


export default SingleProductComponent;

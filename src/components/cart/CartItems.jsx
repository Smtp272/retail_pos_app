import { Button } from "react-bootstrap";
import "./cartItems.css"


function CartItems({items}) {
    const calcTotal = () =>{
        items.map(item => <h1>{item.name}</h1>)
    }

    return ( 
    <div className="cartItems">
        <h2>Cart items</h2>
        {/* <div>
            {items.map(item => <h1>{item.name}</h1>)}
        </div> */}
        <Button>Send Message</Button>
        <Button>Send Email</Button>

    </div> );
}

export default CartItems;
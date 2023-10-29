import Cartitem from "./Cartitem";

function Viewcart(props){

return(
    <ul>
        { (props.cart) && props.cart.map((item) => (
        <Cartitem data={item} />
        
        ))}
    </ul>
)

}

export default Viewcart
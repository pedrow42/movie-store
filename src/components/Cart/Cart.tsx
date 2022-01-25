import {CartWrapper,CloseButton} from './Cart.style';
import {MoviesType} from '../../types/movieType'
import {CartItem} from '../CartItem/CartItem'

type Props = {
    cartItems: MoviesType[],
    removeFromCart: (id:number) => void;
    closeModal: (boolean:false) =>void
}

const Cart: React.FC<Props> = ({cartItems, removeFromCart, closeModal}) =>{
    return(
        <CartWrapper>
            <CloseButton onClick={()=>closeModal(false)}>X</CloseButton>
            <h2>Seu carrinho de compras</h2>
            <hr/>
            {cartItems.length === 0 && <p>Carrinho vazio</p>}
            {cartItems.map(item =>(
                <CartItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                />
            ))}
        </CartWrapper>
    )
}



export default Cart;
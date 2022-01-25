import { MoviesType } from "../../types/movieType";
import {CartItemWrapper} from './CartItem.style'
import { CartIcon } from "../CartIcon/CartIcon";
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    item: MoviesType,
    removeFromCart: (id:number) => void;
}

export const CartItem: React.FC<Props> = ({item, removeFromCart})=>{
    return(
        <CartItemWrapper>
            <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
            <h3>{item.title}</h3>
            <div>1</div>
            <div>R$ 79,99</div>
            <CartIcon onClick={()=>removeFromCart(item.id)}>
                <DeleteIcon/>
            </CartIcon>
        </CartItemWrapper>
    );
}

export default CartItem;
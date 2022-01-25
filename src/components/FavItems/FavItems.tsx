import { MoviesType } from "../../types/movieType";
import { CartIcon } from "../CartIcon/CartIcon";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartItemWrapper} from '../CartItem/CartItem.style'

type Props = {
    item: MoviesType,
    removeFromFavorites: (id:number) => void;
    handleAddToCart: (clickedItem: MoviesType) => void;
}

export const FavItems: React.FC<Props> = ({item, removeFromFavorites, handleAddToCart})=>{
    return(
        <CartItemWrapper>
            <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} />
            <h3>{item.title}</h3>
            <div>R$ 79,99</div>
            <CartIcon onClick={()=>handleAddToCart(item)}>
                <ShoppingCartIcon/>
            </CartIcon>
            <CartIcon onClick={()=>removeFromFavorites(item.id)}>
                <DeleteIcon/>
            </CartIcon>
        </CartItemWrapper>
    );
}

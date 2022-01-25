import {MoviesType} from '../../types/movieType'
import {FavItems} from '../FavItems/FavItems'
import {CartWrapper, CloseButton} from '../Cart/Cart.style'

type Props = {
    cartItems: MoviesType[],
    removeFromFavorites: (id:number) => void;
    handleAddToCart: (clickedItem: MoviesType) => void;
    closeModal: (boolean:false) =>void
}

const FavCart: React.FC<Props> = ({cartItems, handleAddToCart, removeFromFavorites, closeModal}) =>{
    return(
        <CartWrapper>
            <CloseButton onClick={()=>closeModal(false)}>X</CloseButton>
            <h2>Seus Favoritos</h2>
            <hr/>
            {cartItems.length === 0 ? <p>Você não tem favoritos</p> : null}
            {cartItems.map(item =>(
                <FavItems
                    key={item.id}
                    item={item}
                    handleAddToCart = {handleAddToCart}
                    removeFromFavorites={removeFromFavorites}
                />
            ))}
        </CartWrapper>
    )
}



export default FavCart;
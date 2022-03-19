import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardItemWrapper, CardItemContent, CardGender, CardRating, CardHeartDiv } from './CardItem.style';
import { CardHeartIcon } from '../CartIcon/CartIcon';
import { ButtonItem } from './CardItem.style';
import StarIcon from '@mui/icons-material/Star';
import { MoviesType } from '../../types/movieType';


type Props = {
    item: MoviesType;
    handleAddToCart: (clickedItem: MoviesType) => void;
    handleAddFavorite: (clickedItem: MoviesType) => void;
    removeFromFavorites: (id:number) => void;
    favItems:MoviesType[];
}

const CardItem:React.FC<Props> = ({item, handleAddToCart, handleAddFavorite, favItems}) =>{
    const handleIconClick = ()=>{
        handleAddFavorite(item)
    }
    return (
        <CardItemWrapper>
            <CardHeartDiv aria-label="add to favorites">
                <CardHeartIcon className='CardHeartIcon' onClick={handleIconClick}>
                    <div className={'heartDivMain '+"default"}>
                        <FavoriteIcon/>
                    </div>
                    {favItems.map((favItem, index)=>(
                        favItem.id === item.id &&
                        <div key={index} className={'heartDiv '+"red"}>
                            <FavoriteIcon/>
                        </div>
                    ))}
                </CardHeartIcon>
            </CardHeartDiv>
            <img
                src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
                alt={item.title}
            />
            <CardItemContent>
                <div>{item.release_date}</div>
                <h3>{item.title}</h3>
                <CardGender>
                    <CardRating>
                        <StarIcon />
                        <div>{item.vote_average}</div>
                    </CardRating>
                    <p>GENERO</p>
                </CardGender>
                <div>R$ 79,99</div>
            </CardItemContent>
            <ButtonItem onClick={()=>{handleAddToCart(item)}}>Adicionar ao carrinho</ButtonItem>
        </CardItemWrapper>
    )
}

export default CardItem;
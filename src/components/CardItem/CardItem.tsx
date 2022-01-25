import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardItemWrapper, CardItemContent, CardGender, CardRating, CardHeartDiv } from './CardItem.style';
import { CardHeartIcon } from '../CartIcon/CartIcon';
import { ButtonItem } from './CardItem.style';
import StarIcon from '@mui/icons-material/Star';
import { MoviesType } from '../../types/movieType';
import {useState} from 'react'


type Props = {
    item: MoviesType;
    handleAddToCart: (clickedItem: MoviesType) => void;
    handleAddFavorite: (clickedItem: MoviesType) => void;
    removeFromFavorites: (id:number) => void
}

const CardItem:React.FC<Props> = ({item, handleAddToCart, handleAddFavorite, removeFromFavorites}) =>{
    const [toggle, setToggle] = useState('default');

    const handleIconClick = ()=>{
        if(toggle == 'default'){
            setToggle('red')
            handleAddFavorite(item)
        }else{
            setToggle('default')
            removeFromFavorites(item.id)
        }
    }
    return (
        <CardItemWrapper>
            <CardHeartDiv aria-label="add to favorites">
                <CardHeartIcon onClick={handleIconClick}>
                    <div className={'heartDiv '+toggle}>
                        <FavoriteIcon/>
                    </div>
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
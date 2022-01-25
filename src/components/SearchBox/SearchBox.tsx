import { ChangeEvent, useState } from "react"
import { InputText, Icon } from "./SearchBox.style"

const SearchBox = ()=> {

    const [movies, setMovies] = useState('')
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setMovies(e.target.value)
    }   

    return (
        <div>
            <InputText type="text" placeholder="Digite o filme desejado" value={movies} onChange={handleInputChange}/>
            <Icon/>
        </div>
      
    );
  }

  export default SearchBox;
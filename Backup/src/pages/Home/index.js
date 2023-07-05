import { useEffect, useState} from 'react';
import api from '../../services/api';
//URL DA API: /movie/now_playing?api_key=b4bf234cf511c7914333aed0a7b7f74d&language=pt-BR

function Home(){
const [filmes, setFilmes] = useState([]);


useEffect(()=>{

    async function loadfilmes(){
        const response = await api.get("movie/now_playing",{
            params:{
               api_key: "b4bf234cf511c7914333aed0a7b7f74d" ,
               language: "pt-BR",
               page: 1,
            }
        })


    console.log(response.data.results);    


    }

    loadfilmes();

},[] )

    return(
        <div>BEM VINDO A HOME</div>
    )
}




export default Home;
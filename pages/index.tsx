import type { NextPage } from 'next';
import CardMovie from '../src/components/CardMovie/cardmovie';
import Header from '../src/components/Header/index';
import {useState, useEffect} from 'react';
import {api} from './services/api';
import * as MC from '../styles/style';
import { FaTimes , FaStar} from 'react-icons/fa';

interface dataResponse { 
    id: number;
    nome: string;
    sinopse?: string;
    foto: string;
}


interface dataResponseItem { 
  id: number;
  nome: string;
  sinopse: string;
  foto: string;
}


const Home: NextPage = () => {

  const [movieData, setMovieData]=useState<dataResponse[]>([]);
  
  const [movieSingleData, setMovieSingleData]=useState<dataResponseItem[]>([]);

  useEffect(()=>{
    async function reqData(){
      const data = await api.get('');
      setMovieData(data.data);
    }
    reqData();
  },[]);



  async function openSiteIdMovie(id:number){
    const conv = id.toString();
    const getResultData = await api.get(conv);
    setMovieSingleData([getResultData.data]);
    console.log(movieSingleData);
  }

  function resetDataMovie(){
    setMovieSingleData([]);
  }

  function saveMovie(id: number){
    const getItemData = localStorage.setItem('movies', JSON.stringify(movieSingleData));
    alert('Filme salvo com sucesso! Acesse a página de favoritos.');
  }
  return (
    <>
   <Header/>
      <MC.ContainerMain>
        <div>
        {movieData.map((m)=> {
          return <MC.Container key={m.id} onClick={()=>openSiteIdMovie(m.id)}>
                        <CardMovie
                        key={m.id}
                        id={m.id}
                        nome={m.nome}
                        // sinopse={m.sinopse}
                        foto={m.foto}
                      />
          </MC.Container>
        })}
        </div>

        <MC.DisplayDataMvoe>
          {movieSingleData.length===0 ? 
          <MC.DescriptionShow>
           
            <span> Selecione um dos filmes para saber mais</span>

          </MC.DescriptionShow> 
          : movieSingleData.map((sm:dataResponseItem)=> {
            return <MC.Container key={sm.id}>
                                <CardMovie
                                key={sm.id}
                                id={sm.id}
                                nome={sm.nome}
                                sinopse={sm.sinopse}
                                foto={sm.foto}
                              />
                              <button onClick={()=>saveMovie(sm.id)}><FaStar color={'#fff'}/></button>
                              <button  onClick={resetDataMovie}><FaTimes color={'#fff'}/></button>
                              
                    </MC.Container>
          })}
          
        </MC.DisplayDataMvoe>
    </MC.ContainerMain>



    </>
  )
}

export default Home

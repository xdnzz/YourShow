import type { NextPage } from 'next';
import CardMovie from '../src/components/CardMovie/cardmovie';
import Header from '../src/components/Header/index';
import {useState, useEffect} from 'react';
import {api} from './services/api';
import * as MC from '../styles/style';
import { FaTimes , FaStar} from 'react-icons/fa';
import { AxiosResponse } from 'axios';

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

  const [movies, setMovies]=useState<any>([]);


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
  }

  function resetDataMovie(){
    setMovieSingleData([]);
  }

  function saveMovie(id: number){
    const checkDataExists = movies.some((item:any)=> item.id === id)
    if(checkDataExists) {
      alert('Você já salvou este item');
      return;
    }
    api.get(id.toString()).then((res:AxiosResponse)=>setMovies([...movies, res.data]))
    alert('Item salvo com sucesso!')
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
          {movies.map((e:any) => e.nome)}
        </MC.DisplayDataMvoe>
    </MC.ContainerMain>
    


    </>
  )
}

export default Home

import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import CardMovie from '../src/components/CardMovie/cardmovie';
import Header from '../src/components/Header/index';
import {useState, useEffect} from 'react';
import {api} from './services/api';

interface dataResponse { 
    id: number;
    nome: string;
    sinopse?: string;
    foto: string;

}

const Home: NextPage = () => {

  const [movieData, setMovieData] =useState<dataResponse[]>([])
  useEffect(()=>{
    async function reqData(){
      const data = await api.get('');
      setMovieData(data.data);
      console.log(movieData);
    }
    reqData();
  },[movieData])


  return (
    <>
    <Header/>
      <div className={styles.container}>
        {movieData.map((m)=> {
          return (
            <CardMovie
            key={m.id}
            id={m.id}
            nome={m.nome}
            sinopse={m.sinopse}
            foto={m.foto}
          />
          )
        })}
     
    </div>
    </>
  )
}

export default Home

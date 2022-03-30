import {api} from './services/api';
import {useState, useEffect} from 'react';
import Header from  '../src/components/Header/index';

interface DataStorage{
id: number;
nome: string;
sinopse: string;
foto: string;
}

export default function FavoritePag(){
    const [dataStorage, setDataStorage] = useState<DataStorage[]>([])
    useEffect(()=>{
         const getLocalData = JSON.parse(localStorage.getItem('movies') || '')
         setDataStorage(getLocalData);
    }, [])

    function removeFavorite(item:number){
    const filtrar = dataStorage.filter((i) => i.id !== item)
    setDataStorage(filtrar);
    }
    return (
        <>
        <Header/>
        {dataStorage.map((item)=> {
            return <div key={item.id}>
            <span>{item.nome}</span>
            <a onClick={()=>removeFavorite(item.id)}>Remover favorito</a>
            </div>
        })}

        </>
    )
}
import {useEffect, useState} from 'react';
import { useRouter  } from 'next/router';
import {api} from '../services/api';
import { AxiosResponse} from 'axios';
import * as SC from './style';
import Link from 'next/link';
import Header from '../../src/components/Header';

interface resData  {
    foto: string;
    id: number;
    nome: string;
    sinopse: string;
}

export default function MoviesSinglePage(){
    const router:any = useRouter();

    const [ getData, setGetData] = useState<resData[]>([]);

    useEffect(()=>{
        async function getData(){
           const res: AxiosResponse | any =  await api.get(router.query.id)
           .then(res =>  setGetData([res.data]))
        }
        getData();
    }, [])

    console.log(getData);
    return (
        <>
        <Header/>
        <SC.Container>
            {getData ? getData.map((e)=> 
                <div
                style={{display:'flex', flexDirection: 'column', width: '500px'}}
                key={e.id}>
                    <h1>{e.nome}</h1>
                    <img src={e.foto} alt={e.foto}/>
                    <span>{e.sinopse}</span>
                <Link href="/">Voltar</Link>
                </div>) : '' }
        </SC.Container>
        </>
    )

}
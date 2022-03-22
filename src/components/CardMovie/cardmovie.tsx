import Image from 'next/image';
import * as C from './style';

interface CardMovieProps {
    id: number;
    nome: string;
    sinopse?: string;
    foto: string;

}


export default function CardMovie({id, nome, sinopse, foto}:CardMovieProps){
    return <>
        <C.CardContent key={id}>
            <img
            src={foto} 
            alt={nome}
            width={510}
            height={190}
            />
            <span>{nome}</span>
            <label>{sinopse}</label>
        </C.CardContent>
    </>
}
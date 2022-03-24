import * as H from './style';
import Link from 'next/link';

export default function Header(){
    return (
        <>
        <H.Header>
            <section>
                <span>Your show</span>
                <input 
                type="text" 
                placeholder={'Looking for something?' }
                />
                <span><Link href="/favoritos">Favorites</Link></span>
            </section>
        </H.Header>
        </>
    )
}
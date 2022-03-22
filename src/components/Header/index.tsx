import * as H from './style';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";

export default function Header(){
    return (
        <>
        <H.Header>
            <section>
                <span>Your show</span>
                <input 
                type="text" 
                value="" 
                placeholder={'Looking for something?' }
                />

                <span><Link href="#">About us</Link></span>
            </section>
        </H.Header>
        </>
    )
}
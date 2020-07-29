import Link from 'next/link';

export default function Menu() {
    return (
        <div>
                <ul>
                    <li>
                    <Link href="/rere"><a><h4>Sambel Mamarere</h4></a></Link>
                    </li>
                    <li>
                    <Link href="/tentang"><a><h4>Tentang Kami</h4></a></Link>
                    </li>
                </ul>
        </div>
    );
}
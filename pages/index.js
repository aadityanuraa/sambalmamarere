import Head from 'next/head'
import Menu from '../components/menu';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Menu />
                <div>
                    <h3>Selamat Datang di Sambel Mamarere</h3>
                    <h4>Pusat Oleh-oleh sambal Situbondo</h4>
                </div>
        </div>
    );
}
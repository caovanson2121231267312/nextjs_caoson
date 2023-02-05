import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import vi from '../../../public/images/lang/vi.jpg';

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { coders: data },
    };
};

const index = ({ coders }) => {
    return (
        <>
            <Head>
                <title>trang all coder</title>
                <meta name="description" content="coder" />
            </Head>
            <div>
                <h1>All Coders</h1>

                {coders.map((coder) => (
                    <Link href={"/coder/" + coder.id} key={coder.id}>
                        <span className="card">
                            <h3>{coder.name}</h3>
                        </span>
                    </Link>
                ))}
                <Image
                    src={vi}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </div>
        </>
    );
};

export default index;
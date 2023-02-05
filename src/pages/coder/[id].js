import React, { memo } from 'react';
import Head from 'next/head';

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map((coder) => {
        return {
            params: { id: coder.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();
    return {
        props: { coder: data },
    };
};

const Detail = memo(({coder}) => {
    return (
        <>
            <Head>
                <title>trang all coder</title>
                <meta name="description" content="coder" />
            </Head>
            <div>
                <div>
                    {coder.name}
                </div>
                <div>
                    {coder.email}
                </div>
                <div>
                    {coder.phone}
                </div>
            </div>
        </>
    );
});

Detail.propTypes = {

};

export default Detail;
import Head from 'next/head';
import Canvas from "../../Components/Canvas";
import Blogs from "../../Components/Blogs";
import Tags from "../../Components/Tags";
import Mirror from "../../Components/Mirror";
import Layout from "../../Components/Layouts/Layout";

export default function Index() {

    return (
        <>
            <Head>
                <title>trang about</title>
                <meta name="description" content="devfullstack.vn" />
            </Head>
            {/* <Canvas></Canvas> */}
            <Blogs></Blogs>
            <Tags></Tags>
            <Mirror></Mirror>
        </>
    )
}

Index.Layout = Layout;
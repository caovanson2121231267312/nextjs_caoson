import React, { use } from 'react'
import { useEffect } from 'react'
import Router from 'next/router'

export default function NotFound() {
    // const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            Router.push('/about')
        }, 3000)
    }, []);

    return (
        <div className='container'>
            <span className='text-danger p-1 m-2 text-center'>
                404 not found
            </span>
        </div>
    );
}
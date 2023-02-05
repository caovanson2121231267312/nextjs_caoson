import React, { memo, useState } from 'react';
import Link from 'next/link';

const index = memo(({ href, exact, children, ...props }) => {

    const [cl, setCl] = useState(props.className);
    const defaultCl = props.className;

    const handleButton = (e) => {
        e.target.style.setProperty("--x", e.nativeEvent.offsetX + "px");
        e.target.style.setProperty("--y", e.nativeEvent.offsetY + "px");
        setCl(cl + ' pulse');
        e.target.addEventListener(
            "animationend",
            () => {
                setCl(defaultCl);
            },
            { once: true }
        );
    }

    return (
        <Link href={href} className={cl} onClick={(e) => handleButton(e)} passHref >
            {children}
        </Link>
    );
});

export default index;
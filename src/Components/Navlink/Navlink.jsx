import Link from 'next/link';
import { useRouter } from 'next/router';


const NavLink = ({ href, exact, children, ...props }) => {
    const { pathname } = useRouter()
    const isActive = exact ? pathname === href : pathname.startsWith(href);;

    if (isActive) {
        props.className += ' active';
    }

    return (

        <Link href={href} {...props} passHref >
            <span>
                {children}
            </span>
        </Link>
    );
}

export default NavLink;
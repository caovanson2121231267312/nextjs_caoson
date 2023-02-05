import React, { memo } from 'react';
import NavLink from '../../Navlink/Navlink';
import Button from '../../Button';
import Image from 'next/image';

const sanityIoImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const index = memo(() => {

    return (
        <nav className="navbar navbar-expand-lg nav-black-ui position-fixed">
            <div className="container">
                <a className="navbar-brand" href="/">Devfullstack</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/about">Trang chủ</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Khóa học
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/blogs">Bài viết</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/coder">Coding UI</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hỏi đáp</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <form className="d-flex">
                            <input className="form-control me-2 search-blog" type="search" placeholder="Search blog ..." aria-label="Search" />
                            <button className="btn btn-search-beader" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                        <Button href="/blogs" className='btn bg-gradient-primary me-2 ripple-btn' passHref >
                            <i className="fas fa-plus-circle"></i> Viết bài
                        </Button>
                        <Button href="/login" className="btn btn-login ripple-btn">
                            <i className="fas fa-sign-in-alt"></i> Đăng nhập
                        </Button>
                        <div className="">
                            <div className="lang-menu">
                                <div className="selected-lang">
                                    <Image
                                        loader={sanityIoImageLoader}
                                        src="/images/lang/vi.jpg"
                                        alt="vietnam"
                                        width={35}
                                        height={20}
                                        className="me-2"
                                    />
                                    <span>
                                        <i className="fas fa-chevron-down"></i>
                                    </span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="" className="fr">
                                            <Image
                                                loader={sanityIoImageLoader}
                                                src="/images/lang/vi.jpg"
                                                alt="Picture of the author"
                                                width={35}
                                                height={20}
                                                className="me-2"
                                            />
                                            <span>Vi</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="en">
                                            <Image
                                                loader={sanityIoImageLoader}
                                                src="/images/lang/eng.svg"
                                                alt="Picture of the author"
                                                width={35}
                                                height={20}
                                                className="me-2"
                                            />
                                            <span>Eng</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
});

export default index;
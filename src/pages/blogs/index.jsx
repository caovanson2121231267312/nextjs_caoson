import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Image from 'next/image';
import Layout from "../../Components/Layouts/Layout";
import MagicalText from "../../Components/MagicalText";

const sanityIoImageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export default function Index() {
    return (
        <Container className='pt-1'>
            <Card className="mt-4 b-nav">
                <div className="breadcrumb">
                    <div className='d-flex w-100 justify-content-between'>
                        <div>
                            <span>
                                <Link href="/" passHref >
                                    <i className="fas fa-home"></i>
                                </Link>
                            </span>
                            <span>
                                <Link href="/blogs" passHref >
                                    <i className="c-text px-2 fas fa-angle-right"></i>
                                </Link>
                            </span>
                            <span className='c-text'>
                                <Link href="/blogs" passHref >
                                    Blogs
                                </Link>
                            </span>
                        </div>
                        <div>
                            <span>
                                Sắp xếp :
                            </span>
                            <select className="o-b-0">
                                <option>Mới nhất</option>
                                <option>Xem nhiều</option>
                                <option>A to Z</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Card>

            <div className='mt-4'>
                <Row>
                    <Col sm="6" md="4" lg="9" xl="9" xxl="9">
                        <Row>
                            <Col>
                                <Card className="mb-4 card-ui-blog">
                                    <Card.Body>
                                        <div className='card-title fs-4 fw-bold '>Card Title</div>
                                        <div>
                                            <p className='text-overflow-dot'>
                                                C#  9.0 đã ra mắt và giới thiệu một vài tính năng mới, trong đó tính năng Init only setters là một tính năng khá hữu ích được Microsoft trang bị cho C# ở phiên bản 9.0 cùng mình khám phá nhé.
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <span className='me-3 text-muted'>
                                                    <i className="fas fa-thumbs-up"></i> 12
                                                </span>
                                                <span className='me-3 text-muted'>
                                                    <i className="fas fa-thumbs-down"></i> 124
                                                </span>
                                                <span className='me-3 text-muted'>
                                                    <i className="fas fa-tag"></i> 124
                                                </span>
                                                <span className='me-3 text-muted'>
                                                    <i className="far fa-eye"></i> 124
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    <Image
                                                        loader={sanityIoImageLoader}
                                                        src="border.jpg"
                                                        alt="blogs"
                                                        width="25"
                                                        height="25"
                                                        className="me-2 rounded-circle border border-1 border-info"
                                                    />
                                                </span>
                                                <span>
                                                    <Link href="/blogs" className="fw-bold fs-6 me-1 text-gradient" passHref >
                                                        Cao Van Son
                                                    </Link>
                                                    <span className="fs-6 me-1 text-muted">
                                                        đã đăng
                                                    </span>
                                                    <strong className='text-muted'>
                                                        <MagicalText>
                                                            11 tháng trước
                                                        </MagicalText>
                                                    </strong>
                                                </span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                        <Card className="bg-card-menu">
                            <Card.Header>
                                <Card.Title className='card-menu-title'>Danh mục bài viết</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className='text-start'>
                                    <ul>
                                        <li className='pt-1 pb-1 li-menu'>
                                            <Link className='d-block' href="/blogs">Javascript <i className="float-end fas fa-angle-right"></i></Link>
                                        </li>
                                        <li className='pt-1 pb-1 li-menu'>
                                            <Link className='d-block' href="/blogs">Javascript <i className="float-end fas fa-angle-right"></i></Link>
                                        </li>
                                        <li className='pt-1 pb-1 li-menu'>
                                            <Link className='d-block' href="/blogs">Javascript <i className="float-end fas fa-angle-right"></i></Link>
                                        </li>
                                        <li className='pt-1 pb-1 li-menu'>
                                            <Link className='d-block' href="/blogs">Javascript <i className="float-end fas fa-angle-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='page-blogs'>
                <nav aria-label="...">
                    <ul className="pagination pagination-bg-dark">
                        <li className="page-item">
                            <a className="page-link" href="#">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">2</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    );
};

Index.Layout = Layout;
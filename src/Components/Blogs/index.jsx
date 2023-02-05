import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../ItemBlog';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const index = memo(() => {
    return (
        <Container>
            <h2 className="text-center mt-5">Bài viết mới nhất</h2>
            <Row>
                <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                    <Card className="mt-4 card-ui">
                        <Card.Img className="card-img" variant="top" src="border.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <div className='text-center'>
                                <Button variant="primary">Xem thêm</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                    <Card className="mt-4 card-ui">
                        <Card.Img className="card-img" variant="top" src="border.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Xem thêm</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                    <Card className="mt-4 card-ui">
                        <Card.Img className="card-img" variant="top" src="border.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Xem thêm</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                    <Card className="mt-4 card-ui">
                        <Card.Img className="card-img" variant="top" src="border.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Xem thêm</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                    <Card className="mt-4 card-ui">
                        <Card.Img className="card-img" variant="top" src="border.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Xem thêm</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm="6" md="4" lg="3" xl="3" xxl="3">
                    <Card className="mt-4 card-ui">
                        <Card.Img className="card-img" variant="top" src="border.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Button variant="primary">Xem thêm</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <div className='text-center mt-4 mb-4'>
                <Link className="btn btn-danger" href="/" passHref >Xem thêm</Link>
            </div>
        </Container>
    );
});

export default index;
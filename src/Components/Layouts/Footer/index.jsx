import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const index = memo(() => {
    return (
        <footer className='mt-5'>
            <div className="footer-body">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3">
                            <h2>DevFullStack</h2>
                            <div></div>
                        </Col>
                        <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3">
                            abc
                        </Col>
                        <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3">
                            abc
                        </Col>
                        <Col xs="12" sm="6" md="4" lg="3" xl="3" xxl="3">
                            <h2>Mạng xã hội</h2>
                            <p>Kết nối với DevFullstack qua mạng xã hội</p>
                            <div>
                                <a href="">
                                    <i className="fab fa-facebook-square" id="facebook"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-youtube-square" id="youtube"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-github-square github" id="github"></i>
                                </a>
                                <a href="">
                                    <i className="fab fa-tiktok" id="twitter"></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <div className="footer-end">
                <div className="container">
                    <p className="text-center">
                        Copyright © 2023 DevFullstack.vn. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
});

export default index;
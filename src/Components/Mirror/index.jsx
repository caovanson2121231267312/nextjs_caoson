import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CodeMirror from "../../Components/CodeMirror";
import CardMirror from "../../Components/CardMirror";
import MagicalText from "../../Components/MagicalText";
import { langs } from '@uiw/codemirror-extensions-langs';

const index = () => {
    const jsx = `import { React, useState } from 'react';
 
export default function App() {

  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  return (
    <div className="container">
      <h1>React Counter</h1>
      <span className="counter">{counter}</span>
      <div className="btn-container">
        <button className="btn btn-increase" onClick={increase}>+</button>
        <button className="btn btn-decrease" onClick={decrease}>-</button>
      </div>
    </div>
  );
}`;
    const html = `< !DOCTYPE html>
<html>
  <title>HTML Tutorial</title>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`;

    const css = `body {
    background-color: blue;
}
    
h1 {
    color: white;
    text-align: center;
}`;

    const js = `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("DevFullsatck");`;

    return (
        <Container className='mt-5'>
            <div className='text-center'>
                <h2></h2>
                <p>
                    Sometimes I'll start a line of code and I <MagicalText>don't even know</MagicalText> where it's going.
                </p>
            </div>
            <Row>
                <Col sm="6" md="8" lg="8" xl="8" xxl="8">
                    <CardMirror type="JSX">
                        <CodeMirror type={langs.jsx()} height={"705px"}>
                            {jsx}
                        </CodeMirror>
                    </CardMirror>
                </Col>
                <Col sm="6" md="4" lg="4" xl="4" xxl="4">
                    <Row>
                        <CardMirror type="html">
                            <Col>
                                <CodeMirror type={langs.html()} height={"200px"}>
                                    {html}
                                </CodeMirror>
                            </Col>
                        </CardMirror>
                        <CardMirror type="css">
                            <Col>
                                <CodeMirror type={langs.css()} height={"200px"}>
                                    {css}
                                </CodeMirror>
                            </Col>
                        </CardMirror>
                        <CardMirror type="javascript">
                            <Col>
                                <CodeMirror type={langs.jsx()} height={"200px"}>
                                    {js}
                                </CodeMirror>
                            </Col>
                        </CardMirror>

                    </Row>
                </Col>
            </Row >
        </Container >
    );
};

export default index;
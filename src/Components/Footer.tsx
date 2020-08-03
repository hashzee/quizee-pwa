import React from 'react'
import {Container, Row, Col} from 'reactstrap';
function Footer() {
    return (
        <>
   <footer className="pt-4 mt-5 pt-md-5" style={{backgroundColor:'#222', color:'#F5f5f5'}}>
        <Container>
        <Row>
          <Col className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Project 5 & 6</a></li>
              <li><a className="text-muted" href="#">by Zeeshan Hashmi</a></li>
            </ul>
          </Col>
          <Col className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://github.com/hashzee/quizee">Github</a></li>
              <li><a className="text-muted" href="#">TypeScript</a></li>
            </ul>
          </Col>
          <Col className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">PDF-Lib</a></li>
              <li><a className="text-muted" href="#">Web Animation API</a></li> 
            </ul>             
          </Col>
        </Row>
        <Row>
          <Col>Copyright (C) 2020</Col>
        </Row>
        </Container>
      </footer>            
        </>
    )
}

export default Footer

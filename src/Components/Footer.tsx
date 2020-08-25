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
              <li><span className="text-muted">Project 5 & 6</span></li>
              <li><span className="text-muted">by Zeeshan Hashmi</span></li>
            </ul>
          </Col>
          <Col className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://www.typescriptlang.org/">TypeScript</a></li>
            </ul>
          </Col>
          <Col className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://www.npmjs.com/package/pdf-lib">PDF-Lib</a></li>
              <li><a className="text-muted" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API">Web Animation API</a></li> 
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

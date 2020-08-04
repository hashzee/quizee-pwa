import React from 'react';
import {Container, Row, Col, Button, Card, CardTitle, CardText, CardImg } from 'reactstrap';
import {Link} from 'react-router-dom';

const q1 = require("./../svg/quiz_easy.svg") as string;
const q2 = require("./../svg/quiz_medium.svg") as string;
const q3 = require("./../svg/quiz_hard.svg") as string;
function Quizes() {
    return (
        <>
        <Container id='quizes'>
          <Row>
            <Col className='col-12 mb-5 text-center'><h1>Our Quizes</h1></Col>
          </Row>
        <Row className='text-center'>
        <Col sm="4" lg="4">
          <Card body className='cardAnim'>
            <div className='bgShape1'>
              <CardImg top width="100%" src={q1} alt="Card image cap" />
            </div>
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Level 1</CardTitle>
            <CardText style={{textAlign: "center", minHeight:'120px'}}>Easy difficluty level, for the new lerners! Pass and get your Certificate !</CardText>
            <Link to='/easy'><Button inverse color="danger">Start Easy</Button></Link>
          </Card>
        </Col>
        <Col sm="4" lg="4">
          <Card body className='cardAnim' >
          <div className='bgShape2'>
              <CardImg top width="100%" src={q2} alt="Card image cap" />
            </div>            
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Level 2</CardTitle>
            <CardText style={{textAlign: "center", minHeight:'120px'}}>Medium level for the intermediate users! Can you earn a certificate ?</CardText>
            <Link to='/medium'><Button inverse color="danger">Start Medium</Button></Link>
          </Card>
        </Col>
        <Col sm="4" lg="4" >
          <Card body className='cardAnim'>
          <div className='bgShape3'>
              <CardImg top width="100%" src={q3} alt="Card image cap" />
            </div>            
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Level 3</CardTitle>
            <CardText style={{textAlign: "center", minHeight:'120px'}}>Master level, for the legend. You want a certificate, Huh ?</CardText>
            <Link to='/hard'><Button inverse color="danger">Start Hard</Button></Link>
          </Card>
        </Col>
      </Row>
      </Container>            
        </>
    )
}

export default Quizes

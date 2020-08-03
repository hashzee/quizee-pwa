import React from 'react'
import {Container, Row, Col, Button, Card, CardTitle, CardText, CardImg } from 'reactstrap';
const q1 = require("./../svg/quiz_easy.svg") as string;
const q2 = require("./../svg/quiz_medium.svg") as string;
const q3 = require("./../svg/quiz_hard.svg") as string;
function Quizes() {
    return (
        <>
        <Container>
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
            <CardText style={{textAlign: "center"}}>Easy difficluty level, for the new lerners! Pass and get your Certificate !</CardText>
            <Button inverse color="danger" href='/easy'>Start Easy</Button>
          </Card>
        </Col>
        <Col sm="4" lg="4">
          <Card body className='cardAnim' >
          <div className='bgShape2'>
              <CardImg top width="100%" src={q2} alt="Card image cap" />
            </div>            
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Level 2</CardTitle>
            <CardText style={{textAlign: "center"}}>Medium level for the intermediate users! Can you earn a certificate ?</CardText>
            <Button inverse color="danger" href='/medium'>Start Medium</Button>
          </Card>
        </Col>
        <Col sm="4" lg="4" >
          <Card body className='cardAnim'>
          <div className='bgShape3'>
              <CardImg top width="100%" src={q3} alt="Card image cap" />
            </div>            
            <CardTitle style={{fontSize: "30px", textAlign: "center"}}>Level 3</CardTitle>
            <CardText style={{textAlign: "center"}}>Master level, for the legend. You want a certificate, Huh ?</CardText>
            <Button inverse color="danger" href='/hard'>Start Hard</Button>
          </Card>
        </Col>
      </Row>
      </Container>            
        </>
    )
}

export default Quizes

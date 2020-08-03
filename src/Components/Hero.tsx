import React from 'react'
import {Container, Row, Col, Jumbotron} from 'reactstrap';

const hero = require("./../svg/hero.svg") as string;
function Hero() {
    return (
        <>
        <Jumbotron style={{backgroundColor:'transparent'}}>
            <Container>
            <Row>
                <Col className='col-12 col-md-6'>
                <h1 className="display-3" >Welcome to Quizee</h1>
                <h5 className='mt-5 pl-2'>This is a little effort to combine Project 5 & 6 of the Bootcamp 2020</h5>
                <h5 className='mt-3 pl-2'>Once passed you will have a little surprise !</h5>
                <h5 className='mt-3 pl-2'> Share your surprise on social media</h5>
                </Col>
                <Col className='col-12 col-md-6' style={{textAlign: "center"}}>
                <img src={hero} alt="Quizee"/>
                </Col>              
            </Row>
            </Container>
            </Jumbotron>            
        </>
    )
}

export default Hero

import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import PersCarousel from './Carousel';
import Hero from './Hero';
import Quizes from './Quizes';
const cupIcon = require("./../images/cup-icon.png") as string;
function Home() {
    return (
        <>
        <div>
            <img src={cupIcon} className='bgCup' />
        </div>        
        <Hero />
        <Quizes />
          <Container>
            <Row>
              <Col>
                  <PersCarousel />
              </Col>
            </Row>  
          </Container>           
        </>
    )
}

export default Home

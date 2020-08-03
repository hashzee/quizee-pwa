import React from 'react'
import PersCarousel from './Carousel';
import Hero from './Hero';
import Quizes from './Quizes';
import About from './About';
const cupIcon = require("./../images/cup-icon.png") as string;
function Home() {
    return (
        <>
        <div>
            <img src={cupIcon} className='bgCup' />
        </div>        
        <Hero />
        <Quizes />
        <About/>
          {/* <Container>
            <Row>
              <Col>
                  <PersCarousel />
              </Col>
            </Row>  
          </Container>            */}
        </>
    )
}

export default Home

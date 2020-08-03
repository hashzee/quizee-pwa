import React from 'react'
import {Container, Row, Col} from 'reactstrap';
import useWebAnimations from "@wellyshen/use-web-animations";

const reactIcon = require("./../images/react.png");
const bootstrapIcon = require("./../images/bootstrap.png");
const typeIcon = require("./../images/typescript.png");
const pdfIcon = require("./../images/pdflib.png");

function About() {

    /* Animation Codes */
    const hoFrames =   [
        {transform: 'translateY(0px) translateX(0px) scale(1)'},
        { transform: 'translateY(35px) translateX(-20px) scale(0.9)'},
        {transform: 'translateY(0px) translateX(0px) scale(1)'}];
    const hoTiming =   {duration: 7500, iterations: Infinity, playbackRate:0.8};
    const hoMovement = useWebAnimations({keyframes:hoFrames,timing:hoTiming}); 

    const zoomFrames =   [
    {transform: 'translateX(0px) scale(1)'},
    { transform: 'translateX(50px) scale(0.8)'},
    {transform: 'translateX(0px) scale(1)'}];
    const zoomTiming =   {duration: 6000, iterations: Infinity, playbackRate:0.5};
    const zoomMovement = useWebAnimations({keyframes:zoomFrames,timing:zoomTiming});

    const skypeFrames =   [
    {transform: 'translateY(0px) scale(1)'},
    { transform: 'translateY(50px) scale(0.8)'},
    {transform: 'translateY(0px) scale(1)'}];
    const skypeTiming =   {duration: 4500, iterations: Infinity, playbackRate:0.8};
    const skypeMovement = useWebAnimations({keyframes:skypeFrames,timing:skypeTiming});    

    const slackFrames =   [
    {transform: 'translateY(0px) scale(1)'},
    { transform: 'translateY(25px) scale(0.8)'},
    {transform: 'translateY(0px) scale(1)'}];
    const slackTiming =   {duration: 6500, iterations: Infinity, playbackRate:0.8};
    const slackMovement = useWebAnimations({keyframes:slackFrames,timing:slackTiming});   


    return (
        <>
        <Container fluid id='about' className='mt-5 p-5'>
          <Row>
            <Col className='col-12 mb-5 text-center'>
                <h1>About Quizee</h1>
                <p>Quizee is the result of studying and workking after hours to complete the requirements of Proect 5 & 6 of the <a href='https://panacloud.github.io/bootcamp-2020/' rel="noopener noreferrer" target='_blank'>Panacloud Bootcamp 2020</a>.</p>
                <p>It was made using React/TypeScript, React Router, Hooks, PDF-Lib and I used the Web Animation API to add little animations.</p>
                <p>In addition, some animated SVG files were used.</p>
     
                <div className="bg-shapes">
                    <div ref={zoomMovement.ref}></div>
                    <div ref={skypeMovement.ref}></div>
                    <div ref={slackMovement.ref}></div>
                    <div ref={hoMovement.ref}></div>
                </div>
            
            </Col>
          </Row>
        <Row className='text-center'>
            <Col>

            </Col>
      </Row>
      </Container>            
    </>
    )
}

export default About ;

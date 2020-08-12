import React from 'react'
import { QuizCompletedType } from './../Types/quiz-types';
import { Button, Card, CardHeader, CardBody, CardText, CardFooter } from 'reactstrap';
import Certificate from './Certificate';





function QuizCompleted(props: QuizCompletedType) {

    let resultClass = '';
    let result = '';
    let per = (props.score / props.total * 100);

    if (per < 70) {
        result = 'Sorry, but you failed';
        resultClass = 'danger';
    }
    else {
        result = 'Congratulations! you passed';
        resultClass = 'success';
    }


    return (
        <>
            <Card>
                <CardHeader tag="h3" color={resultClass}><span>{result}</span></CardHeader>
                <CardBody>
                    <CardText>
                        {(per<70)?
                            <>
                                <p>You got {per} % correct answers.</p>
                                <p>Thomas A. Edison once said '<em>Our greatest weakness lies in giving up</em>.'</p>
                                <p>Go to home page and try other quiz.</p>
                            </>
                            :
                            <>
                                <p>You did a good job and got {per}% correct answers.</p>
                                <p>Click on the button below to get your certificate.</p>
                            </>                           
                        }        
                    </CardText>
                    
                    
                </CardBody>
                <CardFooter className="text-muted">
                    <Button href='/' color='primary'>Home Page</Button> 
                    {(per<70)?
                        <span>Go to home page and try another quiz.</span>                           
                        :
                        <Certificate name={props.name} level={props.qType} />
                    }     

                </CardFooter>
            </Card>
        </>
    )
}

export default QuizCompleted

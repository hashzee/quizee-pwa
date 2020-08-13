import React from 'react'
import { PDFDocument, StandardFonts, rgb} from 'pdf-lib'
import download from 'downloadjs';
import { Button } from 'reactstrap';
import {CertificateType} from './../Types/quiz-types';
import firebase from 'firebase';
import axios from 'axios';

async function sendNotification(){
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    console.log('TOKEN in Component: ',token);
    const response = await axios.post(
        'https://fcm.googleapis.com/fcm/send',
        { notification: {
            title: "Quizee",
            body: "Happy Independence Day from Zeeshan Hashmi",
            click_action: "",
            icon:'https://zh-quizee.netlify.app/images/icons/pakistan-flag.png',
        },
        "to": token },
        { headers: { 'Content-Type': 'application/json','Authorization': 'key=AAAAHiHq_-s:APA91bEuyBNt1R2pXib-RmIvNkVCrUgEUvm0PnFbrB1RF6CRBOVGFjE6bRx7YAa8UBq15YgpWClcnYoOUARzf4XY1_u7UxlCSDoamXCnBLGXeLjMYAljV0N7WVZYjmCSdHJDMJ04KJau' } }
      );
      console.log('Response: ',response);
}

async function handlePDF(name:string, level:string) {
    async function getCachedBytes( cacheName:string, url:string ) {
        const cacheStorage   = await caches.open( cacheName );
        const cachedResponse = await cacheStorage.match( url );
        
        if ( ! cachedResponse || ! cachedResponse.ok ) {
            return false;
        }
        const resp = await cachedResponse.arrayBuffer();
        //console.log(resp);
        return resp;
    }    
    // Load Template
    const path = `https://quizee.imfast.io/${level}_template.pdf`;
    const existingPdfBytes = await fetch(path).then(res => {
        return res.arrayBuffer();
    }).catch(function(error) {
        return getCachedBytes('Quizee-Dynamic-Cache',path);
    });
    
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Draw a string of text diagonally across the first page
    firstPage.drawText(name, {
        x: 360,
        y: 320,
        size: 40,
        font: helveticaFont,
        color: rgb(0, 0, 0)
    });
    


    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    // Trigger the browser to download the PDF document
    // Messaging 
    setTimeout(sendNotification, 5000);     
    download(pdfBytes, `${name}-${level}-Certificate.pdf`, "application/pdf");
}

function Certificate(props:CertificateType) {
    return (
            <Button className='ml-5' color='success' onClick={() => handlePDF(props.name, props.level)}>Certificate</Button>
    )
}

export default Certificate;

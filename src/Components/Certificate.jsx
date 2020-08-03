import React from 'react'
import { PDFDocument, StandardFonts, rgb, degrees} from 'pdf-lib'
import download from 'downloadjs';

import template from './../pdfs/easy_template.pdf';

async function handlePDF() {

    // Load Template
    const path = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'; //../../pdfs/easy_template.pdf';
    const existingPdfBytes = template;
    
    //await fetch(path).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    // Draw a string of text diagonally across the first page
    firstPage.drawText('Zeeshan Hashmi', {
        x: 5,
        y: 15,
        size: 50,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1)
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
}

function Certificate() {
    return (
        <div>
            <input type='button' value='Get PDF' onClick={handlePDF}/>
        </div>
    )
}

export default Certificate

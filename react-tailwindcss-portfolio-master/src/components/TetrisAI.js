import React, { useState } from 'react';
import tetrispdf from "./TetrisAI_WisdomOfCrowds.pdf"
import {Document, Page, pdfjs} from "react-pdf"
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function TetrisAI() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

    return (
        <div>
            <Document
                file={tetrispdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                 <h1>Tetris AI with Wisdom of Crowds</h1>
                <Page pageNumber={pageNumber} />
                 <nav>
                 <button
                     className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                     onClick={goToPrevPage}>Prev</button>
                    {pageNumber}/{numPages}
                <button
                     className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                     onClick={goToNextPage}>Next</button>
                </nav>
            </Document>
        </div>
    );
}
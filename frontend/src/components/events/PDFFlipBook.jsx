// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import HTMLFlipBook from 'react-pageflip';
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs";;


// const PDFFlipBook = () => {
//     const { id } = useParams(); // Extract the dynamic id from the URL
//     const [eventData, setEventData] = useState(null);
//     const [numPages, setNumPages] = useState(0);
//     const [loading, setLoading] = useState(true);

//     // Fetch event data
//     useEffect(() => {
//         const fetchEventData = async () => {
//             try {
//                 const response = await fetch(`${API_URL}/events/${id}`);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setEventData(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching event data:', error);
//                 setLoading(false);
//             }
//         };

//         if (id) {
//             fetchEventData();
//         }
//     }, [id]);

//     // PDF document load success handler
//     const onDocumentLoadSuccess = ({ numPages }) => {
//         setNumPages(numPages);
//     };

//     if (loading) {
//         return (
//             <div className="relative">
//                 <div className="container mx-auto px-4 py-8">
//                     <div>Loading...</div>
//                 </div>
//             </div>
//         );
//     }

//     if (!eventData || !eventData.eventPDFUrl) {
//         return (
//             <div className="relative">
//                 <div className="container mx-auto px-4 py-8">
//                     <div>Error loading event data or PDF URL is missing.</div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="relative">
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-4xl font-bold mb-8 font-playfair">Yoga Book</h1>
//                 <Document
//                     // file={eventData.eventPDFUrl}
//                     file={`${API_URL}/proxy/pdf?url=${encodeURIComponent(eventData.eventPDFUrl)}`}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                     loading={<div>Loading PDF...</div>}
//                 >
//                     <HTMLFlipBook
//                         width={300}
//                         height={500}
//                         size="stretch"
//                         minWidth={300}
//                         maxWidth={1000}
//                         minHeight={400}
//                         maxHeight={1533}
//                         maxShadowOpacity={0.5}
//                         showCover={true}
//                         mobileScrollSupport={true}
//                         className="mx-auto"
//                     >
//                         {Array.from({ length: numPages }, (_, index) => (
//                             <div key={`page_${index + 1}`} className="demoPage">
//                                 <Page
//                                     pageNumber={index + 1}
//                                     width={300}
//                                     renderTextLayer={false}
//                                     renderAnnotationLayer={false}
//                                 />
//                             </div>
//                         ))}
//                     </HTMLFlipBook>
//                 </Document>
//             </div>
//         </div>
//     );
// };

// export default PDFFlipBook;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { API_URL } from "../../config";

pdfjs.GlobalWorkerOptions.workerSrc = "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs";

const PDFFlipBook = () => {
    const { id } = useParams(); // Extract the dynamic id from the URL
    const [eventData, setEventData] = useState(null);
    const [numPages, setNumPages] = useState(0);
    const [loading, setLoading] = useState(true);

    // Fetch event data
    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`${API_URL}/events/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setEventData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event data:', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchEventData();
        }
    }, [id]);

    // PDF document load success handler
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    if (loading) {
        return (
            <div className="relative">
                <div className="container mx-auto px-4 py-8">
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    if (!eventData || !eventData.eventPDFUrl) {
        return (
            <div className="relative">
                <div className="container mx-auto px-4 py-8">
                    <div>Error loading event data or PDF URL is missing.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 font-playfair">{eventData.eventTitle}</h1>
                <Document
                    file={`${API_URL}/proxy/pdf?url=${encodeURIComponent(eventData.eventPDFUrl)}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div>Loading PDF...</div>}
                >
                    <HTMLFlipBook
                        width={300}
                        height={500}
                        size="stretch"
                        minWidth={300}
                        maxWidth={1000}
                        minHeight={400}
                        maxHeight={1533}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        className="mx-auto"
                    >
                        {Array.from({ length: numPages }, (_, index) => (
                            <div key={`page_${index + 1}`} className="demoPage">
                                <Page
                                    pageNumber={index + 1}
                                    width={300}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </div>
                        ))}
                    </HTMLFlipBook>
                </Document>
            </div>
        </div>
    );
};

export default PDFFlipBook;
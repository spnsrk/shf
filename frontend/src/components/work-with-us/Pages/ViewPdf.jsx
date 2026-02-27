// import React, { useState } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs";

// const ViewPdf = () => {
//     const [numPages, setNumPages] = useState(0);

//     // PDF document load success handler
//     const onDocumentLoadSuccess = ({ numPages }) => {
//         setNumPages(numPages);
//     };

//     const pdfUrl = "/pdf/SHF Newsletter.pdf";
//     return (
//         <div className="relative">
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-4xl font-bold mb-8 font-playfair">Scottish hindu addendum</h1>
//                 <Document
//                     file={pdfUrl}
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

// export default ViewPdf;

import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = "/node_modules/pdfjs-dist/build/pdf.worker.min.mjs";

const ViewPdf = () => {
    const [numPages, setNumPages] = useState(0);
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    });

    // Update dimensions on window resize
    useEffect(() => {
        const updateDimensions = () => {
            const width = Math.min(window.innerWidth * 0.8, 1200);
            const height = (width * 1.414); // Standard A4 ratio
            setDimensions({ width: width / 2, height });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const pdfUrl = "/pdf/SHF Newsletter.pdf";

    return (
        <div className="relative w-full min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 font-playfair text-center">
                    Scottish Hindu Addendum
                </h1>
                
                <div className="flex justify-center">
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex items-center justify-center p-8">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                            </div>
                        }
                        error={
                            <div className="text-red-600 text-center p-4">
                                Failed to load PDF. Please try again later.
                            </div>
                        }
                    >
                        <div className="shadow-2xl">
                            <HTMLFlipBook
                                width={dimensions.width}
                                height={dimensions.height}
                                size="stretch"
                                minWidth={300}
                                maxWidth={dimensions.width}
                                minHeight={400}
                                maxHeight={dimensions.height}
                                maxShadowOpacity={0.5}
                                showCover={true}
                                mobileScrollSupport={true}
                                className="mx-auto"
                            >
                                {Array.from({ length: numPages }, (_, index) => (
                                    <div 
                                        key={`page_${index + 1}`} 
                                        className="demoPage bg-white"
                                    >
                                        <Page
                                            pageNumber={index + 1}
                                            width={dimensions.width}
                                            height={dimensions.height}
                                            renderTextLayer={false}
                                            renderAnnotationLayer={false}
                                            className="shadow-lg"
                                        />
                                    </div>
                                ))}
                            </HTMLFlipBook>
                        </div>
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default ViewPdf;
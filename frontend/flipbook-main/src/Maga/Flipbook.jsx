import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import pdf from './Total-Skincare-Guide.pdf';
import ByteBeatJan2024 from './ByteBeatJan2024.pdf';
import MakeupTips from './MakeupTips.pdf';
import Skin from './Skin-Magazine-Dr-Vishal-Agarwal.pdf';
import RMB from './RMB-Beauty-Guide.pdf';
import bookkk from './bookkk.pdf';
import HairCare from './HairCare.pdf'

// اضف روابط منشورات انستغرام الخاصة بك هنا
const instagramPosts = [
    "https://i.pinimg.com/236x/5f/64/85/5f648570c853f853d9e18e46a5220330.jpg",
    "https://i.pinimg.com/236x/6e/5d/f7/6e5df728564d60fa34c5383c97cfa04d.jpg",
    "https://i.pinimg.com/564x/bf/74/d5/bf74d5d27c054c4aedd8c6492b279379.jpg",
    // أضف المزيد من الروابط حسب الحاجة
];

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SkeletonPage = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <div className="h-[570px] w-[400px] bg-white p-4">
                <Skeleton height={30} className="mb-4" />
                <Skeleton count={20} />
                <div className="mt-4">
                    <Skeleton height={200} />
                </div>
            </div>
        </div>
    );
});

SkeletonPage.displayName = 'SkeletonPage';

const PageContent = React.forwardRef(({ pageNumber }, ref) => {
    return (
        <div className="demoPage" ref={ref}>
            <Page
                pageNumber={pageNumber}
                width={400}
                height={570}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                loading={() => (
                    <div className="h-[570px] w-[400px] bg-white p-4">
                        <Skeleton height={30} className="mb-4" />
                        <Skeleton count={15} />
                        <div className="mt-4">
                            <Skeleton height={200} />
                        </div>
                    </div>
                )}
            />
        </div>
    );
});

PageContent.displayName = 'PageContent';

function InstagramPosts() {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Instagram Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {instagramPosts.map((url, index) => (
                    <img key={index} src={url} alt={`Instagram Post ${index + 1}`} className="w-full h-auto rounded-lg" />
                ))}
            </div>
        </div>
    );
}

function Flipbook() {
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPdf, setCurrentPdf] = useState(pdf);

    const pdfOptions = [
        { title: 'Skincare Guide', file: bookkk },
        { title: 'Makeup Tips', file: MakeupTips },
        { title: 'Hair Care Essentials', file: HairCare },
        { title: 'Wellness Journal', file: RMB },
    ];

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false);
    }

    function onDocumentLoadError(error) {
        console.error('Error loading PDF:', error);
        setIsLoading(false);
    }

    const handlePdfChange = (newPdf) => {
        setIsLoading(true);
        setCurrentPdf(newPdf);
    };

    return (
        <div className="flex flex-col gap-5 justify-end items-center bg-gray-900 min-h-screen p-4">
            <h1 className="text-4xl font-bold text-white font-irish  mb-4">The Magazine of the Week...</h1>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
                <div className="md:w-1/4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h2 className="text-xl font-semibold text-white mb-4">More Magazines</h2>
                        <div className="flex flex-col gap-2">
                            {pdfOptions.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePdfChange(option.file)}
                                    className={`text-left px-4 py-2 rounded-md transition-all ${
                                        currentPdf === option.file
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                                >
                                    {option.title}
                                </button>
                            ))}
                        </div>

                        {/* قسم منشورات إنستغرام هنا */}
                        <InstagramPosts />
                    </div>
                </div>

                <div className="md:w-3/4">
                    <Document
                        file={currentPdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                    >
                        <HTMLFlipBook width={400} height={570} showCover={true} className="shadow-2xl ">
                            {isLoading ? (
                                [...Array(5)].map((_, index) => (
                                    <SkeletonPage key={`skeleton-${index}`} />
                                ))
                            ) : (
                                numPages &&
                                [...Array(numPages)].map((_, index) => (
                                    <PageContent key={`page-${index}`} pageNumber={index + 1} />
                                ))
                            )}
                        </HTMLFlipBook>
                    </Document>

                    {!isLoading && !numPages && (
                        <div className="text-red-500 text-center mt-4">
                            Failed to load PDF. Please check the file and try again.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Flipbook;

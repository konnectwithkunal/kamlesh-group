// src/components/Exhibition.tsx
// Beautiful Exhibition Gallery Section with PowerBook Media - Horizontal Carousel

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Exhibition items from powerbook folder - using actual file names
const exhibitionItems = [
    // Images
    { id: 1, src: '/powerbook/4.jpeg', type: 'image' as const, title: 'Exhibition 1' },
    { id: 2, src: '/powerbook/21.jpeg', type: 'image' as const, title: 'Exhibition 2' },
    { id: 3, src: '/powerbook/exhibtion_2.jpeg', type: 'image' as const, title: 'Exhibition 3' },
    { id: 4, src: '/powerbook/exhibition_3.jpeg', type: 'image' as const, title: 'Exhibition 4' },
    { id: 5, src: '/powerbook/exhibition_6.jpeg', type: 'image' as const, title: 'Exhibition 5' },
    { id: 6, src: '/powerbook/exhibition_7.jpeg', type: 'image' as const, title: 'Exhibition 6' },
    { id: 7, src: '/powerbook/exhibition_8.jpeg', type: 'image' as const, title: 'Exhibition 7' },
    { id: 8, src: '/powerbook/exhibition_9.jpeg', type: 'image' as const, title: 'Exhibition 8' },
    { id: 9, src: '/powerbook/exhibition_10.jpeg', type: 'image' as const, title: 'Exhibition 9' },
    { id: 10, src: '/powerbook/exhibition_11.jpeg', type: 'image' as const, title: 'Exhibition 10' },
    { id: 11, src: '/powerbook/exhibition_12.jpeg', type: 'image' as const, title: 'Exhibition 11' },
    { id: 12, src: '/powerbook/exhibition_13.jpeg', type: 'image' as const, title: 'Exhibition 12' },
    { id: 13, src: '/powerbook/exhibition_14.jpeg', type: 'image' as const, title: 'Exhibition 13' },
    { id: 14, src: '/powerbook/exhibition_15.jpeg', type: 'image' as const, title: 'Exhibition 14' },
    { id: 15, src: '/powerbook/exhibition_16.jpeg', type: 'image' as const, title: 'Exhibition 15' },
    { id: 16, src: '/powerbook/exhibition_17.jpeg', type: 'image' as const, title: 'Exhibition 16' },
    { id: 17, src: '/powerbook/exhibition_18.jpeg', type: 'image' as const, title: 'Exhibition 17' },
    { id: 18, src: '/powerbook/exhibition_19.jpeg', type: 'image' as const, title: 'Exhibition 18' },
    { id: 19, src: '/powerbook/exhibition_20.jpeg', type: 'image' as const, title: 'Exhibition 19' },
    { id: 20, src: '/powerbook/exhibition_22.jpeg', type: 'image' as const, title: 'Exhibition 20' },
    { id: 21, src: '/powerbook/exhibition_23.jpeg', type: 'image' as const, title: 'Exhibition 21' },
    { id: 22, src: '/powerbook/exhibition_24.jpeg', type: 'image' as const, title: 'Exhibition 22' },
    { id: 23, src: '/powerbook/exhibition_25.jpeg', type: 'image' as const, title: 'Exhibition 23' },
    { id: 24, src: '/powerbook/exhibition_26.jpeg', type: 'image' as const, title: 'Exhibition 24' },
    { id: 25, src: '/powerbook/exhibition_27.jpeg', type: 'image' as const, title: 'Exhibition 25' },
    { id: 26, src: '/powerbook/exhibition_43.JPG', type: 'image' as const, title: 'Exhibition 26' },
    { id: 27, src: '/powerbook/44.png', type: 'image' as const, title: 'Exhibition 27' },
    { id: 28, src: '/powerbook/45.png', type: 'image' as const, title: 'Exhibition 28' },
    { id: 29, src: '/powerbook/46.png', type: 'image' as const, title: 'Exhibition 29' },
    { id: 30, src: '/powerbook/47.png', type: 'image' as const, title: 'Exhibition 30' },
    // Videos - horizontal
    { id: 31, src: '/powerbook/39.mp4', type: 'video' as const, title: 'Video Showcase 1' },
    { id: 32, src: '/powerbook/53.mp4', type: 'video' as const, title: 'Video Showcase 2' },
    { id: 33, src: '/powerbook/54.mp4', type: 'video' as const, title: 'Video Showcase 3' },
    { id: 34, src: '/powerbook/55.mp4', type: 'video' as const, title: 'Video Showcase 4' },
    { id: 35, src: '/powerbook/exhibition_31.mp4', type: 'video' as const, title: 'Video Showcase 5' },
    { id: 36, src: '/powerbook/exhibition_33.mp4', type: 'video' as const, title: 'Video Showcase 6' },
    { id: 37, src: '/powerbook/exhibition_34.mp4', type: 'video' as const, title: 'Video Showcase 7' },
    { id: 38, src: '/powerbook/exhibition_37.mp4', type: 'video' as const, title: 'Video Showcase 8' },
    { id: 39, src: '/powerbook/exhibition_58.mp4', type: 'video' as const, title: 'Video Showcase 9' },
    // Videos - vertical exhibition
    { id: 40, src: '/powerbook/vertical_exhibition_28.mp4', type: 'video' as const, title: 'Video Showcase 10' },
    { id: 41, src: '/powerbook/vertical_exhibition_29.mp4', type: 'video' as const, title: 'Video Showcase 11' },
    { id: 42, src: '/powerbook/vertical_exhibition_30.mp4', type: 'video' as const, title: 'Video Showcase 12' },
    { id: 43, src: '/powerbook/vertical_exhibition_32.mp4', type: 'video' as const, title: 'Video Showcase 13' },
    { id: 44, src: '/powerbook/vertical_exhibition_35.mp4', type: 'video' as const, title: 'Video Showcase 14' },
    { id: 45, src: '/powerbook/vertical_36.mp4', type: 'video' as const, title: 'Video Showcase 15' },
    { id: 46, src: '/powerbook/vertical_exhibition_38.mp4', type: 'video' as const, title: 'Video Showcase 16' },
    { id: 47, src: '/powerbook/vertical_exhibition_40.mp4', type: 'video' as const, title: 'Video Showcase 17' },
    { id: 48, src: '/powerbook/vertical_exhibition_41.mp4', type: 'video' as const, title: 'Video Showcase 18' },
    { id: 49, src: '/powerbook/vertical_exhibition_42.mp4', type: 'video' as const, title: 'Video Showcase 19' },
    { id: 50, src: '/powerbook/vertical_48.mp4', type: 'video' as const, title: 'Video Showcase 20' },
    { id: 51, src: '/powerbook/vertical_49.mp4', type: 'video' as const, title: 'Video Showcase 21' },
    { id: 52, src: '/powerbook/vertical_50.mp4', type: 'video' as const, title: 'Video Showcase 22' },
    { id: 53, src: '/powerbook/vertical_51.mp4', type: 'video' as const, title: 'Video Showcase 23' },
    { id: 54, src: '/powerbook/vertical_52.mp4', type: 'video' as const, title: 'Video Showcase 24' },
    { id: 55, src: '/powerbook/vertical_56.mp4', type: 'video' as const, title: 'Video Showcase 25' },
    { id: 56, src: '/powerbook/vertical_exhibition_57.mp4', type: 'video' as const, title: 'Video Showcase 26' },
    { id: 57, src: '/powerbook/vertical_60.mp4', type: 'video' as const, title: 'Video Showcase 27' },
];

// Shuffle items for visual variety (but only once)
const shuffledItems = [...exhibitionItems].sort(() => 0.5 - Math.random());

// Video Card Component with hover autoplay
const VideoCard: React.FC<{
    item: typeof exhibitionItems[0];
    onClick: () => void;
    index: number;
}> = ({ item, onClick, index }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (isHovered) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
    }, [isHovered]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <video
                ref={videoRef}
                src={item.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                muted
                loop
                playsInline
                preload="metadata"
            />

            {/* Play Icon Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-14 h-14 rounded-full bg-[#EE4343] flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Video Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-[#EE4343] text-white text-xs font-bold rounded-full flex items-center gap-1">
                <Play className="w-3 h-3" fill="white" /> VIDEO
            </div>
        </motion.div>
    );
};

// Image Card Component
const ImageCard: React.FC<{
    item: typeof exhibitionItems[0];
    onClick: () => void;
    index: number;
}> = ({ item, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={onClick}
        >
            <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* View Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

// Lightbox Component
const Lightbox: React.FC<{
    items: typeof exhibitionItems;
    activeIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}> = ({ items, activeIndex, onClose, onPrev, onNext }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const currentItem = items[activeIndex];

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onNext, onPrev, onClose]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2 rounded-full hover:bg-white/10 transition-all"
                aria-label="Close"
            >
                <X className="w-8 h-8" />
            </button>

            {/* Previous Button */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 text-white hover:text-gray-300 z-50 p-3 rounded-full hover:bg-white/10 transition-all"
                aria-label="Previous"
            >
                <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Media Container */}
            <div
                className="relative max-w-6xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                {currentItem.type === 'video' ? (
                    <div className="relative">
                        <video
                            ref={videoRef}
                            src={currentItem.src}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                            autoPlay
                            muted={isMuted}
                            loop
                            playsInline
                        />
                        {/* Video Controls */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                            <button
                                onClick={togglePlay}
                                className="text-white hover:text-[#EE4343] transition-colors"
                            >
                                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            </button>
                            <button
                                onClick={toggleMute}
                                className="text-white hover:text-[#EE4343] transition-colors"
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                ) : (
                    <img
                        src={currentItem.src}
                        alt={currentItem.title}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    />
                )}

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {activeIndex + 1} / {items.length}
                </div>
            </div>

            {/* Next Button */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 text-white hover:text-gray-300 z-50 p-3 rounded-full hover:bg-white/10 transition-all"
                aria-label="Next"
            >
                <ChevronRight className="w-10 h-10" />
            </button>

            {/* Instructions */}
            <div className="absolute bottom-4 left-4 text-white/60 text-sm">
                Use arrow keys to navigate • ESC to close
            </div>
        </motion.div>
    );
};

// Main Exhibition Component - Horizontal Carousel
const Exhibition: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    // Scroll amount (pixels) for each navigation click
    const scrollAmount = 320;

    // Auto-scroll functionality
    const startAutoScroll = useCallback(() => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        autoScrollRef.current = setInterval(() => {
            if (carouselRef.current && !isPaused) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                // If we've scrolled to the end, go back to start
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3000); // Auto-scroll every 3 seconds
    }, [isPaused]);

    useEffect(() => {
        startAutoScroll();
        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        };
    }, [startAutoScroll]);

    // Manual scroll handlers
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const showPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? shuffledItems.length - 1 : prev - 1));
    };

    const showNext = () => {
        setActiveIndex((prev) => (prev === shuffledItems.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-[#EE4343]/10 text-[#EE4343] text-sm font-semibold rounded-full mb-4"
                    >
                        EXHIBITION GALLERY
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        Our Premium Collection
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our stunning range of products through our curated gallery showcase
                    </motion.p>
                </div>

                {/* Horizontal Carousel Container */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left Navigation Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-[#EE4343] hover:text-white transition-all duration-300 -ml-4 md:ml-0"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Carousel Track */}
                    <div
                        ref={carouselRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {shuffledItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px] aspect-[4/3] rounded-xl overflow-hidden"
                            >
                                {item.type === 'video' ? (
                                    <VideoCard
                                        item={item}
                                        onClick={() => openLightbox(index)}
                                        index={index}
                                    />
                                ) : (
                                    <ImageCard
                                        item={item}
                                        onClick={() => openLightbox(index)}
                                        index={index}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-[#EE4343] hover:text-white transition-all duration-300 -mr-4 md:mr-0"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Scroll Indicator Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    <span className="text-sm text-gray-500">
                        {shuffledItems.length} items • Hover to pause auto-scroll
                    </span>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <Lightbox
                        items={shuffledItems}
                        activeIndex={activeIndex}
                        onClose={closeLightbox}
                        onPrev={showPrev}
                        onNext={showNext}
                    />
                )}
            </AnimatePresence>

            {/* Hide scrollbar CSS */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Exhibition;


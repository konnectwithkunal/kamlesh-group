// src/components/Exhibition.tsx
// Beautiful Exhibition Gallery Section with PowerBook Media - Horizontal Carousel

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Generate exhibition items from powerbook folder
const exhibitionItems = [
    // Images (1-27)
    ...Array.from({ length: 27 }, (_, i) => ({
        id: i + 1,
        src: `/powerbook/${i + 1}.jpeg`,
        type: 'image' as const,
        title: `Exhibition ${i + 1}`,
    })),
    // Videos (28-42)
    ...Array.from({ length: 15 }, (_, i) => ({
        id: 28 + i,
        src: `/powerbook/${28 + i}.mp4`,
        type: 'video' as const,
        title: `Video Showcase ${i + 1}`,
    })),
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


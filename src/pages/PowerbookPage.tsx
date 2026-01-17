// src/pages/PowerbookPage.tsx
// Powerbook Landing Page with Hero Banner and Categorized Video Galleries

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Zap, Battery, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Media item type
interface MediaItem {
    id: number;
    src: string;
    type: 'image' | 'video';
    title: string;
    category: 'exhibition' | 'vertical_exhibition' | 'vertical_product' | 'product';
    isVertical?: boolean;
}

// Generate all media items from powerbook folder based on naming convention
const generateMediaItems = (): MediaItem[] => {
    const items: MediaItem[] = [];
    let id = 1;

    // Exhibition images (exhibition_*.jpeg/jpg/png)
    const exhibitionImages = [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27];
    exhibitionImages.forEach(num => {
        const ext = num === 2 ? 'jpeg' : 'jpeg'; // Note: exhibtion_2 has typo
        const filename = num === 2 ? `exhibtion_2.jpeg` : `exhibition_${num}.jpeg`;
        items.push({
            id: id++,
            src: `/powerbook/${filename}`,
            type: 'image',
            title: `Exhibition ${num}`,
            category: 'exhibition',
            isVertical: false
        });
    });

    // Exhibition image 43 is JPG
    items.push({
        id: id++,
        src: `/powerbook/exhibition_43.JPG`,
        type: 'image',
        title: `Exhibition 43`,
        category: 'exhibition',
        isVertical: false
    });

    // Exhibition videos
    const exhibitionVideos = [31, 33, 34, 37, 58];
    exhibitionVideos.forEach(num => {
        items.push({
            id: id++,
            src: `/powerbook/exhibition_${num}.mp4`,
            type: 'video',
            title: `Exhibition Video ${num}`,
            category: 'exhibition',
            isVertical: false
        });
    });

    // Vertical exhibition videos (9:16)
    const verticalExhibitionVideos = [28, 29, 30, 32, 35, 38, 40, 41, 42, 57];
    verticalExhibitionVideos.forEach(num => {
        items.push({
            id: id++,
            src: `/powerbook/vertical_exhibition_${num}.mp4`,
            type: 'video',
            title: `Exhibition Reel ${num}`,
            category: 'vertical_exhibition',
            isVertical: true
        });
    });

    // Vertical product videos (9:16)
    const verticalProductVideos = [36, 48, 49, 50, 51, 52, 56, 60];
    verticalProductVideos.forEach(num => {
        items.push({
            id: id++,
            src: `/powerbook/vertical_${num}.mp4`,
            type: 'video',
            title: `Product Reel ${num}`,
            category: 'vertical_product',
            isVertical: true
        });
    });

    // Product images (numbered only)
    const productImages = [4, 21];
    productImages.forEach(num => {
        items.push({
            id: id++,
            src: `/powerbook/${num}.jpeg`,
            type: 'image',
            title: `Product ${num}`,
            category: 'product',
            isVertical: false
        });
    });

    // Product images (PNG - 44, 45, 46, 47)
    const productPngImages = [44, 45, 46, 47];
    productPngImages.forEach(num => {
        items.push({
            id: id++,
            src: `/powerbook/${num}.jpg`,
            type: 'image',
            title: `Product ${num}`,
            category: 'product',
            isVertical: false
        });
    });

    // Product videos (numbered only)
    const productVideos = [39, 53, 54, 55];
    productVideos.forEach(num => {
        items.push({
            id: id++,
            src: `/powerbook/${num}.mp4`,
            type: 'video',
            title: `Product Video ${num}`,
            category: 'product',
            isVertical: false
        });
    });

    return items;
};

const allMediaItems = generateMediaItems();

// Video Card Component with hover autoplay
const VideoCard: React.FC<{
    item: MediaItem;
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
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className={`relative group cursor-pointer overflow-hidden rounded-xl ${item.isVertical ? 'aspect-[9/16]' : 'aspect-[4/3]'}`}
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
    item: MediaItem;
    onClick: () => void;
    index: number;
}> = ({ item, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.03, duration: 0.4 }}
            className={`relative group cursor-pointer overflow-hidden rounded-xl ${item.isVertical ? 'aspect-[9/16]' : 'aspect-[4/3]'}`}
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
    items: MediaItem[];
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
                            className={`max-w-full max-h-[85vh] object-contain rounded-lg ${currentItem.isVertical ? 'max-w-[400px]' : ''}`}
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
                        className={`max-w-full max-h-[90vh] object-contain rounded-lg ${currentItem.isVertical ? 'max-w-[400px]' : ''}`}
                    />
                )}

                {/* Counter */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
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

// Gallery Carousel Component
const GalleryCarousel: React.FC<{
    items: MediaItem[];
    title: string;
    subtitle: string;
    badgeText: string;
    isVertical?: boolean;
}> = ({ items, title, subtitle, badgeText, isVertical = false }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const scrollAmount = isVertical ? 220 : 320;

    const startAutoScroll = useCallback(() => {
        if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        autoScrollRef.current = setInterval(() => {
            if (carouselRef.current && !isPaused) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 4000);
    }, [isPaused, scrollAmount]);

    useEffect(() => {
        startAutoScroll();
        return () => {
            if (autoScrollRef.current) clearInterval(autoScrollRef.current);
        };
    }, [startAutoScroll]);

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
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const showNext = () => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    if (items.length === 0) return null;

    return (
        <div className="mb-16">
            {/* Section Header */}
            <div className="text-center mb-8">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 bg-[#EE4343]/10 text-[#EE4343] text-sm font-semibold rounded-full mb-3"
                >
                    {badgeText}
                </motion.span>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 max-w-xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* Carousel */}
            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Left Nav */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-[#EE4343] hover:text-white transition-all duration-300 -ml-2 md:ml-0"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Track */}
                <div
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex-shrink-0 rounded-xl overflow-hidden ${isVertical
                                ? 'w-[180px] md:w-[200px] lg:w-[220px]'
                                : 'w-[280px] md:w-[300px] lg:w-[320px]'
                                }`}
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

                {/* Right Nav */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center text-gray-700 hover:bg-[#EE4343] hover:text-white transition-all duration-300 -mr-2 md:mr-0"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Item count */}
            <div className="flex justify-center gap-2 mt-4">
                <span className="text-sm text-gray-500">
                    {items.length} items • Hover to pause
                </span>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <Lightbox
                        items={items}
                        activeIndex={activeIndex}
                        onClose={closeLightbox}
                        onPrev={showPrev}
                        onNext={showNext}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

// Main PowerbookPage Component
const PowerbookPage: React.FC = () => {
    // Filter items by category
    const productItems = allMediaItems.filter(item => item.category === 'product');
    const exhibitionItems = allMediaItems.filter(item => item.category === 'exhibition');
    const verticalExhibitionItems = allMediaItems.filter(item => item.category === 'vertical_exhibition');
    const verticalProductItems = allMediaItems.filter(item => item.category === 'vertical_product');

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <Header />

            {/* Hero Banner */}
            <section className="relative bg-gradient-to-br from-[#EE4343] via-[#D63939] to-[#B82E2E] text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-white/80 text-sm mb-6"
                    >
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>›</span>
                        <span>Powerbook</span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 mb-4"
                            >
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Powerbook</h1>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-full">
                                    PREMIUM
                                </span>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
                            >
                                Revolutionary notebooks with built-in power. Our premium collection features integrated power banks, wireless charging, and cutting-edge technology for the modern professional.
                            </motion.p>

                            {/* Feature Pills */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-3"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                                    <Battery className="w-5 h-5" />
                                    <span className="text-sm font-medium">8000-10000mAh Power Bank</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                                    <Zap className="w-5 h-5" />
                                    <span className="text-sm font-medium">Wireless Charging</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                                    <Smartphone className="w-5 h-5" />
                                    <span className="text-sm font-medium">USB-C Fast Charging</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-row md:flex-col gap-6 md:gap-8"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-bold">50+</div>
                                <div className="text-sm text-white/70">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">15+</div>
                                <div className="text-sm text-white/70">Exhibitions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">5★</div>
                                <div className="text-sm text-white/70">Rating</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 100V50C360 90 720 10 1080 50C1260 70 1380 90 1440 100H0Z" fill="white" />
                    </svg>
                </div>
            </section>

            {/* Gallery Sections */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    {/* Product Gallery */}
                    <GalleryCarousel
                        items={productItems}
                        title="Product Showcase"
                        subtitle="Explore our innovative Powerbook collection with built-in technology"
                        badgeText="PRODUCTS"
                    />

                    {/* Vertical Product Videos */}
                    <GalleryCarousel
                        items={verticalProductItems}
                        title="Product Reels"
                        subtitle="Watch our products in action with these dynamic product videos"
                        badgeText="PRODUCT VIDEOS"
                        isVertical={true}
                    />

                    {/* Exhibition Gallery */}
                    <GalleryCarousel
                        items={exhibitionItems}
                        title="Exhibition Gallery"
                        subtitle="Behind the scenes from our exhibitions and trade shows"
                        badgeText="EXHIBITIONS"
                    />

                    {/* Vertical Exhibition Videos */}
                    <GalleryCarousel
                        items={verticalExhibitionItems}
                        title="Exhibition Reels"
                        subtitle="Vertical format highlights from our exhibition booths and events"
                        badgeText="EXHIBITION VIDEOS"
                        isVertical={true}
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Interested in Powerbook Products?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 mb-8 text-lg"
                    >
                        Get in touch with us to learn more about our premium notebook collection with integrated power technology.
                    </motion.p>
                    <motion.a
                        href="/contact"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#EE4343] hover:bg-[#D63939] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                        <ChevronRight className="w-5 h-5" />
                    </motion.a>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Hide scrollbar CSS */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default PowerbookPage;

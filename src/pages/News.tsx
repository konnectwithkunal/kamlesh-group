import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "../animation/variants";
import { motion, AnimatePresence } from "framer-motion";
import showcaseItems from "@/data/showcaseItems";
import { X, ZoomIn, PlayCircle } from "lucide-react";

const News = () => {
  const [selectedItem, setSelectedItem] = useState<typeof showcaseItems[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#EF4343] grid-overlay-light">
          <motion.div 
            variants={fadeInUp} 
            initial="hidden"
            animate="visible" 
            className="container mx-auto px-6"
          >
            <div className="max-w-4xl">
              <motion.h1 
                variants={fadeInUp} 
                initial="hidden"
                animate="visible" 
                className="text-6xl md:text-8xl font-bold mb-8 text-foreground"
              >
                Client Showcase
              </motion.h1>
              <motion.p 
                variants={fadeInUp} 
                initial="hidden"
                animate="visible" 
                className="text-xl md:text-2xl text-foreground max-w-2xl leading-relaxed"
              >
                Explore our latest exhibitions, behind-the-scenes moments, and client engagements.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group cursor-pointer block h-full"
                  onClick={() => setSelectedItem(item)}
                >
                  <article className="flex flex-col h-full bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Media Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      
                      {/* UPDATED LOGIC: Render Video if type is video, otherwise Image */}
                      {item.type === 'video' ? (
                        <video
                          src={item.media}
                          poster={item.thumbnail}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={item.media} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      
                      {/* Overlay Icon */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 p-3 rounded-full text-primary">
                          {item.type === 'video' ? (
                            <PlayCircle className="w-8 h-8" />
                          ) : (
                            <ZoomIn className="w-6 h-6" />
                          )}
                        </div>
                      </div>

                      {/* Video Indicator Badge */}
                      {item.type === 'video' && (
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                          <PlayCircle className="w-3 h-3" /> Video
                        </div>
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs font-normal">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold leading-tight text-black group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox / Gallery Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full rounded-lg overflow-hidden shadow-2xl bg-black">
                {selectedItem.type === 'video' ? (
                  <video 
                    controls 
                    autoPlay 
                    className="w-full max-h-[80vh] object-contain mx-auto"
                    poster={selectedItem.thumbnail}
                  >
                    <source src={selectedItem.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedItem.media}
                    alt={selectedItem.title}
                    className="w-full max-h-[80vh] object-contain mx-auto"
                  />
                )}
              </div>
              
              <div className="mt-6 text-center text-white max-w-2xl">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-white/80">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default News;
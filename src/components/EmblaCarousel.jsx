import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden w-full select-none mt-9">
      <div className="embla__viewport overflow-hidden w-full" ref={emblaRef}>
        <div className="flex ">
          {slides.map((slide, index) => (
            <div
              className={`relative flex bg-white rounded-xl shadow-lg overflow-hidden shrink-0 mr-4  ${
                slide.imageUrl ? 'w-[30%] ' : 'w-[20%]'
              }`}
              key={index}
            >
              {slide.imageUrl ? (
                <>
                  <div
                    className="relative w-2/5 bg-clip-border rounded-l-xl overflow-hidden"
                    style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    <img
                      src={slide.imageUrl}
                      alt="card-image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {slide.title}
                    </h4>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                      {slide.excerpt}
                    </p>
                    <div className="flex items-center mb-4">
                      <img
                        src={slide.avatar}
                        alt={`Avatar of ${slide.author}`}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold text-sm">{slide.author}</p>
                        <p className="text-gray-500 text-xs">{slide.date}</p>
                      </div>
                    </div>
                    <a href="#" className="inline-block">
                      <button
                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-900 uppercase transition-all rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                </>
              ) : (
                <div className="flex-1 p-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {slide.title}
                  </h4>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {slide.excerpt}
                  </p>
                  <div className="flex items-center mb-4">
                    <img
                      src={slide.avatar}
                      alt={`Avatar of ${slide.author}`}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm">{slide.author}</p>
                      <p className="text-gray-500 text-xs">{slide.date}</p>
                    </div>
                  </div>
                  <a href="#" className="inline-block">
                    <button
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-900 uppercase transition-all rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;

import { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../../ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp"
  },
  {
    text: "Positivus has transformed our digital marketing strategy. Their expertise and dedication have helped us reach new heights in our online presence. The results speak for themselves.",
    name: "Sarah Johnson",
    role: "CEO at TechStart Inc"
  },
  {
    text: "Working with Positivus has been a game-changer for our business. Their team's innovative approach and attention to detail have significantly improved our marketing ROI.",
    name: "Michael Chen",
    role: "Founder at Digital Solutions"
  },
  {
    text: "The team at Positivus understands our business needs perfectly. They've helped us build a strong online presence and connect with our target audience effectively.",
    name: "Emily Rodriguez",
    role: "CMO at Growth Partners"
  },
  {
    text: "Positivus exceeded our expectations. Their strategic approach and creative solutions have made a real difference in our marketing efforts.",
    name: "David Thompson",
    role: "VP Marketing at Innovation Labs"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative px-4 md:px-8 py-6 md:py-10">
      {/* Speech bubble shape with green border */}
      <div className="relative border-2 border-[#23d3a2] rounded-[45px] p-6 md:p-10 bg-transparent">
        {/* Testimonial text */}
        <p className="text-white text-base md:text-lg font-space leading-relaxed mb-6 md:mb-8">
          {testimonial.text}
        </p>
        
        {/* Name */}
        <div className="text-[#23d3a2] text-xl md:text-2xl font-bold font-space mb-1 md:mb-2">
          {testimonial.name}
        </div>
        
        {/* Role */}
        <div className="text-white text-base md:text-lg font-space">
          {testimonial.role}
        </div>
      </div>
    </div>
  );
};

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };

    // Initialize state in next tick to avoid synchronous setState
    const timeoutId = setTimeout(updateState, 0);

    api.on("select", updateState);

    return () => {
      clearTimeout(timeoutId);
      api.off("select", updateState);
    };
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <section id="testimonials" className="container mx-auto px-4 md:px-12 py-16 md:py-24">
      <SectionHeading 
        title="Testimonials" 
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" 
      />

      {/* Dark testimonial section */}
      <div className="bg-secondary rounded-[45px] p-8 md:p-12 relative overflow-hidden">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-4/5">
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-8 md:mt-12">
            {/* Left arrow */}
            <button
              onClick={scrollPrev}
              style={{ backgroundColor: 'var(--light-gray)', borderRadius: '50%' }}
              className="text-black hover:text-primary transition-colors cursor-pointer h-20 p-2 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Pagination dots - square shape */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  style={{ backgroundColor: current === index + 1 ? 'var(--primary)' : 'var(--light-gray)', borderRadius: '10%' }}
                  className={`w-2 h-2 transition-colors ${
                    index + 1 === current
                      ? 'bg-primary'
                      : ''
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={scrollNext}
              style={{ backgroundColor: 'var(--light-gray)', borderRadius: '50%' }}
              className="text-black hover:text-primary transition-colors cursor-pointer h-20 p-2 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};


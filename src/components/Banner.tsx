import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import TextType from "./TextType";

export default function Banner() {
 const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const events = [
    {
      image: event1,
      title: "Dia de muertos 2025",
      description: ""
    },
    {
      image: event2,
      title: "Aprendizaje Colaborativo",
      description: "Fomentando el trabajo en equipo y la innovación"
    },
    {
      image: event3,
      title: "Ceremonia de Graduación",
      description: "Celebrando el éxito de nuestros egresados"
    },
     {
      image: event4,
      title: "Promoción deportiva",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="title-gradient">
              Eventos y Actividades
            </span>
          </h2>
          {/* <p className="text-lg text-muted-foreground">
            
          </p> */}
          <TextType 
            text={["Conoce las actividades y eventos que forman parte de nuestra comunidad universitaria"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="paragraph-gradient"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {events.map((event, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Card className="relative overflow-hidden border-none shadow-[var(--shadow-card)]">
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-4xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FB0149]/95 via-[#9C1882]/20 to-[#542AAE]/10 rounded-4xl" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                 
                        <TextType 
                          text={[event.title, event.description]}
                          typingSpeed={75}
                          pauseDuration={1500}
                          showCursor={true}
                          cursorCharacter="|"
                          className="paragraph-banner"
                        />

                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-border shadow-lg"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-border shadow-lg"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
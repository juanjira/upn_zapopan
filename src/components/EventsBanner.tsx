import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

export const EventsBanner = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const events = [
    {
      image: event1,
      title: "Conferencias Educativas 2025",
      description: "Espacios de aprendizaje y desarrollo profesional"
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
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Eventos y Actividades
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conoce las actividades y eventos que forman parte de nuestra comunidad universitaria
          </p>
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
                      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/95 via-purple-100/50 to-violet-400/30" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-lg text-foreground/80">
                          {event.description}
                        </p>
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
};

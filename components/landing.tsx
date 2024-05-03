import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image";

import { Form } from "@/components/form";

import image1 from "@/public/ecran-graphique-1.jpg";
import image2 from "@/public/ecran-geant-led.png";
import image3 from "@/public/ecran-led.png";

export function Landing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 xl:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Demander un devis pour un écran graphique
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-lg lg:text-base xl:text-lg dark:text-gray-400">
            Améliorez la communication dans votre entreprise avec nos écrans graphiques haute résolution. Notre système
            d'affichage dynamique est conçu pour être facile à utiliser, vous permettant de mettre à jour rapidement le
            contenu.
          </p>
        </div>
        <div>
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              <CarouselItem>
                <Image
                    alt="Image 1"
                    className="aspect-video object-cover rounded-md"
                    height={400}
                    src={image1}
                    width={720}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    alt="Image 2"
                    className="aspect-video object-cover rounded-md"
                    height={400}
                    src={image2}
                    width={720}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                    alt="Image 3"
                    className="aspect-video object-cover rounded-md"
                    height={400}
                    src={image3}
                    width={720}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
          <span>Réalisation Pixelight</span>
        </div>
        <Form />
        </div>
    </section>
)
}

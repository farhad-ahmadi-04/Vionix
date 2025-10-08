import '@/components/hero/heroStyle.css'
import { TypographyH3 } from '@/components/typography';

function Hero() {
    return ( 
        <section id="hero" className="relative size-full">
        <div className="flex justify-center">
          <div className="mask01 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[250px] bg-amber-400"></div>
          <div className="mask02 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[200px] bg-amber-400"></div>
          <div className="mask03 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[250px] bg-amber-400"></div>
        </div>
        <div className="absolute inset-56 m-2">
          <TypographyH3 className="text-center">
            شما لایق بهترین ها هستید, با ما بهترین شوید...
          </TypographyH3>
        </div>
        <div className="flex justify-center items-end">
          <div className="mask04 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[250px] bg-amber-400"></div>
          <div className="mask05 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[200px] bg-amber-400"></div>
          <div className="mask06 md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[250px] bg-amber-400"></div>
        </div>
      </section>
     );
}

export default Hero;
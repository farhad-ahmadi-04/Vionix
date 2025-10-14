import "@/components/hero/heroStyle.css";
import { TypographyH3 } from "@/components/typography";
import { HeroImage } from "@/components/hero/rightBottomHero";
import { HeroBackground, HeroFilter } from "./heroBackground";
import Container from "../ui/container";
import Link from "next/link";
import { WordRotate } from "../ui/word-rotate";

function Hero() {
  return (
    <Container className="relative">
      <div className="flex justify-center md:-mb-7 lg:-mb-14">
        <svg viewBox="0 0 500 250" className="w-full max-w-[500px] h-auto">
          <defs>
            <clipPath id="pathTopRight">
              <path d="M 10,20 A10,10 0,0,1 20,10 L 480,10 A10,10 0,0,1 490,20 L 490,230 A10,10 0,0,1 480,240 L 125,240 A10,10 0,0,1 115,230 L 115,160 A10,10 0,0,0 105,150 L 20,150 A10,10 0,0,1 10,140 Z" />
            </clipPath>
            <HeroFilter />
          </defs>
          <HeroBackground clipPath="pathTopRight" />
          <HeroImage
            clipPath="pathTopRight"
            image="/belondManModel.png"
            height={300}
          />
        </svg>
        <svg
          viewBox="0 0 500 250"
          className="hidden lg:block w-full max-w-[500px] h-auto"
        >
          <defs>
            <clipPath id="pathTopCenter">
              <path d="M 10,20 A10,10 0,0,1 20,10 L 480,10 A10,10 0,0,1 490,20 L 490,140 A10,10 0,0,1 480,150 L 20,150 A10,10 0,0,1 10,140 Z" />
            </clipPath>
            <HeroFilter />
          </defs>
          <HeroBackground clipPath="pathTopCenter" />
          <HeroImage
            clipPath="pathTopCenter"
            image="/manModel01.png"
            height={350}
          />
        </svg>
        <Link href="category/t-shirt" className="w-full max-w-[500px] h-auto">
          <svg viewBox="0 0 500 250">
            <defs>
              <clipPath id="pathTopLeft">
                <path d="M 10,20 A10,10 0,0,1 20,10 L 480,10 A10,10 0,0,1 490,20 L 490,140 A10,10 0,0,1 480,150 L 395,150 A10,10 0,0,0 385,160 L 385,230 A10,10 0,0,1 375,240 L 20,240 A10,10 0,0,1 10,230 Z" />
              </clipPath>
              <HeroFilter />
            </defs>
            <HeroBackground clipPath="pathTopLeft" />
            <HeroImage
              clipPath="pathTopLeft"
              image="/fullManModel.png"
              height={450}
            />
          </svg>
        </Link>
      </div>
      <div>
        <TypographyH3 className="font-tehran text-center lg:text-6xl">
          <WordRotate words={["بهترین باشید", "با ما", "با بهترین ها", "با", "VIONIX"]}/>        
        </TypographyH3>
      </div>
      <div className="flex justify-center items-end -mt-5">
        <svg viewBox="0 0 500 250" className="w-full max-w-[500px] h-auto">
          <defs>
            <clipPath id="pathBottomRight">
              <path d="M 10,100 A10,10 0,0,1 20,90 L 105,90 A10,10 0,0,0 115,80 L 115,20 A10,10 0,0,1 125,10 L 480,10 A10,10 0,0,1 490,20 L 490,230 A10,10 0,0,1 480,240 L 20,240 A10,10 0,0,1 10,230 Z" />
            </clipPath>
            <HeroFilter />
          </defs>
          <HeroBackground clipPath="pathBottomRight" />
          <HeroImage
            clipPath="pathBottomRight"
            image="/manModel.png"
            height={270}
          />
        </svg>
        <svg
          viewBox="0 0 500 200"
          className="hidden lg:block w-full max-w-[500px] h-auto"
        >
          <defs>
            <clipPath id="pathBottomCenter">
              <path d="M 10,50 A10,10 0,0,1 20,40 L 480,40 A10,10 0,0,1 490,50 L 490,180 A10,10 0,0,1 480,190 L 20,190 A10,10 0,0,1 10,180 Z" />
            </clipPath>
            <HeroFilter />
          </defs>
          <HeroBackground clipPath="pathBottomCenter" />
          <HeroImage
            clipPath="pathBottomCenter"
            image="/capModel.png"
            height={250}
            width={300}
          />
        </svg>
        <svg viewBox="0 0 500 250" className="w-full max-w-[500px] h-auto">
          <defs>
            <clipPath id="pathBottomLeft">
              <path d="M 10,20 A10,10 0,0,1 20,10 L 375,10 A10,10 0,0,1 385,20 L 385,80 A10,10 0,0,0 395,90 L 480,90 A10,10 0,0,1 490,100 L 490,230 A10,10 0,0,1 480,240 L 20,240 A10,10 0,0,1 10,230 Z" />
            </clipPath>
            <HeroFilter />
          </defs>
          <HeroBackground clipPath="pathBottomLeft" />
          <HeroImage
            clipPath="pathBottomLeft"
            image="/istockphoto-2183222014-612x612-removebg-preview.png"
            height={266}
          />
        </svg>
      </div>
    </Container>
  );
}

export default Hero;

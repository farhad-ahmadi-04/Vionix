import Hero from "@/components/hero/hero";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <>
    <section className="w-full">
      <Hero />
    </section>
    <section>
      <Container>
        
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="w-full col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-amber-200 flex items-center justify-center">product01</div>
            <div className="bg-amber-200 flex items-center justify-center">product02</div>
            <div className="bg-amber-200 flex items-center justify-center">product03</div>
            <div className="bg-amber-200 flex items-center justify-center">product04</div>
          </div>
          <div className="h-52 bg-amber-200 flex items-center justify-center">image</div>
        </div>
      </Container>
    </section>
    </>
  );
}

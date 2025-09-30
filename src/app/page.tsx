import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full h-full">
      <Container>
        <h1>Welcome to My Website</h1>
        <Button>Click Me</Button>
      </Container>
    </main>
  );
}

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { ShoppingCart, User } from "lucide-react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-full flex gap-2">
            <Button variant={"secondary"}>
              <ShoppingCart />
            </Button>
            <Button variant={"secondary"}>
              <User />
            </Button>
          </div>
          <h1 className="hidden md:block w-full text-center font-bold text-4xl">VIONIX</h1>
          <div className="hidden md:block w-full text-left">
            <Input type="search" placeholder="جستجو..." className="w-3/5" />
          </div>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}

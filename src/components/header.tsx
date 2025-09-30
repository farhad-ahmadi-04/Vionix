import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header>
      <Container className="flex justify-between items-center">
        <div className="w-full flex gap-2">
          <Button variant={"secondary"}>
            <ShoppingCart />
          </Button>
          <Button variant={"secondary"}>
            <User />
          </Button>
        </div>
        <h1 className="w-full text-center font-bold text-4xl">VIONIX</h1>
        <Input type="search" placeholder="جستجو..." className="w-full" />
      </Container>
    </header>
  );
};

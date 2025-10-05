import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { ShoppingCart, User } from "lucide-react";
import Navbar from "./navbar";
import { TypographyH2 } from "./typography";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-full flex gap-2">
            {children}
            <Button variant={"secondary"}>
              <ShoppingCart />
            </Button>
            <Button variant={"secondary"}>
              <User />
            </Button>
          </div>
          <TypographyH2 className="w-full text-left md:text-center">
            VIONIX
          </TypographyH2>
          <div className="hidden md:block w-full text-left">
            <Input type="search" placeholder="جستجو..." className="w-3/5" />
          </div>
        </div>
        <Navbar />
      </Container>
    </header>
  );
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NavBar() {
  const [openComboBox, setOpenComboBox] = useState(false);
  const location = window.location.pathname;

  console.log(location);

  return (
    <section className="flex-shrink-0 h-16 flex justify-between px-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/home">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={location === "/home"}
              >
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/customers">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={location === "/customers"}
              >
                Customers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={location === "/about"}
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-3">
        <Input className="rounded-lg" placeholder="Search..." disabled />
        <Avatar>
          <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
          <AvatarFallback>FB</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
}

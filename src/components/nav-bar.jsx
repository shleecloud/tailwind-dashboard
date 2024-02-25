import { useWindowSize } from "@uidotdev/usehooks";

import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import { Menu } from "lucide-react";

export default function NavBar() {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  const location = useLocation().pathname;
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute right-8 top-6 cursor-pointer">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem
              data-active={location === "/dashboard" && "active"}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </DropdownMenuItem>
            <DropdownMenuItem
              data-active={location === "/customers" && "active"}
              onClick={() => navigate("/customers")}
            >
              Customers
            </DropdownMenuItem>
            <DropdownMenuItem
              data-active={location === "/about" && "active"}
              onClick={() => navigate("/about")}
            >
              About
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>Profile</DropdownMenuItem>
            <DropdownMenuItem disabled>Billing</DropdownMenuItem>
            <DropdownMenuItem disabled>Team</DropdownMenuItem>
            <DropdownMenuItem disabled>Subscription</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/login")}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <section className="flex-shrink-0 h-16 flex justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={location === "/dashboard"}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={location === "/customers"}
                onClick={() => navigate("/customers")}
              >
                Customers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={location === "/about"}
                onClick={() => navigate("/about")}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-3">
          <DropdownMenu defaultOpen={false}>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                <AvatarFallback>AFB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={"end"}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem disabled>Profile</DropdownMenuItem>
              <DropdownMenuItem disabled>Billing</DropdownMenuItem>
              <DropdownMenuItem disabled>Team</DropdownMenuItem>
              <DropdownMenuItem disabled>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/login")}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    );
  }
}

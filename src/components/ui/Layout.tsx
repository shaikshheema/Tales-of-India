import React, { ReactNode, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Map, MessageSquare, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: ReactNode;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Explore Map", path: "/map", icon: <Map className="h-5 w-5" /> },
  { name: "Chat", path: "/chat", icon: <MessageSquare className="h-5 w-5" /> },
];

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setIsAuthenticated(auth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="p-6 flex justify-between items-center border-b">
                  <Link to="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-india-red to-india-orange bg-clip-text text-transparent">
                      Tales of India
                    </span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <ScrollArea className="h-[calc(100vh-5rem)]">
                  <div className="flex flex-col gap-1 p-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-4 px-4 py-3 text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-india-red to-india-orange bg-clip-text text-transparent">
                Tales of India
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            {!isAuthenticated ? (
              <>
                <Button
                  variant="outline"
                  size={isMobile ? "sm" : "default"}
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
                <Button
                  size={isMobile ? "sm" : "default"}
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button
                variant="destructive"
                size={isMobile ? "sm" : "default"}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t py-6 md:py-8 bg-india-pattern">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tales of India. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-sm hover:text-foreground text-muted-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

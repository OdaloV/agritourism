import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, User, Wheat } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Wheat className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Agrotourism</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/farms"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Farms
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              List Your Farm
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

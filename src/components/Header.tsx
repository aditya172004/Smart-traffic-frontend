import { Link, useLocation } from "react-router-dom";
import TrafficLightIcon from "./TrafficLightIcon";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <TrafficLightIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Smart Traffic
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              to="/"
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === "/about"
                  ? "text-foreground"
                  : "text-foreground/60"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link to="/" className="mr-6 flex items-center space-x-2 md:hidden">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <TrafficLightIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Smart Traffic
              </span>
            </Link>
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

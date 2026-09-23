import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollManager from "./components/ScrollManager";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Commercial from "./pages/Commercial";
import Financing from "./pages/Financing";
import Home from "./pages/Home";
import Services from "./pages/Services";
import StreetLegal from "./pages/StreetLegal";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/street-legal" component={StreetLegal} />
      <Route path="/commercial" component={Commercial} />
      <Route path="/financing" component={Financing} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={About} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// GitHub Pages serves this app from /brightEV/ (see vite.config.ts `base`);
// wouter needs that same prefix stripped of its trailing slash as its base.
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router base={routerBase}>
            <ScrollManager />
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

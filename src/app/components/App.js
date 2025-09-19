import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* Add your global layout or children here */}
      <main>
        <h1>Welcome to My Portfolio</h1>
      </main>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
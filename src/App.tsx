import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui=theme">
        
        <div className="h-screen overflow-scroll p-8 flex flex-col gap-8 bg-gradient-to-br from-blue-400 to-fuchsia-600 dark:from-cyan-950 dark:to-fuchsia-950">
          <Header />
          <Dashboard />
        </div>
    
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

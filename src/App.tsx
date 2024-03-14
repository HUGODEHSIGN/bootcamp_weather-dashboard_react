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
        <div className="m-8 flex flex-col gap-8">
          <Header />
          <Dashboard />
        </div>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

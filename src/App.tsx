import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme/theme-provider';

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui=theme">
      <div className="m-8 flex flex-col gap-8">
        <Header />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;

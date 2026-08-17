import { Analytics } from '@vercel/analytics/next';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Portfolio />
      <Analytics/>
    </>
  );
}

export default App;
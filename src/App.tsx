import './App.css';
import { TwoStoreZustand } from './state-management/zustand/two-store';
import { Reject } from './state-management/jotai/reject';
import ErrorBoundary from './components/error-boundary';

function App() {
  return (
    <ErrorBoundary fallback={<div>fallback</div>}>
      <div>
        <TwoStoreZustand />
        <Reject />
      </div>
    </ErrorBoundary>
  );
}

export default App;

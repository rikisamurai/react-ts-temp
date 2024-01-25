// store.js
import { create } from 'zustand';

const useCounterStore = create((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
}));

const useMessageStore = create((set) => ({
  text: 'Initial',
  setMessage: (newText) => set({ text: newText }),
}));

// Async action in useCounterStore that triggers setMessage in useMessageStore
const incrementWithText = () => {
  const countValue = useCounterStore.getState().value;
  useMessageStore.setState({ text: `inc ${countValue}` });
};

export const TwoStoreZustand = () => {
  const count = useCounterStore((state) => state.value);
  const message = useMessageStore((state) => state.text);
  const inc = useCounterStore((state) => state.increment);

  return (
    <div>
      <h1>TwoStoreZustand</h1>
      <button onClick={inc}>inc</button>
      <button onClick={incrementWithText}>text inc</button>
      <h2>count: {count}</h2>
      <h2>message: {message}</h2>
    </div>
  );
};

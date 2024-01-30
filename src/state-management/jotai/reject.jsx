import { atom, useAtom, useSetAtom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';

const getCount = async () => {
  return Promise.reject(11);
};

const countAtom = atomWithDefault(async () => {
  let res = 233;
  try {
    res = await getCount();
  } catch (e) {
    console.error(e);
  }
  // res = await getCount();

  return res;
});

const incAtom = atom(null, (get, set) => {
  set(countAtom, (pre) => pre + 1);
  return Promise.reject('inc');
});

export const Reject = () => {
  const [count, setCount] = useAtom(countAtom);
  const incAction = useSetAtom(incAtom);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={incAction}>inc</button>
    </div>
  );
};

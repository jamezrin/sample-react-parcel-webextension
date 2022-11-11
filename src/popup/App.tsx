import { useEffect, useState } from 'react';

export function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1>{number}</h1>;
}

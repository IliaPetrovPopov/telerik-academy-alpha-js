import { useState, useEffect } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setTime(prevTime => {
          const updated = new Date(prevTime);
          updated.setSeconds(prevTime.getSeconds() + 1);
          return updated;
        }),
      1000
    );

    return () => clearTimeout(timer);
  });

  return time;
};

export default useTimer;

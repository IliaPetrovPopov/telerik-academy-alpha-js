import { useEffect } from 'react';

const Timer = props => {
  useEffect(() => {
    console.log(props.time);
  }, [props.time]);

  return (
    <div>
      Current time: {props.time.getHours()}:{props.time.getMinutes()}:
      {props.time.getSeconds()}
    </div>
  );
};

export default Timer;

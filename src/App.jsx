import { useRef, useState } from 'react';

export default function Counter() {
  let ref = useRef(0);
  // let  ref = 0;
  const [vari,setvar] = useState(0)

  function handleClick() {
    // ref += 1;
    console.log('You clicked ' + ref.current + ' times!');
    console.log(vari);
    ref.current = ref.current + 1;
    setvar(vari+1);
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}

import { useState } from "react";
export default function Racecar() {
  const [speed, setSpeed] = useState<number>(200);

  //return <h1>I am a fast car and I go 100 miles per hour!!!</h1>;
  return <h1>I am a fast car and I go {speed} miles per hour!!!</h1>;
}

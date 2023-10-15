import react from "react";
import { useAtom } from "jotai";
import useCounter, { numberAtom } from "../atoms/Counter";

function Sample2() {
  const [value, setValue] = useAtom(numberAtom);
  const [counterVal] = useCounter();
  return (
    <div>
      welcome to the new Hello World... SAMPLE 2 - STATE {value}
      <div>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setValue(value + 1)}>Add</button>
      </div>
    </div>
  );
}

export default Sample2;

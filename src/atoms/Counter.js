import { atom , useAtom} from "jotai";

export const numberAtom = atom(0);
const isEvenAtom = atom((get) => get(numberAtom) % 2 === 0);

const useCounter = () => useAtom(numberAtom);
export default useCounter;

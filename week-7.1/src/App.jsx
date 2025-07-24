import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom, isOddEvenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}
function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <IsEvenOdd />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function IsEvenOdd() {
  const isEven = useRecoilValue(isOddEvenSelector);
  return <div>{isEven? "it is even" : "it is odd"}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;

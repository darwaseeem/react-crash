import { useRef} from "react";
function Counter() {
    const counter = useRef(0);
    return (
        <div>
            <h1>Counter: {counter.current}</h1>
            <button onClick={() => counter.current++}>Increment</button>
        </div>
    );
}
export default Counter;
import { createSignal } from "solid-js";

let renderCount = 0;
export const CallingSignalGetters = () => {
  console.log("render CallingSignalGetters");
  const [value, setValue] = createSignal(0);
  return (
    <div>
      <h2>Calling Signal Getters?</h2>
      <p>
        Do I need to call the getter function of a signal in my render?<br />
        Both of the following seem to work.
      </p>
      <button on:click={() => setValue(value() + 1)}>Increment value</button>
      <p>Calling the getter: {value()}</p>
      <p>Not calling the getter: {value}</p>
      <p>renderCount: {renderCount++}</p>
    </div>
  )
}
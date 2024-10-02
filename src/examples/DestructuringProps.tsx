import { createSignal } from "solid-js"

export const DestructuringProps = () => {
  const [value, setValue] = createSignal(0)
  return (
    <div>
      <p>
      "With Solid, destructuring props is not recommended as it <br />
      can break reactivity."<br />
      </p>
      <p> I destructured my prop without issue, so maybe it's only in some cases?</p>
      <button on:click={() => setValue(value() + 1)}>+1</button>
      <Child a={value} b="la la la" />
    </div>
  )
}

const Child = ({ a, b }) => {
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
    </div>
  )
}

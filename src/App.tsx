import type { Component } from 'solid-js';
import { createSignal, Show } from 'solid-js';

import classes from './App.module.css';

import { CallingSignalGetters } from './examples/CallingSignalGetters';
import { DestructuringProps } from './examples/DestructuringProps';

type Tabs = "home" | "CallingSignalGetters" | "DestructuringProps";

const App: Component = () => {
  const [currentTab, setCurrentTab] = createSignal<Tabs>('home');

  const setTab = (data, event) => {
    setCurrentTab(data);
  }

  return (
    <div class={classes.App}>
      <TabBar currentTab={currentTab} setTab={setTab} />
      <div class={classes.content}>
        <Show when={currentTab() === 'home'}>
        Some text 
        </Show>
        <Show when={currentTab() === 'CallingSignalGetters'}>
          <CallingSignalGetters />
        </Show>
        <Show when={currentTab() === 'DestructuringProps'}>
          <DestructuringProps />
        </Show>
      </div>
    </div>
  );
};

const TabBar = ({ currentTab, setTab }) =>
  <div class={classes.group}>
    <button data-active={currentTab() === 'home'} on:click={[setTab, 'home']}>Home</button>
    <button data-active={currentTab() === 'CallingSignalGetters'} on:click={[setTab, 'CallingSignalGetters']}>Calling Signal Getters</button>
    <button data-active={currentTab() === 'DestructuringProps'} on:click={[setTab, 'DestructuringProps']}>Destructuring Props</button>
  </div>

export default App;

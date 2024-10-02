# SOLID-PLAYGROUND

Just a workspace for messing around with SolidJS.

## Q&A

Questions that I have as I'm learning solid.

1. If the component only renders once, what happens when props change? 

I suppose that props can only change as a result of a signal/effect changing, so the component is effectively an effect itself. Or perhaps when you pass props you do so as signals rather than the value of that signal.

A. It seems that when you pass a signal (as a function, not as a value) to a child component in the render then it passes it down the chain. The child component is still only rendered once. 

2. I like the idea of delegated events, but then once I saw how they go _down_ the tree rather than up... now I don't understand the point of them. If I put a click event on an anchor that is a child of a div (ie. <div><a onclick></div>), why would I want the event to go to the div _before_ the button...? I don't really see the use-case except for having a document-wide event handler, but then... just put them in an onMount? I don't see how it's useful.

Unfortunately, VSCode is telling me that the native event `on:click` on a <button> is a type error.

3. Mergeprops is shown, but what issue it prevents is not clear. Solid-js is starting to feel more complex than I had hoped. Same with splitProps and the children function. Not sure when I would use these, but they concern me a little. Maybe Solid never really took over from React because of this explicit upfront complexity. Really understanding what causes React to render is complex too, but it can be ignored for a long time.

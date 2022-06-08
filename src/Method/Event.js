// The page finishes loading
// The user clicks a button
// The user hovers over a dropdown
// The user submits a form
// The user presses a key on their keyboard

import { useEffect } from "react";

// Event Handlers and Event Listeners

// There are three ways to assign events to elements:

// Inline event handlers
// Event handler properties
// Event listeners
// Event Handler Properties
const Event = () => {
  // Function to modify the text content of the paragraph
  // const p = document.querySelector("p");
  // const button = document.querySelector("button");

  const changeText = () => {
    const p = document.querySelector("p");

    p.textContent = "I changed because of an event listener.";
  };
  // Listen for click event
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", changeText);
    return () => button.removeEventListener("click", changeText);
  }, []);

  // Event Listeners
  // Event	Description
  // click	Fires when the mouse is pressed and released on an element
  // dblclick	Fires when an element is clicked twice
  // mouseenter	Fires when a pointer enters an element
  // mouseleave	Fires when a pointer leaves an element
  // mousemove	Fires every time a pointer moves inside an element

  //   Form Events
  // Form events are actions that pertain to forms, such as input elements being selected or unselected, and forms being submitted.

  // Event	Description
  // submit	Fires when a form is submitted
  // focus	Fires when an element (such as an input) receives focus
  // blur	Fires when an element loses focus
  // Focus is achieved when an element is select

  // Keyboard Events
  // Keyboard events are used for handling keyboard actions, such as pressing a key, lifting a key, and holding down a key

  // Event	Description
  // keydown	Fires once when a key is pressed
  // keyup	Fires once when a key is released
  // keypress	Fires continuously while a key is pressed
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      console.log("key: " + e.key);
      console.log("code: " + e.code);
    });
  }, []);
  useEffect(() => {
    // Pass an event through to a listener
    // Pass an event through to a listener
    document.addEventListener("keydown", (event) => {
      var element = document.querySelector("#p");

      // Set variables for keydown codes
      var a = "KeyA";
      var s = "KeyS";
      var d = "KeyD";
      var w = "KeyW";

      // Set a direction for each code
      switch (event.code) {
        case a:
          element.textContent = "Left";
          break;
        case s:
          element.textContent = "Down";
          break;
        case d:
          element.textContent = "Right";
          break;
        case w:
          element.textContent = "Up";
          break;
      }
    });
  }, []);
  return (
    <div>
      <button className='btn' id='button'>
        Click me
      </button>
      <p id='p'>Try to change me.</p>
    </div>
  );
};

export default Event;

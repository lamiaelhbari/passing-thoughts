import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from '../utilities';


export function AddThoughtForm(props) {

  // useState hook to store the input value of the text field
  const [text, setText] = useState('');

  // Function to handle changes in the input field
  const handleTextChange = (event) => {
    setText(event.target.value);// Updates the 'text' state with the new input value
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.length > 0){

      // Only add the thought if the text is not empty
     const thought = {
    id: generateId(),// Generates a unique ID for the new thought
    text: text, // Uses the current value of 'text'
    expiresAt: getNewExpirationTime(),// Sets expiration time for the thought
    };

    props.addThought(thought); // Passes the new thought to the parent component (App)
    }

    setText(''); // Clears the text input after submitting the form
  };

  return (
    <form className="AddThoughtForm"
           onSubmit={handleSubmit} >
      {/* Text input field where users type their thoughts */}
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value= {text}
        onChange= {handleTextChange} // Calls handleTextChange when the user types
      />
      {/* Submit button to add the thought */}
      <input type="submit" value="Add" />
    </form>
  );
}

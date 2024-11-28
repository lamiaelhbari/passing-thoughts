import React, {useEffect} from 'react';

export function Thought(props) {
  // Destructure thought and removeThought function from props
  const { thought, removeThought } = props;

  // Function to handle the removal of the thought when the remove button is clicked
  const handleRemoveClick = () => {
    removeThought(thought.id);
  };


  // useEffect hook to set a timer to remove the thought after it expires
  useEffect (() => {
  // Calculate the time remaining before the thought expires  
  const timeRemaining = thought.expiresAt - Date.now();

  // Set a timeout to automatically remove the thought after the remaining time
  const timeout = setTimeout(() => {
    //  alert('Time has passed!');
    removeThought(thought.id);
  }, timeRemaining);

  // Cleanup function to clear the timeout if the component is unmounted or thought changes
  return () => {
      clearTimeout(timeout);
  };
  }, [thought]);// Dependency array: useEffect runs every time the thought prop changes
 
  return (
    <li className="Thought">
      {/* Button to manually remove the thought */}
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;{/* The "×" symbol to represent removal */}
      </button>
      
      {/* Display the text of the thought */}
      <div className="text">{thought.text}</div>
    </li>
  );
}

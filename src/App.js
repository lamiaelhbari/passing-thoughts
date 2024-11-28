import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './components/AddThoughtForm';
import { Thought } from './components/Thought';
import { generateId, getNewExpirationTime } from './utilities';

export default function App() {
   // The 'thoughts' state holds the list of thoughts, initialized with two default thoughts
  const [thoughts, setThoughts] = useState([

    {
      id: generateId(),// Generates a unique ID for the thought
      text: 'This is a place for your passing thoughts.',// Text for the thought
      expiresAt: getNewExpirationTime(),// Sets the expiration time for the thought
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.", // Second default thought
      expiresAt: getNewExpirationTime(),
    },
  ]);
    

  // Function to add a new thought to the list
 const addThought = (thought) => {
   setThoughts((prevThoughts) => [thought, ...prevThoughts]); // Adds the new thought to the top of the list
 };
 
  // Function to remove a thought by its ID
  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) => 
    thoughts.filter((thought) => thought.id !== thoughtIdToRemove)// Filters out the thought to remove it
    );
  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        {/* Form to add a new thought */}
        <AddThoughtForm  addThought={addThought} />
        <ul className="thoughts">
          
          {/* Display all thoughts in the list, each thought is a Thought component */}
          {thoughts.map((thought) => (
            <Thought key={thought.id} // 'key' is required for each element in a list in React
                     thought={thought} // Passes the thought object to the Thought component for display
                     removeThought= {removeThought} // Passes the function to remove a specific thought
              />
          ))}
        </ul>
      </main>
    </div>
  );
}

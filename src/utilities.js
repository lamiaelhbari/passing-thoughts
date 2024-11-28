// Function to calculate the expiration time for a thought (15 seconds from now)
export function getNewExpirationTime() {

  // Date.now() returns the current timestamp in milliseconds
  // Adding 15 * 1000 milliseconds (15 seconds) to the current timestamp
    return Date.now() + 15 * 1000;
  }
  
  // Variable to keep track of the last generated ID
  let nextId = 0;

  // Function to generate a new unique ID for each thought
  export function generateId() {

    const result = nextId;// Returns the current ID
    nextId += 1; // Increments the ID for the next thought
    return result; // Returns the ID to be used for the new thought
  }
# *Passing Thoughts*

## 🎯 *Project Goal*  
*Passing Thoughts is a project designed to practice `React Hooks`, especially `useState` and `useEffect`. It allows users to manage fleeting thoughts that automatically disappear after 15 seconds.*

### 🔑 *Key Objectives*  
*- Use the `useState` Hook to manage the state of thoughts.*  
*- Use the `useEffect` Hook to schedule the automatic removal of thoughts.*  
*- `Handle events` to dynamically add and remove thoughts.*

---

## 🔍 *Features*  
*- **`Dynamic Thought Management` :** Add and remove thoughts on the fly.*  
*- **`Automatic Expiration` :** Each thought disappears after 15 seconds using `setTimeout`.*  
*- **`Manual Deletion` :** Users can manually delete thoughts before they expire.*  
*- **`Input Validation` :** Prevents submission of empty thoughts.*

---

## 🛠️ *Technologies Used*  
*- **`HTML` :** Structure of the application.*  
*- **`CSS` :** Styling and layout.*  
*- **`JavaScript` :** Core logic.*  
*- **`React` :** Library for building dynamic UIs.*  
*- **`JSX` :** Syntax combining HTML and JavaScript.*

---

## 🧠 *Project Structure and Logic*  

### 📝 *Components*  
*- **App :** Main component that manages state and renders child components.*  
*- **AddThoughtForm :** Form component for adding new thoughts.*  
*- **Thought :** Displays each thought and includes a delete button.*

### 📤 *Data Handling*  
*- **`useState` :** Stores and updates the list of thoughts.*  
*- **`useEffect` :** Manages the automatic deletion of thoughts.*  
*- **`setTimeout` :** Sets a timer for automatic thought removal.*

### 🖥️ *Dynamic Behavior*  
*- **`addThought()` :** Adds a new thought to the list.*  
*- **`removeThought()` :** Removes a thought by its unique ID.*  
*- **`generateId()` and `getNewExpirationTime()` :** Generate unique IDs and expiration times for thoughts.*

---

## 🤝 *How to Use the Project*  

### 📂 *Fork or Download the Project*  
1. *Fork the repository on GitHub.*  
2. *Clone the repository:*  
    ```bash
    git clone https://github.com/your-username/passing-thoughts.git
    ```  
3. *Download as ZIP via the Code button and extract the files.*

---

## 🛡️ *Running the Project Locally*  

1. *Install dependencies:*  
    ```bash
    npm install
    ```  
2. *Start the development server:*  
    ```bash
    npm start
    ```  
3. *Open the app in your browser at [http://localhost:3000](http://localhost:3000).*

---

### ✨ *Have fun and customize this project to deepen your understanding of **`React Hooks`**!*

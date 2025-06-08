📝 Advanced To-Do List (React) 

A modern, feature-rich To-Do List application built using React. It supports due dates, dark mode, and drag-and-drop task reordering.

🚀 Features

✅ Add & remove tasks

🗓 Set due dates for each task

🌗 Dark mode toggle

🔀 Drag-and-drop to reorder tasks

📦 Built with Create React App

🛠️ Installation

Clone the repo or download the ZIP:

git clone https://github.com/your-username/todo-app.git

cd todo-app

Install dependencies:

npm install

Start the app:

npm start

Visit http://localhost:3000 in your browser.

📁 Project Structure

todo-app/

├── public/

│   └── index.html

├── src/

│   ├── App.js        // Main App component

│   ├── index.js      // Entry point

│   └── styles.css    // App styling (if separated)

├── package.json

└── README.md

✨ Technologies Used

React 18

JavaScript (ES6)

CSS Flexbox & Transitions

Optional: React DnD or native drag APIs

🧠 Future Improvements

✅ Save tasks to localStorage

🔔 Task reminders / notifications

📱 Mobile responsiveness

🧩 Filter tasks by due date or completion

📥 Backend (Node.js + MongoDB or Firebase)

💡 Usage Tips

Click “🌙 Dark Mode” to toggle theme.

Use drag-and-drop to reorder tasks.

Add due dates to stay on track with deadlines.

🔰 General Understanding

This is a To-Do List web app built using React, a JavaScript library for creating user interfaces.

The app helps users add, view, and delete tasks they need to complete.

It uses React's component-based architecture, where UI elements are split into reusable parts.

The core logic is inside a component called App, which manages all the functionality.

📋 Features Included

Users can enter a task using a text input field.

They can also set an optional due date using a date picker.

Each task is added to a list shown on the page.

There’s a "Delete" button (❌) next to each task to remove it.

🌗 Dark Mode

A button toggles between Light Mode and Dark Mode for better visual experience.

When Dark Mode is enabled, background and text colors change for a night-friendly UI.

🔃 Drag and Drop

Tasks are draggable, allowing users to reorder their task list.

This is achieved using basic drag-and-drop events built into HTML.

⚙️ Technical Concepts (Simplified)

The app uses React state (useState) to track what tasks are added.

When a user types or clicks a button, state updates, which re-renders the interface.

useEffect is used to apply the Dark Mode class to the body element dynamically.

Each task is stored in a JavaScript array, with optional dueDate.

🧪 Extra Details

JSX is used for rendering HTML-like syntax inside the JavaScript code.

The app doesn’t save tasks after refreshing — it stores everything temporarily in memory.

Styling is done using simple CSS-in-HTML <style>, no external CSS files needed.

Everything runs in the browser — no backend or database is used.


⚠️ Challenges Faced in Building the Advanced To-Do List (React)

Setting Up Create React App

Installing dependencies and initializing the project correctly using npx create-react-app required attention, especially with npm version mismatches or missing packages.

Managing Component State

Handling multiple state variables (e.g., task list, due date, dark mode) using useState and useEffect became complex as features grew.

Implementing Drag-and-Drop

Native HTML5 drag-and-drop events (onDragStart, onDrop, onDragOver) were tricky to manage, especially ensuring smooth reordering logic.

Dark Mode Toggle

Dynamically switching themes required toggling class names on the root DOM element and maintaining consistent styling across components.

Date Input Validation

Ensuring the due date was valid, properly formatted, and compatible across browsers was slightly inconsistent without using a date-picker library.

Responsive Styling

Making sure the layout looked good across different devices required fine-tuning CSS (especially for list items and input fields).

No Persistent Storage

Since this was a frontend-only app, all data was lost on refresh — introducing localStorage or backend integration would have added persistence.

Keeping UI Minimal Yet Functional

Balancing a clean interface while providing essential features (like delete, reorder, dark mode) was a UI/UX design challenge.

React Version Compatibility

React 18 brought some changes to ReactDOM.createRoot() — adjusting older tutorials/code samples to the new API required awareness.

Error Handling for Edge Cases

Handling cases like empty task input, missing due dates, or accidental drag drops required additional conditional logic.

Bundler & Dependency Warnings

Warnings from outdated packages, deprecated dependencies, or React Scripts often showed up during npm install or npm start.

Running the App on Windows

Some systems didn’t have Node.js or npm preinstalled. Running commands like npm start required ensuring Node was correctly set up in the PATH.

Package Vulnerabilities in npm

Using npm audit revealed moderate to high vulnerabilities in dependencies, which needed review or optional npm audit fix.

Handling Dynamic Keys for List Items

Generating unique keys for list rendering to avoid React warnings was important to prevent rendering bugs.

Maintaining Accessibility

Ensuring buttons, input fields, and drag interactions were keyboard-navigable and accessible to screen readers added complexity.



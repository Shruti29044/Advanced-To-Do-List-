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



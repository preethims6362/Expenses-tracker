# Expenses-tracker
A simple and intuitive Expense Tracker application built using React. It helps users manage their finances by tracking income and expenses.
Expense Tracker (React)
This is a simple Expense Tracker Application built using React. It allows users to track their income and expenses efficiently, providing an intuitive interface and robust functionality.

Features:
Add income and expense transactions.
Automatically calculate and display the current balance.
Separate lists for income and expense transactions.
Responsive and user-friendly interface.
Uses React Context API for global state management.
Dynamic state updates without refreshing the page.

Technologies Used:
React: For building the user interface.
React Context API: For global state management without prop drilling.
JavaScript (ES6+): For logic and interactivity.
HTML/CSS: For structure and styling.
React Testing Library: For component testing.

Installation and Setup:
Prerequisites:

Node.js installed.
npm or yarn installed.

Steps
Clone the Repository
git clone https://github.com/your-username/expense-tracker-react.git

Navigate to the Project Directory
cd expense-tracker-react


Install Dependencies
npm install

Run the Application
npm start
Open http://localhost:3000 to view it in the browser.

Run Tests
npm test

Build for Production
npm run build

The production build will be created in the build/ directory.

Usage
Enter a description (e.g., "Salary" or "Groceries").
Input the amount:
Positive for income (e.g., 500).
Negative for expenses (e.g., -200).
Click "Add Transaction" to update the transaction list and see the balance update in real-time.

Project Structure

expense-tracker-react/
│
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable React components
│   │   ├── AddTransaction.js   # Form for adding transactions
│   │   ├── Balance.js          # Displays the current balance
│   │   ├── IncomeExpenses.js   # Summary of income and expenses
│   │   └── TransactionList.js  # List of all transactions
│   │
│   ├── context/                # Global state management
│   │   ├── AppReducer.js       # Reducer logic for state updates
│   │   └── GlobalState.js      # Context provider
│   │
│   ├── App.js                  # Root component
│   ├── index.js                # Application entry point
│   └── styles.css              # Custom styles
│
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation




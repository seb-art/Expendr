# Expendr - Expense Tracking Web Application

![Expendr screenshot]()

Expendr is a web application designed to help you take control of your finances by tracking your expenses effortlessly. With Expendr, you can easily record and categorize your expenses, set budgets, and generate insightful reports to gain a better understanding of your spending habits.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [User Registration](#user-registration)
  - [Expense Entry](#expense-entry)
  - [Expense Categories](#expense-categories)
  - [Budget Management](#budget-management)
  - [Reports](#reports)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can use Expendr, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [MongoDB](https://www.mongodb.com/) (for backend data storage)

### Installation

1. Clone the Expendr repository to your local machine:

   ```bash
   git clone https://github.com/your-username/expendr.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expendr
   ```

3. Install the dependencies for both the frontend and backend:

   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

4. Set up the configuration:

   - Create a `.env` file in the `server` directory based on the provided `.env.example` file. Configure your MongoDB connection and JWT secret key.

5. Start the development servers:

   - Frontend (React):

     ```bash
     cd client
     npm start
     ```

   - Backend (Node.js/Express):

     ```bash
     cd server
     npm start
     ```

6. Access the application in your web browser at `http://localhost:3000`.

## Features

Expendr offers the following key features:

- User registration and authentication.
- Expense entry with customizable categories.
- Budget management to set spending limits.
- Interactive charts and reports to visualize spending patterns.
- Responsive and user-friendly design for both desktop and mobile devices.

## Usage

### User Registration

To start using Expendr, you need to create an account. Click the "Sign Up" button on the login page, fill in your details, and you'll be ready to track your expenses.

### Expense Entry

Once logged in, you can add your expenses by clicking the "Add Expense" button. Provide the necessary details, such as the amount, description, and category, and save your expense.

### Expense Categories

Expendr allows you to categorize your expenses for better organization. You can create, edit, and delete expense categories to match your financial needs.

### Budget Management

Setting budgets helps you stay on top of your spending. Create budgets for specific categories, and Expendr will notify you when you're close to reaching your limit.

### Reports

Expendr generates detailed reports and charts to help you visualize your spending patterns over time. Analyze your expenses to make informed financial decisions.

## Contributing

We welcome contributions from the community. If you'd like to contribute to Expendr, please check out our [Contribution Guidelines](CONTRIBUTING.md) for more information on how to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
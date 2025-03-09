# CodeNest

CodeNest is a platform that aggregates user profiles from popular coding platforms such as LeetCode, HackerRank, and more. The website provides a comprehensive view of a user’s coding activity, including the total number of problems solved, recent activity, and a timeline of their progress across different platforms.

## Features
- Aggregate user profiles from multiple coding platforms like LeetCode, HackerRank, Codeforces, and more.
- Displays the total number of problems solved by the user across all platforms.
- Shows the user’s recent activity, including the last few days of problem-solving and submissions.
- Provides a clean, easy-to-navigate interface to monitor coding progress and growth.
- User authentication to securely link multiple accounts.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Aapush01/NovaRide.git
   cd CodeNest
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and configure your MongoDB URI,PORT.
   - Example:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=8080
     ```

4. Start the application:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm run dev
   ```


## Project Structure
```
NovaRide/
├── backend/     # Backend code (Node.js + Express)
├── frontend/    # Frontend code (React)
├── README.md    # Project documentation
└── ...          # Other configuration files
```

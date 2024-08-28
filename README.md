# MERN Authentication App

This project is a full-stack authentication application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Google Firebase integration for Google authentication. It serves as a boilerplate that can be easily integrated into your existing MERN application to provide robust authentication functionality.

# Live link for the App: https://mern-auth-77bw.onrender.com/

## Features

- **User Authentication:** Secure user authentication using JWT.
- **Google OAuth Integration:** Seamless Google login with Firebase integration.
- **Protected Routes:** Implement protected routes based on user authentication status.
- **State Management:** Efficient state management using Redux.
- **Responsive UI:** User-friendly and responsive frontend built with React.

## Project Structure

- **api/** - Backend server code using Node.js and Express.
    - **controllers/** - Contains logic for handling requests.
    - **models/** - Mongoose models for MongoDB collections.
    - **routes/** - Express routes for authentication and user-related operations.
    - **utils/** - Utility functions for error handling and user verification.

- **client/** - Frontend code using React.
    - **src/** - Source code for the React application.
        - **components/** - Reusable React components.
        - **pages/** - React pages such as Home, Signin, Signup, Profile.
        - **redux/** - Redux setup for state management.
        - **firebase.js** - Configuration for Firebase integration.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database.
- Firebase project with OAuth credentials.

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/mern-auth-app.git
    cd mern-auth-app/api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `api/` directory and add the following variables:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `client/` directory:
    ```bash
    cd ../client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `client/` directory and add your Firebase configuration:
    ```plaintext
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    ```

4. Start the React app:
    ```bash
    npm run dev
    ```

## Usage

- Visit `http://localhost:3000` to access the frontend.
- Use the Google Sign-in option for authentication.
- Access protected routes once authenticated.

## Deployment

For deployment, you can use platforms like Render, Heroku, or Vercel. Ensure that your environment variables are correctly set up on the deployment platform.

## License

This project is open-source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue.

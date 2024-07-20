# Enquiry Form Project

This project is a simple enquiry form built using React.js for the front end and Node.js for the back end. The form allows users to submit their name, phone number, and query, which are then sent to a server using axios and emailed using nodemailer.

## Features

- **Front End**: Built with React.js
- **Back End**: Built with Node.js and Express.js
- **Form Handling**: Manages form input and submission using React hooks
- **Email Notifications**: Sends enquiry details via email using nodemailer
- **Deployment**: Deployed on Firebase, with the server hosted on Render

## Live Demo

You can view the live project [here](https://ameyreactenqwrender.web.app).

## Installation

### Prerequisites

- Node.js
- npm (Node package manager)
- Firebase CLI (for deployment)

### Front End Setup

1. Navigate to the `client` directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

### Back End Setup

1. Navigate to the `server` directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the Express server:

    ```bash
    node index.js
    ```

## Deployment

### Firebase

1. Build the React application:

    ```bash
    npm run build
    ```

2. Deploy to Firebase:

    ```bash
    firebase deploy
    ```

### Render

The server is hosted on Render. Ensure that the environment variables for `nodemailer` are correctly set up on Render.

## Usage

### Enquiry Form

1. Open the application in your browser.
2. Fill out the form with your name, phone number, and query.
3. Click the "Submit" button to send your enquiry.
4. The form will be cleared, and you will see a success message: "We will get back to you!!!!".
5. If there is an issue, an error message will be displayed.

### Clear Form

- Click the "Clear" button to clear all input fields and reset the form.

## Screenshots

### Start Page

![Start Page](https://github.com/Amey2701/Enquiry-App/blob/main/start.png)

### Information Fill Form

![Information Fill Form](https://github.com/Amey2701/Enquiry-App/blob/main/infof.png)

### Output

![Output](https://github.com/Amey2701/Enquiry-App/blob/main/output.png)

## Code Overview

### Front End

- **Enquire.js**: Contains the enquiry form component.
- **App.js**: Main application component.
- **App.css**: Styling for the application.

### Back End

- **index.js**: Express server setup and email handling using nodemailer.

## Technologies Used

- **React.js**: For building the user interface.
- **Node.js**: For server-side logic.
- **Express.js**: For creating the server.
- **nodemailer**: For sending emails.
- **axios**: For making HTTP requests.
- **Firebase**: For deployment.
- **Render**: For hosting the server.

## Contact

**Amey Mali**

- **Phone**: 7517359266
- **Email**: ameymali54@icloud.com

## License

This project is licensed under the MIT License.

# Employee Management App - Frontend

## Note: The Employee Management App frontend won't function properly without a running instance of the associated Spring Boot backend. Please ensure that the backend is running before using the frontend.

## Overview

Welcome to the Employee Management App frontend! This application is designed to capture and display information about employees in a user-friendly interface. The frontend is built using HTML, CSS, JavaScript, and Bootstrap for styling.

## Features

- **Employee Capture:** Easily add new employees to the system by filling out a form with essential details such as name, position, and contact information.

- **Employee Display:** View a comprehensive table displaying all captured employees' information, making it convenient to track and manage your workforce.

- **Data Fetching via API:** The frontend interacts with a Spring Boot backend through an API to retrieve and display employee data.

- **Bootstrap Styling:** The application leverages Bootstrap for a responsive and visually appealing design, ensuring a seamless user experience across different devices.

## Backend Integration

This frontend communicates with a Spring Boot backend, which performs the following tasks:

- **In-Memory Storage:** Employee data is initially stored in-memory within the Spring Boot application.

- **Firestore Database:** Additionally, employee data is persistently stored in a Firestore database, providing a scalable and reliable solution for data management.

## Getting Started

To run the frontend locally, follow these steps:

1. Clone the frontend repository to your local machine:

   ```bash
   git clone https://github.com/Simphiwekona/portal-frontend.git

2. Clone the backend repository to your local machine:

    ```bash
    https://github.com/Simphiwekona/portal-backend.git

# Getting Started with the App

- First you have to clone the project from gitHub : https://github.com/Simphiwekona/portal-frontend.git
- After cloning, open terminal inside the root of the project, then run **npm install** to install the node modules folder.
- After everything is installed, you can proceed to run `npm start` which will start the application.
- After the server has started, on the browser enter : **localhost:3000**

# Usage

## Add Employee:
- Click on the "add Employee" button
- Fill out form with the required employee details.
- Click "Add Employee" to add the employee to the system.

## View Employees:
- The main page displays a table with all captured employee information.
- Each row represents an individual employee, and columes contain relevent details

## Data Feteching:
- Employee data is fetched from the Spring Boot backend via an API.

## Responsive Design
- The application is designed with Bootstrap, ensurring a responsive layout on various screen sizes

# Dependencies
- **Bootstrap(v5.0.0):** Used for styling and ensuring a consistent and modern UI.

# Issue
- If you encounter any issues or have suggestions for improvement, please open an issue on the GitHub repository.
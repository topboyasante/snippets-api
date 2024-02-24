# Snippets API

Welcome to the Snippets API, an innovative open-source project crafted to simplify the process of storing, retrieving, and managing code snippets. This project is built with TypeScript, utilizing Express for the server framework, PostgreSQL for data storage, and Prisma ORM for seamless database management. Unique to this project, we've chosen Bun as the runtime and package manager, enhancing performance and developer experience.

## Features

- RESTful API for CRUD (Create, Read, Update, Delete) operations on code snippets
- User authentication and authorization for secure access
- Organize snippets with a tagging system
- Search functionality to easily locate specific snippets
- Supports multiple programming languages for snippet storage

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Bun (Visit [Bun.sh](https://bun.sh/) for installation instructions)
- PostgreSQL (Version 12 or later)

## Setup

To set up your development environment, follow these steps:

1. **Clone the Repository**

    Open your terminal and run:
    ```
    git clone https://github.com/topboyasante/snippets-api.git
    cd snippets-api
    ```

2. **Install Dependencies**

    Execute the following command to install the required dependencies:
    ```
    bun install
    ```

3. **Database Configuration**

    - Create a PostgreSQL database for the project.
    - Create a `.env` file and copy then contents of `.example.env` into it and update the `DATABASE_URL` variable with your PostgreSQL connection string.

4. **Run Database Migrations**

    To set up your database schema and apply all migrations run:
    ```
    bunx prisma migrate deploy
    ```

5. **Start the Development Server**

    Launch the development server using:
    ```
    bun run dev
    ```

The API server should now be up and running on `http://localhost:3001`.

## Usage

For detailed information on how to utilize the API, refer to the [API Documentation](#). This documentation provides comprehensive guides and examples for interacting with the API endpoints.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Reporting Issues

- Utilize the GitHub Issues tab to report any bugs or issues.
- Include detailed steps to reproduce the problem.

### Feature Requests

- Feel free to submit feature requests through the GitHub Issues tab.
- Explain the feature and its expected impact on the project.

### Pull Requests

1. Fork the Project
2. Create your Feature Branch (`bun branch feature/AmazingFeature`)
3. Commit your Changes (`bun commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`bun push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Guidelines

- Clearly describe the problem and solution. Include the relevant issue number if applicable.
- Ensure the PR description clearly describes the reason for the pull request and what it achieves.
- Follow the coding standards and write quality code with comments where necessary.
- Make sure your code lints and all tests pass.

## Code of Conduct

Please note we have a code of conduct, please follow it in all your interactions with the project.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Thank you for your interest in contributing to Snippets API! Together, we can make it a valuable resource for developers everywhere.
# Lattice Innovation

Lattice Innovation is a Node.js application that provides API endpoints for patient registration and hospital details.

## API Endpoints

### 1. Register a Patient

- **Description:** Endpoint to register a new patient.
- **Method:** POST
- **Path:** `/api/patient/create`
- **Request Body:**
  - Example:
    ```json
    {
      "name": "John Doe",
      "address": "123 Main St, City",
      "email": "john.doe@example.com",
      "phoneNumber": "1234567890",
      "password": "SecurePassword123",
      "patientPhoto": "base64-encoded-image"
    }
    ```
- **Response:**
  - Success: `{ "success": true, "message": "Patient registered successfully" }`
  - Error: `{ "success": false, "message": "Error message here" }`

### 2. Get Hospital Details

- **Description:** Endpoint to get details of hospitals and associated psychiatrists.
- **Method:** GET
- **Path:** `/api/patient/hospitals`
- **Response:**
  - Success:
    ```json
    {
      "success": true,
      "hospitals": [
        {
          "id": 1,
          "name": "Apollo Hospitals",
          "psychiatristsCount": 5,
          "patientsCount": 20
        },
        // ... other hospitals
      ]
    }
    ```
  - Error: `{ "success": false, "message": "Error message here" }`

## Getting Started


dotenv: For loading environment variables.
express: Web framework for handling HTTP requests.
joi: For request data validation.
mysql2: MySQL database driver.
nodemon: Development tool for automatically restarting the server.
sequelize: An ORM for interacting with databases.
sqlite3: SQLite database driver.
swagger-jsdoc: For generating Swagger documentation from JSDoc comments.
swagger-ui-express: Middleware to serve Swagger UI for API documentation.

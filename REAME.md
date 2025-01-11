
# KoinX Cryptocurrency Tracker Backend Assignment for Internship

A cryptocurrency tracker that fetches real-time data, calculates deviations in prices, and maintains an updated database every 2 hours. This project is designed to showcase the usage of REST APIs, database management, and efficient backend architecture.

---

## Features
- Fetches and saves cryptocurrency data using APIs.
- Calculates price deviation based on previous data stored in database.
- Automatically add new  cryptocurrency data after every 2 hours in the database.
- Exposes RESTful routes for interacting with the system.

---

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB (using Mongoose ORM)
- External API: Axios for API calls
- Utilities: `dotenv` for environment variables, `nodemon` for development monitoring

---

## Project Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

---

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/chirania-kunal/koinX-cryptocurrency_BD_Assign.git
   cd koinX-cryptocurrency_BD_Assign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_CONNECTION_STRING=your_mongo_db_connection_string

   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Routes
### 1. Fetch and Save Cryptocurrency Data
Endpoint: `POST /api/crypto/fetch`  
Fetches the latest cryptocurrency data and saves it to the database.

---

### 2. Calculate Deviation
Endpoint: `GET /api/crypto/deviation`  
Body: 
```json
{
  "coin": "bitcoin"
}
```
Returns the standard deviation of the cryptocurrency prices over the last 100 entries.

---

### 3. GET latest stats about requested cryptocurrency form the database
Endpoint: `GET /api/crypto/deviation`  
Body: 
```json
{
  "coin": "bitcoin"
}
```
Returns the latest data about the requested cryptocurrency.

---

## Folder Structure
```
koinX-cryptocurrency_BD_Assign/
├── controllers/        # Business logic for routes
├── routes/             # API endpoints
├── service/            # Utility services
├── models/             # Mongoose schemas
├── node_modules/       # Node.js dependencies
├── .env                # Environment variables
├── app.js              # Entry point of the application
├── package.json        # Project metadata
```

---

## Commands
- Start Development Server: `npm run dev`
- Install Dependencies: `npm install`
- Fix Node Modules Issue: `npm ci`

---

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## License
This project is licensed under the MIT License.  

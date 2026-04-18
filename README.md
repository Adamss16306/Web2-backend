# Web2 Assignment — Express & Sequelize CRUD API

## Project Description
A simple REST API built with Node.js, Express, and Sequelize ORM.
It demonstrates two models (User & Post) with a one-to-many relationship and full CRUD operations.

## Technologies Used
- Node.js
- Express
- Sequelize + Sequelize CLI
- MySQL (via Docker)
- dotenv

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/yourusername/web2.git
cd web2

### 2. Install dependencies
npm install

### 3. Create .env file in the root directory
DB_USERNAME=user
DB_PASSWORD=secret
DB_NAME=myapp_db
DB_HOST=127.0.0.1
DB_PORT=3307

### 4. Start the database
docker-compose up -d

### 5. Run migrations
npx sequelize-cli db:migrate

### 6. Start the server
npm run dev

---

## Models & Relationships
- User hasMany Posts
- Post belongsTo User

---

## API Endpoints

### Users

| Method | Endpoint     | Description       | 
|--------|--------------|-------------------|
| GET    | /users       | Get all users     |
| GET    | /users/:id   | Get user by ID    |
| POST   | /users       | Create new user   |
| PUT    | /users/:id   | Update user       |
| DELETE | /users/:id   | Delete user       |

### Sample Request — Create User
POST /users
Content-Type: application/json

{
  "name": "Adam",
  "email": "adam@gmail.com"
}

### Sample Response
{
  "id": 1,
  "name": "Adam",
  "email": "adam@gmail.com",
  "createdAt": "2026-04-18T21:11:48.000Z",
  "updatedAt": "2026-04-18T21:11:48.000Z"
}

---

### Posts

| Method | Endpoint     | Description       |
|--------|--------------|-------------------|
| GET    | /posts       | Get all posts     |
| GET    | /posts/:id   | Get post by ID    |
| POST   | /posts       | Create new post   |
| PUT    | /posts/:id   | Update post       |
| DELETE | /posts/:id   | Delete post       |

### Sample Request — Create Post
POST /posts
Content-Type: application/json

{
  "title": "My First Post",
  "content": "Hello World!",
  "UserId": 1
}

### Sample Response
{
  "id": 1,
  "title": "My First Post",
  "content": "Hello World!",
  "UserId": 1,
  "createdAt": "2026-04-18T21:14:37.000Z",
  "updatedAt": "2026-04-18T21:14:37.000Z"
}
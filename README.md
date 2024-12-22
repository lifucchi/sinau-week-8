# sinau-week-8

# Restaurant Reservation API

## Overview

A RESTful API for managing restaurant reservations. Built using **Express.js**, **Sequelize**, and **MySQL**.

---

## Features

- Register
- Login
- View profile
- Update profile
- View list of restaurants
- View list of reservations
- Create reservations

---

## Requirements

- **Node.js**
- **MySQL Database**
- **Postman**

---

## Installation

1. **Clone Repository:**

   ```bash
   git clone <repository-url>
   cd restaurant-reservation-api
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file:

   ```plaintext
   DB_HOST=
   DB_USER=
   DB_PASS=
   DB_NAME=
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Migrations:**

   ```bash
   npx sequelize db:migrate
   ```

5. **Seed Data:** (Optional)

   ```bash
   npx sequelize db:seed:all
   ```

6. **Start Server:**
   ```bash
   npm run dev
   ```

---

## API Endpoints

### **Authentication**

#### Register:

```
POST /api/auth/register
```

**Body:**

```json
{
  "profile_name": "A",
  "profile_phone": "123",
  "email": "A@example.com",
  "password": "123"
}
```

#### Login:

```
POST /api/auth/login
```

**Body:**

```json
{
  "email": "A@example.com",
  "password": "123"
}
```

**Response:**

```json
{
  "token": "<JWT_TOKEN>"
}
```

### **User Management**

#### View Profile:

```
GET /api/users/profile
```

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

#### Update Profile:

```
PUT /api/users/profile
```

**Body:**

```json
{
  "profile_name": "A updated",
  "profile_phone": "123456"
}
```

### **Restaurant Management**

#### List Restaurants:

```
GET /api/restaurants
```

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

### **Reservation Management**

#### List Reservations:

```
GET /api/reservations
```

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

#### Create Reservation:

```
POST /api/reservations
```

**Headers:**

```
Authorization: Bearer <JWT_TOKEN>
```

**Body:**

```json
{
  "restaurantId": 1,
  "userId": 1,
  "reservationTime": "2024-12-25",
  "numberOfPeople": 4
}
```

---

## Testing with Postman

1. Login to get a token.
2. Use the token in the **Authorization Header**:
   ```
   Authorization: Bearer <JWT_TOKEN>
   ```
3. Test each endpoint using the examples above.

---

## Author

Rifka Annisa

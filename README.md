# 📸 **Instagram Lite — Feed System (Node.js + MongoDB + Redis)**

A simplified backend inspired by **Instagram’s real feed architecture**, built to learn modern **system design**, **fan-out on write**, **Redis caching**, and **MongoDB data modeling**.

---

## 🚀 **Features**

### 🟦 **User System**
- **Register user**
- **Login**
- **Follow / Unfollow**
- **View followers**
- **View following**

### 🟩 **Post System**
- **Create posts** (text or image URL)
- **Get posts of a user**

### 🟧 **Feed System (Core)**
- **Fan-out on write**  
  When a user posts → push post into all followers' feeds  
- **Feed table per user**
- **Redis caching for home feed**
- **Newest posts first**
- **Scalable design like Instagram**

---

## 🏗️ **Tech Stack**

| Layer | Technology |
|------|------------|
| Backend | **Node.js + Express** |
| Database | **MongoDB (Mongoose)** |
| Cache | **Redis (ioredis)** |
| Worker | **Fan-out Worker** |
| API Testing | **Postman** |
| Deployment | **Docker (Redis)** |

---

## 📂 **Project Structure**

instagram-lite/
│── src/
│ ├── config/
│ │ ├── db.js
│ │ └── redis.js
│ ├── controllers/
│ │ ├── userController.js
│ │ ├── postController.js
│ │ └── feedController.js
│ ├── models/
│ │ ├── user.js
│ │ ├── follow.js
│ │ ├── post.js
│ │ └── feed.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ ├── postRoutes.js
│ │ └── feedRoutes.js
│ ├── workers/
│ │ └── fanoutWorker.js
│ └── server.js
│── .env
│── package.json


---

## ⚙️ **Installation & Setup**

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/<your-username>/Instagram-lite.git
cd Instagram-lite
```
### **2️⃣ Install dependencies**
```
npm install
```
### **3️⃣ Configure environment variables**
```
PORT=5000
MONGO_URI={uri}
REDIS_URL={url}
```
### **4️⃣ Start Redis using Docker**
```
docker run -d --name redis -p 6379:6379 redis
```
**test**
```
docker exec -it redis redis-cli ping
```
**Expected output:**
```
PONG
```
### **5️⃣ Start the backend**
```
npm run dev
```
**you'll see:**
```
Server running on 5000
MongoDB connected
Redis connected
```

## **API Testing (Postman)**
✔ Register User

POST
/api/users/register
```
{
  "username": "danish",
  "password": "123"
}
```
✔ Follow a User

POST
/api/users/follow
```
{
  "followerId": "userA_id",
  "followingId": "userB_id"
}
```
✔ Create Post

POST
/api/posts
```
{
  "userId": "userB_id",
  "content": "My first post!"
}
```

This automatically triggers fan-out worker.

✔ Get Home Feed

GET
/api/feed/<userId>

Returns:

Posts from followed users

Sorted by time

Cached via Redis

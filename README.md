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


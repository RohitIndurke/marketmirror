# Market Mirror

**Market Mirror** is a web app to **track financial markets**, including crypto, Indian stocks, and mutual funds. It offers a clean, responsive interface for browsing market data.

---

## Live Demo
[https://marketmirror-neon.vercel.app](https://marketmirror-neon.vercel.app)  

---


## Tech Stack
 ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white) 
 ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) 
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) 
 ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) 
 ![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-ffffff?style=for-the-badge&logo=appveyor&logoColor=black) 
 ![Clerk](https://img.shields.io/badge/Clerk-ffffff?style=for-the-badge&logo=clerk&logoColor=black) 
 ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) 
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Rainbow](https://img.shields.io/badge/Rainbow-001D36?style=for-the-badge&logo=rainbow&logoColor=white)
---

## Getting Started
1. **Clone the repository**
```bash
git clone https://github.com/yourusername/market-mirror.git
cd market-mirror
```
2. **Install dependencies**
```bash
npm install
```
3. **Set environment variables**
 Create a .env file
```bash
NEXT_PUBLIC_NEWSAPI_KEY=news_api_key
NEXT_PUBLIC_MUTUAL_API=mutual_fund_api_key
DATABASE_URL=your_neon_connection_string
CLERK_SECRET_KEY=clerk_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
MONGO_DB_URL=mongo_db_cluster_url
NEXT_PUBLIC_MORALIS_KEY=KEY
```

4. **Run the development server**
```bash
npm run dev
```
Open http://localhost:3000

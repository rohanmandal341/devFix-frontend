# DevFix Frontend

This is the frontend application for **DevFix** — a developer-centric platform to search, view, and solve software setup and installation issues quickly using short videos, solutions, and Gemini AI support.

## 🛠️ Tech Stack

- ⚛️ React (with Hooks)
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔄 Axios (with JWT support)
- 🔐 Role-based auth UI (User/Admin)
- 🧠 Gemini AI integrated (chat-based interface)

## 📁 Project Structure

devFix-frontend/
├── public/ # Static assets
├── src/ # All React components, routes, and services
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.jsx
├── index.html # Vite entry point
├── package.json
├── vite.config.js



## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Vite will start the project at:
http://localhost:5173
---
##🔐 Auth Flow
Login and Register handled via JWT tokens.

Token is stored in localStorage and sent with every authenticated request.
---
##📦 Build for Production
```bash
npm run build
```
This generates static files in the dist/ folder, ready for deployment (e.g., Vercel or Netlify).
---
###🌐 API Base URL
All API calls hit:
https://snap-setup-frontend.vercel.app/

Ensure CORS is allowed on the backend for the deployed frontend domain.

---
###📄 License
MIT

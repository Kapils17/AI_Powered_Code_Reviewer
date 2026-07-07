# 🤖 AI Powered Code Reviewer

An AI-powered web application that reviews source code and provides intelligent feedback on code quality, readability, potential bugs, performance improvements, and coding best practices using Google's Gemini API.


## ✨ Features

- 🤖 AI-powered code analysis using Google Gemini API
- 💻 Monaco Editor with syntax highlighting
- ⚡ Instant code review with a single click
- 🐞 Detects bugs and logical errors
- 🚀 Suggests performance optimizations
- 📚 Recommends coding best practices
- 📝 Markdown-rendered AI responses
- 🎨 Modern, responsive, and clean UI
- 🔄 Reset editor with one click

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Monaco Editor
- Axios
- React Markdown
- CSS3

### Backend
- Node.js
- Express.js
- Google Gemini API
- CORS
- dotenv

---

## 📂 Project Structure

```
AI-Code-Reviewer/
│
├── FrontEnd/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── BackEnd/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/AI-Code-Reviewer.git
```

### 2. Navigate to the project

```bash
cd AI-Code-Reviewer
```

---

## 📦 Backend Setup

```bash
cd BackEnd
npm install
```

Create a `.env` file inside the **BackEnd** folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=3000
```

Start the backend server.

```bash
npm start
```

or

```bash
node server.js
```

---

## 💻 Frontend Setup

Open another terminal.

```bash
cd FrontEnd
npm install
npm run dev
```

---

## 🌐 API Endpoint

### Review Code

**POST**

```
/ai/get-review
```

### Request Body

```json
{
  "code": "console.log('Hello World');"
}
```

---

## 📸 Screenshots

### Home

Add your homepage screenshot here.

### AI Review

Add your review result screenshot here.

---

## 🔮 Future Improvements

- Support multiple programming languages
- Authentication and user accounts
- Review history
- Export reviews as PDF
- Dark/Light mode
- Syntax error highlighting
- Code comparison
- AI chat assistant
- Code complexity analysis

---

## 👨‍💻 Author

**Kapil Sharma**

- GitHub: https://github.com/Kapils17

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.

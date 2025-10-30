# Akin Motivational Quotes

Akin Motivational Quotes is a modern web platform that delivers motivational quotes, the latest news, entertainment, football news, music, movies, and an AI assistant powered by OpenAI.  
It securely integrates with News API, OpenAI API, and Video API using a Flask backend so your keys are never exposed.

---

## Features

- **Motivational Quotes** (via Quotable API)
- **Latest News** (via NewsAPI)
- **Entertainment, Football, Music, Movies** (API integrations and placeholders)
- **Blogging Platform** (coming soon)
- **AI Assistant Chatbot** (powered by OpenAI)
- **Secure API key management with `.env`**
- **Easy deployment (local, server, or cloud)**

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/akinnevmo-gif/akin-s.-sokpah.git
cd akin-s.-sokpah
```

### 2. Install dependencies

```bash
pip install flask requests python-dotenv
```

### 3. Set up your `.env` file (DO NOT COMMIT THIS FILE!)

Copy `.env.example` to `.env` and fill in your actual API keys:

```
OPENAI_API_KEY=your_openai_api_key
NEWS_API_KEY=your_news_api_key
VIDEO_API_KEY=your_video_api_key
```

Add `.env` to your `.gitignore` to ensure secrets are never pushed.

### 4. Run the Flask backend

```bash
flask run
```
Or:
```bash
python backend.py
```

### 5. Open `index.html` in your browser (or serve with Flask/static host)

---

## Project Structure

```
/ (root)
  |-- index.html          # Main homepage
  |-- style.css           # Styles
  |-- main.js             # Frontend JavaScript (calls backend APIs)
  |-- backend.py          # Flask backend (proxies to APIs)
  |-- .env.example        # Template for secrets (copy to .env)
  |-- .gitignore          # Should include .env
  |-- README.md           # This file
```

---

## Security Advice

**Never commit your `.env` file or real API keys to your GitHub repository.**  
Always use environment variables or GitHub secrets for deployment.

---

## Deployment

You can deploy on:
- **Local machine** (using Flask)
- **Cloud server** (Heroku, Vercel, etc.)
- **GitHub Actions** (use repo secrets for keys)

---

## Customization & Expansion

- Add your own blog posts, music, entertainment APIs, or features!
- Expand the AI assistant by connecting to more models or APIs.
- Style the frontend (`style.css`) to fit your brand.
- Add user accounts, admin dashboard, and more.

---

## Credits

- [Quotable API](https://github.com/lukePeavey/quotable)
- [NewsAPI](https://newsapi.org/)
- [OpenAI](https://platform.openai.com/)
- [Your Video API Provider]

---

## License

MIT License

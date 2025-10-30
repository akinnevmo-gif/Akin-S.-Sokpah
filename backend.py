import os
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
NEWS_API_KEY = os.getenv("NEWS_API_KEY")
VIDEO_API_KEY = os.getenv("VIDEO_API_KEY")

@app.route('/api/quotes')
def get_quotes():
    # Example: fetch from public API, can expand or cache later
    resp = requests.get('https://api.quotable.io/quotes?tags=motivational')
    items = resp.json().get('results', [])
    return jsonify([{'content': q['content'], 'author': q['author']} for q in items])

@app.route('/api/news')
def get_news():
    url = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={NEWS_API_KEY}"
    resp = requests.get(url)
    return jsonify(resp.json())

@app.route('/api/football')
def get_football():
    url = f"https://newsapi.org/v2/top-headlines?category=sports&apiKey={NEWS_API_KEY}"
    resp = requests.get(url)
    return jsonify(resp.json())

@app.route('/api/videos')
def get_videos():
    query = request.args.get('query', 'motivational')
    # Replace with the actual video API endpoint if needed
    url = f"https://example-video-api.com/search?q={query}&apiKey={VIDEO_API_KEY}"
    resp = requests.get(url)
    # Mock response if your API doesn't match this format
    if resp.status_code == 200:
        return jsonify(resp.json())
    else:
        return jsonify({"results": [{"title": "Demo Video", "url": "https://www.youtube.com/results?search_query=" + query}]})

@app.route('/api/ai', methods=['POST'])
def ai_chat():
    user_message = request.json.get('message', '')
    endpoint = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": user_message}]
    }
    r = requests.post(endpoint, headers=headers, json=data)
    return jsonify(r.json())

if __name__ == "__main__":
    app.run(debug=True)

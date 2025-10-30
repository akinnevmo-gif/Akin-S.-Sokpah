// Motivational Quotes API
const quotesList = document.getElementById('quotes-list');
fetch('/api/quotes')
  .then(res => res.json())
  .then(data => {
    quotesList.innerHTML = data.map(q => `<blockquote>${q.content} — <b>${q.author}</b></blockquote>`).join('');
  });

// News API via backend
const newsList = document.getElementById('news-list');
fetch('/api/news')
  .then(res => res.json())
  .then(data => {
    newsList.innerHTML = data.articles.map(a => `<div><a href="${a.url}" target="_blank">${a.title}</a></div>`).join('');
  });

// Football News via backend
const footballList = document.getElementById('football-list');
fetch('/api/football')
  .then(res => res.json())
  .then(data => {
    footballList.innerHTML = data.articles.map(a => `<div><a href="${a.url}" target="_blank">${a.title}</a></div>`).join('');
  });

// Video API via backend
const moviesList = document.getElementById('movies-list');
fetch('/api/videos?query=motivation')
  .then(res => res.json())
  .then(data => {
    moviesList.innerHTML = data.results.map(v => `<div><a href="${v.url}" target="_blank">${v.title}</a></div>`).join('');
  });

// Entertainment, blog, music: example placeholders
document.getElementById('entertainment-list').innerHTML = "<p>Coming soon: entertainment news and videos!</p>";
document.getElementById('blog-list').innerHTML = "<p>Coming soon: blogging platform!</p>";
document.getElementById('music-list').innerHTML = "<p>Coming soon: music streaming!</p>";

// AI Assistant via backend
const chatbotDiv = document.getElementById('chatbot');
chatbotDiv.innerHTML = `
  <input type="text" id="userInput" placeholder="Ask me anything..." />
  <button id="sendBtn">Send</button>
  <div id="chatLog"></div>
`;
const chatLog = document.getElementById('chatLog');
document.getElementById('sendBtn').onclick = async () => {
  const input = document.getElementById('userInput').value;
  chatLog.innerHTML += `<div>You: ${input}</div>`;
  chatLog.innerHTML += `<div>AI: <span id="aiResp">...</span></div>`;
  const respDiv = document.getElementById('aiResp');
  try {
    const r = await fetch('/api/ai', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: input})
    });
    const data = await r.json();
    respDiv.innerText = data.choices ? data.choices[0].message.content : "Sorry, I can't answer that now.";
  } catch (e) {
    respDiv.innerText = "Error contacting AI.";
  }
};

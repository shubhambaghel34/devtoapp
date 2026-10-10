module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'DEV.to API key is not configured' });
  }

  try {
    const upstream = await fetch('https://dev.to/api/articles/me/all', {
      headers: { 'api-key': apiKey },
    });
    const articles = await upstream.json();
    if (!upstream.ok) {
      return res.status(upstream.status).json(articles);
    }
    if (!Array.isArray(articles)) {
      return res.status(502).json({ error: 'Unexpected response from DEV.to' });
    }

    return res.status(upstream.status).json(articles.filter((article) => article.published));
  } catch {
    return res.status(502).json({ error: 'Unable to fetch articles from DEV.to' });
  }
};
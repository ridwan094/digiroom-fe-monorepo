// di dalam digiroom/apps/digiroom-news/pages/api/news.js
export default async function handler(req, res) {
  try {
    const apiResponse = await fetch('http://api.digiroom.com/api/content-apps-service/v1/news');
    const data = await apiResponse.json();
    res.status(200).json(data.content);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Error fetching news' });
  }
}

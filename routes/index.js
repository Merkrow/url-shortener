const { shortenUrl, getLongUrl } = require('../lib/shortener');

const shortenUrlRoute = async (req, res) => {
  const { url } = req.body;

  try {
    const shortUrl = await shortenUrl(url);

    res.send({ shortUrl: `${process.env.ORIGIN_URL}:${process.env.PORT}/${shortUrl}` });
  } catch (err) {
    res.status(500).send(err);
  }
}

const longUrlRoute = async (req, res) => {
  const { shortUrl } = req.params;
  
  try {
    const longUrl = await getLongUrl(shortUrl);

    if (!longUrl) {
      return res.status(500).send('Oops! This url was not shortened or expired');
    }

    res.redirect(longUrl);
  } catch (err) {
    res.status(500).send(err);
  }
}


module.exports = {
  shortenUrlRoute,
  longUrlRoute,
}

const { nanoid } = require('nanoid');
const redis = require('./redis');

const shortenUrl = async (longUrl) => {
  try {
    const urlId = nanoid(10);
    await redis.set(urlId, longUrl);
    return urlId;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

const getLongUrl = async (shortUrl) => {
  try {
    const longUrl = await redis.get(shortUrl);

    return longUrl;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

module.exports = {
  shortenUrl,
  getLongUrl
}

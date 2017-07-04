/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  return longUrl + 'x';
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return shortUrl.slice(0, shortUrl.length - 1);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

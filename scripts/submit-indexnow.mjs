import fs from 'fs';
import path from 'path';
import https from 'https';

const HOST = 'www.thrivepainandwellness.com';
const KEY = '8fa3d9b0487d4615a9992fca1249b5c2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = '/Users/prajwal/.gemini/antigravity-ide/scratch/thrive-wellness-hub/public/sitemap.xml';

function extractUrlsFromSitemap(xmlContent) {
  const urls = [];
  const regex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = regex.exec(xmlContent)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

function postIndexNow(endpoint, payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint);
    const data = JSON.stringify(payload);

    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'Thrive-IndexNow-Submitter/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let resBody = '';
      res.on('data', (chunk) => (resBody += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: resBody,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('Reading sitemap.xml...');
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urls = extractUrlsFromSitemap(sitemapContent);

  console.log(`Extracted ${urls.length} URLs from sitemap.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    console.log(`Submitting to ${endpoint}...`);
    try {
      const res = await postIndexNow(endpoint, payload);
      console.log(`Response from ${endpoint}: HTTP ${res.statusCode} (${res.statusMessage || 'OK'})`);
      if (res.body) {
        console.log(`Body: ${res.body}`);
      }
    } catch (err) {
      console.warn(`Submission to ${endpoint} failed: ${err.message}`);
    }
  }

  console.log('IndexNow submission finished.');
}

main().catch(console.error);

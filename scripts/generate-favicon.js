const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_FILE = path.join(__dirname, '../public/logopink.png');
const APP_FAVICON = path.join(__dirname, '../src/app/favicon.ico');
const PUBLIC_FAVICON = path.join(__dirname, '../public/favicon.ico');

async function generateFavicon() {
  console.log('Generating favicon from:', INPUT_FILE);
  
  try {
    // Create a 32x32 favicon for browsers
    await sharp(INPUT_FILE)
      .resize(32, 32)
      .toFile(PUBLIC_FAVICON);
    
    // Create a copy for the app directory
    fs.copyFileSync(PUBLIC_FAVICON, APP_FAVICON);
    
    console.log('Favicon generated successfully');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 
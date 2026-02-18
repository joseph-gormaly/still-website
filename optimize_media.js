const fs = require('fs');
const path = require('path');

async function fixScratchMedia() {
    const filePath = '/home/pi/WORK/still-website/scratch.html';
    let content = fs.readFileSync(filePath, 'utf8');

    // Optimization 1: Use lazy loading for all images
    content = content.replace(/<img /g, '<img loading="lazy" ');

    // Optimization 2: Prioritize previews in the sidebar and popups
    // In our folder, we have _preview.jpg and _original.jpg.
    // The previous logic was prioritizing original. Let's switch it to use previews first.
    
    content = content.replace(
        /const suffix = att\.photoExif \? '_original\.jpg' : '_preview\.jpg';/,
        "const suffix = '_preview.jpg'; // Performance: Use preview by default"
    );
    
    content = content.replace(
        /const src = mediaBase \+ fileName \+ '_original\.jpg';/g,
        "const src = mediaBase + fileName + '_preview.jpg';"
    );
    
    content = content.replace(
        /const fallback = mediaBase \+ fileName \+ '_preview\.jpg';/g,
        "const fallback = mediaBase + fileName + '_original.jpg';"
    );

    fs.writeFileSync(filePath, content);
    console.log('Scratchpad optimized for speed.');
}

fixScratchMedia();

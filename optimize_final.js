const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const mediaDir = '/home/pi/WORK/still-website/assets/media/belize-field/CoMapeo_GalesPointActivity_Media_2026_02_17';

async function optimizeImages() {
    const files = fs.readdirSync(mediaDir).filter(f => f.endsWith('_original.jpg'));
    
    console.log(`Optimizing ${files.length} images...`);

    for (const file of files) {
        const inputPath = path.join(mediaDir, file);
        const outputPath = path.join(mediaDir, file.replace('_original.jpg', '_web.jpg'));
        
        // Skip if already optimized
        if (fs.existsSync(outputPath)) continue;

        try {
            const img = await loadImage(inputPath);
            
            // Calculate new dimensions (max width 1200px)
            let width = img.width;
            let height = img.height;
            if (width > 1200) {
                height = (1200 / width) * height;
                width = 1200;
            }

            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            const buffer = canvas.toBuffer('image/jpeg', { quality: 0.8 });
            fs.writeFileSync(outputPath, buffer);
            
            const originalSize = fs.statSync(inputPath).size / 1024 / 1024;
            const newSize = fs.statSync(outputPath).size / 1024 / 1024;
            console.log(`Optimized ${file}: ${originalSize.toFixed(2)}MB -> ${newSize.toFixed(2)}MB`);
        } catch (e) {
            console.error(`Error optimizing ${file}:`, e.message);
        }
    }
}

optimizeImages();

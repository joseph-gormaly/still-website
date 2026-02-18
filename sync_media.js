const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const mediaDir = '/home/pi/WORK/still-website/assets/media/belize-field/CoMapeo_GalesPointActivity_Media_2026_02_17';

async function synchronizeImageVersions() {
    const allFiles = fs.readdirSync(mediaDir);
    // Extract base IDs (e.g., '5c29eda067079aa9')
    const ids = new Set(allFiles.map(f => f.split('_')[0]).filter(id => id.length > 5));
    
    console.log(`Analyzing ${ids.size} unique image IDs...`);

    for (const id of ids) {
        const originalPath = path.join(mediaDir, `${id}_original.jpg`);
        const webPath = path.join(mediaDir, `${id}_web.jpg`);
        const previewPath = path.join(mediaDir, `${id}_preview.jpg`);

        // 1. Find the best available source
        let sourcePath = null;
        if (fs.existsSync(originalPath)) sourcePath = originalPath;
        else if (fs.existsSync(webPath)) sourcePath = webPath;
        else if (fs.existsSync(previewPath)) sourcePath = previewPath;

        if (!sourcePath) continue;

        try {
            const img = await loadImage(sourcePath);
            
            // Create Web Version (1200px max)
            if (!fs.existsSync(webPath)) {
                let w = img.width, h = img.height;
                if (w > 1200) { h = (1200/w)*h; w = 1200; }
                const canvas = createCanvas(w, h);
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, w, h);
                fs.writeFileSync(webPath, canvas.toBuffer('image/jpeg', { quality: 0.8 }));
                console.log(`Generated WEB for ${id}`);
            }

            // Create Preview Version (300px max)
            if (!fs.existsSync(previewPath)) {
                let w = img.width, h = img.height;
                if (w > 300) { h = (300/w)*h; w = 300; }
                const canvas = createCanvas(w, h);
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, w, h);
                fs.writeFileSync(previewPath, canvas.toBuffer('image/jpeg', { quality: 0.7 }));
                console.log(`Generated PREVIEW for ${id}`);
            }
            
            // Note: If 'original' is missing, we treat 'web' as the original for the UI
            if (!fs.existsSync(originalPath)) {
                console.log(`Note: Original missing for ${id}, using next best version.`);
            }

        } catch (e) {
            console.error(`Error processing ${id}:`, e.message);
        }
    }
}

synchronizeImageVersions();

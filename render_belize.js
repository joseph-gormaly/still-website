const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function renderBelizeMap() {
    const width = 1200;
    const height = 800;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // 1. Mock Satellite Background (Dark/Rich Greens)
    ctx.fillStyle = '#0a2a0a';
    ctx.fillRect(0, 0, width, height);
    
    // Add some "terrain" texture
    for(let i=0; i<200; i++) {
        ctx.fillStyle = `rgba(0, ${Math.random()*50 + 50}, 0, 0.1)`;
        ctx.beginPath();
        ctx.arc(Math.random()*width, Math.random()*height, Math.random()*100, 0, Math.PI*2);
        ctx.fill();
    }

    // 2. Data from JSON
    const observations = [
        { lat: 17.1882582, lon: -88.3334091, type: "Observation", note: "Test" },
        { lat: 17.1882575, lon: -88.3334305, type: "Camp", note: "Field" },
        { lat: 17.1882362, lon: -88.3333745, type: "Building", note: "Community Center/Workshop" },
        { lat: 17.1882152, lon: -88.3334412, type: "Building", note: "Community Centre" },
        { lat: 17.1882538, lon: -88.33345,   type: "Building", note: "Community shelter" },
        { lat: 17.1882681, lon: -88.3334339, type: "Building", note: "Community Center" },
        { lat: 17.1882634, lon: -88.3334238, type: "Building", note: "Community Center" },
        { lat: 17.188243,  lon: -88.3334292, type: "Building", note: "Community" },
        { lat: 17.1882469, lon: -88.3334349, type: "Activity", note: "Fishing" },
        { lat: 17.1882444, lon: -88.3334228, type: "Aeroway",  note: "Airstrip" },
        { lat: 17.188244,  lon: -88.3334232, type: "Aeroway",  note: "White Ridge Airstrip" }
    ];

    // Scale calculation (The points are extremely close together, so we need a tight zoom)
    // Points are roughly between 17.18821 and 17.18827 Lat, and -88.33337 and -88.33345 Lon.
    const padding = 100;
    const drawX = (lon) => padding + ((lon - (-88.33346)) / 0.00010) * (width - 2*padding);
    const drawY = (lat) => (height - padding) - ((lat - 17.18820) / 0.00008) * (height - 2*padding);

    // 3. Draw Grid/Scale
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for(let i=0; i<width; i+=100) { ctx.beginPath(); ctx.moveTo(i,0); ctx.lineTo(i,height); ctx.stroke(); }
    for(let i=0; i<height; i+=100) { ctx.beginPath(); ctx.moveTo(0,i); ctx.lineTo(width,i); ctx.stroke(); }

    // 4. Plot Points
    observations.forEach(obs => {
        const x = drawX(obs.lon);
        const y = drawY(obs.lat);

        // Marker Glow
        const grad = ctx.createRadialGradient(x, y, 2, x, y, 15);
        grad.addColorStop(0, obs.type === 'Aeroway' ? '#3498db' : (obs.type === 'Activity' ? '#f1c40f' : '#27ae60'));
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(x, y, 15, 0, Math.PI*2); ctx.fill();

        // Main Marker
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI*2); ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Arial';
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'black';
        ctx.fillText(obs.note, x + 10, y + 5);
        ctx.shadowBlur = 0;
    });

    // 5. Header / UI
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, width, 60);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('STILL Field Research: Belmopan, Belize', 30, 40);
    ctx.font = '14px Arial';
    ctx.fillText('Coordinate Center: 17.1882° N, 88.3334° W | Feb 17, 2026', 30, 90);

    // Legend
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(width - 200, height - 120, 180, 100);
    const legend = [['#27ae60', 'Building/Camp'], ['#3498db', 'Infrastructure'], ['#f1c40f', 'Activity']];
    legend.forEach((item, i) => {
        ctx.fillStyle = item[0];
        ctx.beginPath(); ctx.arc(width - 180, height - 100 + (i*25), 6, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '12px Arial';
        ctx.fillText(item[1], width - 165, height - 96 + (i*25));
    });

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('belize-research-map.png', buffer);
    console.log('Map rendered successfully.');
}

renderBelizeMap();

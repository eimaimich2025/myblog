document.addEventListener("DOMContentLoaded", function() {
    // Canvas setup for wavy background
    const canvas = document.createElement('canvas');
    document.body.insertBefore(canvas, document.body.firstChild);
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numSets = 3; // Number of sets of circles
    const numCircles = 5; // Number of waving circles in each set
    const baseRadius = 30; // Starting radius of the smallest circle
    const radiusIncrement = 20; // Additional radius per circle
    const maxAttempts = 50; // Maximum attempts to place a set without overlapping

    class WavingCircle {
        constructor(x, y, radius, amplitude, frequency, speed) {
            this.x = x; // Central x-coordinate for the set
            this.y = y; // Central y-coordinate for the set
            this.radius = radius; // Radius of this circle
            this.amplitude = amplitude; // Amplitude of the wave
            this.frequency = frequency; // Frequency of the wave
            this.speed = speed; // Movement speed of the wave
        }

        draw() {
            ctx.beginPath();
            let totalAngle = 0;
            while (totalAngle <= 360) {
                let rad = totalAngle * Math.PI / 180; // Convert angle to radians
                let wave = this.amplitude * Math.sin(this.frequency * totalAngle * (Math.PI / 180) + this.phase); // Calculate wave offset
                let x = this.x + (this.radius + wave) * Math.cos(rad); // X coordinate
                let y = this.y + (this.radius + wave) * Math.sin(rad); // Y coordinate
                if (totalAngle === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                totalAngle += 0.5; // Smaller angle step for smoother circle
            }
            ctx.closePath();
            ctx.strokeStyle = "#888"; // Gray color
            ctx.stroke();
        }

        update() {
            this.phase += this.speed; // Update phase for animation
            this.draw();
        }
    }

    let sets = [];
    function init() {
        sets = [];
        while (sets.length < numSets) {
            let validPlacement = false;
            let attempts = 0;
            let amplitude = 10 + Math.random() * 15; // Randomized amplitude for each set
            let frequency = 0.1 + Math.random() * 0.4; // Randomized frequency for each set
            let speed = 0.005 + Math.random() * 0.01; // Randomized speed for each set
            while (!validPlacement && attempts < maxAttempts) {
                let centerX = Math.random() * canvas.width;
                let centerY = Math.random() * canvas.height;
                let maxRadius = baseRadius + (numCircles - 1) * radiusIncrement;
                if (isPlacementValid(centerX, centerY, maxRadius * 2)) {
                    let circles = [];
                    for (let i = 0; i < numCircles; i++) {
                        let radius = baseRadius + i * radiusIncrement;
                        circles.push(new WavingCircle(centerX, centerY, radius, amplitude, frequency, speed));
                    }
                    sets.push(circles);
                    validPlacement = true;
                }
                attempts++;
            }
        }
    }

    function isPlacementValid(x, y, minDist) {
        return sets.every(set => {
            let existingX = set[0].x;
            let existingY = set[0].y;
            return Math.sqrt((x - existingX) ** 2 + (y - existingY) ** 2) > minDist;
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sets.forEach(set => set.forEach(circle => {
            circle.phase = circle.phase || 0; // Initialize phase if not set
            circle.update();
        }));
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init(); // Reinitialize sets on resize to adjust for new dimensions
    });
});


function toggleBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = banner.style.width === '250px' ? '0' : '250px';
}

// Close the side banner
function closeBanner() {
    var banner = document.getElementById("mySideBanner");
    banner.style.width = '0';
}

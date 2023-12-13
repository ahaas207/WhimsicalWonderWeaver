// hearticon.js: Script for creating a pixel heart icon

function createHeart() {
    const heartLayout = [
        [0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1],
        [1]
    ];

    const pixelHeart = document.querySelector('.pixel-heart');

    heartLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        row.forEach(pixel => {
            const pixelDiv = document.createElement('div');
            pixelDiv.classList.add('pixel');
            if (pixel === 0) {
                pixelDiv.classList.add('off');
            }
            rowDiv.appendChild(pixelDiv);
        });

        pixelHeart.appendChild(rowDiv);
    });
}

document.addEventListener('DOMContentLoaded', createHeart);

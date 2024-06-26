document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const formContainer = document.getElementById('form-container');
    const addForm = document.getElementById('add-form');
    const itemList = document.getElementById('item-list');
    const quickAddList = document.getElementById('quick-add-list');

    const popularItems = [
        { type: 'Anime', name: 'Naruto' },
        { type: 'Anime', name: 'One Piece' },
        { type: 'Anime', name: 'Attack on Titan' },
        { type: 'Anime', name: 'My Hero Academia' },
        { type: 'Anime', name: 'Demon Slayer' },
        { type: 'Manga', name: 'Berserk' },
        { type: 'Manga', name: 'One Piece' },
        { type: 'Manga', name: 'Attack on Titan' },
        { type: 'Manga', name: 'My Hero Academia' },
        { type: 'Manga', name: 'Demon Slayer' },
    ];

    popularItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.type}: ${item.name} 
            <button class="quick-add-button">Add</button>`;
        quickAddList.appendChild(listItem);

        listItem.querySelector('.quick-add-button').addEventListener('click', () => {
            addItemToList(item.type, item.name, 0, 0); 
        });
    });

    addButton.addEventListener('click', () => {
        formContainer.classList.toggle('hidden');
    });

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const progress = document.getElementById('progress').value;

        addItemToList(type, name, rating, progress);

        addForm.reset();
        formContainer.classList.add('hidden');
    });

    function addItemToList(type, name, rating, progress) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${type}: ${name} - Rating: <span class="rating">${rating}</span>
            <button class="edit-rating-button">Edit Rating</button> - Progress: <span class="progress">${progress}</span>
            <button class="increment-button">+</button><button class="decrement-button">-</button>`;

        itemList.appendChild(listItem);

        listItem.querySelector('.increment-button').addEventListener('click', () => {
            const progressElement = listItem.querySelector('.progress');
            progressElement.textContent = parseInt(progressElement.textContent) + 1;
        });

        listItem.querySelector('.decrement-button').addEventListener('click', () => {
            const progressElement = listItem.querySelector('.progress');
            if (parseInt(progressElement.textContent) > 0) {
                progressElement.textContent = parseInt(progressElement.textContent) - 1;
            }
        });

        listItem.querySelector('.edit-rating-button').addEventListener('click', () => {
            const ratingElement = listItem.querySelector('.rating');
            const newRating = prompt('Enter new rating:', ratingElement.textContent);
            if (newRating !== null && !isNaN(newRating) && newRating >= 0 && newRating <= 10) {
                ratingElement.textContent = newRating;
            } else {
                alert('Please enter a valid rating between 0 and 10.');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const formContainer = document.getElementById('form-container');
    const addForm = document.getElementById('add-form');
    const itemList = document.getElementById('item-list');

    addButton.addEventListener('click', () => {
        formContainer.classList.toggle('hidden');
    });

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const progress = document.getElementById('progress').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `${type}: ${name} - Rating: ${rating} - Progress: <span class="progress">${progress}</span>
            <button class="increment-button">+</button>`;

        itemList.appendChild(listItem);

        listItem.querySelector('.increment-button').addEventListener('click', () => {
            const progressElement = listItem.querySelector('.progress');
            progressElement.textContent = parseInt(progressElement.textContent) + 1;
        });

        addForm.reset();
        formContainer.classList.add('hidden');
    });
});

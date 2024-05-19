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

        const listItem = document.createElement('li');
        listItem.textContent = `${type}: ${name} - Rating: ${rating}`;

        itemList.appendChild(listItem);

        addForm.reset();
        formContainer.classList.add('hidden');
    });
});


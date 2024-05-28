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

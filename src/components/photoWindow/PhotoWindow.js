import React from 'react';

const PhotoWindow = () => {

    return (
        <div id='photoWindow'>
            <label id='label'>
                <input type='file' id='fileInput' multiple='false' accept='image/*'/>
                <span id='fakeUploadLabel'>Перетяните изображение</span>
            </label>
            <button id='uploadPhotoButton'>Загрузить</button>
            <button id='cancelPhotoButton'>Отмена</button>
        </div>
    )
};

export default PhotoWindow;
let editProfileButton = document.querySelector('.profile__edit-bttn');
let closePopupButton = document.querySelector('.popup__close-bttn');
let openPopup = document.querySelector('.popup_opend');
openPopup.classList.remove('pop_opend');

editProfileButton.addEventListener('click', function() {
    openPopup.classList.add('popup_opend');
});

closePopupButton.addEventListener('click', function() {
    openPopup.classList.remove('popup_opend');
});




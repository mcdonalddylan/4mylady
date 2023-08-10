;(function () {
    const BIRTHDAY_DATE = new Date();
    const birthdayValue = 0;

    const birthdayNumber = document.querySelector('.birthday-number');
    birthdayNumber.textContent = 'yoyo';
})();

function submitForm (event) {
    event.preventDefault();

    const favoriteMemoryComment = event.currentTarget['fav-mem'].value;
    console.log('favorite memory comment: ', favoriteMemoryComment);

    //TODO: do something with the favorite memory comment
}
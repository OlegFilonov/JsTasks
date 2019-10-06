/**
 * Магия DOM.
 * Пора попробовать себя в роли иллюзиониста. При клике на кнопку "Телепорт",
 * Джем телепортируется и пропадает из DOM, мячик при этом грустно падает
 * и приобретает class .bouncing. При нажатии на кнопку "Невидимка", Джем остается
 * на месте, но становится невидимой. Мячик остается на её голове.
 * Разрешается добавить id один раз.
 *
 */

window.addEventListener("load", function(event) {
    const buttonTel = document.getElementsByClassName("buttons")[0];
    const buttonInv = document.getElementsByClassName("buttons")[1];

    buttonTel.addEventListener("click", function () {
        document.getElementsByClassName('ball')[0].classList.add("bouncing");
        document.getElementsByTagName('img')[0].remove();
    });

    buttonInv.addEventListener("click", function () {
        document.getElementsByClassName('wrapper girl')[0].style.visibility='hidden';

    })
})
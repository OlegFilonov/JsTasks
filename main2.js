/**
 * Обучаам баристу инвентаризации.
 * Делается заказ, бариста проверяет, есть ли в меню такие кофе и печенье,
 * сверяется с рецептом, смотрит наличие ингредиентов
 * и готовит заказ / извиняется и дозаказывает ингредиенты
 */

const recipes = {
    'банановый латте': ['банановый сироп', 'молоко', 'кофе'],
    'черничный капучино': ['черничный сироп', 'молоко', 'кофе'],
    'баунти раф': ['раф-основа', 'кокосовое молоко', 'розовая соль'],
    'американо': ['кофе']
};

const cookies = ['шоколадное', 'овсяное', 'мятное', 'малиновое'];

const box = {
    'банановый сироп': 2,
    'черничный сироп': 0,
    'молоко': 10,
    'кофе': 10,
    'раф-основа': 3,
    'кокосовое молоко': 0,
    'розовая соль': 1
};

function checkOrderItem(coffeeOrder, cookieOrder) {
    if(Object.keys(recipes).includes(coffeeOrder)) {
        checkIngredients(coffeeOrder);
    if(cookies.includes(cookieOrder)) {
        checkCookie = 1;
        return checkCookie;
    } else {
        checkCookie = 0;
        console.log ("-- Памятка: нужно заказать " + cookieOrder + ' печенье');
        return checkCookie;
    }
    }
}

function checkIngredients(coffee){
    for (let i=0; i<recipes[coffee].length; i++) {
        if((Object.keys(box).includes(recipes[coffee][i]))&&(box[recipes[coffee][i]]>0)) {
            box[recipes[coffee][i]] -= 1;
        } else {
            checkCoffee = 0;
            console.log ("-- Памятка: нужно заказать " + coffee);
            return checkCoffee;
        }
    } checkCoffee = 1;
}

// Hi! I'm not sure if these variables should be there. I've tried to put them inside different functions,
// but I failed. Also, I know that my code looks quite different from yours. But until now it's the longest and
// the most difficult things I've ever made.

let checkCoffee = 0;
let checkCookie = 0;
function order(coffee, cookie) {
    checkOrderItem(coffee, cookie);
    let result = String(checkCoffee) + String(checkCookie);
    const dictionary = {
        allOk:`Вот ваш заказ: ${coffee} и ${cookie} печенье! Хорошего дня!`,
        allNotOk:`Мы не можем обработать ваш заказ, извините.`,
        noCookie:`К сожалению, у нас нет такого печенья. Вот ваш ${coffee}`,
        noCoffee:`К сожалению, сейчас не можем приготовить ${coffee}. Вот ваше ${cookie} печенье`,
    };

    switch (result) {
        case '00':
            console.log(dictionary.allNotOk);
            break;
        case '01':
            console.log(dictionary.noCoffee);
            break;
        case '10':
            console.log(dictionary.noCookie);
            break;
        case '11':
            console.log(dictionary.allOk);
            break;
    }

    console.log('-----Следующий заказ-----')
}

order('американо', 'мятное')
order('баунти раф', 'апельсиновое')
order('банановый латте', 'мятное')
order('баунти раф', 'малиновое')

// Ожидаемый вывод //
/*
"Вот ваш заказ: американо и мятное печенье! Хорошего дня!"
"-----Следующий заказ-----"
"--Памятка: Нужно заказать кокосовое молоко"
"Мы не можем обработать ваш заказ, извините."
"-----Следующий заказ-----"
"Вот ваш заказ: банановый латте и мятное печенье! Хорошего дня!"
"-----Следующий заказ-----"
"--Памятка: Нужно заказать кокосовое молоко"
"К сожалению, сейчас не можем приготовить баунти раф. Вот ваше малиновое печенье"
"-----Следующий заказ-----"
*/

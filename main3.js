/** Бабулькины рецепты.
 * На чердаке нашлись несколько тетрадок с рецептами кофе от бабушки, она была еще та любительница этого напитка.
 * В меню уже был раздел с её рецептом, 'oldfashion'. Теперь вы хотите удалить этот раздел и создать новый (grannys), со всеми известными
 * бабулькиными рецептами (из текущего oldfashion тоже). Цена будет на все одна - 140.
 * Обновите меню (создайте функцию menuRenovation, обновляющую текущее меню)
 */

const myCoffeeShopMenu = {
    classic: [{'latte': 130}, {'cappuccino': 120}, {'americano': 80}],
    author: [{'banana raf': 150}, {'cherry pie latte': 150}],
    ethic: [{'vegan apple cookie latte': 190}],
    oldfashion: [{'cezve turkish delight': 140}]
};

const grannysNote1 = ['hot sand coffee', 'brazilian night dark roast'];
const grannysNote2 = ['Midterranian delux', 'Black Sea Flat white'];

function menuRenovation(){
    const grannysNote3 = Object.keys(myCoffeeShopMenu.oldfashion[0]);
    delete myCoffeeShopMenu.oldfashion;
    let grannysNotes = grannysNote1.concat(grannysNote2).concat(grannysNote3);

    myCoffeeShopMenu.grannys = [];
    for (let i=0; i<grannysNotes.length; i++) {
        let nameRecipe = grannysNotes[i];
        myCoffeeShopMenu.grannys.push({});
        myCoffeeShopMenu.grannys[i][nameRecipe] = 140;

        // It works, but... It looks ugly, to my mind. I've not seen the recommended solution yet.

    }
}

menuRenovation()
console.log(myCoffeeShopMenu)
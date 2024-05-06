
// // console.log(testArrayFind.find((element, index, array) => {

// // }));

// const users = [
//     { id: 1, name: 'Влад' },
//     { id: 1, name: 'Петя' },
//     { id: 1, name: '' },
//     { id: 1, name: 'Дима' },
// ]

// function foo(userList, targetName) {
//     const foundObj = userList.find((element) => {
//         return !element.name
//     })
// }

// УсловиеЖ
// Напишите функцию modifyTaskList(tasks, indexToRemove, taskToAdd, indexToReplace, newTask),
// которая принимает массив задач tasks, индекс задачи для удаления indexToRemove, новую задачу taskToAdd,
// индекс для замены indexToReplace и новую задачу newTask.
// Функция должна изменить массив tasks в соответствии с заданными действиями,
// используя метод splice().
// const tasks = ['проснуться', 'поработать', 'погулять', 'поесть'];
// function modifyTaskList(tasks, indexToRemove, taskToAdd, indexToReplace, newTask){
//     // удаление
// tasks.splice(indexToRemove, 1);

// // добавление
// tasks.splice(0, 0, taskToAdd);

// // добавление с заменой
// tasks.splice(indexToReplace, 0, newTask);
// }

// modifyTaskList(tasks, 3, 'learn js', 1, 'отдыхать')


/*
Условие Задачи 3
Условие:
У вас есть массив shoppingList, который представляет ваш список покупок.
Вы хотите создать копию этого списка, чтобы иметь возможность вносить изменения в копию,
не затрагивая исходный список. Кроме того, вы хотите извлечь только часть списка,
чтобы поделиться этой информацией с другом.
Напишите функцию copyAndExtractList(shoppingList, startIndex, endIndex), которая принимает массив shoppingList,
начальный индекс startIndex и конечный индекс endIndex, и возвращает копию списка, а также новый массив,
содержащий элементы из shoppingList, начиная с startIndex и заканчивая endIndex (не включительно).
Возвращаемое значение должен быть объект, содержащий исходную поверхностную копию списка, а также извлеченный список
(copy, extracted)
*/
// const shoppingList = ['Яблоки', 'Молоко', 'Хлеб', 'Яйца', 'Масло', 'Сахар', 'Мука']; 

// function copyAndExtractList(shoppingList, startIndex, endIndex) {
//     let extracted = shoppingList.slice(startIndex, endIndex);
//     let copy = shoppingList.slice();
//  return {copy,extracted }
// }
// let result = copyAndExtractList (shoppingList, 0,    2)
// console.log(result);


// const employees = [
//     { name: 'Иван', position: 'Разработчик', salary: 3000 },
//     { name: 'Мария', position: 'Дизайнер', salary: 2500 },
//     { name: 'Алексей', position: 'Тестировщик', salary: 2800 }
// ]
// function displayEmployeeInfo(employees) {
//     console.log(employees);
// }
// employees.forEach(displayEmployeeInfo)

const arr = [
    {product: 'Кубик рубик', price: 20},
    {product: 'шкаф', price:110},
    {product: 'стол', price: 80},
]
// let res = 0;
// function summPrice (arr) {
//     let res = arr.reduce ((summa, item) =>
//      summa + item.price, 0)
//     console.log(res);
// }

// summPrice(arr)




let newAraay = [];
newAraay = arr.map( item => {
return item.price
})
console.log(newAraay);
console.log(newAraay.join(','));



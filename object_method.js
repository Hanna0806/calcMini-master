// const obj = {
//     name: 'Vlad',
//     age: 30,
//     car: 'audi'
// }
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const colorArray = ['black', 'red']

// let value1 = colorArray[0];
// let value2 = colorArray[1];

// let [value1D1, value1D2] = ['black', 'red'];
// console.log(value1D1, value1D2);

// const carList = ['audi', ' shkoda', 'bmw'];
// let myCar = carList[0];
// let brotCar = carList[1];
// let sisterCar = carList[2];

// let [myCarD, brotCarD, sisterCarD] = ['audi', ' skoda', 'bmw'];
// console.log(myCarD, brotCarD, sisterCarD);


// const carList = [undefined, null, '', NaN,  ,false, 'audi', ' skoda', {name;'vLAD'}]
// const [
// elem1 = 'value1',
// elem2 = 'value2',
// elem3 = 'value3',
// elem4 = 'value4',
// elem5 = 'value5',
// elem6 = 'value6',
// elem7 = 'value7',
//  ] = carList;

// const arrTest = ['a', [1, [{name:'Vlad'}]]];

// const [
//     elem1,
//     [elem2,[elem3]],
// ] = arrTest

// console.log(elem1, elem2, elem3);

// let obj = {
//     price: 30,
//     product: 'sss'
// }
// let {price, product} = obj;
// console.log(price);
// console.log(name);
// console.log(age);

// let arr = [1,2,3];

// let arr1 = arr.slice();
// let arr2 = [...arr];
// let arr3 = arr.concat([]);
// let arr4 = arr.map((elem) => elem);
// let arr5 = Array.from(arr);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);



function randomNums (num) {
    let arr = [];
    for (let i = 0; i< num; i++) {
        arr.push(i+1)
    }



    const replaceIndex = getRandom (0, num);



    
    console.log(arr);
    return arr
}

randomNums(10);
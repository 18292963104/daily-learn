// 两数相加之和为一个数

const arr1 = [1, 2, 3, 5, 9]
const target = 10

function twoSum(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(target - arr[i])) {
            return [i, arr.indexOf(target-arr[i])]
        }        
    }
}

console.log(twoSum(arr1, 6));

//quick sort

var arr = [3, 1, 4, 6, 5, 7, 2];

function quickSort(arr){
    if(arr.length === 0 || arr.length === 1) return arr
    const cIndex = Math.floor(arr.length / 2)
    const c = arr.splice(cIndex, 1)
    const l = []
    const r = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <  c) {
            l.push(arr[i])
        } else {
            r.push(arr[i])
        } 
    }
    return [...quickSort(l), ...c, ...quickSort(r)]
}

console.log(quickSort(arr));

// bubleSort

function bubleSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] <= arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

console.log(bubleSort(arr));
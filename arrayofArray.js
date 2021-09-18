function arrayOfArray(arr){
    var country = []
    for(var i=0; i<arr.length; i++){
        let subArr = []
        subArr.push(arr[i],arr[i].slice(0, 3),arr[i].length)
        country.push(subArr)
    }
    return country
}



const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

console.log(arrayOfArray(countries))
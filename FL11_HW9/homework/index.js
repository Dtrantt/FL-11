const getNumbers = str => {
    let res = [];

    for (let i = 0; i < str.length; i++) {
        if(parseInt(str[i])) {
            res.push(parseInt(str[i]));
        }
    }

    return res;
}

const findTypes = (...args) => {
    let countTypes = {};
    let dataType;

    for(let i = 0; i < args.length; i++) {
        dataType = typeof args[i];

        if(countTypes.hasOwnProperty(dataType)) {
            countTypes[dataType]++;
        } else {
            countTypes[dataType] = 1;
        }
    }

    return countTypes;
}

const executeforEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

const mapArray = (array, callback) => {
    let newArray = [];
    executeforEach(array, el => newArray.push(callback(el)));

    return newArray;
}

const filterArray = (array, callback) => {
    let newArray = [];

    executeforEach(array, el => { 
        if(callback(el)) { 
            newArray.push(el);
        }
    });

    return newArray;
}

const showFormattedDate = date => {
    let monthList = [ 
        'Jan', 
        'Feb', 
        'Mar', 
        'Apr', 
        'May', 
        'Jun', 
        'Jul', 
        'Aug', 
        'Sep', 
        'Oct', 
        'Nov', 
        'Dec' 
    ];

    return `Date: ${monthList[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

const canConvertToDate = dateStr => !isNaN(new Date(dateStr));

const daysBetween = (firstDate, secondDate) => { 

    const oneSecondsInMilli = 1000;
    const oneMinuteInSeconds = 60;
    const oneHourInMinutes = 60;
    const HoursPerDay = 24;
    let day = 0;

    day = (secondDate - firstDate) / (oneSecondsInMilli * oneMinuteInSeconds * oneHourInMinutes * HoursPerDay);

    return day;
}

let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]
  

const getAmountOfAdultPeople = data => {
    const dayInYear = 365;
    const age = 18;
    let countOfPeople = [];

    countOfPeople = filterArray(data , el => 
        daysBetween(new Date(el['birthday']), new Date()) / dayInYear >= age
    );

    return countOfPeople.length;
}

const keys = obj => {
    let allKeys = [];

    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            allKeys.push(key);
        }
    }

    return allKeys;
}

const values = obj => {
    let allValues = [];

    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            allValues.push(obj[key]);
        }
    }
    
    return allValues;
}
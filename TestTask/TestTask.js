const chooseBestDistance = (t, k, ls) => {
    //myCodeStart
    const isPositive = (n) => { return n > 0;}         //function to check if items are positive
    const isInt = (n) => { return (n ^ 0) === n;}       //function to check if items are integer
    if (k <= ls.length && k >= 1 && ls.length >= 1 && ls.every(isPositive) && ls.every(isInt)) { // initial check of input
        let arr = ls;                   //replication of ls to avoid changes of initial array
        arr.sort();                     //sort array to minimise iterations
    const s = (a, b) => a + b;          //function of sum
        let cities = [];                //array for saving best distances
        for (let j = 0; j <= arr.length - 1; j++) {                 //cycle for finding best distance triple set
            let c = []                                              //array for saving current distances
            let i = j
            for (i; c.length <= k && i <= arr.length - 1; i++) {    //cycle for finding distance sets
                let sumMiles = c.reduce(s, 0);                      //current sum
                let item = arr[arr.length - 1 - i];                 //current item of array
                if (sumMiles < t && sumMiles + item <= t) {
                    c.push(item);                                   //creation of set
                }

            }
            if (c.reduce(s, 0) >= cities.reduce(s, 0) && c.reduce(s, 0) <= t && c.length === k) {
                cities = c;                                         //creation of best triple set

            }
        }
        return cities.reduce(s, 0)                                  // return best distance
    }
    //myCodeEnd
    return null;
}

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseBestDistance(163, 3, [50]); // null


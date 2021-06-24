const chooseBestDistance = (t, k, ls) => {
    //myCodeStart
    const isPositive = (n) => {
        return n > 0;
    }         //function to check if items are positive
    const isInt = (n) => {
        return (n ^ 0) === n;
    }              //function to check if items are integer
    const s = (a, b) => a + b;              //function of sum
    if (k <= ls.length && k >= 1 && ls.length >= 1 && ls.every(isPositive) && ls.every(isInt)) { // initial check of input
        const c = () => {
            let res = null;
            const combinations = (arr, k, start, idx, current) => {
                if (idx === k) {
                    res.push([...current]);
                    return;
                }
                for (let i = start; i < arr.length; i += 1) {
                    current[idx] = arr[i];
                    combinations(arr, k, i + 1, idx + 1, current);
                }
            }
            return (arr, k) => {
                res = [];
                combinations(arr, k, 0, 0, []);
                const temp = res;
                res = null;
                return temp;
            };
        }
        const combine = (c());
        //
        let combinations = combine(ls, k)   //create combinations
        let bestSum = 0;
        combinations.forEach(c => {         //choose best sum
            let sum = c.reduce(s, 0);
            if(sum >= bestSum && sum <= t ){
                bestSum = sum;
            }
        } );
        return bestSum
    }
    //myCodeEnd
    return null;
}

chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseBestDistance(163, 3, [50]); // null

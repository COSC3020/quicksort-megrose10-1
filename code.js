function quicksort(array) {
    if(array.length < 1) {
        return array;
    }
    let quickQueue = [];
    quickQueue.push(0);
    quickQueue.push(array.length - 1);
    //console.log(quickQueue);
    while(quickQueue.length > 0) {
        let hi = quickQueue.pop();
        //console.log(quickQueue);
        let lo = quickQueue.pop();
        //console.log("hi = " + hi);
        //console.log("lo = " + lo);
        if(hi <= lo) continue;
        let middle = Math.floor((lo + hi) / 2);
        //let pIndex = low;
        //console.log("test for if hi > lo");
        //console.log(pIndex);

        if(array[middle] < array[lo]) {
            let tmp = array[lo];
            array[lo] = array[middle];
            array[middle] = tmp;
        }
        //console.log(array);

        if(array[hi] < array[middle]) {
            let tmp = array[middle];
            array[middle] = array[hi];
            array[hi] = tmp;
        }
        //console.log(array);
        let p = array[lo];
        //console.log(pivot);
        //console.log(array);
        let pIndex = lo + 1;
        //console.log(pIndex2);
        for(let i = lo + 1; i <= hi; i++) {
            if(array[i] < p) {
                //console.log(array[hi]);
                let tmp = array[i];
                array[i] = array[pIndex];
                array[pIndex] = tmp;
                pIndex++;
            }
        }
            //console.log(array);
            //console.log(pIndex2);
            //let pIndex3 = pIndex2 - 1;
        let tmp = array[lo];
        array[lo] = array[pIndex - 1];
        array[pIndex - 1] = tmp;

        quickQueue.push(lo);
        quickQueue.push(pIndex - 2);
        quickQueue.push(pIndex);
        quickQueue.push(hi);
    }
    return array;
}

//let aTest = [3,0,1,8,7,2,5,4,9,6];
//let aNewTest = quicksort(aTest);
//for(let i = 0; i<aNewTest.length;i++) {
//  console.log(aNewTest[i]);
//}

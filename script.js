const string = "tamrine JavasScript NemidonNM Baraye key";


function wordsNumber(str) {
    const lowercaseStr = str.toLowerCase();
    const splitedStr = lowercaseStr.split(" ");
    const sortedStr = splitedStr.sort();
    console.log(sortedStr)
    const data = Object.values(sortedStr.reduce((acc, cur) => {
        for (let i = 0; i < cur.length; i++) {
            const group = cur[i];
            if (!acc[group]) {
                acc[group] = { group: group, count: [cur] };
            } else {
                acc[group].count.push(cur);
            };
        };
        return acc
    }, {}));
    data.forEach((value) => value.count = value.count.length);
    console.log(data);
};

wordsNumber(string);
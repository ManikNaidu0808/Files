function calculate(n1, n2) {
    let dict1 = new Map();
    let dict2 = new Map();

    let str1 = n1.toString();
    for (let i = 0; i < str1.length; i++) {
        let digit = parseInt(str1[i]);
        if (dict1.has(digit)) {
            dict1.set(digit, dict1.get(digit) + 1);
        } else {
            dict1.set(digit, 1);
        }
    }

    let str2 = n2.toString();
    for (let i = 0; i < str2.length; i++) {
        let digit = parseInt(str2[i]);
        if (dict2.has(digit)) {
            dict2.set(digit, dict2.get(digit) + 1);
        } else {
            dict2.set(digit, 1);
        }
    }

    let freq1 = Array.from(dict1.entries()).sort((a, b) => b[1] - a[1])[0];
    let freq2 = Array.from(dict2.entries()).sort((a, b) => a[1] - b[1])[0];

    let s1 = '';
    for (let i = 0; i < str1.length; i++) {
        let digit = parseInt(str1[i]);
        if (digit !== freq1[0]) {
            s1 += str1[i];
        }
    }
    for (let i = 0; i < freq2[1]; i++) {
        s1 += freq2[0];
    }

    let s2 = '';
    for (let i = 0; i < str2.length; i++) {
        let digit = parseInt(str2[i]);
        if (digit !== freq2[0]) {
            s2 += str2[i];
        }
    }
    for (let i = 0; i < freq1[1]; i++) {
        s2 += freq1[0];
    }

    console.log("Num1 = " + s1);
    console.log("Num2 = " + s2);
}

function main() {
    calculate( 123,4)
    calculate(13145 , 455 )
}

main();

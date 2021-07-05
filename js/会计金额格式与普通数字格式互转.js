// 普通数字转会计金额格式 第一种
function toThousandsFormates(num) {
    // 判断传进来的数字是否为非空数字
    if (!isNaN(parseFloat(num))) {
        var reg = /\./g
        var newNum = Number(Number(num).toFixed(2)).toLocaleString()
        // 判断转换后的数字是否带有小数
        if (reg.test(newNum)) {
            var numArr = newNum.split('.')
            // 判断小数点后数字长度为1，则自动补0
            numArr[1] = numArr[1].length === 1 ? numArr[1] + '0' : numArr[1]
            return numArr.join('.')
        } else {
            // 整数直接在后面补上0.00
            return newNum + '.00'
        }

    } else {
        return ''
    }
}
console.log(toThousandsFormates('0')); // 0.00
console.log(toThousandsFormates('')); // ''
console.log(toThousandsFormates(966)); // 966.00
console.log(toThousandsFormates(966.3)); // 966.30
console.log(toThousandsFormates(9669228.55)); // 9,669,228.55
console.log(toThousandsFormates(96566.56954)); // 96,566.57

/* 普通数字转会计金额格式 第二种 利用 toLocaleString 的 maximumFractionDigits 
   小数最少为2为，不够则自动补0，那我们就可以用更简单的方式去做上面的事情*/
function toThousandsFormates2(num) {
    // 判断传进来的数字是否为非空数字
    if (!isNaN(parseFloat(num))) {
        var newNum = Number(Number(num).toFixed(2)).toLocaleString('zh', { minimumFractionDigits: 2 })
        return newNum

    } else {
        return ''
    }
}

console.log(toThousandsFormates2('0')); // 0.00
console.log(toThousandsFormates2('')); // ''
console.log(toThousandsFormates2(966)); // 966.00
console.log(toThousandsFormates2(966.3)); // 966.30
console.log(toThousandsFormates2(9669228.55)); // 9,669,228.55
console.log(toThousandsFormates2(96566.56954)); // 96,566.57

// 会计金额格式转为普通数字
function rMoney(num) {
    return parseFloat(num.replace(/[^\d\\.-]/g, ''))
}
console.log(rMoney('96,566.57')); // 96566.57
console.log(rMoney('966.30')); // 966.3
console.log(rMoney('9,669,228.55')); // 9669228.55
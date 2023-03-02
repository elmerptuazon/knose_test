function printSymbols(n) {
    for(let i = 1; i <= n; i++){
        console.log(Array.apply(null, Array(n-i)).map(function (x, i) { return "-"}).join("") + Array.apply(null, Array(i)).map(function (x, i) { return "*"}).join(""))
    }
}
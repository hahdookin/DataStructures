const myObj = {
    1: 1,
    2: "b",
    3: "c"
}

for (let prop in myObj) {
    console.log(`${prop}: ${myObj[prop]}`)
}
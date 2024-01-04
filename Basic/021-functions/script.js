function say() {
    console.log("Hello world!");
}
function sayMsg(name, msg) {
    console.log(`${name} ${msg}`);
}

say();
sayMsg("Ahmet", "Hello world!");

function ageCalc(birthyear) {
    return new Date().getFullYear() - birthyear;
}

console.log(ageCalc(1995));

function pensionCalc(birthyear, name) {
    let age = ageCalc(birthyear);
    let remainingYear = 65 - age;
    if (remainingYear > 0) {
        console.log(`${name} Emekliğinize ${remainingYear} yıl kaldı`);
    } else {
        console.log(`${name} Zaten emekli olmuşsunuz.`);
    }
}

pensionCalc(1950, "Ahmet");

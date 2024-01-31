var name = "Ahmet"; // global scope

const city = "Ankara"; // const ile tanımladığımız değişkenleri bir daha değiştiremeyiz.

function print() {
    var name = "Mehmet";
    var age = 27;
    console.log("function scope", name, age);
}

print();

if (true) {
    let gender = "Female";
    let name = "Buse";
    console.log(name, gender);
}

console.log(name);

// fonksiyonlar kendi scope alanlarını oluşturur.
// if-else-else if gibi block içerisinde yeni bir scope oluşmaz.

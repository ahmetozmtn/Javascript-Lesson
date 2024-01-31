// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

let mezuniyet = "üniversite";
let yas = 18;

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) {
    console.log("Ehliyet alabilir.");
} else {
    console.log("Ehliyet alamaz.");
}

// and => &&
// true, true => true
// true, false => false

// or => ||
// true, true => true
// true, false => true

let soru = {
    soruMetni: "JS paket yönetim sistemi nedir?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "NPM",
        c: "Yarn",
    },
    cevap: "b",
    cevapKontrolEt: function (cevap) {
        return cevap == this.cevap;
    },
};

let soru2 = {
    soruMetni: ".net paket yönetim sistemi nedir?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Nuget",
        c: "Pip",
    },
    cevap: "b",
    cevapKontrolEt: function (cevap) {
        return cevap == this.cevap;
    },
};

console.log(soru.soruMetni);
console.log(soru.cevapKontrolEt("c"));
console.log(soru2.cevapKontrolEt("b"));

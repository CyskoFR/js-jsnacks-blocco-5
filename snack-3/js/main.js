// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.

const automobili = [
    {
        marca: "marca1",
        modello: "panda",
        alimentazione: "gpl",
    },
    {
        marca: "marca2",
        modello: "model10",
        alimentazione: "gpl",
    },
    {
        marca: "marca3",
        modello: "model2",
        alimentazione: "benzina",
    },
    {
        marca: "marca4",
        modello: "model3",
        alimentazione: "gpl",
    },
    {
        marca: "marca1",
        modello: "model7",
        alimentazione: "elettrica",
    },
    {
        marca: "marca4",
        modello: "model73",
        alimentazione: "metano",
    },
    {
        marca: "marca5",
        modello: "model43",
        alimentazione: "diesel",
    },
    {
        marca: "marca7",
        modello: "model111",
        alimentazione: "gpl",
    },
    {
        marca: "marca8",
        modello: "model34",
        alimentazione: "benzina",
    },
    {
        marca: "marca6",
        modello: "model453",
        alimentazione: "metano",
    },
];

const autoBenzina = [];
const autoDiesel = [];
const autoRestanti = [];

for (let i = 0; i < automobili.length; i++) {
    if (automobili[i].alimentazione === "benzina") {
        autoBenzina.push(automobili[i]);
    } else if (automobili[i].alimentazione === "diesel") {
        autoDiesel.push(automobili[i]);
    } else {
        autoRestanti.push(automobili[i]);
    }
}
console.log("autoBenzina", autoBenzina)
console.log("autoDiesel", autoDiesel)
console.log("autoRestanti", autoRestanti)
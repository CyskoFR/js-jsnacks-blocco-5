// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varietá: "var1",
        pesoG: 220,
        lunghezzaCm: 20,
    },
    {
        varietá: "var2",
        pesoG: 240,
        lunghezzaCm: 54,
    },
    {
        varietá: "var3",
        pesoG: 266,
        lunghezzaCm: 34,
    },
    {
        varietá: "var4",
        pesoG: 280,
        lunghezzaCm: 45,
    },
    {
        varietá: "var5",
        pesoG: 200,
        lunghezzaCm: 66,
    },
    {
        varietá: "var6",
        pesoG: 455,
        lunghezzaCm: 22,
    },
    {
        varietá: "var7",
        pesoG: 324,
        lunghezzaCm: 44,
    },
    {
        varietá: "var8",
        pesoG: 654,
        lunghezzaCm: 32,
    },
    {
        varietá: "var9",
        pesoG: 666,
        lunghezzaCm: 42,
    },
    {
        varietá: "var10",
        pesoG: 1240,
        lunghezzaCm: 80,
    },
];

let totale = 0;

for (let i = 0; i < zucchine.length; i++) {
    totale += zucchine[i].pesoG
}
console.log(totale)
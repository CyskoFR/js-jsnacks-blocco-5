// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varietá: "var1",
        pesoG: 220,
        lunghezzaCm: 12,
    },
    {
        varietá: "var2",
        pesoG: 240,
        lunghezzaCm: 14,
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
        lunghezzaCm: 13,
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


const zucchineMinori15 = [];
const zucchineMaggiori15 = [];
let totalePesoMinori15 = 0;
let totalePesoMaggiori15 = 0;

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezzaCm < 15) {
        zucchineMinori15.push(zucchine[i]);
        totalePesoMinori15 += zucchine[i].pesoG;
    } else {
        zucchineMaggiori15.push(zucchine[i]);
        totalePesoMaggiori15 += zucchine[i].pesoG;
    }
}

console.log("totalePesoMaggiori15", totalePesoMaggiori15)
console.log("totalePesoMinori15", totalePesoMinori15)
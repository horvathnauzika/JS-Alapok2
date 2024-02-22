import { fuggveny } from "./fuggveny.js";
/*console.log(fuggveny(5))*/

/*var szam = 12; /*fájlszintű változó*/
/*var a = 111111;

console.log(szam)*/

function fv1(){
    var szam;
    szam+=2; /*NaN*/
    console.log(szam); /*ez nem hibaüzenet, hanem egy érték*/
    var szam = 24; /*függvényszintű változó*/
    var szam2 = 34;
    console.log(szam2);
    console.log(a)
}

/*fv1()*/
/*console.log(szam2) hibaüzenet*/
/*console.log(szam);*/

/*var-ral deklarált változók hatóköre lehet globális vagy fájlszintű vagy függvényszintű. var változó esetén is működik a hoisting, azaz deklarációkor úgy működik, mintha a hatóköre tetején hoztuk volna létre. Ha deklarációkor nem adunk értéket, akkor automatikusan az undefined értéket kapja. Az undefined egy javascript érték, nem egy hibaüzenet. Lokális változó a függvényen kívül nem értelmezhető. A lokális hatókörű változót a globális hatókörből nem érhetjük el*/

let szam = 12;

function fv2(){
    let szam2 = 24;
    console.log(szam2) /*használni akarod inicalizálás előtt*/ 
    {
    let szam2=33 /*A let hatóköre lehet globális, illetve lokális, de blokkszintű. Egy blokk a kapcsos zárójelek közötti rész*/
    console.log(szam2);
    }

    console.log(szam)
    
}

/*fv2()
console.log(szam)*/
/* console.log(szam2) hibaüzenet*/

for (let index = 0; index < 3; index++) {
    console.log(index)
    
}

//console.log(index) hibaüzenet, itt már nem érhető el az index változó

const NEV = "Béla"; /*cons-tal deklarált változók értéke később nem változtatható meg és már deklaráláskor kötelező neki értéket adni, blokkszintű lokális hatóköre van, szokás őket nagybetűvel írni*/
//nev="Jenő"




/*Lista -> azonos típusú adatok tárolására szolgáló összetett adatszerkezet, minden egyes elemnek van egy indexe, amivel hivatkozhatunk rá, mérete dinamikusan változhat, tömbnél előre meg kell mondani a méretét*/ 
let lista =["első", "második", "harmadik"]
console.log(lista) // az egész lista
console.log(lista[0]) //lista 0. eleme

console.log(lista.length) // a lista hossza

lista[10] = "tizenegyedik"
console.log(lista) // kiírja, hogy van 7 db üres hely
console.log(lista[5]) // megkapja az undefined értéket

lista.push("közvetkező elem") // lista végére, utolsó elem után beteszi ezt az elemet
console.log(lista)
lista.pop() //eltávolítja a lista végéről az utolsó elemet
console.log(lista)

lista = ["a", "b", "c"] // felül lehetett írni az elemeket, mivel let-tel let deklarálva a lista
console.log(lista)

const lista2=[11, 12, 13, 14]

//lista2 = [23,24,25] //hibaüzenet, leáll a program futása
lista2[0] = 11111111
lista2.push(22222222)
lista2.pop()
lista2.pop()
lista2.pop()
lista2.pop()
lista2.pop() // eltávolítottuk belőle az összes elemet
console.log(lista2) //konstans lista esetén a lista memóriával elfoglalt helye fix, memóriacíme nem változtatható meg, viszont az értékei megváltoztathatóak, módosíthatjuk az adott indexen lévő értéket, hozzáfűzhetünk vagy eltávolíthatjuk belőle akár az összes elemet is, a lista címe fix marad

//telefonkönyv -> név, telefonszám, kor
// objektumok
const SZEMELY1={
    nev: "Gabi",
    tel: "06-30-234-7651",
    kor: 24
}

SZEMELY1.nev="Jolán" // meg tudom változtatni a kulcsokhoz rendelt értéket
console.log(SZEMELY1.nev)
SZEMELY1.barat="true"
console.log(SZEMELY1) // javascript objektum egy olyan összetett adatszerkezet, ami összetartozó adatokat kezel egybe, kulcsérték párokból áll, a kulcsok jelentik az adott érték tulajdonságait, az értékek pedig a hozzájuk tartozó értékeket, kapcsoszárójelek közé írjuk
const SZEMELY2={
    nev: "Béla",
    tel: "06-30-354-8841",
    kor: 21,
    barat: false
}

const SZEMELYLISTA=[
    {
        nev: "Gabi",
        tel: "06-30-234-7651",
        kor: 24
    }
    ,
    {
        nev: "Béla",
        tel: "06-30-354-8841",
        kor: 21,
        barat: false
    }
]

// írjuk ki Gabi korát
console.log(SZEMELYLISTA[0].kor)
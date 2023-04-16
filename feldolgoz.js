function szamolj() {
    var szam = document.getElementById("szam").value;
    var formula = 10000000 * (1 - (3.10595602/100)) ** (100+szam*1);
    document.getElementById("megoldas").innerHTML = 'Fennamaradó populáció: ' + Math.round(Number(formula), 0) + ' egyed marad';
  }
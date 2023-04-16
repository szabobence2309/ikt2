function pontok() {
    const jovalasz1 = '1,7-2,5m';
    const jovalasz2 = 'nostenyek';
    const jovalasz3 = '2-3ev';
    const jovalasz4 = 'igen';
    var i, pontszam = 0;
    var quiz1 = document.getElementsByName('quiz1');
    var quiz2 = document.getElementsByName('quiz2');
    var quiz3 = document.getElementsByName('quiz3');
    var quiz4 = document.getElementsByName('quiz4');


    for (i = 0; i < quiz1.length; i++) {
        if (quiz1[i].checked) {
            quiz1 = quiz1[i].value;
        }
    }

    for (i = 0; i < quiz2.length; i++) {
        if (quiz2[i].checked) {
            quiz2 = quiz2[i].value;
        }
    }

    for (i = 0; i < quiz3.length; i++) {
        if (quiz3[i].checked) {
            quiz3 = quiz3[i].value;
        }
    }

    for (i = 0; i < quiz4.length; i++) {
        if (quiz4[i].checked) {
            quiz4 = quiz4[i].value;
        }
    }

    if (quiz1 == jovalasz1) {
        pontszam++;
    }
    if (quiz2 == jovalasz2) {
        pontszam++;
    }
    if (quiz3 == jovalasz3) {
        pontszam++;
    }
    if (quiz4 == jovalasz4) {
        pontszam++;
    }
    alert(pontszam + " pontot értél el!");
}
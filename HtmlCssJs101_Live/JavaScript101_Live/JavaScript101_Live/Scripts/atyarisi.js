var at1 = document.getElementById("atbir").value;
var at2 = document.getElementById("atbir").value;
var at3 = document.getElementById("atbir").value;
var at4 = document.getElementById("atbir").value;
var at5 = document.getElementById("atbir").value;

var bitis = document.getElementById("bitis").value;
var rdn1 = 0, rnd2 = 0, rnd3 = 0, rdn4 = 0, rnd5 = 0;

var konrol = false;

function Baslat() {
    yarisma = setInterval(Yarisma,1000)
}

var Yarisma = function () {
    atbir();
    atiki();
    atuc();
    atdort();
    atbes();
}
var rastgeleSayiUret = function () {
    var rdn;
    do {
        rdn = Math.floor(Math.random() * 100);
    }
    while (rdn < 50);
    return rdn;
}

function atbir() {
    if (rdn1 < bitis) {
        rdn1 += rastgeleSayiUret();
        if (rdn1 >= bitis) {
            rdn1 = bitis;
            clearInterval(yarisma);
            if (!kontrol) {
                kontrol = true;
                setTimeout(function () { alert("Kazanan at: 1"); }, 2000);
            }
            at1.style.marginLeft = bitis + "px";
        } else {
            at1.style.marginLeft = rdn1 + "px";
        }
    }
}

function atiki() {
    if (rdn2 < bitis) {
        rdn2 += rastgeleSayiUret();
        if (rdn2 >= bitis) {
            rdn2 = bitis;
            clearInterval(yarisma);
            if (!kontrol) {
                kontrol = true;
                setTimeout(function () { alert("Kazanan at: 2"); }, 2000);
            }
            at2.style.marginLeft = bitis + "px";
        } else {
            at2.style.marginLeft = rdn2 + "px";
        }
    }
}

function atuc() {
    if (rdn3 < bitis) {
        rdn3 += rastgeleSayiUret();
        if (rdn3 >= bitis) {
            rdn3 = bitis;
            clearInterval(yarisma);
            if (!kontrol) {
                kontrol = true;
                setTimeout(function () { alert("Kazanan at: 3"); }, 2000);
            }
            at3.style.marginLeft = bitis + "px";
        } else {
            at3.style.marginLeft = rdn3 + "px";
        }
    }
}

function atdort() {
    if (rdn4 < bitis) {
        rdn4 += rastgeleSayiUret();
        if (rdn4 >= bitis) {
            rdn4 = bitis;
            clearInterval(yarisma);
            if (!kontrol) {
                kontrol = true;
                setTimeout(function () { alert("Kazanan at: 4"); }, 2000);
            }
            at4.style.marginLeft = bitis + "px";
        } else {
            at4.style.marginLeft = rdn4 + "px";
        }

    }
}

function atbes() {
    if (rdn5 < bitis) {
        rdn5 += rastgeleSayiUret();
        if (rdn5 >= bitis) {
            rdn5 = bitis;
            clearInterval(yarisma);
            if (!kontrol) {
                kontrol = true;
                setTimeout(function () { alert("Kazanan at: 5"); }, 2000);
            }
            at5.style.marginLeft = bitis + "px";
        }
        else {
            at5.style.marginLeft = rdn5 + "px";
        }
    }

}
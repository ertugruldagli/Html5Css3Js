function tboxWrite() {
        var tbox1;
        tbox1 = document.getElementById("tbox1").value;
        document.getElementById("sonuc1").innerHTML = tbox1;
    }

function artir() {
    var deger;
    deger = parseInt(document.getElementById("tbox2").value);

    deger++;

    document.getElementById("tbox2").value=deger;
}

function tabloCiz() { 
    document.getElementById("sonuc2").value() = "<table style='width:200px;b ackground-color: gainsboro;'><tr><td>1</td><td>2</td></tr ><tr><td>3</td><td>4</td></tr></table >";
}

function carp() {
    var s1, s2,sonuc;

    s1 = parseInt(document.getElementById("tbox3").value);
    s2 = parseInt(document.getElementById("tbox4").value);

    sonuc = s1 * s2;

    document.getElementById("tbox5").value = sonuc;

}


function bolme() {

   
    var s1, s2, sonuc;

    s1 = parseInt(document.getElementById("tbox3").value);
    s2 = parseInt(document.getElementById("tbox4").value);
    if (s1 != 0) {
        sonuc = s1 / s2;
    } else {
        alert("lütfen sıfırdan farklı bir deeğer giriniz:")
    }
    

    document.getElementById("tbox5").value = sonuc;
}
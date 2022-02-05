var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
function infinity(x) {
    var deret = x
    for (var i = 0; i < deret.length; i++) {
        var nilai = isFinite(deret[i]);
        if (nilai == true) {
            console.log("Angka", deret[i], "NOT infinity");
        } else {
            console.log("Angka", deret[i], "infinity");
        }
    }
}

infinity(angka)


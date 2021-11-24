Looping (perulangan)

Perulangan akan membantu kita mengeksekusi kode yang berulang-ulang, berapapun yang kita mau.

    var sahabat = [
        {
            'Firstname' : 'Andi',
            'Lastname'  : 'Story',
            'Usia'      : 20,
            'Gadget'    : ['ipone 12','Galaxy S20']
        },
        {
            'Firstname' : 'Ahmed',
            'Lastname'  : 'Ronaldo',
            'Usia'      : 22,
            'Gadget'    : ['Asus ROG Phone 5','iphone 8','ipad Pro']
        }
    ]

    console.log(sahabat);
    console.log(sahabat[0]);
    console.log(sahabat[1]);

    console.log(sahabat[0].Firstname);
    console.log(sahabat[0].Gadget[0]);
    console.log(sahabat[0].Gadget[1]);

    console.log(sahabat[1].Firstname);
    console.log(sahabat[1].Gadget[0]);
    console.log(sahabat[1].Gadget[1]);
    console.log(sahabat[1].Gadget[2]);

==================================================================

1. Counted Loop merupakan perulangan yang jelas dan sudah tentu banyak perulangannya.
   - Perulangan For
   - Perulangan Foreach
   - Perulangan Repeat
2. Uncounted Loop, merupakan perulangan yang tidak jelas berapa kali ia harus mengulan.
   - Perulangan While
   - Perulangan Do/While

==================================================================

1.  Perulangan for

    # Perulangan for merupakan perulangan yang termasuk dalam couted loop, karena sudah jelas berapa kali ia akan mengulang.

    for (let i = 0; i < 10; i++) { console.log("<p>Perulangan ke-" + i + "</p>") }

2.  Perulangan foreach

    # Perulangan foreach biasanya digunakan untuk mencetak item di dalam array. Perulangan ini termasuk dalam perulangan counted loop, karena jumlah perulangannya akan dituentukan oleh panjang dari array. Ada dua cara menggunakan perulangan foreach di Javascript:

        - Menggunakan for dengan operator in:
            var languages = ["Javascript", "HTML", "CSS", "Typescript"];
            for(i = 0; i < languages.length; i++){
                console.log(i+". "+ languages[i] + "<br/>");
            }

            // atau

            var languages = ["Javascript", "HTML", "CSS", "Typescript"];
            for(i in languages){
                console.log(i+". "+ languages[i] + "<br/>");
            }

        - Menggunakan method forEach() dari array:
            var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
            days.forEach(function(day){
                document.write("<p>" + day + "</p>");
            })

3.  Perulangan repeat

    # Perulangan dengen method atau fungsi repeat() termasuk dalam perulangan counted loop. Fungsi ini khusus digunakan untuk mengulang sebuah teks (string). Bisa dibilang: Ini merupakan singkat dari perulangan for.

    var kalimat = "Love you 3000" console.log(kalimat.repeat(100));

4.  Perulangan while

    # Perulangan while merupakan perulangan yang termasuk dalam perulangan uncounted loop. Perulangan while juga dapat menjadi perulangan yang counted loop dengan memberikan counter di dalamnya.

    var counter = 0; var ulangi = true;

    while(ulangi){ counter++; console.log("Ulangi while");

        if(counter == 10) {
            ulangi = false; //setelah 10 putaran makan set variable ulangi menjadi false agar proses while berhenti
        }

    }

    console.log("Perulangan sudah dilakukan sebanyak" + counter);

5.  Perulangan do while

    # Perulangan do/while sama seperti perulangan while.Perbedaanya, perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu, lalu mengecek kondisi yang ada di dalam kurung while.

    var counter = 0; var ulangi = true;

    do { counter++; console.log("Ulangi while");

        if(counter == 10) {
            ulangi = false; //setelah 10 putaran makan set variable ulangi menjadi false agar proses while berhenti
        }

    } while(ulangi)

    console.log("Perulangan sudah dilakukan sebanyak" + counter);

function myFunction() {

    var e = document.getElementById("currency");
    var strUser = e.options[e.selectedIndex].value;
    var myCollection = document.getElementsByClassName('money');
    var i;
    for (i = 0; i < myCollection.length; i++) {
        var myString = document.getElementsByClassName('money')[i].innerHTML;

        var symbol = myString.charAt(0);
        myString = myString.slice(1);
        myString = parseFloat(myString).toPrecision(2);
        if (strUser == 'inr' && '₹' != symbol) {
            if ('$' == symbol) {
                myString = myString * 64.84;
                myString = myString.toPrecision(2);
                myString = Number(myString);

            }
            if ('£' == symbol) {
                myString = myString * 90.60;
                myString = myString.toPrecision(2);
                myString = Number(myString);
            }
            if ('€' == symbol) {
                myString = myString * 80.21;
                myString = myString.toPrecision(2);
                myString = Number(myString);
            }
            myString = '₹' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }

        if (strUser == 'usd' && '$' != symbol) {
            if ('₹' == symbol) {
                myString = myString / 64.84;
                myString = myString.toPrecision(2);

            }
            if ('£' == symbol) {
                myString = myString * 1.4;
                myString = myString.toPrecision(2);

            }
            if ('€' == symbol) {
                myString = myString * 1.24;
                myString = myString.toPrecision(2);

            }

            myString = '$' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }

        if (strUser == 'gbp' && '£' != symbol) {
            if ('₹' == symbol) {
                myString = myString / 90.60;
                myString = myString.toPrecision(2);

            }
            if ('$' == symbol) {
                myString = myString / 1.4;
                myString = myString.toPrecision(2);

            }
            if ('€' == symbol) {
                myString = myString / 1.13;
                myString = myString.toPrecision(2);

            }

            myString = '£' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }

        if (strUser == 'eur' && '€' != symbol) {
            if ('₹' == symbol) {
                myString = myString / 80.21;
                myString = myString.toPrecision(2);

            }
            if ('£' == symbol) {
                myString = myString * 1.13;
                myString = myString.toPrecision(2);

            }
            if ('$' == symbol) {
                myString = myString / 1.24;
                myString = myString.toPrecision(2);

            }

            myString = '€' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }
    }
}

function mobileFunction() {

    var e = document.getElementById("mobilecurrency");
    var strUser = e.options[e.selectedIndex].value;
    var myCollection = document.getElementsByClassName('money');
    var i;
    for (i = 0; i < myCollection.length; i++) {
        var myString = document.getElementsByClassName('money')[i].innerHTML;


        var symbol = myString.charAt(0);
        myString = myString.slice(1);
        myString = parseFloat(myString).toPrecision(2);
        if (strUser == 'inr' && '₹' != symbol) {
            if ('$' == symbol) {
                myString = myString * 64.84;
                myString = myString.toPrecision(2);
                myString = Number(myString);

            }
            if ('£' == symbol) {
                myString = myString * 90.60;
                myString = myString.toPrecision(2);
                myString = Number(myString);
            }
            if ('€' == symbol) {
                myString = myString * 80.21;
                myString = myString.toPrecision(2);
                myString = Number(myString);
            }
            myString = '₹' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }

        if (strUser == 'usd' && '$' != symbol) {
            if ('₹' == symbol) {
                myString = myString / 64.84;
                myString = myString.toPrecision(2);

            }
            if ('£' == symbol) {
                myString = myString * 1.4;
                myString = myString.toPrecision(2);

            }
            if ('€' == symbol) {
                myString = myString * 1.24;
                myString = myString.toPrecision(2);

            }

            myString = '$' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }

        if (strUser == 'gbp' && '£' != symbol) {
            if ('₹' == symbol) {
                myString = myString / 90.60;
                myString = myString.toPrecision(2);

            }
            if ('$' == symbol) {
                myString = myString / 1.4;
                myString = myString.toPrecision(2);

            }
            if ('€' == symbol) {
                myString = myString / 1.13;
                myString = myString.toPrecision(2);

            }

            myString = '£' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }

        if (strUser == 'eur' && '€' != symbol) {
            if ('₹' == symbol) {
                myString = myString / 80.21;
                myString = myString.toPrecision(2);

            }
            if ('£' == symbol) {
                myString = myString * 1.13;
                myString = myString.toPrecision(2);

            }
            if ('$' == symbol) {
                myString = myString / 1.24;
                myString = myString.toPrecision(2);

            }

            myString = '€' + myString;
            document.getElementsByClassName('money')[i].innerHTML = myString;

        }
    }
}

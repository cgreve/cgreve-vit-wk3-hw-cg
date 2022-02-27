

function time(){
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
          m = checkTime(m);
          s = checkTime(s);
            document.getElementById("clock").innerText = h +":"+ m + ":" + s;
            setTimeout(time, 1000)

        }

        function  checkTime(i) {
            if (i < 10) return "0" + i;
                 return i;
        }


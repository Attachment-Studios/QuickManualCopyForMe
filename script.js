
let stop = false;
let nowTypingCharacter = -1;

function Clear_Copy() {
    document.getElementById("output").value = "";
    stop = true;
    nowTypingCharacter = -1;
}

function Manual_Copy() {
    Clear_Copy();
    stop = false;
    let typing = window.setInterval(() => {
        let input = document.getElementById("input");
        let output = document.getElementById("output");
        nowTypingCharacter = nowTypingCharacter + 1;
        if (nowTypingCharacter >= (input.value).length) {
            window.clearInterval(typing);
        } else {
            output.value = output.value + input.value[nowTypingCharacter];
        }
        if (stop == true) {
            window.clearInterval(typing);
            Clear_Copy();
            stop = false;
        }
    }, 75)
}


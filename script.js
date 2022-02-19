function OpAppend(number) {
    document.getElementById("resultArea").innerHTML += number;
}

function GetResult() {
    let container = document.getElementById("resultArea");
    container.innerHTML = eval(container.innerHTML);
}

function DeleteLast() {
    let container = document.getElementById("resultArea");
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    }
    else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function DeleteAll() {
    let container = document.getElementById("resultArea");
    container.innerHTML = '';
}
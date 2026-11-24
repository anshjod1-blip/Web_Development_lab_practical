let items = [];

function add() {
    let n = document.getElementById("name").value.trim();
    let a = parseFloat(document.getElementById("amt").value);
    let c = document.getElementById("cat").value.trim();

    if (!n || !c || isNaN(a) || a <= 0) {
        document.getElementById("err").innerText = "Enter valid name, category, and positive amount.";
        return;
    }

    document.getElementById("err").innerText = "";
    items.push({ id: Date.now(), n: n, a: a, c: c });

    document.getElementById("name").value = "";
    document.getElementById("amt").value = "";
    document.getElementById("cat").value = "";
    show();
}

function show() {
    let f = document.getElementById("fcat").value;
    let tbody = document.getElementById("list");
    let sum = 0;
    tbody.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        if (f === "All" || items[i].c === f) {
            sum += items[i].a;
            tbody.innerHTML += "<tr><td>" + items[i].n + "</td><td>" + items[i].c + "</td><td>Rs. " + items[i].a + "</td><td><button class='del' onclick='del(" + items[i].id + ")'>Delete</button></td></tr>";
        }
    }

    document.getElementById("tot").innerText = sum;
}

function del(id) {
    let updated = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].id !== id) {
            updated.push(items[i]);
        }
    }
    items = updated;
    show();
}
var dt = new Date();

function renderDate() {



    const day = dt.getDay();

    const today = new Date();

    const endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    const preDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();



    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("date_str").innerHTML = dt.getFullYear();
    document.getElementById("month").innerHTML = months[dt.getMonth()];

    let cells = "";

    for (let x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (preDate - x + 1) + "</div>";
    }

    for (let i = 1; i <= endDate; i++) {
        if (i == today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() == today.getFullYear()) {
            cells += "<div class='today'>" + i + "</div>";
        } else {
            cells += "<div>" + i + "</div>";
        }

    }
    document.getElementsByClassName("days")[0].innerHTML = cells;

}

function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
    } else if (para == 'next') {
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}
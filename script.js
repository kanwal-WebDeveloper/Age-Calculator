const userInput = document.getElementById("date");

// Set max date to today (no future dates)
userInput.max = new Date().toISOString().split("T")[0];

// Helper: days in month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function calculateAge() {
    if (userInput.value === "") {
        alert("Please select your date of birth");
        return;
    }

    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3, d3;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Safety for negative values (edge cases)
    if (y3 < 0) y3 = 0;
    if (m3 < 0) m3 = 0;
    if (d3 < 0) d3 = 0;

    document.getElementById("years").innerHTML = y3;
    document.getElementById("months").innerHTML = m3;
    document.getElementById("days").innerHTML = d3;
}

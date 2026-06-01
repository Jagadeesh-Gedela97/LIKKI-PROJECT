// HOME PAGE

function goBooking()
{
    window.location.href = "Booking.html";
}

// BOOKING PAGE

function showBuses()
{
    document.getElementById("busList").style.display = "flex";
}

function selectBus()
{
    window.location.href = "passengers.html";
}

// PASSENGER PAGE

function confirmBooking()
{
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if(name == "" || age == "" || phone == "" || email == "")
    {
        alert("Please Fill All Details");
        return;
    }

    localStorage.setItem("passengerName", name);
    localStorage.setItem("passengerAge", age);
    localStorage.setItem("passengerPhone", phone);
    localStorage.setItem("passengerEmail", email);

    alert("Booking Confirmed Successfully!");

    window.location.href = "support.html";
}

// SUPPORT PAGE

function goHome()
{
    window.location.href = "index.html";
}

// LOAD DATA

window.onload = function()
{
    let user = document.getElementById("username");

    if(user)
    {
        user.innerHTML =
        localStorage.getItem("passengerName");
    }
}
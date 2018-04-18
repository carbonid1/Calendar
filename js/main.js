const wrapper = document.querySelector(".wrapper");
let time = new Date(2016, 0, 1).getTime();

function appendContainer() {
  const container = document.createElement("div");
  container.className = "container";
  wrapper.appendChild(container);
}

function appendHeading(number) {
  let month;

  switch (new Date(time).getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
  default:
    month = "Unknown";
  }

  const h2 = document.createElement("h2");
  h2.className = "h2";
  h2.textContent = month;
  const container = document.querySelectorAll(".container");
  container[number].appendChild(h2);
}

function appendUl(number) {
  const ul = document.createElement("ul");
  ul.className = "ul";
  ul.innerHTML = "<li class='dayNames'>Mo</li> <li class='dayNames'>Tu</li> <li class='dayNames'>We</li> <li class='dayNames'>Tu</li> <li class='dayNames'>Fr</li> <li class='dayNames'>Sa</li> <li class='dayNames'>Su</li>";
  const container = document.querySelectorAll(".container");
  container[number].appendChild(ul);
}

function appendDates(number) {
  const ul = document.querySelectorAll(".ul")[number];
  const innerDate = new Date(time);
  let innerTime = time;
  const numberDaysInMonth = getLastDayOfMonth(innerDate.getFullYear(), innerDate.getMonth());

  for (let i = 0; i < numberDaysInMonth; i += 1) {
    const newDate = new Date(innerTime);
    let li = `<li> ${newDate.getDate()} </li>`;

    if (newDate.getDay() === 0) {
      li = `<li style="color: red"> ${newDate.getDate()} </li>`;
      ul.innerHTML += li;
    } else {
      ul.innerHTML += li;
    }

    innerTime += 86400000;
  }
}

function getLastDayOfMonth(year, month) {
  const innerDate = new Date(year, month + 1, 0);
  return innerDate.getDate();
}

function monthMilliseconds() {
  const innerDate = new Date(time);
  return (getLastDayOfMonth(innerDate.getFullYear(), innerDate.getMonth()) * 86400000);
}

function createYear() {
  for (let i = 0; i < 12; i += 1) {
    appendContainer();
    appendHeading(i);
    appendUl(i);
    appendDates(i);
    time += monthMilliseconds();
  }
}

createYear();
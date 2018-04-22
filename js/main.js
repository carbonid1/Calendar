// -----------Basic styling
const body = document.querySelector("body");
body.style.fontFamily = "'Gugi', cursive";
// -----------/Basic styling

// -----------CREATING AND STYLING HEADER
const createHeader = document.createElement("h1");
createHeader.textContent = "Calendar on the pure native Java Script ES6";
body.appendChild(createHeader);
createHeader.style.textAlign = "center";
createHeader.style.margin = "20px 0";
createHeader.style.fontFamily = "'Roboto', sans-serif";
createHeader.style.fontSize = "32px";
// ----------/CREATING HEADER

let time = new Date(2018, 0, 1).getTime();

// -----------CREATING AND STYLING yearHolder
const yearHolder = document.createElement("h2");
body.appendChild(yearHolder);
yearHolder.textContent = new Date(time).getFullYear();
yearHolder.style.textAlign = "center";
yearHolder.style.fontSize = "32px";
// ----------/CREATING YearHolder

// -----------CREATING AND STYLING WRAPPER
const createWrapper = document.createElement("div");
createWrapper.className = "wrapper";
body.appendChild(createWrapper);
createWrapper.style.marginBottom = "20px";
createWrapper.style.display = "flex";
createWrapper.style.flexWrap = "wrap";
createWrapper.style.justifyContent = "space-around";
// ----------/CREATING WRAPPER


const wrapper = document.querySelector(".wrapper");


function appendContainer() {
  const container = document.createElement("div");
  container.style.flexBasis = "380px";
  container.style.height = "300px";
  container.style.backgroundColor = "#fff";
  container.style.border = "3px solid #417ca0";
  container.style.fontSize = "11px";
  container.style.margin = "15px 3px 3px 3px";
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
  h2.style.width = "95%";
  h2.style.textAlign = "center";
  h2.style.margin = "0.3em";
  h2.className = "h2";
  h2.textContent = month;
  const container = document.querySelectorAll(".container");
  container[number].appendChild(h2);
}

function appendUl(number) {
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.className = "ul";
  ul.innerHTML = "<li class='dayNames'>Mo</li> <li class='dayNames'>Tu</li> <li class='dayNames'>We</li> <li class='dayNames'>Th</li> <li class='dayNames'>Fr</li> <li class='dayNames'>Sa</li> <li class='dayNames'>Su</li>";
  const container = document.querySelectorAll(".container");
  container[number].appendChild(ul);
}

function getLastDayOfMonth(year, month) {
  const innerDate = new Date(year, month + 1, 0);
  return innerDate.getDate();
}

function monthMilliseconds() {
  const innerDate = new Date(time);
  return (getLastDayOfMonth(innerDate.getFullYear(), innerDate.getMonth()) * 86400000);
}

function appendDates(number) {
  const ul = document.querySelectorAll(".ul")[number];
  const innerDate = new Date(time);
  let innerTime = time;
  const numberDaysInMonth = getLastDayOfMonth(innerDate.getFullYear(), innerDate.getMonth());

  if (innerDate.getDay() === 2) {
    ul.innerHTML += "<li> </li>";
  } else if (innerDate.getDay() === 3) {
    ul.innerHTML += "<li> </li> <li> </li>";
  } else if (innerDate.getDay() === 4) {
    ul.innerHTML += "<li> </li> <li> </li> <li> </li>";
  } else if (innerDate.getDay() === 5) {
    ul.innerHTML += "<li> </li> <li> </li> <li> </li> <li> </li>";
  } else if (innerDate.getDay() === 6) {
    ul.innerHTML += "<li> </li> <li> </li> <li> </li> <li> </li> <li> </li>";
  } else if (innerDate.getDay() === 0) {
    ul.innerHTML += "<li> </li> <li> </li> <li> </li> <li> </li> <li> </li> <li> </li>";
  }

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

function createYear() {
  for (let j = 0; j < 12; j += 1) {
    appendContainer();
    appendHeading(j);
    appendUl(j);
    appendDates(j);
    time += monthMilliseconds();
  }

  // ------------Li styling
  const li = document.querySelectorAll("li");
  for (let j = 0; j < li.length; j += 1) {
    li[j].style.display = "block";
    li[j].style.width = "calc(100% * (1/7))";
    li[j].style.padding = "2em 0 0 2em";
  }

  liSunday = document.querySelectorAll("ul li:nth-of-type(7)");
  for (let j = 0; j < liSunday.length; j += 1) {
    liSunday[j].style.color = "#ff0000";
  }

  liDaysNames = document.querySelectorAll("ul li:nth-of-type(-n + 7)");
  for (let j = 0; j < liDaysNames.length; j += 1) {
    liDaysNames[j].style.fontWeight = "bold";
  }
  // ------------/Li styling
}

createYear();


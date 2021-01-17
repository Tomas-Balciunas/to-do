let submit = document.getElementById("mygtukas");

let localStorage = window.localStorage;

submit.addEventListener("click", prideti);

function prideti() {
  event.preventDefault();
  let table = document.getElementById("tbody");
  let row = table.insertRow(0);
  let icon1 = row.insertCell(0);
  let subject = row.insertCell(1);
  let priority = row.insertCell(2);
  let duedate = row.insertCell(3);
  let status = row.insertCell(4);
  let modified = row.insertCell(5);

  row.classList.add("addrow");

  let icon = document.createElement("img");
  icon.src =
    "src/icon.png";
  icon.setAttribute("class", "icon");

  subject.innerHTML = document.getElementById("subject").value;
  subject.setAttribute("class", "subtext");

  priority.innerHTML = document.getElementById("priority").value;
  if (document.getElementById("priority").value == "High") {
    priority.classList.add("high");
  } else if (document.getElementById("priority").value == "Normal") {
    priority.classList.add("normal");
  } else {
    priority.classList.add("low");
  }

  duedate.innerHTML = document.getElementById("duedate").value;

  status.innerHTML = document.getElementById("status").value;

  let progress = document.createElement("progress");
  progress.value = document.getElementById("progress").value;
  progress.setAttribute("max", 100);
  progress.setAttribute("id", "progbar");

  modified.innerHTML = Date().slice(0, 24);

  let remove = document.createElement("button");
  remove.setAttribute("id", "removebutton");
  remove.innerHTML = "X";
  remove.addEventListener("click", removerow);
  function removerow() {
    table.removeChild(row);
  }

  table.appendChild(row);
  icon1.appendChild(icon);
  row.appendChild(subject);
  row.appendChild(priority);
  row.appendChild(duedate);
  row.appendChild(status);
  row.appendChild(progress);
  row.appendChild(modified);
  row.appendChild(remove);

  document.getElementById("forma").reset();

  row.addEventListener("click", function() {
    row.classList.toggle("marked");
  });

  row.addEventListener("mouseover", function() {
    row.style.cursor = "pointer";
    row.style.backgroundColor = "#d1d1d1";
  });
  row.addEventListener("mouseout", function() {
    row.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  });

  return false;
}

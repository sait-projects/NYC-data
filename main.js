// Payroll - https://data.cityofnewyork.us/resource/k397-673e.json
// NYC Jobs - https://data.cityofnewyork.us/resource/kpav-sd4t.json
// NYC business - https://data.cityofnewyork.us/resource/w7w3-xahh.json

var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;
function loaddata() {
  //event listener
  document.getElementById("firstName").addEventListener(
    "keyup",
    function () {
      searchFirstName(this.value);
    },
    false
  );
  document.getElementById("lastName").addEventListener(
    "keyup",
    function () {
      searchLastName(this.value);
    },
    false
  );
  document.getElementById("jobDescription").addEventListener(
    "keyup",
    function () {
      searchJobDesc(this.value);
    },
    false
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      r = JSON.parse(xhr.responseText);
    }
  };
  xhr.open(
    "GET",
    "https://data.cityofnewyork.us/resource/k397-673e.json",
    true
  );
  xhr.send();
}

function searchFirstName(firstName) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by First Name" + "<br>";
  //structure table
  var output =
    "<tr><th>First Name</th><th>Last Name</th><th>Work Location</th><th>Job Description </th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.first_name.toLowerCase();
    if (searchname.startsWith(firstName.toLowerCase())) {
      output += "<tr><td class='center'>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.work_location_borough;
      output += "</td><td>";
      output += obj.title_description;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchLastName(lastName) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by First Name" + "<br>";
  //structure table
  var output =
    "<tr><th>First Name</th><th>Last Name</th><th>Work Location</th><th>Job Description </th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.last_name.toLowerCase();
    if (searchname.startsWith(lastName.toLowerCase())) {
      output += "<tr><td class='center'>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.work_location_borough;
      output += "</td><td>";
      output += obj.title_description;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchJobDesc(job) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by First Name" + "<br>";
  //structure table
  var output =
    "<tr><th>First Name</th><th>Last Name</th><th>Work Location</th><th>Job Description </th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    searchname = obj.title_description.toLowerCase();
    if (searchname.startsWith(job.toLowerCase())) {
      output += "<tr><td class='center'>";
      output += obj.first_name;
      output += "</td><td>";
      output += obj.last_name;
      output += "</td><td>";
      output += obj.work_location_borough;
      output += "</td><td>";
      output += obj.title_description;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

// Payroll - https://data.cityofnewyork.us/resource/k397-673e.json
// NYC Jobs - https://data.cityofnewyork.us/resource/kpav-sd4t.json
// NYC business - https://data.cityofnewyork.us/resource/w7w3-xahh.json

var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;
function loaddata() {
  //event listener
  document.getElementById("jobCategory").addEventListener(
    "keyup",
    function () {
      searchCategory(this.value);
    },
    false
  );
  document.getElementById("workLocation").addEventListener(
    "keyup",
    function () {
      searchLocation(this.value);
    },
    false
  );
  document.getElementById("postedUntil").addEventListener(
    "change",
    function () {
      searchDate(this.value);
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
    "https://data.cityofnewyork.us/resource/kpav-sd4t.json",
    true
  );
  xhr.send();
}

function searchCategory(category) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by Job Category" + "<br>";
  //structure table
  var output =
    "<thead><tr><th scope='col'>Job Category</th><th scope='col'>Work Location</th>" +
    "<th class='text-center' scope='col'>F/P Time</th><th scope='col'>Job Description</th>" +
    "<th class='text-center' scope='col'>Posted Date</th></tr></thead>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    if (obj.job_category == undefined) {
      console.log("Found a job category that is undefined");
    } else {
      searchname = obj.job_category.toLowerCase();
    }
    if (searchname.includes(category.toLowerCase())) {
      output += "<tr id='table'><td class='center'>";
      output += obj.job_category;
      output += "</td><td>";
      output += obj.work_location;
      output += "</td><td class='text-center'>";
      output += obj.full_time_part_time_indicator;
      output += "</td><td>";
      output += obj.job_description;
      output += "</td><td class='pe-4 text-center'>";
      output += obj.posting_date.substring(0, 10);
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchLocation(location) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by Work Location" + "<br>";
  //structure table
  var output =
    "<thead><tr><th scope='col'>Job Category</th><th scope='col'>Work Location</th>" +
    "<th class='text-center' scope='col'>F/P Time</th><th scope='col'>Job Description</th>" +
    "<th class='text-center' scope='col'>Posted Date</th></tr></thead>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    if (obj.work_location == undefined) {
      console.log("Found a job category that is undefined");
    } else {
      searchname = obj.work_location.toLowerCase();
    }
    if (searchname.includes(location.toLowerCase())) {
      output += "<tr id='table'><td class='center'>";
      output += obj.job_category;
      output += "</td><td>";
      output += obj.work_location;
      output += "</td><td class='text-center'>";
      output += obj.full_time_part_time_indicator;
      output += "</td><td>";
      output += obj.job_description;
      output += "</td><td class='pe-4 text-center'>";
      output += obj.posting_date.substring(0, 10);
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchDate(date) {
  var pDate = Date.parse(date);
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML =
    "Search by Work Location" + "<br>";
  //structure table
  var output =
    "<thead><tr><th scope='col'>Job Category</th><th scope='col'>Work Location</th>" +
    "<th class='text-center' scope='col'>F/P Time</th><th scope='col'>Job Description</th>" +
    "<th class='text-center' scope='col'>Posted Date</th></tr></thead>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    if (obj.posting_date == undefined) {
      console.log("Found a date that is undefined");
    } else {
      searchname = Date.parse(obj.posting_date);
    }
    if (searchname >= pDate) {
      output += "<tr id='table'><td class='center'>";
      output += obj.job_category;
      output += "</td><td>";
      output += obj.work_location;
      output += "</td><td class='text-center'>";
      output += obj.full_time_part_time_indicator;
      output += "</td><td>";
      output += obj.job_description;
      output += "</td><td class='pe-4 text-center'>";
      output += obj.posting_date.substring(0, 10);
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

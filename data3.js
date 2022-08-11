// Payroll - https://data.cityofnewyork.us/resource/k397-673e.json
// NYC Jobs - https://data.cityofnewyork.us/resource/kpav-sd4t.json
// NYC business - https://data.cityofnewyork.us/resource/w7w3-xahh.json

var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;
function loaddata() {
  //event listener
  document.getElementById("cityName").addEventListener(
    "keyup",
    function () {
      searchCityName(this.value);
    },
    false
  );
  document.getElementById("zipCode").addEventListener(
    "keyup",
    function () {
      searchZipCode(this.value);
    },
    false
  );
  document.getElementById("businessName").addEventListener(
    "keyup",
    function () {
      searchBusiness(this.value);
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
    "https://data.cityofnewyork.us/resource/w7w3-xahh.json",
    true
  );
  xhr.send();
}

function searchCityName(city) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML = "Search by City" + "<br>";
  //structure table
  var output =
    "<tr><th>Business Name</th><th>City</th><th>Address</th><th>Zip Code</th><th>Phone Number</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    if (obj.address_city == undefined) {
      console.log("Found a city that is undefined");
    } else {
      searchname = obj.address_city.toLowerCase();
    }
    if (searchname.startsWith(city.toLowerCase())) {
      output += "<tr><td class='center'>";
      output += obj.business_name;
      output += "</td><td>";
      output += obj.address_city;
      output += "</td><td>";
      if (obj.address_building || obj.address_street_name) {
        output += obj.address_building + " " + obj.address_street_name;
      } else {
        output += "No Address for this business";
      }
      output += "</td><td>";
      output += obj.address_zip;
      output += "</td><td>";
      output += obj.contact_phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchZipCode(zip) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML = "Search by City" + "<br>";
  //structure table
  var output =
    "<tr><th>Business Name</th><th>City</th><th>Address</th><th>Zip Code</th><th>Phone Number</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    if (obj.address_zip == undefined) {
      console.log("Found a zipcode that is undefined");
    } else {
      searchname = obj.address_zip.toLowerCase();
    }
    if (searchname.startsWith(zip.toLowerCase())) {
      output += "<tr><td class='center'>";
      output += obj.business_name;
      output += "</td><td>";
      output += obj.address_city;
      output += "</td><td>";
      if (obj.address_building || obj.address_street_name) {
        output += obj.address_building + " " + obj.address_street_name;
      } else {
        output += "No Address for this business";
      }
      output += "</td><td>";
      output += obj.address_zip;
      output += "</td><td>";
      output += obj.contact_phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

function searchBusiness(business) {
  //var r=JSON.parse(xhr.responseText);
  document.getElementById("searchvalue").innerHTML = "Search by City" + "<br>";
  //structure table
  var output =
    "<tr><th>Business Name</th><th>City</th><th>Address</th><th>Zip Code</th><th>Phone Number</th></tr>";
  var searchname;
  for (var i = 0; i < r.length; i++) {
    var obj = r[i];
    if (obj.business_name == undefined) {
      console.log("Found a business that is undefined");
    } else {
      searchname = obj.business_name.toLowerCase();
    }
    if (searchname.startsWith(business.toLowerCase())) {
      output += "<tr><td class='center'>";
      output += obj.business_name;
      output += "</td><td>";
      output += obj.address_city;
      output += "</td><td>";
      if (obj.address_building || obj.address_street_name) {
        output += obj.address_building + " " + obj.address_street_name;
      } else {
        output += "No Address for this business";
      }
      output += "</td><td>";
      output += obj.address_zip;
      output += "</td><td>";
      output += obj.contact_phone;
      output += "</td></tr>";
    }
  }
  document.getElementById("searchresults").innerHTML = output;
}

var editText;
var customerArray = [];
function validateForm() {
  var regex = new RegExp("^[a-zA-Z ]");
  var num = new RegExp("^[0-9]*$");
  var y = document.forms["myForm"]["number"].value;
  var x = document.forms["myForm"]["name"].value;
  var z = document.forms["myForm"]["location"].value;
  var a = document.forms["myForm"]["Description"].value;

  if ((x == null || x == "")) {
    document.getElementById('name_err').innerHTML = "required";
    document.myForm.name.focus();
  }

  else {
    if (regex.test(x)) {
      document.getElementById('name_err').innerHTML = "";
    }
    else {
      document.getElementById('name_err').innerHTML = "enter name";
    }
  }

  if (y.length < 3) {
    document.getElementById('name_err1').innerHTML = "required";
    document.myForm.number.focus();
  }
  else {
    if (num.test(y)) {
      document.getElementById('name_err1').innerHTML = "";
    }
    else {
      document.getElementById('name_err1').innerHTML = "enter number";
    }
  }

  if (z == "") {
    document.getElementById('name_err2').innerHTML = "required";
    document.myForm.location.focus();
  }
  else {
    document.getElementById('name_err2').innerHTML = "";
  }



  if (a == "") {
    document.getElementById('name_err3').innerHTML = "required";
    document.myForm.Description.focus();
    return false;
  }
  else {
    document.getElementById('name_err3').innerHTML = "";
  }

  if (document.getElementById('result').checked) {
    document.getElementById('name_err7').innerHTML = "";
  }
  else if (document.getElementById('result').checked) {
    document.getElementById('name_err7').innerHTML = "";
    return false;
  }
  console.log(document.querySelector('input[name="result1"]:checked').value);

  var modal = document.getElementById('id01');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  inserTable();

  document.getElementById("name").value = '';
  document.getElementById("number").value = '';
  document.getElementById("location").value = '';
  document.getElementById("Description").value = '';
  document.getElementById("result").checked = false;
  document.getElementById("result2").checked = false;
  document.getElementById("start").value = "";


  console.log(editText);

  return true;
  //  document.getElementById("myForm").reset();
  //  document.getElementById("myForm").submit();
}

var sNo = 0;
// var customId = 1;

function inserTable() {
  if (editText != undefined) {
    customerArray.splice(editText, 1);
  }
  var rate_value;
  var name = document.getElementById("name").value;
  var num = document.getElementById("number").value;
  var loc = document.getElementById("location").value;
  var desc = document.getElementById("Description").value;
  var start = document.getElementById("start").value;

  if (document.getElementById('result').checked) {
    rate_value = document.getElementById('result').value;
  }
  else if (document.getElementById('result2').checked) {
    rate_value = document.getElementById('result2').value;
  }
  var customerObj = {
    sNo: sNo,
    name: name,
    number: num,
    location: loc,
    Description: desc,
    start:start,
    result2:result2,
    result: rate_value
  };
  customerArray.push(customerObj);
  console.log(customerArray);
  addTable();
  sNo++;

}
function addTable() {
  var v = "";
  editText = "";
  for (i = 0; i < customerArray.length; i++) {
    v += "<tr>";
    v += "<td>" + (i + 1) + "</td>";
    v += "<td>" + customerArray[i].name + "</td>";
    v += "<td>" + customerArray[i].location + "</td>";
    v += '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' + i + ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' + i + ')">Delete</button></td>';
  }
  document.getElementById("displayArea").innerHTML = v;
}
function Delete(item) {
  customerArray.splice(item, 1);
  addTable();
};
function Edit(item) {
  editText = item;
  console.log(item);
  console.log(customerArray);
  console.log(customerArray[item]);
  document.getElementById("name").value = customerArray[item].name;
  document.getElementById("location").value = customerArray[item].location;
  document.getElementById("number").value = customerArray[item].number;
  document.getElementById("Description").value = customerArray[item].Description;
  document.getElementById("start").value = customerArray[item].start;

  //document.getElementById("result").value = customerArray[item].result;
  if(customerArray[item].result == "5"){
    document.getElementById("result").checked = true;
  }else{
    document.getElementById("result2").checked = true;

  }


};

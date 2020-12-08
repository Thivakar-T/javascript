function validateForm() {
  var regex = new RegExp("^[a-zA-Z ]");
  var num = new RegExp("^[0-9]*$");
  var y = document.forms["myForm"]["number"].value;
  var x = document.forms["myForm"]["name"].value;
  var z = document.forms["myForm"]["location"].value;
  var a = document.forms["myForm"]["Description"].value;

   if ((x==null || x=="")) {
    document.getElementById('name_err').innerHTML="required";
    document.myForm.name.focus() ;
   }
   
   else{
     if (regex.test(x)){
      document.getElementById('name_err').innerHTML="";
     }
     else{
      document.getElementById('name_err').innerHTML="enter name";
     }
   }

    if (y.length<3) {
    document.getElementById('name_err1').innerHTML="required";
    document.myForm.number.focus() ;
   }
   else{
    if (num.test(y)){
     document.getElementById('name_err1').innerHTML="";
    }
    else{
     document.getElementById('name_err1').innerHTML="enter number";
    }
  }

   if (z == "") {
    document.getElementById('name_err2').innerHTML="required";
    document.myForm.location.focus() ;
   }   
   else {
     document.getElementById('name_err2').innerHTML="";
    }



   if (a == "") {
    document.getElementById('name_err3').innerHTML="required";
    document.myForm.Description.focus() ;
     return false;
   }   
   else{
     document.getElementById('name_err3').innerHTML="";
    }

     if (document.getElementById('result').checked) {
         document.getElementById('name_err7').innerHTML="";
  }
    else if(document.getElementById('result').checked){
      document.getElementById('name_err7').innerHTML="";
      return false;
    }
    console.log(document.querySelector('input[name="result1"]:checked').value);

    
  //   var customerObj={};
  //   var rate_value;
  //   var name = document.getElementById("name").value;
  //   var num = document.getElementById("number").value;
  //   var loc = document.getElementById("location").value;
  //   var desc = document.getElementById("Description").value;
   
  //   if (document.getElementById('result').checked) {
  //    rate_value = document.getElementById('result').value;
  //    }
  //  else if(document.getElementById('result2').checked){
  //    rate_value = document.getElementById('result2').value;
  //  }
   
  //  customerObj={
  //     'name':name,
  //     'number':num,
  //     'location':loc,
  //     'Description':desc,
  //     'result':rate_value
      
  //  };
  //  console.log(customerObj);
  //  alert( customerObj);


   
   var modal = document.getElementById('id01');
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
   inserTable();

    return true;
   document.getElementById("myForm").reset();
   document.getElementById("myForm").submit();
 }
//  function inserTable(){
//   var contactArray = [];
//   if (this.displayArea.length > 0) {
//     for (i = 0; i < this.displayArea.length; i++) {
//       data += '<tr>';
//       data += '<td>' + this.displayArea[i] + '</td>';
//       data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
//       data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
//       data += '</tr>';
//     }
//   }

//  }
var rate_value;
var name = document.getElementById("name").value;
var num = document.getElementById("number").value;
var loc = document.getElementById("location").value;
var desc = document.getElementById("Description").value;

if (document.getElementById('result').checked) {
 rate_value = document.getElementById('result').value;
 }
else if(document.getElementById('result2').checked){
 rate_value = document.getElementById('result2').value;
}
var sNo = 1;
var customId = 1;
var customerArray = [];
function inserTable(){
		  var customerObj = {
		  	  "sNo":sNo,
		  	  "id":customId,
          'name':name,
          'number':num,
          'location':loc,
          'Description':desc,
          'result':rate_value
		
		  };
		  customerArray.push(customerObj);
		  addTable();
		  sNo++;
		  customId++;

}
 function addTable(){
  for(i = 0; i < customerArray.length; i++){
      var customerObj = customerArray[i];
      document.getElementById("displayArea").append("<tr id='row"+i+"'><td>" + customerObj.sNo + "</td><td>" + customerObj.name + "</td><td>" + customerObj.location + "</td><td><span class='editrow' style='cursor:pointer;'><a style='cursor:pointer;color:black' class='fa fa-edit' href='javascript:void(0);'  onclick ='editDetail("+customerObj.id+");' >Edit</a></span><span><a onclick='deleteRow("+customerObj.id+");' class='material-icons'style='font-size:30px;color:red;margin-left:30px;cursor:pointer;'>delete</a></span></td></tr>");
    }
}  

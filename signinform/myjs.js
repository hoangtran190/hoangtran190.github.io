
$('#formRegister').on('submit',function () {
      var isValid = true;
      
      if($('#name').val().match(/^[A-Za-z]+$/) == null) {
        $('#name').next('span').text('Name is invalid');
        isValid = false;
      } else {
        $('#name').next('span').text('');
      }

      if($('#email').val().match(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i) == null){
        $('#email').next('span').text('Email is invalid');
        isValid = false;
      } else {
        $('#email').next('span').text('');
        
      }

      if($('#password').val() == ''){
        $('#password').next('span').text('Password is invalid');
        isValid = false;
      } else {
        $('#confirm').next('span').text('');      
      }

      if($('#password').val() !== $('#confirm').val()){
        $('#confirm').next('span').text('Password and Confirm password must match');
        isValid = false;
      } else {
        $('#confirm').next('span').text('');
        
      }

      if($('#dob').val().match( /^((0[1-9])|(1[0-2]))\/((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\/(\d{4})$/ ) == null){
        $('#dob').next('span').text('Birthday must have MM/DD/YYYY format');
        isValid = false;
      }else{
        $('#dob').next('span').text('');        
      }

      if($('#phone').val() == ''){
        $('#phone').next('span').text('Phone number is invalid');
      } else{
        $('#phone').next('span').text('');
      }

      if(isValid == true){
        user.name = $('#name').val();
        
        user.email = $('#email').val();
        
        user.password = $('#password').val();
        
        user.dob = $('#dob').val();
       
        user.gender = $('#gender').val();
        
        user.phone = $('#phone').val();
        
      }   
      return isValid;
    });
var username, userpassword, userphone, usergender, userphone, useremail;

function showUser(){
  var uri = decodeURIComponent(document.URL);
  var index = uri.indexOf("?");
 
  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  username = uri.slice(5, index);

  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  useremail = uri.slice(6, index);

  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  userpassword = uri.slice(9, index);

  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  userdob = uri.slice(4,index);

  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  usergender = uri.slice(7,index);

  uri = uri.slice(index+1);
  index = uri.indexOf("&");
  userphone = uri.slice(6,index);

  console.log(username);
  console.log(useremail);
  console.log(userpassword);
  console.log(userdob);
  console.log(usergender);
  console.log(userphone);
 
  var output = "Your Name is " + username + "<br>" +
               "Your Email is " + useremail + "<br>"+
               "Your Password is " + userpassword + "<br>" +
               "Your Birthday is " + userdob + "<br>" +
               "Your Gender is " + usergender + "<br>" +
               "Your Phone is " + userphone;
  $('.content').html(output);
}  



var username, useremail, userpassword, userdob, usergender, userphone;
var user = {
  name: '',
  email: '',
  password: '',
  dob: '',
  gender: '',
  phone: ''
}


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

      if(isValid == true){
        user.name = $('#name').val();
        console.log(username);
        user.email = $('#email').val();
        console.log(useremail);
        user.password = $('#password').val();
        console.log(username);
        user.dob = $('#dob').val();
        console.log(userdob);
        user.gender = $('#gender').val();
        console.log(usergender);
        user.phone = $('#phone').val();
        console.log(userphone);

      }   
      return isValid;
    });
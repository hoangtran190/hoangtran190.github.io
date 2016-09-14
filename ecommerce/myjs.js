

var animateboxwhenhover = $('#hoverbox li a');
animateboxwhenhover.mouseover(function() {
    $(this).css('border-bottom', 'solid 1px #ff4d4d');
    $(this).css('color', '#ff4d4d');
});
animateboxwhenhover.mouseleave(function() {
    $(this).css('border-bottom', '');
    $(this).css('color', '');
});





$('#formRegister').on('submit',function () {
      var isValid = true;

      if($('#name').val().match(/^[A-Za-z]+$/) == null) {
        $('#name').next('span').text('Tên tài khoản không được để trống');
        isValid = false;
      } else {
        $('#name').next('span').text('');
      }

      if($('#email').val().match(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i) == null){
        $('#email').next('span').text('Email không hợp lệ');
        isValid = false;
      } else {
        $('#email').next('span').text('');

      }

      if($('#password').val() == ''){
        $('#password').next('span').text('Password không được để trống');
        isValid = false;
      } else {
        $('#confirm').next('span').text('');
      }

      if($('#password').val() !== $('#confirm').val()){
        $('#confirm').next('span').text('Nhập sai mật khẩu');
        isValid = false;
      } else {
        $('#confirm').next('span').text('');

      }

      if($('#dob').val().match( /^((0[1-9])|(1[0-2]))\/((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))\/(\d{4})$/ ) == null){
        $('#dob').next('span').text('Ngày sinh phải theo form MM/DD/YYYY');
        isValid = false;
      }else{
        $('#dob').next('span').text('');
      }

      if($('#phone').val() == ''){
        $('#phone').next('span').text('Số điện thoại không được để trống');
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



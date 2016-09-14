
 
var animateboxwhenhover = $('#hoverbox li a');
animateboxwhenhover.mouseover(function() {
    $(this).css('border-bottom', 'solid 1px #ff4d4d');
    $(this).css('color', '#ff4d4d');
});
animateboxwhenhover.mouseleave(function() {
    $(this).css('border-bottom', '');
    $(this).css('color', '');
});



$('li.tabsp').on('click', renderReview);
var render=$('.renderthis');
var content = [
    '<div class="renderthis" style="padding-left:20px; padding-top: 20px;">' +
      '<div class="row">' +
      '<div class="col-xs-3" style="border: 1px solid grey;">' +
        'Người dùng 1:' +
      '</div>' +
      '<div class="col-xs-9" style="border: 1px solid white;">' +
        'Cái này đẹp lắm' +
      '</div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-xs-3 col-xs-offset-1" style="border: 1px solid grey; margin-top:10px">' +
        'Chủ store:' +
      '</div>' +
      '<div class="col-xs-8" style="border: 1px solid white;margin-top:10px">' +
        'Cảm ơn bạn!' +
      '</div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col-xs-3 col-xs-offset-1" style="border: 1px solid grey; margin-top:10px">' +
        'Chủ store:' +
      '</div>' +
      '<div class="col-xs-8" style="border: 1px solid white;margin-top:10px">' +
        'Mong bạn ghé thăm lần sau!' +
      '</div>' +
      '</div>' +
    '</div>'
    ,
    
      '<p style="font-size: 16px; padding-top:20px;">MADE IN VIETNAM </p>'+
    '- Chất liệu vải Gore-Tex chống thấm nước, bên trong lót lưới giúp giữ độ thông thoáng, không gây bí, dính. <br>' +
    '- 2 túi 2 bên có khóa kéo an toàn. <br>'+
    '- 1 túi giấu bên trong áo để đựng những vật dụng, giấy tờ quan trọng. <br>'+
    '- Các đường may được ép Seam bên trong giúp chống thấm hoàn toàn. <br>'+
    '- Áo rất nhẹ, xếp gọn. <br>' +
    '- Thích hợp cho mọi loại hình du lịch, Trekking, Hiking, leo núi, cắm trại,... <br>' +
    '- Nón áo có thể tháo rời tuỳ ý. <br>'
    ,
    
        '<div style="padding-left:40px, padding-top: 20px;width="90%">'+
        '<h5>NHẬN XÉT ĐÁNH GIÁ</h5>' +
      
        'Để lại nhận xét và đánh giá của bạn về sản phẩm này dưới đây:' +
      '<div style="margin-top: 10px;">' +
        '<input type="text" style="width:100%; height:100px; ">' +
      '</div>' +
      '<button class="btn btn-info" style="width:20%; margin-top:6px;">Gửi</button> </div>' 
    
];
// $(render.html(content[0]));
var rev = $('li.review');
var des = $('li.description');
var com = $('li.comment');
function renderReview() {
  
  
  console.log(this);

  rev.removeClass('active');
  des.removeClass('active');
  com.removeClass('active');
  $(this).addClass('active');
  render.html(content[$(this).data('value')]);
  

}


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



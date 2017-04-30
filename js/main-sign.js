

// 회원가입
var button_sign_up = document.querySelector(".button-sign-up");

button_sign_up.onclick = function(e) {
  var sign_up_email = document.querySelector(".input-email-sign-up");
  // sign_up_email.value
  // console.log(sign_up_email.value);
  var sign_up_password = document.querySelector(".input-password-sign-up");

  // 통신
  // axios.post('https://api.studydev.kr/users/', {
   axios.post('https://api.studydev.kr/users/', {
    "username": sign_up_email,
    "password": sign_up_password,
    "user_type": "NORMAL"
  })
  // 성공
  .then(function (response) {
    // console.log(response);
    alert("회원가입이 완료되었습니다.")
  })
  // 실패
  .catch(function (error) {
    // console.log(error);
    alert("다시 작성하여 주십시오.")
  });

};


// 로그인
var button_sign_in = document.querySelector(".button-sign-in");

button_sign_in.onclick = function(e) {
  var sign_in_email = document.querySelector(".input-email-sign-in");
  // sign_up_email.value
  // console.log(sign_up_email.value);
  var sign_in_password = document.querySelector(".input-password-sign-in");

  // 통신
  axios.post('https://api.studydev.kr/user/login/', {
    "username": sign_in_email,
    "password": sign_in_password,
    "user_type": "NORMAL"
  })
  // 성공
  .then(function (response) {
    // console.log(response);
    alert("로그인 되었습니다.")
  })
  // 실패
  .catch(function (error) {
    // console.log(error);
    alert("이메일 또는 비밀번호를 확인하여 주십시오.")
  });

};

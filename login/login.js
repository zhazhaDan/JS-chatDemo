$(document).ready(function() {
    console.log("hello world222")

  
})
function getVerifiCode() {
    console.log("hello world")
    if($(".phone")[0].innerText.length == 0) {
        alert("手机号不能为空")
    }
}
function submit() {
    if($(".phone")[0].innerText.length == 0) {
        alert("手机号不能为空")
    }else if ($(".passworld")[0].innerText.length == 0) {
        alert("验证码不能为空")
    }
}
// Bài tập 1
var taikhoan = {
  tendangnhap: "Chau",
  matkhau: "123456",
  email: "chau00@email.com",
  phone: "846738267889",
};
console.log(taikhoan);

function NhapThongTin(taikhoan) {
  taikhoan.tendangnhap = prompt("Nhập tên đăng nhập của bạn:");
  taikhoan.matkhau = prompt("Nhập mật khẩu của bạn:");
  taikhoan.email = prompt("Nhập thông tin email của bạn:");
  taikhoan.phone = prompt("Nhập số điện thoại của bạn:");
}

// let Tong =

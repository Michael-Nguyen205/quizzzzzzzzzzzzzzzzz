

// import { checkExists, register } from "../services/usersService"; 
// import { generateToken } from "../../helpers/generateToken"; // Import hàm generateToken từ module generateToken
import { useNavigate } from "react-router-dom"; // Import hook useNavigate từ react-router-dom

function Register() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để lấy hàm navigate





  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    // const fullName = e.target[0].value; // Lấy giá trị của trường họ tên từ form
    // const email = e.target[1].value; // Lấy giá trị của trường email từ form
    // const password = e.target[2].value; // Lấy giá trị của trường mật khẩu từ form

    // const checkExistsEmail = await checkExists("email", email); // Kiểm tra xem email đã tồn tại hay chưa

    // if (checkExistsEmail.length > 0) { // Nếu email đã tồn tại
    //   alert("Email đã tồn tại!");
    // } else { // Nếu email chưa tồn tại
    //   const options = { // Tạo options chứa thông tin người dùng
    //     fullName: fullName,
    //     email: email,
    //     password: password,
    //     token: generateToken(), // Tạo token ngẫu nhiên bằng cách gọi hàm generateToken
    //   };

    //   const response = await register(options); // Gửi yêu cầu đăng ký người dùng với các thông tin đã nhập

    //   if (response) { // Nếu đăng ký thành công
    //     navigate("/login"); // Chuyển hướng người dùng đến trang đăng nhập
    //   } else {
    //     alert("Đăng ký không thành công!"); // Hiển thị thông báo đăng ký không thành công
    //   }
    // }
    
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <input type="text" placeholder="Nhập fullName" />
      </div>
      <div>
        <input type="email" placeholder="Nhập email" />
      </div>
       <div>
        <input type="password" placeholder="Nhập mật khẩu" />
       </div>

      <button type="submit">Register</button> {/* Nút submit form */}
    </form>
  );
}

export default Register;


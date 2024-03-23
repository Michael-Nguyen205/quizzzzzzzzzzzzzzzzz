import { useEffect } from 'react';
import { login } from "../../Services/getLogin";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies, setCookie, getCookie } from "../../helpers/cokkie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/cart"; // Corrected import path
import { useSelector } from 'react-redux';
// import styles from './styles.module.css';
import styles from './styles.module.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const check = useSelector(state => state.cartReducer.cartItems);
  console.log(check[0]?.check);

  const myCookieValue = getCookie("email");
  console.log("Giá trị của cookie:", myCookieValue);

  const handleCheck = () => {
    const cookie = {
        id: getCookie("id"),
        fullName: getCookie("fullName"),
        email: getCookie("email"),
        token: getCookie("token")
    };

    console.log("kiểu tra cokkie",cookie);

    console.log("kiểu tra cokkie");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email || !password) {
        alert("Vui lòng nhập địa chỉ email và mật khẩu");
        return;
    }

    console.log(email);
    console.log(password);

    const response = await login(email, password);

    console.log(response);
    if (response) {
        setCookie("id", response[0].id, 1);
        setCookie("fullName", response[0].fullName, 1);
        setCookie("email", response[0].email, 1);
        setCookie("token", response[0].token, 1);
        dispatch(checkLogin(true)); // Gửi action để cập nhật trạng thái đăng nhập
        navigate("/");
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  // Sử dụng useEffect để cập nhật trạng thái từ action khi nó thay đổi
  useEffect(() => {
    dispatch(checkLogin(false));
  }, []);

  return (







    <div className={styles.login}>




     <div className={styles.loginbox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input type="email" name="" required="" />
            <label>Gmail</label>
          </div>
          <div className={styles.userbox}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>

          <button className={styles.submit} type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default Login;


















// import { login } from "../../Services/getLogin";
// import { useNavigate } from "react-router-dom";
// // import { setCookie,getCookie } from "../../helpers/cokkie";
// import {deleteAllCookies } from "../../helpers/cokkie";
// import { setCookie} from "../../helpers/cokkie";
// import { getCookie} from "../../helpers/cokkie";
// import { useDispatch } from "react-redux";
// import { checkLogin } from "../../actions/cart"; // Corrected import path
// import { useSelector } from 'react-redux';
// import styles from './styles.module.css';










// function Login() {
//   const navigate = useNavigate();
//  const dispatch = useDispatch(); // Corrected parentheses


// const check = useSelector(state => state.cartReducer.cartItems);
// console.log(check[0]?.check);





// const myCookieValue = getCookie("email");
// console.log("Giá trị của cookie:", myCookieValue);





// const handleCheck = () => {
//     const cookie = {
//         id: getCookie("id"),
//         fullName: getCookie("fullName"),
//         email: getCookie("email"),
//         token: getCookie("token")
//     };

//     console.log("kiểu tra cokkie",cookie);

//     console.log("kiểu tra cokkie");
// };





//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     if (!email || !password) {
//         alert("Vui lòng nhập địa chỉ email và mật khẩu");
//         return; // Ngăn chặn việc tiếp tục đăng nhập nếu email hoặc password không được nhập
//       }

//     console.log(email);
//     console.log(password);

//     const response = await login(email, password);




//     console.log(response);
//     if (response) {
//         setCookie("id", response[0].id, 1);
//         setCookie("fullName", response[0].fullName, 1);
//         setCookie("email", response[0].email, 1);
//         setCookie("token", response[0].token, 1);
//         dispatch(checkLogin(true)); 

//         navigate("/");
//     } else {
//         alert("Sai tài khoản hoặc mật khẩu!");
//     }



// console.log(e);
//   };
//   return (
//     <div>
//      <form onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <div>
//         <input type="email" placeholder="Nhập email" />
//       </div>
//        <div>
//         <input type="password" placeholder="Nhập mật khẩu" />
//        </div>
//        <button type="submit">Login</button>
//     </form>

//     <button type="button" onClick={handleCheck}>Kiểm tra cookie</button>




//     <div>login</div>
//     </div>
//   );
// }

// export default Login;


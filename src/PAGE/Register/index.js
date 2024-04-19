import { useEffect } from 'react';
import { register } from "../../Services/getLogin";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies, setCookie, getCookie } from "../../helpers/cokkie";
import { generateToken } from "../../helpers/Token";

import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/cart"; // Corrected import path
import { useSelector } from 'react-redux';
// import styles from './styles.module.css';
import styles from './styles.module.css';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const check = useSelector(state => state.cartReducer.cartItems);
  console.log(check[0]?.check);

  const myCookieValue = getCookie("email");
  console.log("Giá trị của cookie:", myCookieValue);

  const handleCheck = () => {
    const cookie = {
       
        // fullName: getCookie("fullName"),
        // email: getCookie("email"),
        // token: getCookie("token")
      
    };

    console.log("kiểu tra cokkie",cookie);

    console.log("kiểu tra cokkie");
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const token = generateToken()

    console.log(email);
    console.log(password);
    console.log(fullName);

    const dataregister = {
        email: email,
        password: password,
        fullName: fullName,
        token : token
    };
;


    const response = await register(dataregister);


    console.log(response);
    if (response) {
        alert(" đăng kí thành công!");
        console.log("thanh cong");
        // setCookie("id", response[0].id, 1);
        // setCookie("fullName", response[0].fullName, 1);
        // setCookie("email", response[0].email, 1);
        // setCookie("token", response[0].token, 1);
        navigate("/");
    } else {
        alert(" đăng kí thành công!");
    }
  };

  // Sử dụng useEffect để cập nhật trạng thái từ action khi nó thay đổi
//   useEffect(() => {
//     dispatch(checkLogin(false));
//   }, []);

  return (





    <div className={styles.login}>




     <div className={styles.loginbox}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div className={styles.userbox}>
            <input type="" name="" required="" />
            <label>Username</label>
          </div>
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

export default Register;

















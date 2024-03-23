import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cokkie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/cart";
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();



const check = useSelector(state => state.cartReducer.cartItems);
console.log(check[0]?.check);


  

  
  useEffect(() => {
    deleteAllCookies();
    dispatch(checkLogin(false));
    setTimeout(() => {
        navigate("/login");
      }, 200);
  }, []);
  
  return (
    <>
đang logout
    </>
  );
}

export default Logout;

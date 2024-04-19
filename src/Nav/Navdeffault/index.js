import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Flex } from 'antd';

import styles from './styles.module.css'; // Đảm bảo đường dẫn đúng đến file CSS của bạn

function LayoutDefault() {
  const check = useSelector(state => state.cartReducer.cartItems);
  const Status = check[0]?.check;

  const { Header, Footer, Sider, Content } = Layout;


  const layoutStyle = {
    
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%', // Chiếm full chiều rộng
    position: 'relative', // Đặt vị trí tương đối để phù hợp với hiệu ứng blur
    zIndex: 0, // Đảm bảo layoutStyle không bị che phủ bởi các phần tử con với zIndex cao hơn
    backgroundColor: 'rgba(255, 255, 255, 0.045)', // Màu trắng với độ trong suốt 50%
    backdropFilter: 'blur(25px)', // Hiệu ứng mờ với bán kính là 25px
  };
  
  const headerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.045)', // Màu trắng với độ trong suốt 50%
    color: '',
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    borderBottom: '1px solid #ccc',
    position: 'relative', // Đặt vị trí tương đối để phù hợp với hiệu ứng blur
    zIndex: 1, // Đảm bảo headerStyle hiển thị trên các phần tử khác
  };
  
  const siderStyle = {
    textAlign: 'center',
    color: '',
    backgroundColor: 'rgba(255, 255, 255, 0.045)', // Màu trắng với độ trong suốt 50%
    position: 'relative', // Đặt vị trí tương đối để phù hợp với hiệu ứng blur
    zIndex: 1, // Đảm bảo siderStyle hiển thị trên các phần tử khác, nếu có
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
    width: '100%', // Chiếm full chiều rộng
    position: 'relative', // Đặt vị trí tương đối để phù hợp với hiệu ứng blur
    zIndex: 1, // Đảm bảo footerStyle hiển thị trên các phần tử khác, nếu có
  };
  
  return (
    <div className="layout">



{/*         
      <header className="layout-default-header" style={headerStyle}>
        <div className="layout-default-header__logo">Quiz</div>
        <div className="layout-default-header__nav">
          <NavLink to="/">Home</NavLink>
          {Status && (
            <>
              <NavLink to="/topic">Topic</NavLink>
              <NavLink to="/Answesr">Answers</NavLink>
            </>
          )}
        </div>
        <div className="layout-default-header__account">
          {Status ? (
            <NavLink to="/logout">Đăng xuất</NavLink>
          ) : (
            <>
              <NavLink to="/login">Đăng nhập</NavLink>
              <NavLink to="/Register">Đăng ký</NavLink>
            </>
          )}
        </div>
      </header>



 */}

<div className={styles.background} >


<div class={styles.anime}></div>

     <img src="https://st2.depositphotos.com/1793519/50734/i/450/depositphotos_507343692-stock-photo-render-abstract-pink-blue-neon.jpg"/>
     
     <div className={styles.blur} >
 


    </div>

</div>








{/* 



      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          <Sider width="25%" style={siderStyle}>
            <div className="layout-default-header__nav">
              <NavLink to="/">Home</NavLink>
              {Status && (
                <>
                  <NavLink to="/topic">Topic</NavLink>
                  <NavLink to="/Answesr">Answers</NavLink>
                </>
              )}
            </div>
            <div className="layout-default-header__account">
              {Status ? (
                <NavLink to="/logout">Đăng xuất</NavLink>
              ) : (
                <>
                  <NavLink to="/login">Đăng nhập</NavLink>
                  <NavLink to="/Register">Đăng ký</NavLink>
                </>
              )}
            </div>
          </Sider>


          <Layout>
            <Header style={headerStyle}>  <div className="layout-default-header__logo">Quiz</div></Header>
            <Content>
              <main className="layout-default-main">
                <Outlet />
              </main>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>

        </Layout>

      </Flex>



 */}




<div className={styles.box}>






<div className={styles.sider} >

<div className="layout-default-header__nav">
              {/* <NavLink to="/">Home</NavLink> */}


              {/* {Status && (
                <>
                  <NavLink to="/topic">Topic</NavLink>
                  <NavLink to="/Answesr">Answers</NavLink>
                </>
              )}
            </div>
            <div className="layout-default-header__account">


              {Status ? (
                <NavLink to="/logout">Đăng xuất</NavLink>
              ) : (
                <>
                  <NavLink to="/login">Đăng nhập</NavLink>
                  <NavLink to="/Register">Đăng ký</NavLink>
                </>
              )} */}


            </div>
          





<div className={styles.nav}>



{/* <ul> */}

    {/* <li style="--i:6;" data-icon="sdf">
khánh là con chó
    </li>
    <li style="--i:5;" data-icon="sdf">
khánh là con chó
    </li>
    <li style="--i:3;" data-icon="sdf">
khánh là con chó
    </li>
    <li style="--i:2;" data-icon="sdf">
khánh là con chó
    </li>
    <li style="--i:1;" data-icon="sdf">
khánh là con chó
    </li>
    <li style="--i:0;" data-icon="sdf">
khánh là con chó
    </li>
 */}


{/* <li data-icon="sdf">
<NavLink to="/topic">Topic</NavLink>
</li>
<li data-icon="sdf">
<NavLink to="/topic">Topic</NavLink>
</li>
<li data-icon="sdf">
<NavLink to="/topic">Topic</NavLink>
</li>
<li data-icon="sdf">
<NavLink to="/topic">Topic</NavLink>
</li>
<li data-icon="sdf" className=" box2"  >
<NavLink to="/topic">Topic</NavLink>
</li> */}
{/* </ul> */}


<ul>
<NavLink to="/" style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
 HOME
</li>
</NavLink>

<NavLink to="/about" style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
About Us
</li>
</NavLink>


{Status && (
                <>
                 <NavLink to="/topic" style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
    Topic
 </li>
</NavLink>

<NavLink to="/Answesr" style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
Answers
 </li>
</NavLink>
                </>
              )}


{Status ? (
<NavLink to="/logout" style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
Đăng xuất
 </li>
</NavLink>

) : (
    <>

<NavLink to="/login" style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
Đăng nhập
 </li>
</NavLink>


<NavLink to="/Register"style={{ textDecoration: 'none' }}>
<li data-icon="sdf">
Đăng ký
 </li>
</NavLink>
</>
              )}
</ul>









<div className={styles.info}> 
<div className={styles.title}> 
<h1>QUIZY TRẮC NGHIỆM HAY</h1>
</div>


<div className={styles.dsc}> 
HÃY CÙNG TÔI LÀM NHỮNG BÀI TEST EXAM THỨ VỊ NÀY NHÉ
</div>


   </div>




</div>








</div>








<div className={styles.headecontent} >

<div className={styles.header} >
<div className="layout-default-header__logo">


<div className={styles.keyboard}>
    <span className={styles.key}>Q</span>
    <span className={styles.key}>U</span>
    <span className={styles.key}></span>
    <span className={styles.key}>I</span>
    <span className={styles.key}>Z</span>
    <span className={styles.key}>Y</span>
    {/* <span className={styles.key}>R</span>
    <span className={styles.key}>D</span> */}
</div>

  
  
  
    </div>
    
</div>


<div className={styles.content} >

<main className="layout-default-main">
                <Outlet />
   </main>
    
</div>


</div>



</div>


<div className={styles.footer}>

     
     
     
      </div>









</div>
  );
}

export default LayoutDefault;

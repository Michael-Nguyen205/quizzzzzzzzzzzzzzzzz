import React, { useState } from "react";
import  { useEffect } from "react"; // Import useEffect từ thư viện React

// Các dòng mã khác ở đây...

import { Link } from "react-router-dom";
import { getListTopic } from "../../Services/TopicService";
import styles from './styles.module.css';
import { Row, Col, Button  } from 'antd';


function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);


    };

  fetchApi();
  }, []);

  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % topics.length);
  // };

  // const handlePrev = () => {
  //   setActiveIndex((prevIndex) => (prevIndex - 1 + topics.length) % topics.length);

  // };

  const totalToppic = topics.length;

  const handleCheck = () => {

    console.log("data",totalToppic)
    console.log(topics)
  }







  return (
    <div className={styles.bodytoppicc}>
      {/* {topics.length > 0 && (
        <div>
          {topics.map((item, index) => (
            <div key={item.id} className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`}>
              <div className={styles.item}>
                <h1>{item.name}  id:{item.id}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to={"/Quiz/" + item.id}>Làm bài</Link>
              </div>
            </div>
          ))}
        </div>
      )}

 */}






{/* <Col key={item.id} className={`${styles.slider} ${index === activeIndex ? styles.active : ''}`} span={8}> */}
{/* <div className={`${styles.item} ${active === item.id ? styles.active : ""}`}> */}



<div className={styles.bodytoppic}>

  <Row gutter={[7, 7]}>
      {topics.length > 0 && (
        topics.map((item, index) => (
          <Col key={item.id} className={`${styles.slider}`} span={24}>
            <div className={`${styles.item}`}>
              <h1> topic:{index+1} {item.name}  id:{item.id}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to={"/Quiz/" + item.id}  className={styles.buttontoppic}    >Làm bài</Link>
            </div>
          </Col>
        ))
      )}
    </Row>


<button id="next">Next</button>
<button id="prev">Previous</button>


</div>


<Button type="button"  onClick={handleCheck}  >   kiểm tra data </Button>




    </div>
  );
}

export default Topic;

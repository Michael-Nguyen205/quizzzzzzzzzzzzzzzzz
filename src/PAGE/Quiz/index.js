import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import { Row, Col } from 'antd';

import { useParams, useNavigate } from "react-router-dom";
import { getTopic } from "../../Services/TopicService";
import { getListQuestion } from "../../Services/getListQuestion";
import { getCookie } from "../../helpers/cokkie";
import { createAswers } from "../../Services/quizService";


function Quiz() {
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [topics, setTopics] = useState([]);
  const userId = getCookie("id");
  const topicId = params.id;
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const fetchTopic = async () => {
      const response = await getTopic(params.id);
      setTopics(response);
    };
    fetchTopic();
  }, [params.id]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await getListQuestion(params.id);
      if (response) {
        setQuestion(response);
      } else {
        alert("Lấy question không thành công");
      }
    };
    fetchQuestions();
  }, [params.id]);





  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e);
    console.log(e.target[0].checked);

    

    let answers = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        answers.push({
          questionId: parseInt(name),
          answer: parseInt(value)
        });
      }
    }

    const userData = {
      userId: parseInt(userId),
      topicId: parseInt(topicId),
      answers: answers
    };

    try {
      const response = await createAswers(userData);
      console.log(response);
      if(response){
         navigate(`/Result/${response.id}`);
         console.log(response.id );
      }
    } catch (error) {
      console.error("Error while submitting answers:", error);
    }
  };



  const handleAnswerChange = (questionId, answerIndex) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: answerIndex
    }));

    console.log("heeloo",questionId,answerIndex);
    console.log(selectedAnswers);
  };





//   const checked = selectedAnswers.item.id;

  return (
    <div className={styles.quizzbody} >
      <form onSubmit={handleSubmit}>
        <div>
        <div className={styles.topiccc} >{topics[0]?.name}</div>
          {question ? (
            question.map((item, index) => (
              <div  key={item.id}>
                <h1 className={styles.Quizz} >{index + 1} {item.question}</h1>
                <Row gutter={[16, 16]}className={styles.Row} >
                  {item.answers.map((answeritem, indexanswer) => (
                    <Col key={indexanswer} xxl={24} xl={24} lg={24} md={24} sm={24} className={styles.Col}>
                      <input tabindex="0"
                        type="radio"
                        name={item.id}
                        value={indexanswer}
                        id={`${index}-${indexanswer}`}
                        onChange={() => handleAnswerChange(item.id, indexanswer)}
                        
                      />
                      <label   className={`${styles.label} ${selectedAnswers[item.id] === indexanswer ? styles.checked : ''}`} htmlFor={`${index}-${indexanswer}`}>
                        {answeritem}  
                        {/* {item.id}  {selectedAnswers[item.id]}   {indexanswer} */}
                      </label>






                    </Col>
                  ))}
                </Row>
              </div>
            ))
          ) : (
            <div>Không có câu hỏi nào.</div>
          )}
        </div>


        <div >
        <button className={styles.onSubmit}type="submit">Submit</button>
        </div>
      
      </form>
    </div>
  );
}

export default Quiz;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTopic } from "../../Services/TopicService";
import { getListQuestion } from "../../Services/getListQuestion";
import { getCookie } from "../../helpers/cokkie";
import { createAswers } from "../../Services/quizService";
import styles from './styles.module.css';
function Quiz() {
  const params = useParams();
  const [question, setQuestion] = useState([]);
  const [topics, setTopics] = useState([]);
  const userId = getCookie("id");
  const topicId = params.id;
  const navigate = useNavigate();

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
      const response = await createAswers(userData); // Gửi userData trực tiếp
      console.log(response);
      if(response){
         navigate(`/Result/${response.id}`);
      }
    } catch (error) {
      console.error("Error while submitting answers:", error);
    }
  };

  return (
    <div>
      <div>{topics[0]?.name}</div>
      <form onSubmit={handleSubmit}>
        <div>
          {question ? (
            question.map((item, index) => (
              <div key={item.id}>
                <p>{index + 1} {item.question}</p>
                <ul>
                  {item.answers.map((answeritem, indexanswer) => (
                    <div key={indexanswer}>
                      <input
                        type="radio"
                        name={item.id}
                        value={indexanswer}
                        id={`${index}-${indexanswer}`}
                      />
                      <label htmlFor={`${index}-${indexanswer}`}>
                        {answeritem}
                      </label>
                    </div>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div>Không có câu hỏi nào.</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Quiz;

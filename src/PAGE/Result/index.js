// Result.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswerById } from "../../Services/getAnserByUserId";
import { getListQuestion } from "../../Services/getListQuestion";
import styles from './styles.module.css';

function Result() {
  const params = useParams();
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswerById(params.id);
      const dataQuestions = await getListQuestion(dataAnswers[0]?.topicId);

      const mergeData = () => {
        let result = [];

        dataQuestions.forEach(question => {
          const correspondingAnswer = dataAnswers.find(answer => answer.answers.some(a => a.questionId === question.id));
          
          if (correspondingAnswer) {
            result.push({
              questionId: question.id,
              question: question.question,
              answers: question.answers,
              correctAnswer: question.correctAnswer,
              answer: correspondingAnswer.answers.find(a => a.questionId === question.id)?.answer
            });
          }
        });

        return result;
      };

      setMergedData(mergeData());
    };

    fetchApi();
  }, [params.id]);

  const handleCheck = () => {
    console.log("Dữ liệu gộp:", mergedData);
  };

  return (
    <div>
      <h1>Kết quả:</h1>
      <div className={styles["result-list"]}>
        {mergedData.map((item, index) => (
          <div className={styles["result-item"]} key={index}>
            <p>
              Câu {index + 1}: {item.question}
              <span className={styles["result-tag"] + " " + (item.correctAnswer === item.answer ? styles["result-tag--true"] : styles["result-tag--false"])}>
                {item.correctAnswer === item.answer ? " Đúng" : " Sai"}
              </span>
            </p>







            {item.answers.map((itemAns, indexAns) => {




              let className = "";
              let checked = null;
              if (item.answer === indexAns   ) {
                checked = true;
                className = styles.resultitemselected;

              }


                
                if (item.correctAnswer === indexAns) {
                  className = styles.resultitemresult;
                }
              

      


              return (
                <div className={styles.resultanswer} key={indexAns }>
                  <input type="radio" checked={checked} disabled id={indexAns+1} />
                  <label htmlFor={indexAns+1} className={className}>{itemAns}  index:{indexAns} answer:{item.answer} crect {item.correctAnswer}</label>
              
                </div>

                
              );
            })}
          </div>
        ))}
      </div>
      <button type="button" onClick={handleCheck}>
        Kiểm tra data ansswer
      </button>

    </div>
  );
}

export default Result;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getAnswerById } from "../../Services/getAnserByUserId";
// import { getListQuestion } from "../../Services/getListQuestion";

// function Result() {
//   const params = useParams();
//   const [dataResult, setDataResult] = useState([]);
//   const [questionResult, setQuestionResult] = useState([]);
//   const [result, setResult] = useState([]); // Khai báo state để lưu trữ giá trị của result

//   useEffect(() => {
//     const fetchApi = async () => {
//       const dataAnswers = await getAnswerById(params.id);
//       setDataResult(dataAnswers);
//       console.log(dataResult);

//       const dataQuestion = await getListQuestion(dataResult[0]?.topicId); // Sử dụng optional chaining để tránh lỗi nếu dataResult rỗng
//       setQuestionResult(dataQuestion);
//       console.log(questionResult);

//       var result = [];

//       for (let i = 0; i < questionResult.length; i++) {
//         result.push({ ...dataResult.answers[0].find((item) => item.questionId === questionResult[i].id), ...questionResult[i],   answer:  ...dataResult.answers[0].find((item) => item.questionId === questionResult[i].id), ...questionResult[i].answer          });
//       }

//       console.log("result", result);
//       setResult(result); // Cập nhật giá trị của result
//     };

//     fetchApi();
//   }, [params.id]); // Thêm params.id vào mảng phụ thuộc của useEffect

//   const handleCheck = () => {
//     if (dataResult) {
//       console.log("answer đây", dataResult);
//       console.log("answer đây", dataResult[0]?.topicId); // Sử dụng optional chaining để tránh lỗi nếu dataResult rỗng
//       console.log("question đây", questionResult);


//       console.log("dap an đây",   dataResult.answers.answer[0]); 
    

//       if (result) {
//         console.log("result", result);
//       } else {
//         console.log("result không có");
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>Page Result</h1>
//       <button type="button" onClick={handleCheck}>
//         Kiểm tra data answer
//       </button>
//     </div>
//   );
// }

// export default Result;



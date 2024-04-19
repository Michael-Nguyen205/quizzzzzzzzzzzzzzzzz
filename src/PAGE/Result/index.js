import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswerById } from "../../Services/getAnserByUserId";
import { getListQuestion } from "../../Services/getListQuestion";
import styles from './styles.module.css';

function Result() {
  // Get the parameter from the URL
  const params = useParams();

  // States to hold data
  const [mergedData, setMergedData] = useState([]);
  const [dataAnswers, setDataAnswers] = useState([]);
  const [dataQuestions, setDataQuestions] = useState([]);
  const [status, setStatus] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const answers = await getAnswerById(params.id);
        setDataAnswers(answers);
  
        const questions = await getListQuestion(answers[0]?.topicId);
        setDataQuestions(questions);
  
        let result = [];
  
        // Ensure both answers and questions are available before merging
        if (answers.length > 0 && questions.length > 0) {



          console.log("Data mergedData:", result); // Log merged data for debugging



















          // const checking = answers.forEach(answer =>
          //   answer.answers[0].some(a => a.questionId === question.id)
          // ); 
          
          // console.log("checking :",checking); // Log merged data for debugging
          
          // //-------------------------------------------------------------------
          
          // const checkingg2 = dataAnswers.some(answer =>
          //   answer.answers[0].some(a => a.questionId === question.id)
          // ); 
          
          // console.log("checkingg2 :",checkingg2); // Log merged data for deb
          







          questions.forEach(question => {


            console.log("Data mergedData:", result); // Log merged data for debugging


//-------------------------------------------------------------------

console.log("Data :", answers.find(answer=>  answer.answers [0])); // Log merged data for debugging

//-------------------------------------------------------------------

console.log("Data ")

//-------------------------------------------------------------------
console.log("dataAnswers",dataAnswers )
console.log("dataAnswers",question )
// console.log("dataAnswers",dataAnswers[0].answers[0].questionId )
console.log("dataAnswers",question.id )



// const correspondingAnswer = dataAnswers.some(item =>
//   item.answers.some(a => a.questionId === question.id)
  
// ) ;




const checking = dataAnswers.forEach(answer =>
  answer.answers.some(a => a.questionId === question.id)
); 

console.log("checking :",checking); // Log merged data for debugging

//-------------------------------------------------------------------

const checkingg2 = dataAnswers.find(answer =>
  answer.answers.some(a => a.questionId === question.id)
); 

console.log("checkingg2 :",checkingg2); // Log merged data for deb

//-------------------------------------------------------------------

console.log(" phế quá ");


console.log("Data :", result); // Log merged data for debugging
console.log("Data :", result); // Log merged data for debugging



const correspondingAnswer = dataAnswers.find(item =>
  item.answers.find(a => a.questionId ===  parseInt(question.id))
  
) ;
   console.log("check :", correspondingAnswer); 


            if (correspondingAnswer) {


              console.log("Data mergedData:", correspondingAnswer); // Log merged data for debugging
              console.log("Data mergedData:"); 

              result.push({
                questionId: question.id,
                question: question.question,
                answers: question.answers,
                correctAnswer: question.correctAnswer,
                answer: correspondingAnswer.answers.find(
                  a => a.questionId === parseInt( question.id)
                )?.answer




              });
  
              console.log("Data mergedData:", result); // Log merged data for debugging

            }
          });
        }
  
        setMergedData(result);
        console.log("Data mergedData:", result); // Log merged data for debugging
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchApi();
  }, []); // Add params.id to dependency array if it's used inside useEffect
  













  // Function to handle checking data
  const handleCheck = () => {
    console.log("Data Answers:", dataAnswers);
    console.log("Data Questions:", dataQuestions);
    console.log("Data mergedData:", mergedData);



    // console.log("Data Answers:", dataAnswers.answers[1].questionId);
    // console.log("Data Questions:", dataQuestions.id);
    console.log("Data mergedData:", mergedData);



    setStatus(false);
  };

  // Calculate total answers and correct answers
  let totalAnswers = mergedData.length;
  let correctAnswer = mergedData.filter(item => item.correctAnswer === item.answer).length;















  return (
    <div>
      <h1>Kết quả:</h1>
      <h2>Tổng số câu đúng: {correctAnswer}/{totalAnswers}</h2>
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
              if (item.answer === indexAns) {
                checked = true;
                className = styles.resultitemselected;
              }
              if (item.correctAnswer === indexAns) {
                className = styles.resultitemresult;
              }
              return (
                <div className={styles.resultanswer} key={indexAns}>
                  <input type="radio" checked={checked} disabled id={indexAns + 1} />
                  <label htmlFor={indexAns + 1} className={className}>{itemAns}  index:{indexAns} answer:{item.answer} correct {item.correctAnswer}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button type="button" onClick={handleCheck}>
        Kiểm tra data answer
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



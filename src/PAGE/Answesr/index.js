// import React, { useEffect, useState } from "react";
// import { getListTopic } from "../../Services/TopicService";
// import { getAnswersByUserId } from "../../Services/getAnserByUserId";

// import styles from './styles.module.css';


// function Answesr() {
//   const [answesr, setAnswesr] = useState([]);
//   const [topics, setTopics] = useState([]);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const response = await getListTopic();
//       setTopics(response);
//     };

//     fetchApi();
//   }, []);

//   useEffect(() => {
//     const fetchApi = async () => {
//       const response = await getAnswersByUserId();
//       if (response) {
//         setAnswesr(response);
//       } else {
//         alert("Lấy answers không thành công");
//       }
//     };

//     fetchApi();
//   }, []);

//   const handleCheck = () => {
//     if (answesr) {
//       console.log("answer đây", answesr);
//       console.log("topic đây", topics);
//     }


//     var result = [];

//     for (let i = 0; i < answesr.length; i++) {
    
    
//         result.push({ ...topics.find((item) => item.id === answesr[i].topicId), ...answesr[i] });
     
//     }

//     console.log("result", result);
//   };

//   return (
//     <div>
//       Aswers
//       <button type="button" onClick={handleCheck}>
//         Kiểm tra data ansswer
//       </button>


    
//       <div>
//       <h2>Danh sách chủ đề</h2>
//       {topics.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Tên chủ đề</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {topics.map(item => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>
              
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>

//     </div>
//   );
// }

// export default Answesr;

import React, { useEffect, useState } from "react";
import { getListTopic } from "../../Services/TopicService";
import { getAnswersByUserId } from "../../Services/getAnserByUserId";
import { Link } from "react-router-dom";
import styles from './styles.module.css';

function Answer() {
  const [answers, setAnswers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [result, setResult] = useState([]);
  const [selectedResultId, setSelectedResultId] = useState(null); // State for selected result id

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await getListTopic();
      setTopics(response);
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    const fetchAnswers = async () => {
      const response = await getAnswersByUserId();
      if (response) {
        setAnswers(response);
      } else {
        alert("Lấy answers không thành công");
      }
    };

    fetchAnswers();
  }, []);

  const handleCheck = () => {
    if (answers && topics) {
      console.log("answers:", answers);
      console.log("topics:", topics);

      var newResult = [];

      for (let i = 0; i < answers.length; i++) {
        newResult.push({ ...topics.find((item) => item.id === answers[i].topicId), ...answers[i] });
      }

      setResult(newResult);
    }
  };

  const handleHover = (resultId) => {
    setSelectedResultId(resultId); // Set selected result id on hover
  };

  return (
    <div>
      <h1>Answers</h1>
      <button type="button" onClick={handleCheck}>
        Kiểm tra data answer topic và result
      </button>

      <div className={styles["table-container"]}>
        <h2>Danh sách chủ đề</h2>
        {topics.length > 0 && (
          <table className={styles["topic-table"]}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên chủ đề</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topics.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {/* Set hover handler */}
                    <Link to={`/Result/${selectedResultId}`} onMouseEnter={() => handleHover(item.id)}>check điểm</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Answer;

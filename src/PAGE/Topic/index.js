

import React, { useEffect, useState } from "react"; // Sửa lỗi cú pháp import và bổ sung chú thích
import { Link } from "react-router-dom";
import { getListTopic } from "../../Services/TopicService";
import styles from './styles.module.css';
function Topic() {
  const [topics, setTopics] = useState([]); // Sửa lỗi cú pháp và bổ sung chú thích

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      setTopics(response);
    };

    fetchApi();
  }, []); // Sửa lỗi cú pháp và bổ sung chú thích

  console.log(topics);
  
  return (
    



    
    <div>
      <h2>Danh sách chủ đề</h2>
      {topics.length > 0 && (
        <table>
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
              
                <Link to={"/Quiz/" + item.id}>Làm bài</Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
   
  

  );
}

export default Topic;


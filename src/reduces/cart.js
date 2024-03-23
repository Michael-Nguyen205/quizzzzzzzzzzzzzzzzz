
const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {








      case 'CHECKSTATUS':
        console.log("Reducer add:",action.check);
       
  
        return {
       
          cartItems: [
    
            {
             
              check: action.check,
            },
          ],
        };



    default:
      return state; // Trả về trạng thái hiện tại nếu không có action nào khớp
  }
};

export default cartReducer;

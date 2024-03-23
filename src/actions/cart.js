// Addtocart function
export const Addtocart = (id, info,price,sizeid) => {
    return {
      type: "ADDTOCART",
      id: id,
      info: info,
      total: price,
      size: sizeid
    };
  };
  



export const Updatecart = (id, price ,quantity = 1) => {
  return {
    type: "UPDATECART",
    id: id,
    // info: info,
    quantity: quantity,
    price: price
  };
};


export const Deletecart = (id) => {
  return {
    type: "DELETECART",
    id: id,
  
  };
};




//action.js
export const checkLogin = (check) => {
  return {
    type: "CHECKSTATUS",
    check: check,
  
  };
};






//   const AddTocard = ( id , info )=>{

//   return {  
// type:"ADDTOCART",
// id:id,
// info:info

//   };};
  
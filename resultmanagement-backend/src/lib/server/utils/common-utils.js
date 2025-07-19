// import jwt from "jsonwebtoken";
// const SECRET_KEY = "qwertyui";


// export function checkAuthoraization(event){
//     const authHeader = event.request.headers.get('Authorization');
//     const token = authHeader.split(' ')[1];

//             const decoded = jwt.verify(token, SECRET_KEY);
//             console.log(decoded,"-------------------------------------Decoded");
            
//     if(decoded){
// return true;
//     }else{
//         return false;
//     }
// }


import jwt from "jsonwebtoken";
const SECRET_KEY = "qwertyui";

export function checkAuthoraization(event) {
  const authHeader = event.request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.warn(" Missing or malformed Authorization header.");
    return false;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded Token:", decoded);
    return true;
  } catch (err) {
    console.error("Invalid Token:");
    return false;
  }
}

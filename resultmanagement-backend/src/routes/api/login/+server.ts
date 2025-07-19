import { connectDB } from "$lib/server/db";
import { User } from "$lib/server/models/register";
import { json } from "@sveltejs/kit";
import jwt from "jsonwebtoken";


const SECRET_KEY = "qwertyui";

export async function POST(event:any) {
    let payLoad = await event.request.json();
    
    try{
        await connectDB();
        const user = await User.findOne(payLoad);
        console.log(user);
        if(user){
            const token = jwt.sign({ email:payLoad.email,role:user.role }, SECRET_KEY, { expiresIn: '7d' });
            console.log(token,"-----------------------------------Token");
            
           return json({token,username: user.userName,role:user.role});
            
            
        }else{
            return json({data: {status : "failed", message : "incorrect user or password"}})
        }

        return json({data: user},{ headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
        
    }
    catch(error){
        console.log(error);
        return json({status: "error", data : "error"});
        
    }
    
}
export const OPTIONS = async () => {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  };

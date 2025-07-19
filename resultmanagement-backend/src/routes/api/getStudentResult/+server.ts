import { connectDB } from "$lib/server/db";
import { Result } from "$lib/server/models/addNewResult";
import { json } from "@sveltejs/kit";

export async function GET({url}:any) {

    try{
        await connectDB();
        let rollNo = await url.searchParams.get("rollno");

        const user = await Result.findOne({"rollno": rollNo});
        console.log(user);
        

        return json({data:user, result:true},  {
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });
    }
    catch(error){
        return json({status:"error", data:"error"});
    }
       
}
export const OPTIONS = async () => {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
};



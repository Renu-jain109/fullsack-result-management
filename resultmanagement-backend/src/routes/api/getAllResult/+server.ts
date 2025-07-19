import { connectDB } from "$lib/server/db";
import { Result } from "$lib/server/models/addNewResult";
import { json } from "@sveltejs/kit";
import { checkAuthoraization } from "$lib/server/utils/common-utils";


export async function GET(event: any) {
    try {
let authoraized = checkAuthoraization(event);
        if(authoraized){
            await connectDB();
            const response = await Result.find();
            console.log(' Results fetched:', response);
            
            return json({ status: 'success', data: response }
            );
    
        }else{
            console.warn("Token expired or invalid.");
            return json({ status: 'error', 
                    data : 'token-expair'}
            )
        }
    

        }
        catch (error) {
            console.log("Error in getAllResult:", error);
            return json({ status: "error", data: "error" });
    
        }


}

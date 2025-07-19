import { connectDB } from "$lib/server/db";
import { Result } from "$lib/server/models/addNewResult";
import { User } from "$lib/server/models/register";
import { json } from "@sveltejs/kit";

export async function POST(event: any) {
    let payLoad = await event.request.json();
    console.log(payLoad,"-----------------------------------PayLoad");
    
    try {
        await connectDB();
        const user = await Result.insertOne(payLoad);
        console.log(user);
        
        return json({ data: user }, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });

    }
    catch (error) {
        console.log(error);
        return json({ status: "error", data: "error" });

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

import { connectDB } from "$lib/server/db";
import { Result } from "$lib/server/models/addNewResult";
import { User } from "$lib/server/models/register";
import { json } from "@sveltejs/kit";



export async function POST(event: any) {
    let payLoad = await event.request.json();
    console.log(payLoad, "-----------------------------------PayLoad");

   
 try {
        await connectDB();
        // Check if result already exists
        const existingResult = await Result.findOne({ rollno: payLoad.rollno });

        if (existingResult) {
            return json(
                { status: "error", message: "Result already exists" },
                { status: 400 }
            );
        }
        // Insert new result
        const newResult = await Result.create(payLoad);
        return json({ status: "success", data: newResult });
    }  catch (error) {
    return json({ status: "error", message: "Server error" });
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

import { connectDB } from "$lib/server/db";
import { Result } from "$lib/server/models/addNewResult";
import { json } from "@sveltejs/kit";

export async function DELETE(event: any) {
    let payLoad = await event.request.json();

    try {
        await connectDB();
        let _id = payLoad._id;
        const user = await Result.deleteOne({"_id": _id });

        return json({ data: user, result: true }, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins
                'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });
    }
    catch (error) {
        return json({ status: "error", data: "error" });
    }
}
export const OPTIONS = async () => {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
};




// import { connectDB } from "$lib/server/db";
// import { Result } from "$lib/server/models/addNewResult";
// import { json } from "@sveltejs/kit";

// export async function DELETE(event: any) {
//     let payLoad = await event.request.json();

//     try {
//         await connectDB();
//         let rollNo = payLoad.rollNumber;
//         const user = await Result.deleteOne({"rollNumber": rollNo });

//         return json({ data: user, result: true }, {
//             headers: {
//                 'Access-Control-Allow-Origin': '*', // Allow all origins
//                 'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
//                 'Access-Control-Allow-Headers': 'Content-Type'
//             }
//         });
//     }
//     catch (error) {
//         return json({ status: "error", data: "error" });
//     }
// }
// export const OPTIONS = async () => {
//     return new Response(null, {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Methods': 'DELETE, OPTIONS',
//             'Access-Control-Allow-Headers': 'Content-Type'
//         }
//     });
// };

import { connectDB } from "$lib/server/db";
import { Result } from "$lib/server/models/addNewResult";
import { json } from "@sveltejs/kit";


export async function PUT(event: any) {
    let payLoad = await event.request.json();

    try {
        await connectDB();
        let _id = payLoad._id;
        const user = await Result.updateOne({ '_id': _id }, { $set: payLoad });
        console.log(user,"-----------------------------------User");
          
        return json({ data: user, result: true },{headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
            'Access-Control-Allow-Methods': 'PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });

    } catch (error) {
        console.log(error);

        return json({ status: error, data: error });
    }

}
export const OPTIONS = async () => {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  };


// import { connectDB } from "$lib/server/db";
// import { Result } from "$lib/server/models/addNewResult";
// import { json } from "@sveltejs/kit";


// export async function PUT(event: any) {
//   const id = event.params.id;  // 👈 GET from URL
//   const payload = await event.request.json();

//   await connectDB();
//   const updated = await Result.updateOne({ _id: id }, { $set: payload });

//   return json({ result: true, data: updated });
// }
// export const OPTIONS = async () => {
//     return new Response(null, {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'PUT, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type'
//       }
//     });
//   };

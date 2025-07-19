
export async function handle ({ event, resolve }){


    if (event.request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins (or specify frontend URL)
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Allow-Credentials': 'true' // Required if sending cookies/auth headers
          }
        });
      }
      else{
        const response = await resolve(event);
        // Add CORS headers to all responses
        response.headers.set('Access-Control-Allow-Origin', '*');
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        response.headers.set('Access-Control-Allow-Credentials', 'true'); // Required for cookies/auth
      
        return response;
    
      }


};

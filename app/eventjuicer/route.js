import { unstable_cache as cache} from 'next/cache';

/**
 * 
 
https://nextjs.org/docs/app/api-reference/functions/unstable_cache

*/

export const revalidate = 600

const handleCache = (url) =>  cache(
    async () => fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json()),
    [url], {
      "revalidate": 600,
    //  "tags": []
    })



export async function GET(request) {

    const { searchParams } = new URL(request.url)
    const url = searchParams.get("url")
    
    if(!url || !url.includes("api.eventjuicer")){
      return Response.json({"error": "Bad ?url=..."})
    }

    const data = await handleCache(url)()

    return Response.json({ data })
  }



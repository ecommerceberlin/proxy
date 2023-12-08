


export async function GET() {
    const res = await fetch('https://api.eventjuicer.com/v1/public/hosts', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json()
   
    return Response.json({ data })
  }
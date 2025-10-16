export async function Post({ request }) {
    const body = await request.json()
    const { name, text } = body

    if (!name || !text) {
        return new Response(
            JSON.stringify({ error: 'Faltan datos' }),
            { 
                headers: { 'Content-Type': 'application/json' },
                status: 400}
        )
    }
    return new Response(
        JSON.stringify({ message: 'Info generada correctamente' }),
        {
            headers: { 'Content-Type': 'application/json' },
            status: 201
        }
    )
}
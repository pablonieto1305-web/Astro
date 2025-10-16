export async function get() {

    const msg ={
        hora : new Date().toLocaleDateString(),
        text: 'la hora es'
    }
        
    return new Response(

        JSON.stringify(msg),
        {headers: {'Content-Type': 'application/json'}}

    )
}
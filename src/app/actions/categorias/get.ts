"use server"

export async function getCategorias() {
    await new Promise(r => setTimeout(r, 10000))
    const resp = await fetch(`${process.env.API_BASE_URL}/categoria`, { next: { revalidate: 0 } })
    return await resp.json()
}
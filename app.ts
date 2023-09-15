 Bun.serve({
    port: 3000,
    fetch (request: Request): Response {
        return new Response('Ready ? Request just camed in', request)
    }
})

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
})

async function handleRequest(request) {
	const { cf } = request || {};
	const ip = request.headers.get('cf-connecting-ip');

	return new Response(`Current IP Address: ${ip}`, {
		headers: { 'content-type': 'text/plain' },
	});
}

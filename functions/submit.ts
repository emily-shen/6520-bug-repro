export async function onRequestPost(context) {
	try {
		return new Response(JSON.stringify(context.env), { status: 200 });
	} catch (error) {
		return new Response("Error: " + error, { status: 400 });
	}
}

export default {
	async fetch(request, env) {
      const url = new URL(request.url);
      const key = url.pathname.slice(1);

      switch (request.method) {
        case 'GET':
          if(key === '') {
            const source = "https://github.com/pkoch/pkoch-public-bucket";

            return new Response(
              "I need a key. Check the source at " + source + "\n",
              {
                status: 302,
                headers: {
                  Location: source,
                },
              });
          }

          const object = await env.PUBLIC_BUCKET.get(key);
          if (!object || !object.body) {
            return new Response(`Object Not Found: ${key}`, { status: 404 });
          }

          const headers = new Headers();
          object.writeHttpMetadata(headers);
          headers.set('etag', object.httpEtag);

          return new Response(object.body, {headers});

        default:
          return new Response('Method Not Allowed', {
            status: 405,
            headers: {
              Allow: 'GET',
            },
          });
      }
  }
}

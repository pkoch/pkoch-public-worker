# pkoch's public bucket

That sweet sweet free egress. ❤️

## Getting files into the bucket with awscli

```bash
echo 'It worked!' > test.txt

AWS_PROFILE=r2 \
CF_ACCOUNT_ID=9fbfc5a598619165478af4be82890d28 \
aws s3 cp --endpoint-url "https://$CF_ACCOUNT_ID.r2.cloudflarestorage.com" test.txt s3://pkoch-public/test.txt
```

## Get them back over HTTP

```bash
curl https://public-bucket.pkoch.workers.dev/test.txt
```

## Dev

```bash
node_modules/.bin/wrangler dev index.js
```

## Publish

Just push to master. Alternatively, run:

```bash
node_modules/.bin/wrangler publish index.js
```

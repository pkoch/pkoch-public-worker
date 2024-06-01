# pkoch's public bucket

That sweet sweet free egress. ❤️

## Getting files into the bucket with awscli

```bash
echo 'It worked!' > test.txt

AWS_PROFILE=r2 \
CF_ACCOUNT_ID=9fbfc5a598619165478af4be82890d28 \
aws s3 cp --endpoint-url "https://$CF_ACCOUNT_ID.r2.cloudflarestorage.com" test.txt s3://pkoch-public/test.txt
```

## Getting files into the bucket with wrangler

```bash
echo 'It worked!' > test.txt

npx wrangler r2 object put pkoch-public/test.txt --file=test.txt
```

## Get them back over HTTP

```bash
curl https://public-bucket.pkoch.workers.dev/test.txt
```

## Dev

```bash
echo 'It worked on local!' | npx wrangler r2 object put pkoch-public/test.txt -p --local
npm run dev
```

## Deploy

Just push to master. Alternatively, run:

```bash
npm run deploy
```

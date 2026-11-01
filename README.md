Reproduction for an `import.meta.glob` bug in `next build`.

```sh
npm install
npm run dev                          # GET / renders {"./items/a.ts":{"id":"a"},"./items/b.ts":{"id":"b"}}
npm run build && npm run start       # GET / renders {}
```

`/` is prerendered, so the `{}` is already in `.next/server/app/index.html` after `npm run build`.

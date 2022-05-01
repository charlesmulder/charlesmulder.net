# Terminal website

## Development

```sh
docker run -ti -v $(pwd):/usr/local/src -w /usr/local/src -u $(id -u):$(id -u) -p 8000:8000 node:lts-alpine npx http-server -p 8000
```

``sh
docker run -ti -v $(pwd):/usr/local/src -w /usr/local/src -u $(id -u):$(id -u) node:lts-alpine /bin/ash
npm run watch
```

## Production

```sh
npm install --omit dev
npm run build
git add -A .
git commit -a -m ''
git push 
git push origin --delete gh-pages 
git subtree push --prefix _site origin gh-pages
```

## Links

- [xtermjs](https://xtermjs.org/)

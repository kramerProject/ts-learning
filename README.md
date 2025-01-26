## Commend

1. Install node
```
npm i -g typescript
```
2. Install typescript globally
```
npm i -g typescript
tsc -v
```

3. Initializing
```
tsc --init
npm init -y
```

4. Detect changes
```
npm i -s live server
```
Alterar arquivo package.json

```
"scripts": {
"start": "live-server"
}

npm start
```

5. Monitorar mudanças automaticamente
```
tsc -w
```
# icp log

日志过滤及留存系统

> 我们还有很多有意义的事,这样的事,干一次就好.

## QuickStart

### Development

```bash
$ yarn
$ yarn dev
$ open http://localhost:7004/
```

### 登录账号

```
User: admin
Password: admin666
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `yarn clean` before `yarn dev`.

### Deploy

```bash
$ yarn tsc
$ yarn start
```

### yarn Scripts

- Use `yarn lint` to check code style
- Use `yarn test` to run unit test
- se `yarn clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

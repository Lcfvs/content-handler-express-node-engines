# <a name="reference">content-handler-express-node-engines</a>

Some [content-handler-express](https://github.com/Lcfvs/content-handler-express) rendering engines for [expressjs](https://expressjs.com)

## <a name="install">Install</a>

`npm i content-handler-express-node-engines`

## <a name="usage">Usage</a>

```js
// ...
import 'content-handler-express-node-engines/engines/html.js'

export default app
  .engine('html', html(app))
  .set('origin', 'https://sub.domain.tld')
```

## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/content-handler-express-node-engines/blob/master/licence.md)

# x-router-swig
> [`swig`](https://github.com/paularmstrong/swig) view engine for x-router

```sh
$ npm install x-router x-router-swig --save
```

## Usage
> See [`example`](https://github.com/attrs/x-router/tree/master/examples/swig)

```javascript
var router = require('x-router');
var swigengine = require('x-router-swig');

router()
  .engine('swig', swigengine())
  .set('view engine', 'swig')
  .set('view target', '#page')
  .set('views', '/partials/')
  .use(function(req, res, next) {
    res.render('header.html', '#header');
    res.render('footer.html', '#footer');
    next();
  })
  .get('/', function(req, res, next) {
    res.render('page.html');
  });
```
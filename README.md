# x-router-swig
[`swig`](https://github.com/paularmstrong/swig) view engine for x-router

```sh
$ npm install x-router x-router-swig --save
```

```sh
$ bower install x-router-swig
```

## Usage
- See [`example`](./examples/vanilla)
- See [`example (browserify)`](./examples/browserify)

```javascript
xrouter()
.engine('html', xrouterswig())
.set('view target', '#page')
.set('views', '/partials/')
.get('/', function(req, res, next) {
  res.render('page.html', {
    locals: {
      key: 'value'
    }
  });
});
```
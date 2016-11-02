# React on Heroku experiment

# Resources

## [super() in my constructor()](http://cheng.logdown.com/posts/2016/03/26/683329)

>tl;dr
>1. Always call super() if you have a constructor and don't worry about it if you don't have a constructor
>2. Call super(props) only if you want to access this.props inside the constructor. React automatically set it for you if you want to access it anywhere else.

## [React.Components](http://blog.revathskumar.com/2016/02/reactjs-writing-in-es6.html)

>tl;dr
>* ES5 vs ES6
> 1. extend from React.Component
> 2. use `constructor` to initialize state
> 3. specifiy `proptypes` as a method on the component

## [Anti-Patterns](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.opzuzj632)

# Best Practices

>DON'T bind with constructor

```js
class HelpSearch extends Component {
  constructor() {
    super();
    this.completeSearch = this.completeSearch.bind(this);
  }

  completeSearch() {
    ...
  }
}
```

>DO bind with fat-arrow

```js
class HelpSearch extends Component {
  constructor() {
    super();
  }

  completeSearch = () => {
    ...
  }
}
```

[Autobinding](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding)

# Modules

## Fetch

[fetch](https://github.com/github/fetch)
>The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest. This polyfill is written as closely as possible to the standard Fetch specification at https://fetch.spec.whatwg.org.


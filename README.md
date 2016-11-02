# MicroSoft Word Help Tool Plugin

## Summary

>The plugin is to be accessed inside MS WORD as an add-on. It will be created with React.
#### UI will be using Office Fabric UI

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



# ISSUES

## Search Input

#### CASE:
>The user is using the `backspace/delete` button to remove their search term.
>Fabric TextField triggers `onChange` on every key press
>We must do some throttling to provide a better user experience

#### CASE:
>The user input field is not displaying the term 'blogging' in a visual appealing way.
>Line-Height change perhaps?

#### CASE:
>The AutosuggestDisplay pushes TrendingDisplay down.
>AutosuggestDisplay should hover over TrendingDisplay
>Perhaps a Z-Index?

#### CASE:
>The AutosuggestDisplay items may overflow onto the next row
>Perhaps enable line-wrapping?

#### CASE:
>There is a race condition when a user types in 'comma' rapidly and presses the search button.
>AutosuggestDisplay is processing the term at the same time as the completeSearch handler.
>The completeSearch handler sets the `autosuggestResults` to empty array but then the 
>AutosuggestDisplay seta the `autosuggestResults` with a non-empty array.
>Need to track the flow and stop autosuggest whenever complete button is pressed.

#### CASE:
>Think about how to use LocalStorage for Offline use.
>Perhaps starting from the `setState` methods to determine what to save to localstorage.
>Also, creating a utility library that abstracts `localStorage` in a simplistic way.

#### CASE:
>Determine what, when and where to render components. There are some instances where any change
>in state will rerender two or more components which carrys state that shouldn't.

#### CASE:
>When a user selects an option from the dropdown autosuggest menu, the click event should automatically
>complete the search instead of having the user click the search icon.

#### CASE:
>A user should be able to use keys to navigate the autosuggest dropdown menu

#### CASE:
>Backbutton needs to be positioned

var React = require("react");
var ReactDOM = require("react-dom");
var Provider = require("react-redux").Provider;
var App = require("./components/App.jsx");
var store = require("./reducers/index.js");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
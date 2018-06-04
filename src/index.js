//import styles
import 'grommet/scss/hpe/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
// import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
import Login from './components/login';
import Signup from './components/signup';
import './app.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App centered={false}>
            <Header direction="row" justify="between" size="large"
              pad={{ horizontal: 'medium' }}>
              <Title>Q-Hiring</Title>
              <Link to="/login" className="padding-left-fix">LogIn</Link>
              <Link to="/" className="padding-right-fix">SignUp</Link>
            </Header>
            <Box pad='medium'>
              <Route exact path="/" component={Signup} />
              <Route path="/login" component={Login} />
            </Box>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');

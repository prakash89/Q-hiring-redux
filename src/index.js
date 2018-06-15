//import styles
import 'grommet/scss/hpe/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
// import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
import Login from './components/login';
import Signup from './components/signup';
import Instaction from './components/instaction';
import QuestionsList from './components/questionsList';
import './app.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      loginRedirectRef: false,
      signRedirectRef: false
    }
  }

  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <App centered={false}>
            <Header direction="row" justify="between" size="large"
              pad={{ horizontal: 'medium' }}>
              <Title>Q-Hiring</Title>
              <Link to="/login" className="padding-left-fix">LogIn</Link>
              <Link to="/" className="padding-right-fix">SignUp</Link>
              <Link to="/instaction" className="padding-right-fix">Instaction</Link>
              <Link to="/feedback">Feedback</Link>
              <Link to="/QuestionsList">List all the questions</Link>
            </Header>
            <Box pad='medium'>
              <Route exact path="/" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/instaction" component={Instaction} />
               <Route path="/feedback" component={Feedback} />
              <Route path="/QuestionsList" component={QuestionsList} />
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

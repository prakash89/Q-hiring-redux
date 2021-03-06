//import styles
import 'grommet/scss/hpe/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, Switch, BrowserRouter } from 'react-router-dom'
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Login from './components/login';
import Signup from './components/signup';
import Feedback from './components/feedback';
import Questions from './components/questions';
import Instaction from './components/instaction';
import QuestionsList from './components/questionsList';
import Callback from './components/callback';
import './app.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import Auth from './Auth';
import Header from './components/header'

const store = createStore(
  reducers, {}, applyMiddleware(ReduxThunk)
);

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      loginRedirectRef: false,
      signRedirectRef: false
    }
  }

  render() {
    console.log('index', this.props);

    return (
      <Provider store={store}>
        <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
          <App centered={false}>
            <Header {...this.props}/>
            <Box pad='medium'>
              <Switch>
                <Route exact path="/" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/instaction" component={Instaction} />
                <Route exact path="/questions" component={Questions} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/callback" render={(props) => {
                  handleAuthentication(props);
                  return <Callback {...props} /> 
                  }}/> 
              </Switch>
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

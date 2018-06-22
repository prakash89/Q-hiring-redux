//import styles
import 'grommet/scss/hpe/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router-dom'
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';
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
import browserHistory from './history';

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

    return (
      <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
          <App centered={false}>
            <Header direction="row"  size="large"
              pad={{ horizontal: 'medium' }}>
              <Title>Q-Hiring</Title>
              <Title> <Link to="/login" className="padding-left-fix">LogIn {'  '}</Link></Title>
              <Title>   <Link to="/" >SignUp</Link></Title>
              
             
            
            </Header>
            <Box pad='medium'>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/instaction" component={Instaction} />
              <Route path="/questions" component={Questions} />
              <Route path="/feedback" component={Feedback} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} /> 
                }}/> 
            </Box>
          </App>
        </Router>
      </Provider>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');

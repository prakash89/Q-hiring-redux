import React, { Component } from 'react';
import { connect } from 'react-redux';
import { feedback } from '../redux/actions';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import {fetchQuestions} from '../redux/actions';


class Feedback extends Component {
	constructor(props) {
		super(props)
		this.state = {
			description: ''
		}
	}

	componentDidMount() {
		this.props.requestQuestions();
	  }



	render() {
		console.log('requestQuestions', this.props);
		return (
			<div className="container mb-5">
			
			</div>
		)
	}
}

const mapStateToProps = ({ feedbackData }) => {
	return ({
		message: feedbackData.message
	})
}

const mapDispatchToProps = (dispatch) => ({
	requestQuestions() {
	  dispatch(fetchQuestions());
	},
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

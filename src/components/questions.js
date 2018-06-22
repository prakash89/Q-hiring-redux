import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import {fetchQuestions, submitAnswers} from '../redux/actions/questions';
import Button from 'grommet/components/Button';

class Questions extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: null,
			questions: {
				logical: [],
        quantitative: [],
        verbal: [],
			}
		}
	}

	componentDidMount() {
		this.props.requestQuestions();
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.questionList !== this.props.questionList) {
		  this.setState({ questions: nextProps.questionList })
		}
	  }


	handleOptionChange(index, option) {
		let category = this.state.questions;
        category.verbal[index].user_answer = option
        this.setState({
			questions: category
        })
	  }

	  
	render() {
		console.log('Inside Render', this.state);
		let {userAnswers} = this.props;
		return (
			<div className="container mb-5">
			   <div>
			   <Title truncate={false} pad='small'>
					Verbal Section 
				</Title>
			   {  
				this.state.questions.verbal.map((item, index) => {
				let that = this;
				return (
					<div className="container mb-5" key={item.id}>
					   <Title truncate={false} pad='medium'>
					      {index+1}.{item.title}
						</Title>
						{item.options.map(function (option) {
							return (
							  <div key={option}>
								<RadioButton id={option}
								name={option}
								label={option}
								checked={item.user_answer == option}
								onChange={(e) => that.handleOptionChange(index,option)}
								 />
							  </div>
							);
						  })}
				   </div>
				);
			  })}
			   </div>
			   <div>
			      <Button label='Submit'
                     type='submit'
					 primary={true}
					 onClick={(e) => userAnswers(this.state.questions.verbal, 1)}/>
			   </div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	questionList: state.questionsData.items,
});

const mapDispatchToProps = (dispatch) => ({
	requestQuestions() {
	  dispatch(fetchQuestions());
	},
	userAnswers(answers, section_number) {
		dispatch(submitAnswers(answers, section_number));
	  },
});
  

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Questions);
  
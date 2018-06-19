import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import RadioButton from 'grommet/components/RadioButton';
import Box from 'grommet/components/Box';
import {fetchQuestions, submitAnswers} from '../redux/actions/questions';
import Button from 'grommet/components/Button';
import QUESTION_LIST from '../questions'

class Questions extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: null,
			questions: {
				logical: [],
                quantitative: [],
                verbal: [],
			},
			showVerbal: props.questions.showVerbal,
			showLogical: props.questions.showLogical,
			showQuantitative: props.questions.showQuantitative,
		}
	}

	componentDidMount() {
		this.props.requestQuestions();
		console.log('question list', QUESTION_LIST);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.questionList !== this.props.questionList) {
			this.setState({ questions: nextProps.questionList })
		}
	}


	handleOptionChange(index, option, section_type) {
		let category = this.state.questions;
		let category_type = `${category}.${section_type}[${index}].user_answer`;
		console.log(category_type);
		if (section_type === 'verbal') {
			category.verbal[index].user_answer = option;
		} else if (section_type === 'logical') {
            category.logical[index].user_answer = option;
		} else if (section_type === 'quantitative') {
           category.quantitative[index].user_answer = option;
		}
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
				<Heading
				  strong={true}
				  uppercase={true}
                  truncate={false}
				  align='center'
				  margin='medium'
				  tag='h4'>
                     Verbal Section
                 </Heading>
			   {
				QUESTION_LIST[0].questions.map((item, index) => {
				    let that = this;
				    return (
						<div className="container mb-5" key={item.id}>
						<Box
						  justify='start'
						  align='start'
						  wrap={true}
                          reverse={false}
                          pad='medium'
                          margin='small'
                          colorIndex='light-2'
                        >
					      <Title truncate={false} pad='medium'>
					        {index+1}.{item.title}
					      </Title>
						  {item.options.map(function (option) {
							return (
								<div key={option}>
								  <Box
						            justify='start'
						            align='start'
						            wrap={true}
                                    reverse={false}
                                    margin='small'
                                    >
									<RadioButton 
									  id={option}
								        name={option}
										label={option}
								        checked={item.user_answer == option}
								        onChange={(e) => that.handleOptionChange(index,option,'verbal')}
									   />
									   </Box>
							      </div>
							   );
						  })}
				   </Box>
				   </div>
				  );
				 })}
				 <div>
				 <Box
					justify='center'
					align='center'
					wrap={true}
                    reverse={false}
                    pad='medium'
                    margin='small'
                 >
				 <Button 
					 label='Next'
					 type='submit'
                     accent={true}
					 onClick={(e) => userAnswers(this.state.questions.verbal, 1)}/>
					 </Box>
		        	</div>
				 </div>
			</div>
		)
	}
}


const mapStateToProps = (state) => ({
	questionList: state.questionsData.items,
	questions: state.questionsData,
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
  
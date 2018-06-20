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
		if (nextProps.questions.showLogical !== this.props.questions.showLogical) {
			this.setState({ showLogical: nextProps.questions.showLogical })
			this.setState({ showVerbal: nextProps.questions.showVerbal })
		}
		if (nextProps.questions.showQuantitative !== this.props.questions.showQuantitative) {
			this.setState({ showQuantitative: nextProps.questions.showQuantitative })
			this.setState({ showLogical: nextProps.questions.showLogical })
		}
		console.log(nextProps);
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
			{ this.state.showVerbal &&
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
					this.state.questions.verbal.map((item, index) => {
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
				}
				{ this.state.showLogical &&
					<div>
					  <Heading
						strong={true}
						uppercase={true}
						truncate={false}
						align='center'
						margin='medium'
						tag='h4'>
						   Logical Section
					   </Heading>
					   { 
						  this.state.questions.logical.map((item, index) => {
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
											  onChange={(e) => that.handleOptionChange(index,option,'logical')}
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
						   onClick={(e) => userAnswers(this.state.questions.logical, 2)}/>
						   </Box>
						  </div>
					   </div>
					  }
					  { this.state.showQuantitative &&
						<div>
						  <Heading
							strong={true}
							uppercase={true}
							truncate={false}
							align='center'
							margin='medium'
							tag='h4'>
							 Quantitative Section
						   </Heading>
						   { 
							  this.state.questions.quantitative.map((item, index) => {
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
												  onChange={(e) => that.handleOptionChange(index,option,'quantitative')}
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
							   onClick={(e) => userAnswers(this.state.questions.quantitative, 3)}/>
							   </Box>
							  </div>
						   </div>
						  }
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
  
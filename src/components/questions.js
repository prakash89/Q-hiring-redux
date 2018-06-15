import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from 'grommet/components/Title';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import {fetchQuestions} from '../redux/actions/questions';


class Questions extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: null
		}
	}

	componentDidMount() {
		this.props.requestQuestions();
	  }

	  select(value) {
		// this.setState({checked: value})
	  }


	render() {
		console.log('requestQuestions', this.props);
		let {questionList} = this.props;
		console.log('questionList', questionList);
		return (
			<div className="container mb-5">
			  <FormField>
			    <Title>
				   Pick the odd one out
			    </Title>
                <RadioButton id='choice1-1'
                  name='choice1-1'
                  label='Mars'
				  checked={'Mars' == this.state.checked}
				  onChange={
					this.select('Mars')
				  }
                   />
                <RadioButton id='choice1-2'
                  name='choice1-2'
                  label='Jupiter'
				  checked={'Jupiter' == this.state.checked}
				  onChange={
					this.select('Jupiter')
				  }
				   />
				   <RadioButton id='choice1-1'
                  name='choice1-1'
                  label='Sun'
                  checked={false}
                   />
                <RadioButton id='choice1-2'
                  name='choice1-2'
                  label='Earth'
                  checked={false}
                   />
			   </FormField>
			   
			   <div>
			   { questionList.logical && 
				questionList.logical.map((item, index) => {
				return (
					<div className="container mb-5" key={item.id}>
					   <Title truncate={false} pad='medium'>
					      {item.title}
						</Title>
						
						{item.options.map(function (option) {
							return (
							  <div key={option}>
								<RadioButton id={option}
								name={option}
								label={option}
								checked={false}
								 />
							</div>
							);
						  })}
				   </div>
				);
			  })}
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
});
  

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Questions);
  
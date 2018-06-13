import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import { questionsList } from "../redux/actions";

import '../css/questionsList.css';

const questionsListData = [
  {
    "id":1,
    "title": "sample question 1",
    "option_1":"option1",
    "option_2": "option2",
    "option_3": "option3",
    "option_4": "option4",
    "answer": "option1"
  }
]

class QuestionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    console.log("inside the component did mount")
  }
  componentWillMount() {
    console.log("inside the componentWillMount")
    this.props.questionsList();

  }

  renderQuestionRows(){
    return questionsListData.map((question, index) =>
      <TableRow key={question.id}>
        <td>
          {index+1}
        </td>
        <td>
          {question.title}
        </td>
        {this.renderTableoptions(question.option_1, question.answer)}
        {this.renderTableoptions(question.option_2, question.answer)}
        {this.renderTableoptions(question.option_3, question.answer)}
        {this.renderTableoptions(question.option_4, question.answer)}
      </TableRow>
    )
  }

  renderTableoptions(option, answer){
    console.log(`option: ${option}, answer: ${answer}`)
    if (option == answer) {
      return <td className='secondary answer'>
        {option}
            </td>
    }else{
      return <td className='secondary'>
          {option}
            </td>
    }
  }

  render() {
    return (
      <Table scrollable={false}>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Question Title
            </th>
            <th>
              Option 1
            </th>
            <th>
              Option 2
            </th>
            <th>
              Option 3
            </th>
            <th>
              Option 4
            </th>
          </tr>
        </thead>
        <tbody>
            {this.renderQuestionRows()}
        </tbody>
      </Table>
    )
  }

}


const mapStateToProps = ({ signupData }) => {
  console.log("signupData", signupData)
  return ({
    message: signupData.message,
    email: signupData.email,
    authToken: signupData.authToken,
  })
}



export default connect(mapStateToProps, { questionsList})(QuestionsList);
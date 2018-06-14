import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import { questionsList } from "../redux/actions";
import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';

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
      showAddQuestionLayer: false
    }
  }

  componentDidMount(){
    this.props.questionsList();
  }

  showAddQuestionModal(){
    console.log("inside add question modal function")
    this.setState({showAddQuestionLayer: true})
    console.log("")
    console.log(`state : ${this.state}`)
    console.log("")
  }

  renderQuestionRows(){
    if (this.props.questions.length > 0) {
      return this.props.questions.map((question, index) =>
        <TableRow key={question.id}>
          <td>
            {index + 1}
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
    }else{
      return <h1>Loading...</h1>
    }

  }

  renderTableoptions(option, answer){
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
      <Article>
        <Button
          primary={true}
          plain={true}
          label='Add Question'
          href='#'
          onClick={() => this.showAddQuestionModal()}/>
      <Table>
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
      { this.state.showAddQuestionLayer &&
        <Layer closer={true}>
          <div>hai</div>
        </Layer> }
      </Article>
    )
  }

}


const mapStateToProps = (state) => {
  return ({
    questions: state.questionsList.questions
  })
}



export default connect(mapStateToProps, { questionsList})(QuestionsList);
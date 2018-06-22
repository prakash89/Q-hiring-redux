import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import { questionsAdmin, disableTostMessage } from "../redux/actions";
import Article from 'grommet/components/Article';
import Button from 'grommet/components/Button';
import { Layer, Box, Split, Toast } from 'grommet';
import AddQuestionsModal from './addQuestionsModal';

import '../css/questionsList.css';

class AdminQuestionsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddQuestionLayer: false
    }
  }

  componentDidMount() {
    this.props.questionsAdmin();
  }

  onclose(){
    this.setState({showAddQuestionLayer: false})
  }

  showAddQuestionModal() {
    this.setState({ showAddQuestionLayer: true })
  }

  renderQuestionRows() {
    if (this.props.questionsList.length > 0) {
      return this.props.questionsList.map((question, index) =>
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
    } else {
      return <h4>No Questions!!</h4>
    }

  }

  renderTableoptions(option, answer) {
    if (option == answer) {
      return <td className='secondary answer'>
        {option}
      </td>
    } else {
      return <td className='secondary'>
        {option}
      </td>
    }
  }

  render() {
    return (
      <div>
    { this.props.message && <Toast status='ok'> Question Added Successfully. </Toast> }
        <Split fixed={false}>
          <Box />
          <Box />
          <Box>
            <Button
              primary={true}
              plain={true}
              label='Add Question'
              onClick={() => this.showAddQuestionModal()} />
          </Box>
        </Split>
        <Article>
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
          {this.state.showAddQuestionLayer  &&
            <Layer
              closer={true}
              flush = {true}
              onClose={() =>this.onclose()}
              
            >
              <AddQuestionsModal closeModalProp={this.onclose.bind(this)} />
            </Layer>}
        </Article>
      </div>
    )
  }

}


const mapStateToProps = (state) => {
  console.log("00000000000000000000000")
  console.log(state)
  console.log("00000000000000000000000")
  return ({
    questionsList: state.questionsData.questionsList,
    message: state.questionsData.message
  })
}



export default connect(mapStateToProps, { questionsAdmin, disableTostMessage })(AdminQuestionsList);

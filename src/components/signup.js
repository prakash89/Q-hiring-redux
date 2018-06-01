import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import {connect} from 'react-redux';
import {signup} from '../redux/actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      collage: '',
      branch: '',
      batch: '',
      passing: '',
      phone: '',
      city: '',
    }
  }

  signupSubmit(e) {
    e.preventDefault();
    console.log("fields", this.state.fname)
    console.log("fields", this.state.lname)

    const params = {
      firstname: this.state.fname,
      lastname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      passwordconfirmation: this.state.passwordconfirmation,
      college: this.state.collage,
      branch: this.state.branch,
      batch: this.state.batch,
      yearofpassing: this.state.passing,
      phone: this.state.phone,
      city: this.state.city,
    }

    this.props.signup(params)

    console.log("params", params)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.success) {
      console.log('signup');
    }
  }

  onFiledChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Form onSubmit={(e) => this.signupSubmit(e)}>
        <Header>
          <Heading>
            SignUp
          </Heading>
        </Header>
        <FormField label='First Name'>
          <TextInput name="fname" value={this.state.fname} onDOMChange={(e) => this.onFiledChange(e)}/>
        </FormField>
        <FormField label='Last Name'>
          <TextInput name="lname" value={this.state.lname} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Email'>
          <TextInput name="email" value={this.state.email} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Password'>
          <TextInput name="password" value={this.state.password} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Password Confirmation'>
          <TextInput name="passwordconfirmation" value={this.state.passwordconfirmation} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='College'>
          <TextInput name="collage" value={this.state.collage} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Branch'>
          <TextInput name="branch" value={this.state.branch} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Exam Batch'>
          <TextInput name="batch" value={this.state.batch} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Year Of Passing'>
          <TextInput name="passing" value={this.state.passing} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='Phone'>
          <TextInput name="phone" value={this.state.phone} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <FormField label='City'>
          <TextInput name="city" value={this.state.city} onDOMChange={(e) => this.onFiledChange(e)} />
        </FormField>
        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            type='submit'
            primary={true}/>
        </Footer>
      </Form>
    )
  }
}

const mapStateToProps = ({signupData}) => {
    console.log("signupData", signupData)
  return({
    message: signupData.message,
    email: signupData.email,
    authToken: signupData.authToken,
  })
}

export default connect(mapStateToProps,{signup})(Signup);

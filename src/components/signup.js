import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import PasswordInput from 'grommet/components/PasswordInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import {connect} from 'react-redux';
import {signup} from '../redux/actions';
import '../app.css';
import '../css/signup.css';
import Toast from 'grommet/components/Toast';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      passwordconfirmation: '',
      collage: '',
      branch: '',
      batch: '',
      passing: '',
      phone: '',
      city: '',
      errors: {},
      formIsValid: false,
      isSubmit: false,
    }
  }

  signupSubmit(e) {
    e.preventDefault();

    this.setState({isSubmit: true})

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
    this.fieldChangeValidation(e)
    console.log('form valid', this.state.formIsValid)
    if(this.state.formIsValid == true) {
      this.props.signup(params)
    }

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

  fieldChangeValidation(e) {
    let errors = {};
    let formIsValid = true
    console.log("am hereeeeee", e.target.name)
    this.state.fnameError = '';
    this.state.lnameError = '';
    if(this.state.fname && this.state.fname.length < 5) {
      errors['fname'] = "Please fill the first name"
      formIsValid = false
    }
    if(this.state.lname && this.state.lname.length < 5) {
      errors['lname'] = "Please fill the last name"
      formIsValid = false
    }
    if(this.state.email && this.state.email.length < 5) {
      errors['email'] = "Please fill the email"
      formIsValid = false
    }
    if(this.state.password && this.state.password.length < 5) {
      errors['password'] = "Please fill the password"
      formIsValid = false
    }
    if(this.state.passwordconfirmation && (this.state.password != this.state.passwordconfirmation)) {
      errors['passwordconfirmation'] = "Please fill the passwordconfirmation"
      formIsValid = false
    }
    if(this.state.collage && this.state.collage.length < 2) {
      errors['collage'] = "Please fill the collage"
      formIsValid = false
    }
    if(this.state.branch && this.state.branch.length < 2) {
      errors['branch'] = "Please fill the branch"
      formIsValid = false
    }
    if(this.state.batch && this.state.batch.length < 2) {
      errors['batch'] = "Please fill the batch"
      formIsValid = false
    }
    if(this.state.passing && this.state.passing.length < 3) {
      errors['passing'] = "Please fill the passing"
      formIsValid = false
    }
    if(this.state.phone && this.state.phone.length < 10) {
      errors['phone'] = "Please fill the phone"
      formIsValid = false
    }
    if(this.state.city && this.state.city.length < 3) {
      errors['city'] = "Please fill the city"
      formIsValid = false
    }

    if(this.state.fname && this.state.lname && this.state.email && this.state.collage && this.state.password && this.state.passwordconfirmation && this.state.branch && this.state.batch && this.state.passing && this.state.phone && this.state.city) {
      // formIsValid = true
    } else {
      formIsValid = false

    }
    this.setState({errors: errors, formIsValid: formIsValid});
  }

  render() {
    return(
      <div>
      { ((this.state.formIsValid == false) && this.state.isSubmit) ? (<Toast status='critical'>
        Invalid Forms.
      </Toast>) : null }
      <Form onSubmit={(e) => this.signupSubmit(e)}>
        <Header>
          <Heading className="text-align-center">
            SignUp
          </Heading>
        </Header>
        <FormField label='First Name' error={this.state.errors['fname']}>
          <TextInput name="fname" value={this.state.fname} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Last Name' error={this.state.errors['lname']}>
          <TextInput name="lname" value={this.state.lname} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Email' error={this.state.errors['email']}>
          <TextInput name="email" value={this.state.email} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Password' error={this.state.errors['password']}>
          <TextInput name="password" value={this.state.password} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Password Confirmation' error={this.state.errors['passwordconfirmation']}>
          <TextInput name="passwordconfirmation" value={this.state.passwordconfirmation} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='College' error={this.state.errors['collage']}>
          <TextInput name="collage" value={this.state.collage} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Branch' error={this.state.errors['branch']}>
          <TextInput name="branch" value={this.state.branch} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Exam Batch' error={this.state.errors['batch']}>
          <TextInput name="batch" value={this.state.batch} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Year Of Passing' error={this.state.errors['passing']}>
          <TextInput name="passing" value={this.state.passing} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='Phone' error={this.state.errors['phone']}>
          <TextInput name="phone" value={this.state.phone} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>
        <FormField label='City' error={this.state.errors['city']}>
          <TextInput name="city" value={this.state.city} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.fieldChangeValidation(e)}/>
        </FormField>

        <Footer pad={{"vertical": "medium"}}>
          <Button label='Submit'
            type='submit'
            primary={true}/>
        </Footer>
      </Form>
      </div>
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

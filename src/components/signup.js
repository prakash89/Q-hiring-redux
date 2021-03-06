import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import PasswordInput from 'grommet/components/PasswordInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import { connect } from 'react-redux';
import { signup } from '../redux/actions/signup';
import '../app.css';
import '../css/signup.css';
import Toast from 'grommet/components/Toast';
import { formError } from '../formError';
import Box from 'grommet/components/Box';

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
      passwordValue: '',
      formIsValid: false,
      isSubmit: false,
      formErrors: {},
      firstNameValid: false,
      emailValid: false,
      lastNameValid: false,
      formValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      collageValid: false,
      passingValid: false,
      batchValid: false,
      branchValid: false,
      phoneValid: false,
      cityValid: false
    }
  }

  signupSubmit(e) {
    e.preventDefault();

    this.setState({ isSubmit: true })

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
    if (this.state.formValid == true) {
      this.props.signup(params)
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
    }
  }

  onFiledChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;
    let collageValid = this.state.collageValid;
    let passingValid = this.state.passingValid;
    let batchValid = this.state.batchValid;
    let branchValid = this.state.branchValid;
    let phoneValid = this.state.phoneValid;
    let cityValid = this.state.cityValid;
    let passwordValue = ''

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'fname':
        firstNameValid = value.length >= 4 && value.match(/^[a-zA-Z_.-]*$/);
        fieldValidationErrors.fname = firstNameValid ? '' : 'Enter more than 3 characters without special charecters and space';
        break;
      case 'lname':
        lastNameValid = value.length >= 4 && value.match(/^[a-zA-Z_.-]*$/);
        fieldValidationErrors.lname = lastNameValid ? '' : ' Enter more than 3 characters without special charecters and space';
        break;
      case 'password':
        passwordValue = value;
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' Enter more than 6 character';
        break;
      case 'passwordconfirmation':
        confirmPasswordValid = (this.state.password == value);
        fieldValidationErrors.passwordconfirmation = confirmPasswordValid ? '' : 'password does not match';
        break;
      case 'collage':
        collageValid = value.length >= 4 && value.match(/^[a-zA-Z \-_]*$/);
        fieldValidationErrors.collage = collageValid ? '' : '  Enter more than 3 character with special characters';
        break;
      case 'passing':
        passingValid = value.length === 4 && value.match(/^[0-9]/);
        fieldValidationErrors.passing = passingValid ? '' : '  Enter 4 characters only';
        break;
      case 'batch':
        batchValid = value.length >= 2 && value.match(/^[a-zA-Z0-9 \-_]*$/);
        fieldValidationErrors.batch = batchValid ? '' : '  Enter more than 2 character';
        break;
      case 'branch':
        branchValid = value.match(/^[a-zA-Z \-]*$/) ? true : false;
        fieldValidationErrors.branch = branchValid ? '' : '  Special charecters are not allowed';
        break;
      case 'phone':
        phoneValid = value.match(/^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/) ? true : false;
        fieldValidationErrors.phone = phoneValid ? '' : '  Enter phone number in format XXX-XXX-XXXX';
        break;
      case 'city':
        cityValid = value.match(/^[a-zA-Z\-]*$/)  ? true : false;
        fieldValidationErrors.city = cityValid ? '' : '  Special charecters and numbers are not allowed';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid, firstNameValid, lastNameValid, passwordValid, confirmPasswordValid, collageValid, passingValid, batchValid, branchValid, phoneValid, cityValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.firstNameValid && this.state.lastNameValid && this.state.branchValid && this.state.phoneValid && this.state.cityValid });
  }

  render() {
    return (
      <Box
        justify='center'
        align='center'
        wrap={true}
        reverse={false}
        pad='medium'
        margin='small'
      >
        {((this.state.formValid == false) && this.state.isSubmit) ? (<Toast status='critical'>
          Invalid Forms.
      </Toast>) : null}
        <Form onSubmit={(e) => this.signupSubmit(e)}>
          <Header>
            <Heading className="text-align-center">
              SignUp
          </Heading>
          </Header>
          <FormField label='First Name' error={this.state.formErrors['fname']}>
            <TextInput name="fname" value={this.state.fname} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Last Name' error={this.state.formErrors['lname']}>
            <TextInput name="lname" value={this.state.lname} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Email' error={this.state.formErrors['email']}>
            <TextInput name="email" value={this.state.email} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Password' error={this.state.formErrors['password']}>
            <PasswordInput name="password" value={this.state.password} onChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Password Confirmation' error={this.state.formErrors['passwordconfirmation']}>
            <PasswordInput name="passwordconfirmation" value={this.state.passwordconfirmation} onChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='College' error={this.state.formErrors['collage']}>
            <TextInput name="collage" value={this.state.collage} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Branch' error={this.state.formErrors['branch']}>
            <TextInput name="branch" value={this.state.branch} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Exam Batch' error={this.state.formErrors['batch']}>
            <TextInput name="batch" value={this.state.batch} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Year Of Passing' error={this.state.formErrors['passing']}>
            <TextInput name="passing" value={this.state.passing} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='Phone' error={this.state.formErrors['phone']}>
            <TextInput name="phone" value={this.state.phone} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>
          <FormField label='City' error={this.state.formErrors['city']}>
            <TextInput name="city" value={this.state.city} onDOMChange={(e) => this.onFiledChange(e)} onKeyUp={(e) => this.handleUserInput(e)} required />
          </FormField>

          <Footer pad={{ "vertical": "medium" }}>
            <Button label='Submit'
              type='submit'
              primary={true} />
          </Footer>
        </Form>
      </Box>
    )
  }
}

const mapStateToProps = ({ signupData }) => {
  return ({
    message: signupData.message,
    email: signupData.email,
    authToken: signupData.authToken,
  })
}

export default connect(mapStateToProps, { signup })(Signup);

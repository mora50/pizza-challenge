import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPizzaDetails from './FormPizzaDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {

  state = {
    step: 1,
    nome: '',
    telefone: '',
    endereco: '',
    recheio: '',
    massa: '',
    tamanho:'',
    borda: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { nome, telefone, endereco ,recheio, massa , tamanho, borda } = this.state;
    const values = {  nome, telefone, endereco, recheio, massa , tamanho, borda };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />


        );
      case 2:
        return (
          <FormPizzaDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />

        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return <h1>Me contrata :P</h1>
    }
  }
}

export default UserForm;

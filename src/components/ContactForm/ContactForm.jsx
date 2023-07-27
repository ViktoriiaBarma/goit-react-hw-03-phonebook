import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
} from './ContactForm.styled';
//import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField htmlFor={this.nameInputId}>
          Name
          <FieldFormik
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </FormField>

        <FormField htmlFor={this.numberInputId}>
          Number
          <FieldFormik
            type="tel"
            name="number"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </FormField>
        <StyledButton type="submit">Add contact</StyledButton>
      </Form>
    );
  }
}

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
import React from "react";
import { nanoid } from 'nanoid'
import { Btn, Item, List } from './ContactList.styled';
import PropTypes from "prop-types";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(elem => {
        const liId = nanoid();
        return (
          <Item key={liId} id={liId}>
            <span>
              {elem.name}: <span>{elem.number}</span>
            </span>
            <Btn onClick={() => deleteContact(elem.id)}>delete</Btn>
          </Item>
        );
      })}
    </List>
  );
};




ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
}
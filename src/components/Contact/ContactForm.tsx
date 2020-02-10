import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import styled from "styled-components";
import { Button } from "../../shared/styles";
import useContactForm from "./ContactHooks";

const ContactButton = styled(Button)`
  background: ${props => props.theme.contactButton};
  margin: 1.5rem 0 0 auto;

  > div {
    color: ${props => props.theme.contactButton};
    background: ${props => props.theme.contactButtonBg};
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > div:not(:last-of-type)": {
        flex: "1 1 calc(33.3% - 1rem)",
        margin: "1rem 1rem 1rem 0",
        maxWidth: "300px",
        minWidth: "200px"
      },
      "& > div:nth-of-type(4)": {
        flex: "1 1 100%",
        margin: "1rem 0"
      }
    }
  })
);

const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const ContactForm = () => {
  const classes = useStyles();
  const onContact = () => {
    alert(
      "Form submission capability is coming soon. In the meantime, you can send me an email at drew.moody@me.com"
    );
  };

  const { inputs, handleInputChange, handleSubmit } = useContactForm(onContact);

  return (
    <FormWrapper
      className={classes.root}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        label="Name"
        type="text"
        name="name"
        onChange={handleInputChange}
        value={inputs.name || ""}
        required={true}
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        onChange={handleInputChange}
        value={inputs.email || ""}
        required={true}
      />
      <TextField
        label="Phone"
        type="text"
        name="phone"
        onChange={handleInputChange}
        value={inputs.phone || ""}
      />
      <TextField
        id="message-container"
        label="Message"
        type="text"
        name="message"
        multiline={true}
        rows="4"
        placeholder="Enter your message here"
        variant="filled"
        onChange={handleInputChange}
        value={inputs.message || ""}
      />

      <ContactButton type="submit">
        <div>Contact</div>
      </ContactButton>
    </FormWrapper>
  );
};

export default ContactForm;

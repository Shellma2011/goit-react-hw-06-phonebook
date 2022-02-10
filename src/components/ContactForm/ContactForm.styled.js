import styled from 'styled-components';

const PhonebookForm = styled.form`
  width: 340px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

const PhonebookLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`;

const PhonebookInput = styled.input`
  padding: 4px 12px;
  width: 280px;
  margin-top: 5px;
  font: inherit;
  line-height: 12px;
  letter-spacing: 0.01em;
`;

const PhonebookButton = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  width: 100%;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export { PhonebookForm, PhonebookLabel, PhonebookInput, PhonebookButton };

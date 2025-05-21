import styled from 'styled-components';

export function TextInput({ value, onChange, placeholder }) {
  return (
    <Input
      value={value == null ? '' : value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
}

const Input = styled.input`
  display: flex;
  width: 32%;
  margin-bottom: 10px;
  height: 40px;
  text-overflow: ellipsis;
  background-color: #263750;
  border: 1px solid #83bf46;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  @media (max-width: 530px) {
    width: 240px;
    margin-bottom: 15px;
  }
  &::placeholder {
    color: #b3b3b3;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #334466;
  }
  &:active {
    background-color: #334466;
    outline: none;
  }
`;

import styled from 'styled-components';
import { Logo } from './Logo';
import { SelectionForm } from './SelectionForm.jsx';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <SelectionForm />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

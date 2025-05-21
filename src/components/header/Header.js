import styled from 'styled-components';
import { Logo } from './Logo';
import { SelectionForm } from './SelectionForm.jsx';

export function Header() {
  return (
    <HeaderContainer>
      <LogoWrapper />
      <SelectionForm />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
const LogoWrapper = styled(Logo)`
  margin-bottom: 30px;
`;

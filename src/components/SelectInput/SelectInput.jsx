import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as IconCross } from '../../assets/svg/cross.svg';
import { ReactComponent as IconDown } from '../../assets/svg/Icon2.svg';
import { ReactComponent as IconUpp } from '../../assets/svg/Icon.svg';

export const SelectInput = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  const isSelected = value !== null;

  return (
    <SelectWrapper>
      <Selected
        isSelected={isSelected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{isSelected ? value : placeholder}</span>
        {isSelected ? (
          <BoxCross
            onClick={(e) => {
              handleOptionClick(null);
              e.stopPropagation();
            }}
          />
        ) : isOpen ? (
          <IconUpp />
        ) : (
          <IconDown />
        )}
      </Selected>
      <Options isOpen={isOpen}>
        {options.map((opt) => (
          <Option
            style={{ fontWeight: value === opt ? '600' : '400' }}
            key={opt}
            onClick={() => handleOptionClick(opt)}
          >
            {opt}
          </Option>
        ))}
      </Options>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: 32%;
  height: 40px;
  border-radius: 8px;
  //font-family: Inter, serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(38, 55, 80, 1);
  color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#B3B3B3')};
  cursor: pointer;
  border: 1px solid rgba(131, 191, 70, 1);
  border-radius: 8px;
  height: 40px;
  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &:hover {
    background-color: rgba(51, 68, 102, 1);
  }
`;

const Options = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  border: 1px solid #aaa;
  background: white;
  border-radius: 8px;
  max-height: 200px;
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  overflow-x: scroll;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    background: rgba(131, 191, 70, 0.2);
  }
`;

const BoxCross = styled(IconCross)`
  cursor: pointer;
  width: 12px;
  height: 12px;
  path {
    stroke: #f5f5f5;
  }
  &:hover {
    path {
      stroke: #83bf46;
    }
  }
`;

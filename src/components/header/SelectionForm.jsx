import styled from 'styled-components';
import { SelectInput } from '../SelectInput/SelectInput';
import { useEffect, useState } from 'react';
import { TextInput } from '../TextInput/TextInput';
import { useData } from '../providers';
const API_URL = 'https://rickandmortyapi.com/api/character/';

export function SelectionForm() {
  const { setApiURL, setActivePage } = useData();
  const [status, setStatus] = useState(null);
  const [gender, setGender] = useState(null);
  const [species, setSpecies] = useState(null);
  const [name, setName] = useState(null);
  const [type, setType] = useState(null);
  const handleResetButton = () => {
    setStatus(null);
    setGender(null);
    setSpecies(null);
    setName(null);
    setType(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setApiURL(API_URL);
    setActivePage(0);
    window.history.pushState({}, '', window.location.pathname);
  };
  const handleApplyButton = () => {
    setApiURL(
      API_URL +
        '?' +
        (status ? 'status=' + status : '') +
        (gender ? '&gender=' + gender : '') +
        (species ? '&species=' + species : '') +
        (name ? '&name=' + name : '') +
        (type ? '&type=' + type : '')
    );
    const params = new URLSearchParams();
    if (status) params.set('status', status);
    if (gender) params.set('gender', gender);
    if (species) params.set('species', species);
    if (name) params.set('name', name);
    if (type) params.set('type', type);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
    setActivePage(0);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('status');
    const gender = params.get('gender');
    const species = params.get('species');
    const name = params.get('name');
    const type = params.get('type');

    if (status) setStatus(status);
    if (gender) setGender(gender);
    if (species) setSpecies(species);
    if (name) setName(name);
    if (type) setType(type);

    const fullUrl = API_URL + '?' + params.toString();
    setApiURL(fullUrl);
  }, [setApiURL]);

  return (
    <FormContainer>
      <SelectInput
        options={['alive', 'dead', 'unknown']}
        value={status}
        onChange={setStatus}
        placeholder={'Status'}
      />
      <SelectInput
        options={['female', 'male', 'genderless', 'unknown']}
        value={gender}
        onChange={setGender}
        placeholder={'Gender'}
      />
      <TextInput
        value={species}
        onChange={setSpecies}
        placeholder={'Species'}
      />
      <TextInput value={name} onChange={setName} placeholder={'Name'} />
      <TextInput value={type} onChange={setType} placeholder={'Type'} />
      <ButtonsContainer>
        <ButtonApply onClick={handleApplyButton}>Apply</ButtonApply>
        <ButtonReset onClick={handleResetButton}>Reset</ButtonReset>
      </ButtonsContainer>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 561px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 950px) {
    width: 482px;
  }
  @media (max-width: 530px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 32%;
  margin-bottom: 10px;
  @media (max-width: 530px) {
    width: 240px;
    flex-direction: column;
    justify-content: flex-start;
    button {
      width: 100%;
      height: 40px;
      margin-bottom: 15px;
    }
  }
`;

const ButtonApply = styled.button`
  color: #83bf46;
  border-radius: 8px;
  border: 1px solid #83bf46;
  width: calc(50% - 5px);
  height: 100%;
  background-color: transparent;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #83bf46;
    color: #f5f5f5;
    transition: all 0.2s ease-in-out;
  }
`;

const ButtonReset = styled.button`
  color: #ff5152;
  border-radius: 8px;
  border: 1px solid #ff5152;
  width: calc(50% - 5px);
  height: 100%;
  background-color: transparent;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: #ff5152;
    color: #f5f5f5;
    transition: all 0.2s ease-in-out;
  }
`;

import React from 'react';
import styled from 'styled-components';
import Checkbox from '../Checkbox';

interface CheckboxListProps {
  values: string[];
  selectedValues: string[];
  onSelectToggle: (genre: string) => void;
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxList: React.FC<CheckboxListProps> = ({
  values,
  selectedValues,
  onSelectToggle,
}) => {
  const handleToggle = (genre: string) => {
    onSelectToggle(genre);
  };

  return (
    <List>
      {values.map((value) => (
        <Checkbox
          key={value}
          value={value}
          checked={selectedValues.includes(value)}
          onChange={() => handleToggle(value)}
        />
      ))}
    </List>
  );
};

export default CheckboxList;

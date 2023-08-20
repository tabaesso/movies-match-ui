/* eslint-disable indent */
import styled from 'styled-components';

export const StarContainer = styled.div`
  display: inline-block;
`;

export const Star = styled.span<{ filled: boolean; disabled?: boolean }>`
  font-size: 24px;
  color: ${({ filled, disabled }) => {
    if (disabled) {
      return filled ? '#ac8103' : '#999';
    }

    return filled ? '#ffc107' : '#ccc';
  }};
  cursor: pointer;
`;
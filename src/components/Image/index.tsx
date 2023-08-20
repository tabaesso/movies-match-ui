import React from 'react';
import { Container } from './styles';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'medium' | 'large';
}

const Image = ({ src, alt, size = 'medium' }: ImageProps) => {
  return (
    <Container src={src} alt={alt} size={size} />
  );
};

export default Image;
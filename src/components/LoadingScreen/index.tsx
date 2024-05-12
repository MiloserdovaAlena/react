import React from 'react';
import { Rings } from 'react-loader-spinner';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-top: 16px;
`;

const LoadingScreen: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <Rings color="#007bff" height={80} width={80} />
        <LoadingText>Loading...</LoadingText>
      </LoadingContent>
    </LoadingContainer>
  );
};

export default LoadingScreen;

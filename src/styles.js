import styled from "styled-components";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ebebeb;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif; 
  }
`;

export default GlobalStyle;

export const Checkbox = styled.input`
  margin-right: 8px;
`;
  
export const TaskList = styled.ul`
padding: 0 20px 10px 25px;
list-style-type: none;
`;
  
export const Task = styled.li`
  margin: 10px 0;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  white-space: pre-wrap;
  word-break: break-word;
  max-width: 95%; /* Ajuste conforme necessário */
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Title = styled.h2`
    font-family: 'Poppins', sans-serif; 
    color: #575555;
    font-size: 24px;
    font-weight: 600; 
    margin-bottom: 20px; 
    text-align: center;
  `;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 25px;
  
`;

export const TabButton = styled.button`
  flex: 0 1 auto;
  border: none;
  background-color: ${({active}) => (active ? "#e8f1fa" : "white")};
  color: ${({ active }) => (active ? "#3c87ff" : "#bec1c4")};
  font-size: 14px;

  padding: 6px 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
  
`;

export const TabButtonClear = styled.button`
  flex: 0 1 auto;
  border: none;
  background-color: #3c87ff;
  color: #fff;
  font-size: 14px;
  padding: 6px 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

  export const Wrapper = styled.div`
  max-width: 405px;
  padding: 28px 0 30px;
  margin: 137px auto;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const TaskInput = styled.div`
  height: 52px;
  padding: 0 25px;
  position: relative;
`;

export const AddButton = styled.button`
border: none;
background-color: #3c87ff;
color: #fff;
font-size: 16px;
padding: 18px 16px;
margin-left: 10px;
border-radius: 5px;
cursor: pointer;
`;

export const DivInputImage = styled.div`
  top: 50%;
  position: absolute;
  transform: translate(17px, -50%);
`;

export const EditField = styled.input`
  margin: 2px 0;
  padding: 18px;
  outline: none;
  font-size: 14px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
`;

export const TaskInputField = styled.input`
  height: 100%;
  width: 64%;
  outline: none;
  font-size: 14px;
  border-radius: 5px;
  padding: 0 20px 0 53px;
  border: 1px solid #999;
`;

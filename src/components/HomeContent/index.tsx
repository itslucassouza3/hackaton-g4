import React, { useState } from "react";
import styled from "styled-components";
import { HomeContainer } from './styles';
import { SearchOutlined } from "@ant-design/icons";


const Form = styled.form.attrs((props: { barOpened: any }) => props)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #18216d;
  width: ${props => (props.barOpened ? "40rem" : "2rem")};
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input.attrs((props: { barOpened: any }) => props)`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
  &:focus {
  border-color: #cccccc;
  outline: 0;
  -webkit-box-shadow: none;
          box-shadow: none;
}
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button.attrs((props: { barOpened: any }) => props)`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

export function HomeContent() {
    const [input, setInput] = useState("");
    const barOpened = true

    const onFormSubmit = (e: any) => {
        // When form submited, clear input, close the searchbar and do something with input
        e.preventDefault();
        setInput("");
        // After form submit, do what you want with the input value
        console.log(`Form was submited with input: ${input}`);
    };

    return (
        <HomeContainer>
            <h6>Busque por empresas ou vagas</h6>
            <Form
                barOpened={barOpened}
                onSubmit={onFormSubmit}
            >
                <Button type="submit" barOpened={barOpened}>
                    <SearchOutlined />
                </Button>
                <Input
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    barOpened={barOpened}
                    placeholder="Buscar..."
                />
            </Form>
        </HomeContainer>
    );
}
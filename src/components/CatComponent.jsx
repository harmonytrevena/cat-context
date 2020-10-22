import React, { useContext, useState } from "react";
import StateContext from "../context/index";

// Component Styling

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  :disabled {
    opacity: 0.5;
  }
  :hover {
    box-shadow: 0 0 10px grey;
  }

  ${props => props.primary && css`
    background: black;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "black"};
  background: whitesmoke;
  border: none;
  border-radius: 3px;
`;

// Functional Component Starts Here

const Cat = () => {
    const [value, dispatch] = useContext(StateContext);
    const [input, setInput] = useState("");
    const { name, activity } = value;

    const _handleChange = (name) => {
        setInput(name);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "CHANGE_NAME",
            name: input,
        });
        setInput("");
    };

    const _handleActivity = (e, activity) => {
        e.preventDefault();
        dispatch({
            type: "SET_ACTIVITY",
            activity,
        });
    }

    return (
        <Container>
            <form onSubmit={e => _handleSubmit(e)}>
                <label>Update Cat:
                        <Input 
                            type="text" 
                            name="updateCat" 
                            placeholder="New Cat Name" 
                            value={input}
                            onChange={(event) => _handleChange(event.target.value)}
                        />
                </label>
                <Button type="submit">Submit</Button>
            </form>
            <p>{name} is {activity}.</p>
            <Button type="button" onClick={(e) => _handleActivity(e, "eating")}>
                Eating
            </Button>
            <Button type="button" onClick={(e) => _handleActivity(e, "napping")}>
                Napping
            </Button>
            <Button type="button" onClick={(e) => _handleActivity(e, "playing")}>
                Playing
            </Button>
            <br />
        </Container>
    )
};

export default Cat;
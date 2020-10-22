import React, { useContext, useState } from "react";
import StateContext from "../context/index";

const Demo = () => {
    const [value, dispatch] = useContext(StateContext);
    const [input, setInput] = useState("");
    const { name } = value;

    const _handleChange = (name) => {
        setInput(name);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        dispatch ({
            type: "CHANGE_NAME",
            name: input,
        });
        setInput("");
    };

    return (
        <>
        <h1>Welcome {name}, we have such sights to show you!</h1>
        <form onSubmit={e => _handleSubmit(e)}>
            <label>Enter a new person: 
                <input 
                    type="text" 
                    name="newPerson" 
                    placeholder="Your name goes here"
                    value={input}
                    onChange={(event) => _handleChange(event.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Demo;
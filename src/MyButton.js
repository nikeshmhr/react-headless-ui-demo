import React, { useState } from "react";

const commonStyles = {
    border: "2px solid red",
    cursor: "pointer",
};

function MyToggle(props) {
    const {state, eventHandlers, nativeProps} = useToggle(props);

    const stateBasedStyles = Object.assign({}, commonStyles, {
        background: state ? "green" : "",
    });

    return (
        <div style={stateBasedStyles} {...eventHandlers} {...nativeProps}>
            {props.children}
        </div>
    );
}

function useToggle(props = {}) {
    const [isOn, setIsOn] = useState(props.value || false);

    const eventHandlers = {
        onClick: () => {
            setIsOn(!isOn);
            props.onClick && props.onClick();
        },
    };

    const nativeProps = {
        role: 'button'
    };

    return {
        state: isOn,
        eventHandlers,
        nativeProps
    };
}

export default MyToggle;

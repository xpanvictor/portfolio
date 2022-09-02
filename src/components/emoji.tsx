import React from 'react';

const Emoji = ({symbol, label}: {symbol: string, label: string}) => (
    <span
        className="text-2xl"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>);

export default Emoji;
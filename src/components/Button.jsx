function Button({textLabel, disabled}) {
    return (
        <button
            onClick={() => console.log(textLabel)}
            disabled={disabled}
        >
            {textLabel}
        </button>
    );
}

export default Button;
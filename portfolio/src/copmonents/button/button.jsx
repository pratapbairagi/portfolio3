

const Button = ({styleClass="", styleCss, buttonText, fun, id=""}) => {
    return (
        <button className={styleClass} style={styleCss} id={id}>{buttonText}</button>
    )
};

export default Button;
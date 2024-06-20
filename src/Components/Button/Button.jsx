import "./Button.css";
export const Button = ({type = "",text}) => {
    return (
        <button type="submit" className="Button">{text}</button>
    )
}
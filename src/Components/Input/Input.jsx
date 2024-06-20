import "./Input.css"
export const Input = ({type = 'text', label, onChange, pattern, max, value}) => {
    return (
        <div className="Input-Box">
            <label>{label}</label>
            <input value={value} pattern={pattern} maxLength={max} onChange={onChange} type={type} />
        </div>
    )
}
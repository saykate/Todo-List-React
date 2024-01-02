
export default function Button({ className="button", text, onClick }) {
    return (
        <button onClick={onClick} className={className} >{text}</button>
    )
}
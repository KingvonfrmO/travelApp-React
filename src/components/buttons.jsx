import '../styles/buttons.css'

export function Buttons({label, onClick, class_name}) {
    return(
        <button onClick={onClick} className={class_name}>{label}</button>
    );
}
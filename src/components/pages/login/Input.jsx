import { BsPersonCircle } from 'react-icons/bs'

export default function Input({ value, onChange }) {
    return (
        <div className="inputContainer">
            <BsPersonCircle className="personIcone" />
            <input
                value={value}
                type="text"
                placeholder="Entrer votre prenom"
                required
                onChange={onChange}
            />
        </div>
    )
}

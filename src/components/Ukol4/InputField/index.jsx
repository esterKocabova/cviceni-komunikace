import './style.css';

export const InputField = ({ label, type, value, onValueChange }) => {
  return (
    <div  className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        className="input-field__input"
        type={type}
      />
    </div>
  );
};

function FormInput({ label, value, onChange, type = "text" }) {
    return (
        <div className="mb-2">
            <label className="block mb-1 font-medium">{label}</label>
            <input
                type={type}
                className="border border-gray-300 rounded w-full px-2 py-1"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default FormInput;

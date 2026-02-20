function FormSelect({ label, value, onChange, options }) {
    return (
        <div className="mb-2">
            <label className="block mb-1 font-medium">{label}</label>
            <select
                className="border border-gray-300 rounded w-full px-2 py-1"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FormSelect;

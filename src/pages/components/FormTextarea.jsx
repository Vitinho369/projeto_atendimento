function FormTextarea({ label, value, onChange }) {
    return (
        <div className="mb-2">
            <label className="block mb-1 font-medium">{label}</label>
            <textarea
                className="border border-gray-300 rounded w-full px-2 py-1 h-32 resize-none"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default FormTextarea;

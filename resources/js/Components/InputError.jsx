export default function InputError({ message, className = '' }) {
    if (!message || typeof message !== 'object') return null;

    return (
        <>
            {Object.keys(message).map((key, i) => (
                <p key={i} className={`text-sm text-red-600 ${className}`}>
                    {message[key]}
                </p>
            ))}
        </>
    );
}

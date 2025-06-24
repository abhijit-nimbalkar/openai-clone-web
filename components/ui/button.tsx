export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center font-medium rounded-full px-4 py-2 bg-black text-white hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}

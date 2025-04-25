export const Dialog = ({ open, children }) => open ? <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">{children}</div> : null;

export const DialogContent = ({ children, className }) => <div className={`bg-white p-6 rounded-xl max-w-md w-full ${className}`}>{children}</div>;

export const DialogTitle = ({ children }) => <h2 className="text-2xl font-bold mb-4">{children}</h2>;
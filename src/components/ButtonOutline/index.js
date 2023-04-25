export default function ButtonOutline({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      type="button"
      className={`${className} border border-gray-300  font-medium rounded-lg text-sm px-5 py-2.5 my-5 -mb-1 bg-gray-800 text-white hover:bg-gray-700`}
    >
      {children}
    </button>
  );
}

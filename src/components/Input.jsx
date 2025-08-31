function Input(props) {
  // {...props} => Essa spread de props indica que todas as minhas props criadas e enviadas nesse componente serão inseridas automaticamente.
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md "
      {...props}
    />
  );
}

export default Input;

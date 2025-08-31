function Button(props) {
  // {props.children} => Recebe o conteúdo que está entre os componentes e manda pras props
  // Exemplo: <button>teste</button> (teste == props.children)
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-400 p-2 rounded-md text-white"
    >
      {props.children}
    </button>
  );
}

export default Button;

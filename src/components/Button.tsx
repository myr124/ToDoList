// import TodoComponent from "./ToDo";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <div>
      <button type="button" className="btn" onClick={onClick}>
        + New List Entry
      </button>
    </div>
  );
};

export default Button;

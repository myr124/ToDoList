// import TodoComponent from "./ToDo";
import Button from '@mui/material/Button';

interface Props {
  onClick: () => void;
}

const MatButton = ({ onClick }: Props) => {
  return (
    <div>
      <Button variant="text" onClick={onClick} >
        + New List Entry
      </Button>
    </div>
  );
};

export default MatButton;

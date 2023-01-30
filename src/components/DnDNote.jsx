import { StyledDnDNote } from './styles/StyledDnDNote';

const DnDNote = ({ tasks }) => {
  return (
    <StyledDnDNote tasks={tasks}>Drag and drop to reorder list</StyledDnDNote>
  );
};

export default DnDNote;

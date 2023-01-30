import { StyledDnDNote } from './styles/StyledDnDNote';

const DnDNote = ({ tasks }) => {
  const animateProps = {};

  if (tasks.length >= 2) {
    animateProps.initial = { opacity: 0, scale: 0.5 };
    animateProps.animate = { opacity: 1, scale: 1 };
    animateProps.transition = { duration: 0.7 };
  }
  return (
    // Add these animations props from framer motion if the above condition is met
    <StyledDnDNote {...animateProps}>
      Drag and drop to reorder list
    </StyledDnDNote>
  );
};

export default DnDNote;

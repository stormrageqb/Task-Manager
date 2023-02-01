import styled from 'styled-components';
import { StyledGridContainer } from './styles/base/StyledGridContainer';

const GridContainer = ({ children }) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default GridContainer;

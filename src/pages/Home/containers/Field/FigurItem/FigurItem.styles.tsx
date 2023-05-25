import { Box, styled } from "@mui/material";
import { FigureItemProps as StyleProps } from "@pages/Home/containers/Field/FigurItem/FigureItem";

export const Rectangle = styled(Box)<StyleProps>`
  fill: none;
  stroke-width: 2;
  stroke-opacity: 0.4;
  border-radius: 2px;
  position: absolute;
  bottom: ${({ item }) => item.y - item.height / 2}px;
  left: ${({ item }) => item.x - item.width / 2}px;
`;
export const Dot = styled(Box)<StyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  color: azure;
  background: #ffffff;
  position: absolute;
  bottom: ${({ item }) => item.height / 2 - 4}px;
  left: ${({ item }) => item.width / 2 - 4}px;
  transform: rotateZ(-${({ item }) => item.rotation}deg);
`;
export const Figure = styled(Box)<StyleProps>`
  width: ${({ item }) => item.width}px;
  height: ${({ item }) => item.height}px;
  background: ${({ item }) => item.color};
  transform: rotateZ(${({ item }) => item.rotation}deg);
  border-radius: ${({ item }) => (item.type === "ellipse" ? "50%" : "none")};

  span {
    position: absolute;
    bottom: 6px;
    left: 5px;
    font-weight: 500;
    text-shadow: 0 0 1px #c5c0c0;
  }
`;

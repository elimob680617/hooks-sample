import styled, { css } from "styled-components";

export const RatingWrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  position: ${(props) => (props.position && props.position)};
  display: flex;
  flex-direction: ${(props) => props.dir && props.dir};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
  grid-area: ${(props) => props.gridArea && props.gridArea};
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  opacity: ${(props) => props.opacity && props.opacity};
  margin: ${(props) => props.margin && props.margin};
  margin-top: ${(props) => props.mgTop && props.mgTop};
  margin-bottom: ${(props) => props.mgBottom && props.mgBottom};
  margin-left: ${(props) => props.mgRight && props.mgRight};
  margin-right: ${(props) => props.mgLeft && props.mgLeft};
  padding: ${(props) => props.space && props.space};
  padding-top: ${(props) => props.spaceTop && props.spaceTop};
  padding-bottom: ${(props) => props.spaceBottom && props.spaceBottom};
  padding-left: ${(props) => props.spaceRight && props.spaceRight};
  padding-right: ${(props) => props.spaceLeft && props.spaceLeft};
  background: ${(props) => props.bg && props.bg};
  background-color: ${(props) => props.bgColor && props.theme[props.bgColor]};
  border-radius: ${(props) => props.radius && props.radius};

  & span{
    ${(props) => props.muiRatingStyle && css`
        ${props.muiRatingStyle}
    `}
  }
`;
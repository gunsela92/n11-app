import styled from "styled-components";
import {ReactSVG} from "react-svg";

export const FavoriteStars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FavoriteStatus = styled(ReactSVG)`
  width: 24px;
`;

export const CommentCount = styled.span`
  margin-left: 15px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.linkColor};
  cursor: pointer;
`;
import { css, styled } from "styled-components";

export interface ILink {
  color: string;
  $ispageactive: boolean;
}
export interface ILinkB {
  color: string;
  hovercolor?: string;
}

export const PageLinkStyle = styled.p<ILink>`
  color: ${(props) =>
    props.$ispageactive ? "var(--purple, #D4A64E)" : props.color};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-weight: 600;
  line-height: 1.5rem;
  &:hover {
    color: var(--purple-600,#D4A64E );
  }
  @media screen and (min-width: 728px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    height: 2.22713rem;
    ${(props) =>
      props.$ispageactive &&
      css`
        color: var(--purple, #D4A64E);
        border-bottom: 4px solid #D4A64E;
      `};
  }
`;

// other links
export const LinkStyle = styled.p<ILinkB>`
  color: ${(props) => props.color};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-weight: 600;
  line-height: 1.5rem;
  width: fit-content;
  &:hover {
    color: #fff;
    text: #111;
  }
  ${(props) =>
    props.hovercolor &&
    css`
      &:hover {
        color: ${props.hovercolor};
      }
    `}
  @media screen and (min-width: 728px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    height: 2.22713rem;
  }
`;
export const SocialLinkStyle = styled.p<ILinkB>`
  color: ${(props) => props.color};
  font-size: 0.875rem;
  font-family: DM Sans;
  font-weight: 600;
  line-height: 1.5rem;
  width: fit-content;
  @media screen and (min-width: 728px) {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2rem;
    height: 2.22713rem;
  }
`;

export const FooterLinkStyle = styled(LinkStyle)`
font-size: 0.875rem;
  font-weight : 400;
  @media screen and (min-width: 728px) {
    font-weight: 400;
    font-size: 1rem;
  }
`

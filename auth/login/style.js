import styled from "styled-components";

export const StyledCompanyLogin = styled.div`
  @media (max-width: 576px) {
    background: ${({ theme: { color } }) => color.white};
  }

  .company-login-wrapper {
    width: 394px;
    max-width: 90%;
    min-height: 576px;
    margin: auto;
    padding: ${({ theme: { space } }) => `${space["7"]} ${space["8"]}`};
    box-shadow: ${({ theme: { shadow } }) => shadow.shadow200};
    background: ${({ theme: { color } }) => color.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.medium};

    @media (max-width: 576px) {
      box-shadow: none;
    }
  }
`;

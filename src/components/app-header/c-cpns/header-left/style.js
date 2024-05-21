import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor};
  display: flex;
  align-items: center;

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
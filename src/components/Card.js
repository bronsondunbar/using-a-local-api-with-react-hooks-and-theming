import styled from '@xstyled/styled-components'

const Card = styled.div`
  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
  }

  .card-body {
    flex: 1 1 auto;
    background-color: white;
  }
`
export default Card
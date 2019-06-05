import styled from '@xstyled/styled-components'

const Card = styled.div`
	border-radius: defaultRadius;

  .card-body {
    background-color: secondaryColor;
    color: textColor;
    transition: fastTransition;

    pre {
    	background-color: backgroundColor;
    	padding: defaultPadding;
    	color: altTextColor;
    }
  }
`
export default Card
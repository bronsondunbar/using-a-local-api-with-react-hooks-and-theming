import styled from '@xstyled/styled-components'

const Card = styled.div`
	border-radius: defaultRadius;
  text-align: center;

  .card-body {
    position: relative;
    background-color: secondaryColor;
    color: textColor;
    transition: 'all 0.3s';

    pre {
    	background-color: backgroundColor;
    	padding: defaultPadding;
    	color: altTextColor;
    }

    i, svg {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      transition: 'all 0.3s';

      &:hover {
        color: primaryColor;
      }
    }

    i.active,
    svg.active {
      color: primaryColor;
    }
  }
`
export default Card
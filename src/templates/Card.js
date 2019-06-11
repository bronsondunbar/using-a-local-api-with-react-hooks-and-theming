import styled from '@xstyled/styled-components'

const Card = styled.div`
  background-color: secondaryColor !important;
	border-radius: defaultRadius;
  text-align: center;
  margin: 0 0 15px 0;

  .card-body {
    background-color: secondaryColor;
    position: relative;
    color: textColor;
    border-radius: defaultRadius;
    transition: all 0.3s;

    p {
      text-align: left;

      &:last-child {
        margin: 0;
      }
    }

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
      transition: all 0.3s;

      &:hover {
        color: primaryColor;
      }
    }

    i.active,
    svg.active {
      color: primaryColor;
    }

    .card-comments {
      text-align: center;
    }
  }
`
export default Card
const theme = (theme) => {
	return (
		{
			colors: {
		    primary: theme === 'default' ? 'palevioletred' : 'blue',
		    primaryLight: 'pink',
		    secondary: 'gray',
		    background: 'white'
		  },
		  radii: {
		    medium: 6,
		  }
		}
	)
}

export default theme
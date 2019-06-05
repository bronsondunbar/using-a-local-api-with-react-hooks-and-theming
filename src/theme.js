const theme = (theme) => {
	return (
		{
			colors: {
		    primaryColor: '#3ba30d',
		    secondaryColor: theme === 'default' ? '#ffffff' : '#6A6A6A',
		    textColor: theme === 'default' ? '#262626' : '#ffffff',
		    altTextColor: '#ffffff',
		    backgroundColor: '#262626'
		  },
		  radii: {
		  	defaultRadius: '.25rem'
		  },
		  paddings: {
		  	defaultPadding: '.375rem .75rem'
		  },
		  transitions: {
		  	fastTransition: 'all 0.3s'
		  }
		}
	)
}

export default theme
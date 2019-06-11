export const themeName = (selectedTheme) => {
  if (selectedTheme === "default") {
    return "Dark"
  } else if (selectedTheme === "alt") {
    return "Default"
  }
}

export const captilizeString = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
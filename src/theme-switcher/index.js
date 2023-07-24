const setTheme = theme=>
{
  document.documentElement.setAttribute("data-theme", theme);
}

const getTheme = ()=> document.documentElement.getAttribute("data-theme")

export  {setTheme, getTheme};

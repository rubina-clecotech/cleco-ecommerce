import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const NavigateButton = ({styling,icon,title,url,size}) => {
    return(
        <Button
        className={styling}
        variant="contained"
        disableElevation
        startIcon={icon}
        component={Link}
        to={url}
        size={size}
      >
        {title}
      </Button>
    )
}

export const ClickButton = ({onClick,styling,title}) => {
  return(
    <Button
    className={styling}
    variant="contained"
    disableElevation
    type="submit"
    onClick={onClick}
  >
    {title}
  </Button>
)
}
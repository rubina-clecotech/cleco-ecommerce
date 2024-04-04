import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const NavigateButton = ({styling,icon,title,url,size}) => {
    return(
        <Button
        className={styling}
        variant="contained"
        disableElevation
        startIcon={icon}
        type="submit"
        component={Link}
        to={url}
        size={size}
      >
        {title}
      </Button>
    )
}
export const ClickButton = ({styling,title,color,onClick}) => {
  return(
      <Button
      className={styling}
      variant="contained"
      color={color}
      onClick={onClick}
      disableElevation
    >
      {title}
    </Button>
  )
}

export const SubmitButton = ({styling,title,color,onClick}) => {
  return(
      <Button
      className={styling}
      variant="contained"
      color={color}
      onClick={onClick}
      disableElevation
      type="submit"
    >
      {title}
    </Button>
  )
}

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
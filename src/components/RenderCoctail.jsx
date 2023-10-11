import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
   const { expand, ...other } = props;
   return <IconButton {...other} />;
})(({ theme, expand }) => ({
   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
   marginLeft: "auto",
   transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
   }),
}));

function RenderCoctail(props) {
   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };
   return (
      <Card sx={{ maxWidth: 345 }}>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  N
               </Avatar>
            }
            // action={
            //    <IconButton aria-label="settings">
            //       <MoreVertIcon />
            //    </IconButton>
            // }
            title={props.title}
         />
         <CardMedia component="img" height="194" image={props.image} alt="image cocktail" />
         <CardActions disableSpacing>
            {/* <IconButton aria-label="add to favorites">
               <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
               <ShareIcon />
            </IconButton>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
               <ExpandMoreIcon />
            </ExpandMore> */}
         </CardActions>
         {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
         <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <Typography>
               {props.ingredients1 || props.mesure1 ? (
                  <li>
                     {props.ingredients1} {props.mesure1}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients2 || props.mesure2 ? (
                  <li>
                     {props.ingredients2} {props.mesure2}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients3 || props.mesure3 ? (
                  <li>
                     {props.ingredients3} {props.mesure3}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients4 || props.mesure4 ? (
                  <li>
                     {props.ingredients4} {props.mesure4}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients5 || props.mesure5 ? (
                  <li>
                     {props.ingredients5} {props.mesure5}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients6 || props.mesure6 ? (
                  <li>
                     {props.ingredients6} {props.mesure6}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients7 || props.mesure7 ? (
                  <li>
                     {props.ingredients7} {props.mesure7}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients8 || props.mesure8 ? (
                  <li>
                     {props.ingredients8} {props.mesure8}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients9 || props.mesure9 ? (
                  <li>
                     {props.ingredients9} {props.mesure9}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients10 || props.mesure10 ? (
                  <li>
                     {props.ingredients10} {props.mesure10}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients11 || props.mesure11 ? (
                  <li>
                     {props.ingredients11} {props.mesure11}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients12 || props.mesure12 ? (
                  <li>
                     {props.ingredients12} {props.mesure12}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients13 || props.mesure13 ? (
                  <li>
                     {props.ingredients13} {props.mesure13}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients14 || props.mesure14 ? (
                  <li>
                     {props.ingredients14} {props.mesure14}
                  </li>
               ) : (
                  ``
               )}
               {props.ingredients15 || props.mesure15 ? (
                  <li>
                     {props.ingredients15} {props.mesure15}
                  </li>
               ) : (
                  ``
               )}
            </Typography>
            <Typography paragraph>Method:</Typography>
            <Typography>{props.instruction}</Typography>
         </CardContent>
         {/* </Collapse> */}
      </Card>
   );
}
export default RenderCoctail;

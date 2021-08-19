import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ItemList from "./ItemList/ItemList";
import { TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  deleteButton: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function TaskCard({removeCard}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // console.log(card)

  


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            ER
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Title of Task"
        subheader="September 14, 2021"
        
      >
        
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <ul>
            <ItemList />
          </ul>
        </Typography>
      </CardContent>
      <TextField type="text" fullWidth={true} label='Input Task' />
      <Button fullWidth={true} variant="contained" color="primary" >Add Task</Button>
      
      <CardActions disableSpacing>
      
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

        <IconButton aria-label="delete" onClick={removeCard}>
          <DeleteIcon fontSize='medium' />
        </IconButton>
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            According to all known laws of aviation, there is no way a bee
            should be able to fly. Its wings are too small to get its fat little
            body off the ground. The bee, of course, flies anyway because bees
            don't care what humans think is impossible. Yellow, black. Yellow,
            black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's
            shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a
            second. Hello? - Barry? - Adam? - Oan you believe this is happening?
            - I can't. I'll pick you up. Looking sharp. Use the stairs. Your
            father paid good money for those. Sorry. I'm excited. Here's the
            graduate. We're very proud of you, son. A perfect report card, all
            B's. Very proud. Ma! I got a thing going here. - You got lint on
            your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. -
            Bye! Barry, I told you, stop flying in the house! - Hey, Adam. -
            Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation.
            Never thought I'd make it. Three days grade school, three days high
            school. Those were awkward. Three days college. I'm glad I took a
            day and hitchhiked around the hive. You did come back different. -
            Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about
            Frankie? - Yeah. - You going to the funeral? - No, I'm not going.
            Everybody knows, sting someone, you die. Don't waste it on a
            squirrel. Such a hothead. I guess he could have just gotten out of
            the way. I love this incorporating an amusement park into our day.
            That's why we don't need vacations. Boy, quite a bit of pomp...
            under the circumstances. - Well, Adam, today we are men. - We are! -
            Bee-men. - Amen! Hallelujah!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const Post = (props) => {
    const{title, id, body}=props.post

    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          height: '345px',
          marginRight:'20px',
          marginBottom:'20px',
          border: '1px solid LightGray '
        },
      });
      
        const classes = useStyles();
        


    return (
        <div>
            
            
            <Card className={classes.root}>
                <CardActionArea>
        
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
             <CardActions>
                 
                    <Button size="small" color="primary">
                    <Link to={`posts/${id}`}>
                        Learn More
                    </Link>
                        </Button>
                 
                
            </CardActions>
    </Card>

    
            
        </div>
    );
};

export default Post;
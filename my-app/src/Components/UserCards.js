import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

class UserCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardActionArea>
          <img src={this.props.props.avatar_url} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.props.login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              erpdnmlg oiwern gdfl;gsdofgnewrlg dfdlsgsndoen ejoerfdp pojsopopd
              eojtojdfg opsgposjfop oopsdgos opemsdlmvbe
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
export default UserCard;

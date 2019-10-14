import './info.css'

import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const Info = () => {
    return (
        <Card className={'info_area span_1_of_4'}>
            <CardActionArea>
                <CardMedia className={'card_media'} image={'./albert.jpg'} title={'Albert Viilik'}/>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <PersonOutlineIcon/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography>Albert Viilik</Typography>} secondary={null}/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography>+44 (0) 7585 830006</Typography>} secondary={null}/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography>albert.viilik@gmail.com</Typography>} secondary={null}/>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon/>
                            </ListItemIcon>
                            <ListItemText primary={<Typography>Manchester, UK</Typography>} secondary={null}/>
                        </ListItem>
                    </List>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Info;
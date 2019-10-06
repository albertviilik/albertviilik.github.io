import * as React from 'react';
import './dock.css'
import {BottomNavigation} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";


type Props = {
    buttons: string
};
export const Dock = (props: Props) => {

    const [value, setValue] = React.useState('personal');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation className={"nav"} value={value} onChange={handleChange}>
            <BottomNavigationAction className={'button'} label="Projects" value="projects" icon={<FolderIcon/>}/>
            <BottomNavigationAction className={'button'} label="Info" value="personal" icon={<PersonIcon/>}/>
            <BottomNavigationAction className={'button'} label="Resume" value="resume" icon={<SubjectIcon/>}/>
        </BottomNavigation>
    );
};

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
    return (
        <BottomNavigation className={"nav"}>
            <BottomNavigationAction className={'button'} label="Folder" value="folder" icon={<FolderIcon/>}/>
            <BottomNavigationAction className={'button'} label="Folder" value="folder" icon={<PersonIcon/>}/>
            <BottomNavigationAction className={'button'} label="Folder" value="folder" icon={<SubjectIcon/>}/>
        </BottomNavigation>
    );
};

import * as React from 'react';
import {Component} from 'react';
import './dock.css'
import {BottomNavigation} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import PersonIcon from '@material-ui/icons/Person';
import SubjectIcon from '@material-ui/icons/Subject';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {connect} from "react-redux";
import {changePage} from "../../redux/actions";

function mapStateToProps(state: any) {
    return {page: state.selectedPage};
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        onClick: (value: any) => {
            dispatch(changePage(value))
        }
    };
}

class Dock extends Component<any> {
    handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        this.props.onClick(newValue)
    };

    render() {
        return (
            <BottomNavigation className={"nav span_1_of_4"} value={this.props.page} onChange={this.handleChange}>
                <BottomNavigationAction className={'button'} label="Projects" value="Projects" icon={<FolderIcon/>}/>
                <BottomNavigationAction className={'button'} label="Info" value="Info" icon={<PersonIcon/>}/>
                <BottomNavigationAction className={'button'} label="Resume" value="Resume" icon={<SubjectIcon/>}/>
            </BottomNavigation>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dock)

// const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
//     store.dispatch(changePage(newValue));
//     setValue(store.getState().selectedPage);
//     console.log(store.getState().selectedPage + '-> dock.tsx | line:21')
// };
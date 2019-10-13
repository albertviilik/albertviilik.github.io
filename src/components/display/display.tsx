import React, {Component} from 'react';
import {connect} from 'react-redux';
import './display.css'
import Info from "../info/info";
import Resume from "../resume/resume";
import Projects from "../projects/projects";

function mapStateToProps(state: any) {
    return {page: state.selectedPage};
}

// function mapDispatchToProps(dispatch: any) {
//     return {};
// }

class Display extends Component<any> {

    render() {
        return (
            <div>
                {this.props.page === 'Projects' ? <Projects/> : null}
                {this.props.page === 'Info' ? <Info/> : null}
                {this.props.page === 'Resume' ? <Resume/> : null}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Display);
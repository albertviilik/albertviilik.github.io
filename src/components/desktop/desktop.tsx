import * as React from 'react';
import './desktop.css'
import Background from '../../assets/images/background.jpg';

type Props = {};
type State = {};

export class Desktop extends React.Component<Props, State> {
    render() {
        return (
            <div className={"Desktop"} style={{backgroundImage: "url(" + Background + ")"}}>
                {this.props.children}
            </div>
        );
    };
}

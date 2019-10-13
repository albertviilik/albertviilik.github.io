import './resume.css'

import React from 'react';
import {Paper} from "@material-ui/core";

const Resume = () => {
    return (
        <Paper className={'resume_area span_2_of_4'}>
            <embed className={'embedded span_4_of_4'} src={'./albertviilik.pdf'} type={'application/pdf'}/>
        </Paper>
    );
};

export default Resume;
import React from 'react';

import { Paper, IconButton} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function footer(props) {
    return (
        <div className="Footer">
            <Paper>
                <div className="flex-row">
                    <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/paumaravi/" target="_blank">
                        <LinkedInIcon style={{ color: '#2867B2' }} fontSize="large" />
                    </IconButton>
                </div>
            </Paper>
        </div>
    );
}

export default footer;
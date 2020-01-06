import React from 'react';

import PieChart from 'react-minimal-pie-chart';

import './Skills.scss';

function Skills(props) {
    return (
        <div className="Skills">
            <h1>Skills</h1>
            <PieChart
                data={[{ value: 1, key: 1, color: '#E38627' }]}
                reveal={40}
                lineWidth={20}
                background="#bfbfbf"
                startAngle={270}
                lengthAngle={270}
                rounded
                animationDuration={1500}
                animate={true}
                animationEasing="ease-in-out"
            />
            
        </div>
    );
}

export default Skills;
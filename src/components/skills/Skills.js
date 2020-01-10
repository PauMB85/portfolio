import React, { useState, useEffect } from 'react';
import PieChart from 'react-minimal-pie-chart';

import './Skills.scss';

const styleMobile = {margin: '5px 10px', height:'100px', width:'100px'};
const styleDesktop = {margin: '5px 10px', height:'200px', width:'200px'};


function Skills(props) {
    const mobileDevice = 600;
    const [isMobile, setIsMobile] = useState(false);
    const [widthDevice, setWidthDevice] = useState(0);

    useEffect(() =>{
        setWidthWindowDevice();
    },[]);

    useEffect(() => {
        if(widthDevice > 0) {
            window.addEventListener('resize', handleWindowResive);
            return () => {
                window.removeEventListener('resize', handleWindowResive);
            }
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[widthDevice])

    const handleWindowResive = () => {
        setWidthWindowDevice();
    }

    const setWidthWindowDevice = () => {
        const width = window.innerWidth;
        setWidthDevice(width);
        setIsMobile(mobileDevice > width ? true : false);
    }

    const languagesFrameworks = [{ value: 1, key: 1, title: 'Javascript', color: '#E38627' }, { value: 1, key: 1, title: 'React', color: '#E38627' }, { value: 1, key: 1, title: 'CSS', color: '#E38627' },
                                 { value: 1, key: 1, title: 'Java', color: '#E38627' }, { value: 1, key: 1, title: 'Node', color: '#E38627' }, { value: 1, key: 1, title: 'Angular', color: '#E38627' }];

    return (
        <div className="Skills">
            <h1>Skills</h1>
            <div className="collect-skills">
                <h2>Languages and frameworks</h2>
                <div className="charts-wrapper">
                    { languagesFrameworks.map( skill => {
                        return <PieChart
                            data={[skill]}
                            style={ isMobile? styleMobile : styleDesktop }
                            reveal={40}
                            lineWidth={20}
                            background="#bfbfbf"
                            startAngle={270}
                            lengthAngle={270}
                            rounded
                            animationDuration={1500}
                            animate={true}
                            animationEasing="ease-in-out"
                            label={({ data, dataIndex }) =>{
                                return data[dataIndex].title;
                            }}
                            labelPosition={0}
                        />
                    })}
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Skills;
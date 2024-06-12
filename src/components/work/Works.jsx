import React, { useEffect, useState } from 'react';
import { projects } from './Data';
import { projectsNav } from './Data';
import WorksItems from './WroksItem';
import './Work.css'

const Works = () => {

    const [item, setItem] = useState({ name: 'all' });
    const [project, setProject] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProject(projects)
        }
        else {
            const newProject = projects.filter((project) => {
                return project.category === item.name;
            });
            setProject(newProject)
        }
    }, [item]);

    const clickHandler = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

    return (
        <div className='work-box'>
            <div className="work-filters">
                {projectsNav.map((item, index) => {
                    return <span onClick={(e, index) => {
                        clickHandler(e, index);
                    }} className={`${active == index ? 'active-work' : ""} work-item `} key={index}>{item.name}</span>
                })}
            </div>
            <div className="work-container container grid">{project.map((item) => {
                return <WorksItems item={item} key={item.id} />
            })}</div>
        </div>
    )
}

export default Works
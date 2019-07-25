import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { Card } from './component';


const renderItem = (item, index) => (
    <li key={index}>
        <div className="language">
            <div>{item.name}</div> 
            <div>{item.duration}</div>
        </div>
        <div className="description">{item.description}</div>
    </li>
)

const Education = ({educations = []}) => {
    return (
        <Card className="education">
            <Fragment>
                <h2>Education</h2>
                <ul>
                    {educations.map(renderItem) }
                </ul>
            </Fragment>
        </Card>
    )
}

Education.propTypes = {
    educations: PropTypes.array.isRequired
}

export default Education;

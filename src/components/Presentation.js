import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import { Card } from './component';


const renderEtc = (etc) => (
    <Fragment>
        <h4 className="subtitle">참고</h4>
        <ul className="etc">
            {etc.map((item, index) => (<li key={index} ><a href={item}>{item}</a></li>))}
        </ul>
    </Fragment>
)
const renderItem = (item, index) => (
    <li key={index}>
        <h3 className="title">{item.name}</h3>
        <div>진행 기간 : {item.duration} </div>
        <h4 className="subtitle">내용</h4>
        <div className="description">{item.description}</div>
        <h4 className="subtitle">기여</h4>
        <div className="description">{item.contribution}</div>
        <h4 className="subtitle">사용 스킬 혹은 지식</h4>
        <ul className="skills">
            {item.skills.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
        {item.etc && renderEtc(item.etc)}
    </li>
)

const Presentation = ({presentations = []}) => {
    return(
        <Card className="presentation">
            <Fragment>
                <h2>Presentation</h2>
                <ul>{presentations.map(renderItem)}</ul>
            </Fragment>
        </Card>
    )
}

Presentation.propTypes = {
    presentations: PropTypes.array
}

export default Presentation;
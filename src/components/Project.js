import React, {Fragment, useState} from 'react'
import { Card } from './component';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const renderEtc = (etc) => (
    <Fragment>
        <h4 className="subtitle">참고</h4>
        <ul className="etc">
            {etc.map((item, index) => (<li key={index} ><a href={item}>{item}</a></li>))}
        </ul>
    </Fragment>
)

const renderImg = (images) => (
    <div className="image-container">
        {images.map((item, index) => (
            <img key={index} src={item} alt="그림" />
        ))}
    </div>
)

const renderItem = (item, index) => {
    return (
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
            {item.images && renderImg(item.images)}
            {item.etc && renderEtc(item.etc)}
        </li>
    )
}

const Project = ({projects = []}) => {
    const [fold, setFold] = useState(true);
    let className = fold ? "project" : "project";
    let icon = fold ? <IoIosArrowDown /> : <IoIosArrowUp />;
    let iconDescription = fold ? "펼치기" : "접기";
    return(
        <Card className={className}>
            <Fragment>
                <header>
                    <h2>Project</h2>
                    <button onClick={() => setFold(!fold)}>{iconDescription}&nbsp;{icon}</button>
                </header>
                <ul>{projects.map(renderItem)}</ul>
            </Fragment>
        </Card>
    )
}

export default Project;
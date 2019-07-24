import React, {Fragment} from 'react'
import PropTypes from 'prop-types';
import { GoMarkGithub } from 'react-icons/go'
import { IoIosMail, IoIosPhonePortrait } from 'react-icons/io';
import { Card } from './component';

const Profile = ({profileImg = undefined, githubAccountId = '', email = undefined, phone = undefined}) => {
    return (
        <Card className="profile">
            <Fragment>
                <div className="banner">
                    <div className="image-container">
                        {
                            profileImg ? <img src={profileImg} alt="프로필 사진"/>
                            : <GoMarkGithub/>
                        }
                        
                    </div>
                    <span className="nickname">{githubAccountId}</span>
                    <div>
                        <a href={`https://github.com/${githubAccountId}`}><GoMarkGithub /></a>
                    </div>
                    <div className="contact">
                        {(email || phone) && (<ul>
                            {email && <li><IoIosMail />{email} </li>}
                            {phone && <li><IoIosPhonePortrait /> {phone} </li>}
                        </ul>)}
                    </div>
                </div>
                <div className="description">
                    깡패신입 함 되보고싶다 ㅠ
                </div>
            </Fragment>
        </Card>
    )
}

Profile.propTypes = {
    profileImg: PropTypes.string,
    githubAccountId: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
};

export default Profile;
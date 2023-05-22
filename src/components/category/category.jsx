import './category.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Category() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCategory = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className='category'>
                <hr></hr>
                <div className='title'>협회소개</div>
                <hr></hr>
                <ul>
                    <Link to={"/introduce/sub01/1"}>
                    <div className='subtitle'>소개</div>
                    </Link>
                    {/*
                    <div className='sub-category-box'>
                        <Link to={"/introduce/sub01/1"}>
                            <li className='sub-category'>협회소개</li>
                        </Link>
                        {/*<Link to={"/introduce/sub01/2"}>
                            <li className='sub-category'>임상심리학소개</li>
                        </Link>
                    </div>*/}
                </ul>

                <ul>
                    <Link to={"/introduce/sub02"}>
                        <div 
                        className='subtitle'>인사말</div>
                    </Link>
                </ul>

                <ul>
                    <Link to={"/introduce/sub03/1"}>
                    <div 
                        className='subtitle'>연혁</div>
                    </Link>
                    {/*
                    <div className='sub-category-box'>
                        <Link to={"/introduce/sub03/1"}>
                            <li className='sub-category'>연혁</li>
                        </Link>
                    </div>
                    */}
                </ul>

                <ul>
                    <div onClick={toggleCategory} 
                    className='subtitle'
                    >협회 규정</div>
                    {isOpen && 
                    <div className='sub-category-box'>
                        <Link to={"/introduce/sub04/1"}>
                            <li className='sub-category'>협회규칙(정관)</li>
                        </Link>
                        <Link to={"/introduce/sub04/2"}>
                            <li className='sub-category'>윤리규정</li>
                        </Link>
                    </div>}
                </ul>

                <ul>
                    <Link to={"/introduce/sub05/1"}>
                    <div 
                        className='subtitle'>조직</div>
                    </Link>
                    {/*
                    <div className='sub-category-box'>
                        <Link to={"/introduce/sub05/1"}>
                            <li className='sub-category'>임원진</li>
                        </Link>
                        <Link to={"/introduce/sub05/2"}>
                            <li className='sub-category'>감사</li>
                        </Link>
                        <Link to={"/introduce/sub05/3"}>
                            <li className='sub-category'>TF/(임시)위원회</li>
                        </Link>
                        <Link to={"/introduce/sub05/4"}>
                            <li className='sub-category'>대의원회</li>
                        </Link>
                        <Link to={"/introduce/sub05/5"}>
                            <li className='sub-category'>협의회</li>
                        </Link>
                        <Link to={"/introduce/sub05/6"}>
                            <li className='sub-category'>지회</li>
                        </Link>
                        <Link to={"/introduce/sub05/7"}>
                            <li className='sub-category'>연구회</li>
                        </Link>
                    </div>
                    */}
                </ul>

        </div>
    )
}
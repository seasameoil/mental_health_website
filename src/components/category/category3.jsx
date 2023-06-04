import './category.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Category3() {
    /*
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleCategory1 = () => {
        setIsOpen1(!isOpen1);
    };

    const toggleCategory2 = () => {
        setIsOpen2(!isOpen2);
    };
    */

    return(
        <div className='category'>
                <hr></hr>
                <div className='title'>프로그램</div>
                <hr></hr>

                {/*
                <ul>
                    <div className='subtitle' onClick={toggleCategory1}>건강정보</div>
                    {isOpen1 &&
                    <div className='sub-category-box'>
                        <Link to={"/information/sub01/1"}>
                            <li className='sub-category'>우울증</li>
                        </Link>
                        <Link to={"/information/sub01/2"}>
                            <li className='sub-category'>아동청소년 우울증</li>
                        </Link>
                        <Link to={"/information/sub01/3"}>
                            <li className='sub-category'>아동청소년 주의력문제</li>
                        </Link>
                        <Link to={"/information/sub01/4"}>
                            <li className='sub-category'>치매와 신경심리</li>
                        </Link>
                        <Link to={"/information/sub01/5"}>
                            <li className='sub-category'>인지행동치료</li>
                        </Link>
                        <Link to={"/information/sub01/6"}>
                            <li className='sub-category'>게슈탈트심리치료</li>
                        </Link>
                    
                    </div>
                    }
                </ul>
                */}

                <ul>
                    <Link to="/information/sub01/1">
                        <div className='subtitle'>정신건강관리사</div>
                    </Link>
                    {/*
                    {isOpen2 &&
                    <div className='sub-category-box'>
                        <Link to={"/information/sub02/1"}>
                            <li className='sub-category'>정신건강관리사</li>
                        </Link>
                        <Link to={"/information/sub02/2"}>
                            <li className='sub-category'>멘탈코치</li>
                        </Link>
                    </div>
                    }
                */}
                </ul>

                <ul>
                <Link to="/information/sub02/1">
                    <div className='subtitle'>멘탈코치</div>
                </Link>
                </ul>

        </div>
    )
}
import './category.css';
import { Link } from 'react-router-dom';

export default function Category3() {
    return(
        <div className='category'>
                <div className='title'>정보광장</div>

                <ul>
                    <div>건강정보</div>
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
                </ul>

                <ul>
                    <div>정신건강관리사란?</div>
                    <div className='sub-category-box'>
                        <Link to={"/information/sub02/1"}>
                            <li className='sub-category'>정신건강관리사 소개</li>
                        </Link>
                        <Link to={"/information/sub02/2"}>
                            <li className='sub-category'>정신건강관리사 수련</li>
                        </Link>
                    </div>
                </ul>

        </div>
    )
}
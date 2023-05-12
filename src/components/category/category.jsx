import './category.css';
import { Link } from 'react-router-dom';

export default function Category() {
    return(
        <div className='category'>
                <div className='title'>학회소개</div>

                <ul>
                    <div>소개</div>
                    <div className='sub-category-box'>
                        <Link to={"/introduce/sub01/1"}>
                            <li className='sub-category'>학회소개</li>
                        </Link>
                        <Link to={"introduce/sub01/2"}>
                            <li className='sub-category'>임상심리학소개</li>
                        </Link>
                    </div>
                </ul>

                <ul>
                    <div>인사말</div>
                </ul>

                <ul>
                    <Link to={"introduce/sub03/1"}>
                        <div>학회발자취</div>
                    </Link>
                    <div className='sub-category-box'>
                        <Link to={"introduce/sub03/1"}>
                            <li className='sub-category'>연혁</li>
                        </Link>
                        <Link to={"introduce/sub03/2"}>
                            <li className='sub-category'>역대회장</li>
                        </Link>
                    </div>
                </ul>

                <ul>
                    <div>학회 규정</div>
                    <div className='sub-category-box'>
                        <Link to={"introduce/sub04/1"}>
                            <li className='sub-category'>회칙 및 운영세칙</li>
                        </Link>
                        <Link to={"introduce/sub04/2"}>
                            <li className='sub-category'>윤리규정</li>
                        </Link>
                        <Link to={"introduce/sub04/3"}>
                            <li className='sub-category'>임상심리전문가 관련 규정</li>
                        </Link>
                        <Link to={"introduce/sub04/4"}>
                            <li className='sub-category'>인권 및 회원권익위원회 운영규정</li>
                        </Link>
                    </div>
                </ul>

                <ul>
                    <div>조직</div>
                    <div className='sub-category-box'>
                        <Link to={"introduce/sub05/1"}>
                            <li className='sub-category'>임원진</li>
                        </Link>
                        <Link to={"introduce/sub05/2"}>
                            <li className='sub-category'>감사</li>
                        </Link>
                        <Link to={"introduce/sub05/3"}>
                            <li className='sub-category'>TF/(임시)위원회</li>
                        </Link>
                        <Link to={"introduce/sub05/4"}>
                            <li className='sub-category'>대의원회</li>
                        </Link>
                        <Link to={"introduce/sub05/5"}>
                            <li className='sub-category'>협의회</li>
                        </Link>
                        <Link to={"introduce/sub05/6"}>
                            <li className='sub-category'>지회</li>
                        </Link>
                        <Link to={"introduce/sub05/7"}>
                            <li className='sub-category'>연구회</li>
                        </Link>
                    </div>
                </ul>

        </div>
    )
}
import './category.css';
import { Link } from 'react-router-dom';

export default function Category6() {
    return(
        <div className='category'>
                <hr></hr>
                <div className='title'>비회원선정</div>
                <hr></hr>

                <ul>
                    <Link to={"/nonmember/sub01/1"}>
                    <div className='subtitle'>비회원선정</div>
                    </Link>
                    <div className='sub-category-box'>
                        {/*<Link to={"/education/sub01/1"}>
                            <li className='sub-category'>우울증</li>
                        </Link>
                        */}
                    </div>
                </ul>

        </div>
    )
}
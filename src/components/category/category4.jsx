import './category.css';
import { Link } from 'react-router-dom';

export default function Category4() {
    return(
        <div className='category'>
                <hr></hr>   
                <div className='title'>이벤트</div>
                <hr></hr>

                <ul>
                    <Link to={"/education/sub01/1"}>
                    <div className='subtitle'>교육</div>
                    </Link>
                    <div className='sub-category-box'>
                        {/*<Link to={"/education/sub01/1"}>
                            <li className='sub-category'>우울증</li>
                        </Link>
                        */}
                    </div>
                </ul>

                <ul>
                    <Link to={"/education/sub04/1"}>
                    <div className='subtitle'>후원 및 기부</div>
                    </Link>
                </ul>

        </div>
    )
}
import './category.css';
import { Link } from 'react-router-dom';

export default function Category5() {
    return(
        <div className='category'>
                <div className='title'>협회지</div>

                <ul>
                    <Link to={"/journal/sub01/1"}>
                    <div>협회지</div>
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
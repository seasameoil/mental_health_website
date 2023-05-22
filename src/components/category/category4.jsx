import './category.css';
import { Link } from 'react-router-dom';

export default function Category4() {
    return(
        <div className='category'>
                <div className='title'>학술행사/교육</div>

                <ul>
                    <Link to={"/education/sub01/1"}>
                    <div>교육</div>
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
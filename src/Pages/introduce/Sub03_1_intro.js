import './Sub03_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';

export default function Sub03_1_intro() {
    return(
        <div className='sub03_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
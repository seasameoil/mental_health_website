import './Sub05_3_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';

export default function Sub05_3_intro() {
    return(
        <div className='sub05_3_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div style={{display: 'flex'}}>
                            <BrownBar />
                            <h3>TF/(임시)위원회</h3>
                        </div>
                        <table className='table_3_2'>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>이름</th>
                                    <th>소속</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>심리서비스법연구위원장</th>
                                    <th>홍길동</th>
                                    <th>한국대학교 한국학과</th>
                                </tr>
                                <tr>
                                    <th>심리서비스법연구위원장</th>
                                    <th>홍길동</th>
                                    <th>한국대학교 한국학과</th>
                                </tr>
                                <tr>
                                    <th>심리서비스법연구위원장</th>
                                    <th>홍길동</th>
                                    <th>한국대학교 한국학과</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}
import './Sub03_2_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';

export default function Sub03_2_intro() {
    return(
        <div className='sub03_2_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <table className='table_3_2'>
                            <thead>
                                <tr>
                                    <th>구분</th>
                                    <th>이름</th>
                                    <th>구분</th>
                                    <th>이름</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>제1대(1964-1965)</th>
                                    <th>홍길동</th>
                                    <th>제2대(1964-1965)</th>
                                    <th>홍길동</th>
                                </tr>
                                <tr>
                                    <th>제3대(1964-1965)</th>
                                    <th>홍길동</th>
                                    <th>제4대(1964-1965)</th>
                                    <th>홍길동</th>
                                </tr>
                                <tr>
                                    <th>제5대(1964-1965)</th>
                                    <th>홍길동</th>
                                    <th>제6대(1964-1965)</th>
                                    <th>홍길동</th>
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
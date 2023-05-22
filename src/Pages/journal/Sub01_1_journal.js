import './Sub01_1_journal.css'
import SubTop5 from '../../components/sub_top/sub_top5';
import Category5 from'../../components/category/category5';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub01_1_journal() {

    return(
        <div className='sub01_1_info'>
            <SubTop5 />
            <div style={{display: 'flex'}}>
                <Category5 />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>학회지 소개</h3>
                            </div>
                            <p>
                                본 학회는 한국연구재단 등재지인 'Korean Journal of Clinical Psychology' 을 연간 4회 발간하고 있습니다.
                            </p>

                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>학회지 구독 안내</h3>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}
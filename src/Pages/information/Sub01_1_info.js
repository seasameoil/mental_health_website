import './Sub01_1_info.css'
import SubTop3 from '../../components/sub_top/sub_top3';
import Category3 from'../../components/category/category3';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub01_1_info() {

    return(
        <div className='sub01_1_info'>
            <SubTop3 />
            <div style={{display: 'flex'}}>
                <Category3 />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0', backgroundColor: 'skyblue'}}>
                        <div>
                            <div style={{display: 'flex', backgroundColor: 'white'}}>
                                <BrownBar />
                                <h3>우울증과 임상심리전문가</h3>
                            </div>
                            
                            <p>
                                우울증은 많은 분들에게 익숙한 질환이지만, 정확히 우울증이 무엇인지 알고 있는 분은 드뭅니다. ‘우울증’은 단일한 진단을 일컫는 것은 아닙니다. 우울증은 기간과 심각도에 따라 종류가 다양하여 어떤 분들은 오랜 기간 심각한 우울 증상이 계속되기도 하고, 우울한 기간이 반복적으로 찾아오지만 스스로 ‘괜찮다’고 느끼는 때도 있어 혼란스러운 경우도 있습니다. 또 다른 경우에는 경미한 우울증이 오랜 기간 지속되기도 합니다.
                            </p>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}
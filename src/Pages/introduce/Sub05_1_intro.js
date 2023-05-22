import './Sub05_1_intro.css'
import SubTop from '../../components/sub_top/sub_top';
import Category from'../../components/category/category';
import BrownBar from '../../components/brown_bar/brown_bar';
import { useState } from 'react';

export default function Sub05_1_intro() {

    return(
        <div className='sub05_1_intro'>
            <SubTop />
            <div style={{display: 'flex'}}>
                <Category />
                <div style={{backgroundColor: 'pink', width: '100%', padding: '0 60px'}}>
                    <div style={{display: 'flex', padding: '50px 0 0 0', backgroundColor: 'skyblue'}}>
                        <div style={{display: 'flex'}}>
                            <BrownBar />
                            <h3>조직도</h3>
                        </div>
                    </div>

                    <div>
                        <img src="/img/organization_chart.jpg" style={{width: '100%'}}/>   
                    </div>

                </div>
            </div>
        </div>
    );
}
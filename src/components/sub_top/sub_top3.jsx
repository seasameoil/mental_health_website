import './sub_top.css';

export default function SubTop3() {
    return(
        <div className='sub_top'>
            <div className='top_img' style={{backgroundImage: 'url("../../img/3.jpeg")'}}>
                <div>
                    <div className='content' style={{fontWeight: 'bold'}}>ABOUT</div>
                    <div className='content' style={{fontSize: '3rem'}}>프로그램</div>
                </div>
            </div>
        </div>
    )
}
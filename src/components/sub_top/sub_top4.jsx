import './sub_top.css';

export default function SubTop4() {
    return(
        <div className='sub_top'>
            <div className='top_img' style={{backgroundImage: 'url("../../img/7.jpg")'}}>
                <div>
                    <div className='content' style={{fontWeight: 'bold'}}>ABOUT</div>
                    <div className='content' style={{fontSize: '3rem'}}>이벤트</div>
                </div>
            </div>
        </div>
    )
}
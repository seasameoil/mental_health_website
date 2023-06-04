import './sub_top.css';

export default function SubTop5() {
    return(
        <div className='sub_top'>
            <div className='top_img' style={{backgroundImage: 'url("../../img/11.jpeg")'}}>
                <div>
                    <div className='content' style={{fontWeight: 'bold'}}>ABOUT</div>
                    <div className='content' style={{fontSize: '3rem'}}>블로그</div>
                </div>
            </div>
        </div>
    )
}
import './sub_top.css';

export default function SubTop() {
    return(
        <div className='sub_top'>
            <div className='top_img' style={{backgroundImage: 'url("../../img/1.jpeg")'}}>
                <div>
                    <div className='content' style={{fontWeight: 'bold'}}>ABOUT</div>
                    <div className='content' style={{fontSize: '3rem'}}>협회소개</div>
                </div>
            </div>
        </div>
    )
}
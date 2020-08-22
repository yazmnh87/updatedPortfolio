import React,{useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import img1 from '../../../public/git_logo.png'
import ReactInterval from 'react-interval'


const Wrapper = styled.div`
margin: 0;
padding: 0;
height:100%;
max-height: 100%;
width: 100%;
overflow-x: hidden;
position: relative;
border:1px solid lime;
&:hover{
    .arrow{
        display: block;
    }
}
#slider{
    height:100%;
    /* border:1px solid blue; */
}

.slide-content{
/* height: 100%; */
width: 100%;
font-family: ${props=> props.theme.fonts.primary};
/* border:1px solid lime; */
overflow-x: hidden;
}
.slide{
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
/* .slide1{
    background-image: url(${img1});
    /* height: 100%; }*/  

.slide-content{
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center
}
.slide-content span{
    font-size: 5rem;
    color: white;
}
.arrow{
    display: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -30px;
    height: 0;
    width: 0;
    border-style: solid
}
#arrow-left{
    border-width: 20px 30px 20px 0;
    border-color: transparent black transparent transparent;
    left: 0;
    margin-left: 30px;
}
#arrow-right{
    border-width: 20px 0px 20px 30px;
    border-color: transparent transparent transparent black;
    right: 0;
    margin-right: 30px;
}
`


export const Carousel = (props) => {
    const [state, setState] = useState({
        currentSlide: 0
    })

    const [active, setActive] = useState(false)
    const [imgs, setImgs] = useState([])
    // const imgs = [img1]
    // const imgs = [...props.components]
//     const slide1 = useRef()
//     const slide2 = useRef()
//     const slide3 = useRef()
// const slides = [slide1, slide2, slide3]

// const reset = () => {
//     for(let i = 0; i < slides.length; i++){
//         if(slides[i] === slides[state.currentSlide]){
//             slides[i].current.style.display = 'block';
//         }else{
//         slides[i].current.style.display = 'none';
//         }
//     }
// }

const next = () => {
    console.log({imgs})
    if(imgs.indexOf(state.currentSlide) === imgs.length -1){
        setState({...state, currentSlide: 0})
    } else {
        setState({...state, currentSlide: state.currentSlide + 1})
    }
}

const prev = () => {
    console.log(state.currentSlide)
    if(state.currentSlide === 0){
        setState({...state, currentSlide: imgs.length -1})
    }else{
        setState({...state, currentSlide: state.currentSlide - 1})
    }
    
}
    useEffect(()=>{
        console.log(imgs.length)
        setImgs(props.components)
        // const changeSlide = setInterval(()=> next(), 3000)
        return () => {
            // clearInterval(changeSlide)
        }
    },[props.components])
    
    useEffect(()=>{
        console.log({imgs})
    },[imgs])


    useEffect(()=>{
        // reset()
        console.log(state.currentSlide)
    },[state.currentSlide])

    return (
        <>
        <script src="http://localhost:8097"></script>
        <Wrapper onMouseOut={() => setActive(true)} onMouseOver={() => setActive(false)}>
            {/* <ReactInterval {...{timeout: 5000, enabled: active}}
                callback={() => next()}
            /> */}
            <div onClick={()=> prev()} id="arrow-left" className="arrow"></div>
            <div id="slider">
                <div className="slide ">
                    <div 
                    // img={state.currentSlide} 
                    className="slide-content"
                    >
                        {imgs !== undefined && imgs.length !== 0 ? imgs[state.currentSlide] : null}
                    </div>
                </div>
                {/* <div ref={slide2} className="slide slide2">
                    <div className="slide-content">
                    </div>
                </div>
                <div ref={slide3} className="slide slide3">
                    <div className="slide-content">
                    </div>
                </div> */}
            </div>
            <div onClick={()=> next()} id="arrow-right" className="arrow"></div>
        </Wrapper>
        </>
    )
}


/* .slide2{
    background-image: url(${img4});
}
.slide3{
    background-image: url(${img5});
} */
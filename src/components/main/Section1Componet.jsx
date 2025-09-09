'use client';
import useCustomHook from '@/custom/useCustomHook';
import { useState, useEffect, useRef } from 'react';

export default function Section1Componet() {
    
    const {onClickLink} = useCustomHook();
        // 4. 선택자
    const slideWrap = useRef();
    const [state, setState] = useState({
        슬라이드: [],
        바로가기: []
    });

    useEffect(()=>{
        fetch(`/data/section1.json`, {method: 'GET'}) 
        .then((res)=>res.json())
        .then((data)=>{
            setState({
                슬라이드: data.메인슬라이드,
                바로가기: data.바로가기
            })
        })  // 결과 가져오기 상태변수에 저장한기
        .catch((err)=>{
            console.log('fetch 오류!')
        }); // 오류발생시
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // 1. 상태변수
    const [cnt, setCnt] = useState(0);
    
    // 2. 타이머
    useEffect(()=>{
        const id = setInterval(()=>{
            setCnt(cnt=>cnt+1);
        }, 3000);
        return ()=> clearInterval(id); // 중요 아래로 위치 내려야 함 타이머 밖으로
    }, [])

    // 3. cnt 변화 감지
    useEffect(()=>{
       if (!slideWrap.current) return; // ✅ null 체크 추가

        if(cnt>3){
            slideWrap.current.style.transition = `none`;
            slideWrap.current.style.left = `${-100*0}%`;
            setTimeout(()=>{
                setCnt(1);
            },100);
        }
        else {
            slideWrap.current.style.transition = `left 0.6s`;
            slideWrap.current.style.left = `${-100*cnt}%`;
        }
    
    }, [cnt]);

    return (
        <section id="section1">
            <div className="slide-container">
                <div className="slide-view">
                    <ul className="slide-wrap" ref={slideWrap}>
                    {
                        state.슬라이드.map.length > 0 &&
                        state.슬라이드.map((item)=> 
                            <li key={item.코드번호} data-key={item.코드번호}  className={`slide ${item.클래스} last`}>
                                <a href="!#" onClick={(e)=>onClickLink(e)} title={item.코멘트}>
                                    <img src={`/images/${item.이미지}`} alt={item.코멘트}/>
                                    <h2>{item.코멘트}</h2>
                                </a>
                            </li>
                        )
                    }

                    </ul>
                </div>
            </div>
            <div className="link">
                <ul>
                {
                    state.바로가기.map((item)=> {
                        if(item.타이틀!==''){
                            return(
                                <li key={item.코드번호}  data-key={item.코드번호}>
                                    <a href="!#" title={item.타이틀}>
                                        <img src={`/images/${item.이미지}`} alt={item.타이틀} />
                                    </a>
                                </li>
                            )
                        }
                        else {
                            return (
                                <li key={item.코드번호} data-key={item.코드번호}>
                                    <i></i>
                                </li>
                            )
                        }
                    })                   
                }
                </ul>
            </div>
        </section>
    );
}
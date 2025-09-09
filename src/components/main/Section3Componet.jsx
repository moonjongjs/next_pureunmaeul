'use client';
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setModalAction, setModalContentsAction } from '@/app/store/modal';
import Link from 'next/link';

export default function Section3Componet() {

    const dispatch = useDispatch();
    const [notice, setNotice] = useState(false);  // 상태관리 훅(Hook)
    const [state, setState] = useState({
        공지사항: [],
        갤러리: []
    });

    useEffect(()=>{
        axios({
            url:`/data/section3.json`,
            method: 'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                공지사항: res.data.공지사항,
                갤러리: res.data.갤러리
            })
        })
        .catch((err)=>{
            console.log( err );
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 공지사항 상태변수에 가져오면
    useEffect(()=>{
        if (state.공지사항.length === 0) return;
                 
        const obj = {
        "글제목": state.공지사항[0].글제목,
        "글내용": state.공지사항[0].공지글,
        "날짜": state.공지사항[0].날짜
        }
        dispatch(setModalContentsAction(obj))    
           
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[state.공지사항]); // 의존성 배열




    // 공지사항 목록 클릭 이벤트
    // 모달창 열기
    const onClickOpenModal=(e, data)=>{
        e.preventDefault();
        const obj = {
            "글제목": data.글제목,
            "글내용":  data.공지글,
            "날짜":  data.날짜,
        }
        dispatch(setModalContentsAction(obj));
        dispatch(setModalAction(true))
    }

    // 공지사항 갤러리 버튼 클릭 이벤트 => 토글 이벤트 구현
    const onClickNotice=(e)=>{
        e.preventDefault();
        setNotice(!notice);
    }
   
    return (
        <section id="section3">
            <div className="container">
                <button 
                    className={`notice-btn${notice?' on':''}`}
                    onClick={onClickNotice}
                >공지사항</button>
                <button 
                    className={`gallery-btn${notice?' on':''}`}
                    onClick={onClickNotice}
                >갤러리</button>
                 <div className={`notice-box${notice?' on':''}`}>
                    <ul>
                    {
                        state.공지사항.map((item)=>
                             <li key={item.코드번호} data-key={item.코드번호}>
                                <a href="#" 
                                    onClick={(e)=>onClickOpenModal(e, item)} 
                                    className="open-btn"
                                >
                                    {item.공지글}
                                </a>
                                <span>
                                    {item.날짜}
                                </span>
                            </li>
                        )
                    }
                    </ul>
                </div>
                
                <div className={`gallery-box${notice?' on':''}`}>
                    <ul>
                    {
                       state.갤러리.map((item)=>
                            <li key={item.코드번호} data-key={item.코드번호}>
                                <Link href="#" title={item.코멘트}>
                                    <img src={`/images/${item.이미지}`} alt={item.코멘트}/>
                                </Link>
                            </li>
                        )                       
                    }
                    </ul>
                </div>
            
            </div>
        </section>
    );
}
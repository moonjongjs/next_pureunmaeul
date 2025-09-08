'use client';
import { setModalAction } from '@/app/store/modal';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalComponent() {

    const modal = useSelector((state)=>state.modal);
    const dispatch = useDispatch();

    const onClickCloseModal=(e)=>{
        e.preventDefault();
        dispatch(setModalAction(false));
    }

    return (
        <div className={`layer-popup${modal.isOpen?' on':''}`}>
            <div className="container">
                <div className="title">
                    <h2>{modal.글제목}</h2>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            {modal.글내용}
                        </li>
                    </ul>
                </div>
                <div className="button-box">
                    <button 
                        className="close-btn"
                        onClick={onClickCloseModal}
                    >닫기</button>
                </div>
            </div>
        </div>
    );
}
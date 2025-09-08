import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name:'modal',
    initialState: {
        "글제목": '',
        "글내용": '',
        "날짜": '',
        isOpen: false
    },
    reducers: {
        // 액션메서드 => 섹션3 데이터 전송
        setModalContentsAction(state, action){
            state.글제목 = action.payload.글제목;
            state.글내용 = action.payload.글내용;
            state.날짜 = action.payload.날짜;
        },
        // 모달 창 => 열기 / 닫기
        setModalAction(state, action){
            state.isOpen = action.payload
        }
    }
});

export default modal.reducer;
export const {setModalContentsAction, setModalAction} = modal.actions;
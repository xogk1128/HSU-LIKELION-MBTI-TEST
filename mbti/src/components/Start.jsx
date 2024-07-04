import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../image/mbti-logo.jpeg";

function Start() {
    const navigate = useNavigate();

    return (
        <div className="content" id="start">
            <p>간단 단순한 MBTI 테스트</p>
            <img src={bannerImage} alt="짱구단체" className="img1" />
            <p id="maker">제작자: 김태하</p>
            {/* <p id="require">
                ※단순히 재미로 제작한 것이며, 오수나 훈이가 나와도 화내지
                말아주세요!
            </p> */}
            <button
                className="btn btn-success"
                onClick={() => navigate("/question")}
            >
                테스트 시작!!
            </button>
        </div>
    );
}

export default Start;

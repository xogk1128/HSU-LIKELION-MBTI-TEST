import React from "react";

import qs1 from "../image/qs1.jpeg";
import qs2 from "../image/qs2.png";
import qs3 from "../image/qs3.jpeg";
import qs4 from "../image/qs4.jpeg";
import qs5 from "../image/qs5.png";
import qs6 from "../image/qs6.png";
import qs7 from "../image/qs7.jpeg";
import qs8 from "../image/qs8.jpeg";
import qs9 from "../image/qs9.png";
import qs10 from "../image/qs10.png";
import qs11 from "../image/qs11.png";
import qs12 from "../image/qs12.jpg";
import "../App.css";
import { useNavigate } from "react-router-dom";

const questions = {
    1: {
        title: "친구랑 놀고 집에 갈 때 나는?",
        image: qs1,
        type: "EI",
        A: "아 잘놀았다! 완전 충전됐다!!",
        B: "아 잘 놀았다! 이제 집가서 쉬면서 충전해야지..",
    },
    2: {
        title: "친구를 생일파티에 초대하려고 한다. 나는?",
        image: qs2,
        type: "EI",
        A: "어느정도 친한 친구도 초대한다.",
        B: "찐친 몇명만 초대한다.",
    },
    3: {
        title: "사과를 보면 떠오르는 생각은? 또는 사과 하면 떠오르는 것은?",
        image: qs3,
        type: "SN",
        A: "빨갛다, 맛있다, 사각사각, 새콤달콤, 둥글다.",
        B: "백설공주, 비타민C, 뉴턴, 스티브잡스, 아이폰",
    },
    4: {
        title: "비행기를 탔는데 갑자기 흔들린다면 드는 생각은?",
        image: qs4,
        type: "SN",
        A: "어라 비행기 흔들리네 멀미나겠다..",
        B: "낙하산 타고 비행기 탈출하는 모습까지 그리기 시작. 비행기 부품이 망가지고 있는 영화 장면 오버랩 됨.",
    },
    5: {
        title: "친구가 여자/남자친구와 헤어졌다고 한다. 이때 나의 반응은?",
        image: qs5,
        type: "TF",
        A: "사람은 사람으로 잊는거래 힘내",
        B: "괜찮아?? 많이 힘들겠다.. 내가 전화할게!!",
    },
    6: {
        title: "친구가 택배를 뜯다가 칼에 손이 베였다고 한다. 이때 나의 반응은?",
        image: qs6,
        type: "TF",
        A: "얼마나 다쳤는데?",
        B: "괜찮아?? 많아 아팠겠다... 병원은 가봤어?",
    },
    7: {
        title: "여행 가기 전 나는?",
        image: qs7,
        type: "PJ",
        A: "굳이 하루전에...? 당일날 챙기면 충분하다!",
        B: "며칠 전에 미리 챙겨 준비해둔다!",
    },
    8: {
        title: "과제를 해야한다.. 나는?",
        image: qs8,
        type: "PJ",
        A: "오늘 제출일이니까 슬슬 해볼까?",
        B: "다른 과제도 있으니까 미리 해야겠다!!",
    },
    9: {
        title: "친구랑 놀던 도중 친구의 친구도 같이 놀아도 되냐고 질문한다. 나는?",
        image: qs9,
        type: "EI",
        A: "너무 좋지! 오늘부터 너도 내 친구다.",
        B: "아 그래..? (제발 제발 안돼)",
    },
    10: {
        title: "아무 생각도 하지말라고 했을 때 나는?",
        image: qs10,
        type: "SN",
        A: "진짜 아무 생각도 안함.",
        B: "온갖 생각들 때문에 아무 생각도 안할 수 없음.",
    },
    11: {
        title: "친구가 갑자기 힘들어보인다고 키프티콘을 준다. 이때 나의 반응은?",
        image: qs11,
        type: "TF",
        A: "고마워 잘 먹을게! (내가 힘들어 보였나?)",
        B: "헐 감동이야.. ㅠㅠ 잘 먹을게!!! (진짜 감동)",
    },
    12: {
        title: "갑자기 친구에게 연락이 와 나오라고 한다. 나는?",
        image: qs12,
        type: "PJ",
        A: "(나가는 중이라 답장 안함)",
        B: "아 갑자기는 안되고 다음에 보자 ㅠㅠㅜ",
    },
};

const Question = ({ num, setNum, updateScore }) => {
    const navigate = useNavigate();

    const handleAnswer = (type, value) => {
        updateScore(type, value);
        if (num < 12) {
            setNum(num + 1);
        } else {
            navigate("/result");
        }
    };

    const currentQuestion = questions[num];
    return (
        <div className="content" id="question">
            <p id="pgrNum">{num}/12</p>
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                    style={{ width: `calc(100/12*${num}%)` }}
                ></div>
            </div>
            <p id="title">{currentQuestion.title}</p>
            <div className="question-image-container">
                {currentQuestion.image && (
                    <img
                        src={currentQuestion.image}
                        className="question-image"
                    ></img>
                )}
            </div>
            <button
                className="btn btn-success"
                onClick={() => handleAnswer(currentQuestion.type, 1)}
            >
                {currentQuestion.A}
            </button>
            <button
                className="btn btn-success mt-3"
                onClick={() => handleAnswer(currentQuestion.type, 0)}
            >
                {currentQuestion.B}
            </button>
        </div>
    );
};

export default Question;

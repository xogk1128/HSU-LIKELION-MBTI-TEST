import React from "react";
import isfjImg from "../image/isfj.png";
import isfpImg from "../image/isfp.png";
import istjImg from "../image/istj.png";
import istpImg from "../image/istp.png";
import infjImg from "../image/infj.png";
import infpImg from "../image/infp.png";
import intjImg from "../image/intj.png";
import intpImg from "../image/intp.png";
import esfjImg from "../image/esfj.png";
import esfpImg from "../image/esfp.png";
import estjImg from "../image/estj.png";
import estpImg from "../image/estp.png";
import enfjImg from "../image/enfj.png";
import enfpImg from "../image/enfp.png";
import entjImg from "../image/entj.png";
import entpImg from "../image/entp.png";
import { useNavigate } from "react-router-dom";

const results = {
    ISFJ: {
        mbti: "ISFJ",
        explain:
            "따뜻하고 친근한 성격이며, 책임감이 있고 인내력이 강해요! 그룹에서 리더보다는 서포터의 역할을 선호하며, 소외되는 팀원이 있으면 잘 이끌어서 도움을 줘요. 남의 부탁을 잘 거절 못하고 잘 들어주는 편이에요.",
        img: isfjImg,
    },
    ISFP: {
        mbti: "ISFP",
        explain:
            "사람을 만나는 건 좋지만 싫기도하고 그러다가도 만나면 잘 노는 타입이에요! 다른 사람의 부탁을 잘 거절하지 못하고 양보를 잘하며, 타인에게 민폐 끼치는 걸 싫어하는 성격이에요. 발등에 불 떨어질 때까지 일을 미루기도 해요.",
        img: isfpImg,
    },
    ISTJ: {
        mbti: "ISTJ",
        explain:
            "신중하고 조용한 편이며 집중력이 강하고 매사에 철저한 성격이에요! 책임감이 강하고 성취해야 한다고 생각하는 일에는 꾸준하게 추진해 나가는 유형이며, 타인에게 속마음을 잘 드러내지 않는 편이에요.",
        img: istjImg,
    },
    ISTP: {
        mbti: "ISTP",
        explain:
            "타인을 잘 도우며 다른 사람들과 경험을 공유하는 것을 좋아하는 성격이에요! 직접 손으로 만지고 눈으로 보면서 세상을 탐색하는 것을 좋아하며 무언가를 만드는 데 타고난 재능을 가졌어요.",
        img: istpImg,
    },
    INFJ: {
        mbti: "INFJ",
        explain:
            "인내심이 많고 통찰력과 직관력이 뛰어나며 화합을 추구하는 성격이에요! 친해지고 나면 첫인상과 다른 경우가 있으며, 몽환적이고 신비로운 것을 좋아해요. 분쟁이나 다툼을 싫어하는 편이에요.",
        img: infjImg,
    },
    INFP: {
        mbti: "INFP",
        explain:
            "사람 만나는걸 좋아하면서도 싫어하는, 집 들어가면 연락 두절되는 조용한 관종이에요! 어디로 튈지 모르는 탱탱볼 같은 매력이 있어요. 인간 관계에선 눈치가 빨라 섬세한 부분까지 잘 캐치하는 성격이에요.",
        img: infpImg,
    },
    INTJ: {
        mbti: "INTJ",
        explain:
            "본인이 수립한 목표를 향해 끊임없이 노력하고, 세상의 많은 것들에 지적 호기심을 갖는 성격이에요! 리더로서 자신의 행동이나 결과에 철저하게 책임지는 책임감을 가지고 있어요. 쉽고 간단한 일에도 항상 최선을 다하는 성격이에요.",
        img: intjImg,
    },
    INTP: {
        mbti: "INTP",
        explain:
            "분석적이고 논리적이며 객관적인 비평을 잘 하는 성격이에요! 이해가 빠르고 직관력, 통찰력이 있으며 때로는 조용하고 과묵하기도 해요. 자기가 원하는 것이 아니면 별로 관심을 갖지는 않아요.",
        img: intpImg,
    },
    ESFJ: {
        mbti: "ESFJ",
        explain:
            "눈치가 빠르고 분위기를 잘 맞춰주는 성격이에요! 맡은 일을 정확한 시간에 맞추어 끝내는 것을 중요시하고, 주변 사람들이 무엇이 필요한지 쉽게 찾아 도움을 줘요. 조화를 추구하기 때문에 갈등은 싫어해요.",
        img: esfjImg,
    },
    ESFP: {
        mbti: "ESFP",
        explain:
            "어디에서나 분위기 메이커를 담당하며 사교적이고 활동적인 성격이에요! 어떤 상황에서든 잘 적응하는 편이며, 주변 사람들에게 관심이 많고 그들의 일에 진정으로 공감해주는 성격이에요.",
        img: esfpImg,
    },
    ESTJ: {
        mbti: "ESTJ",
        explain:
            "강한 의지력과 끈기를 지닌 성격이에요! 모든 일에 책임감을 가지고 있으며 목표한 바를 이루기 위해 노력해요. 매 일에 도전적이고 호기심을 가지고 있어요. 외로움을 잘 타지 않는 성격이에요.",
        img: estjImg,
    },
    ESTP: {
        mbti: "ESTP",
        explain:
            "항상 모든 일에 자신감이 넘치는 성격이에요! 모임에 가면 분위기 메이커 역할을 하며 스릴을 즐기는 성격이에요! 오늘의 일은 내일로 미루는 것을 좋아하며 오늘만 산다라는 생각으로 살아가기도 해요.",
        img: estpImg,
    },
    ENFJ: {
        mbti: "ENFJ",
        explain:
            "사람을 좋아하며 항상 타인에게 잘 맞춰주는 성격이에요! 소소한 거에도 배려심이 많으며 진실성을 중요시하고, 매사에 책임감이 강한 타입이에요. 따라서 많은 사람들에게 신뢰를 받는 성격이에요.",
        img: enfjImg,
    },
    ENFP: {
        mbti: "ENFP",
        explain:
            "긍정적이고 낙천적인 성격을 가지고 있어요! 공감능력이 좋아서 친구들의 고민 상담을 잘 해줘요! 즉흥적인 행동을 좋아하는 편이며 지루하고 재미없는 일상에 질려하는 편이에요.",
        img: enfpImg,
    },
    ENTJ: {
        mbti: "ENTJ",
        explain:
            "미래를 향한 뚜렷한 목표를 가지고 빈틈없이 행동으로 옮기는 성격이에요! 집에 있으면 무기력해져서 무엇이라도 해야 하는 편이며 친구들이 고민 상담하면 해결책을 찾아주는 걸 좋아해요.",
        img: entjImg,
    },
    ENTP: {
        mbti: "ENTP",
        explain:
            "사교적인 성격에 타인의 생각을 읽고 이해하는 능력이 뛰어난 타입이에요! 새로운 아이디어나 창의적인 발상을 잘 하며, 두뇌회전이 빠르고 이해심이 뛰어나요. 지속적으로 새로운 것들에 도전하는 것을 좋아해요.",
        img: entpImg,
    },
};

const Result = ({ score, resetState }) => {
    const navigate = useNavigate();

    const getResult = () => {
        let result = "";
        result += score.EI < 2 ? "I" : "E";
        result += score.SN < 2 ? "N" : "S";
        result += score.TF < 2 ? "F" : "T";
        result += score.PJ < 2 ? "J" : "P";

        return results[result];
    };

    const result = getResult();

    const handleRestart = () => {
        resetState();
        navigate("/question");
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("링크가 복사되었습니다.");
        });
    };
    return (
        <div className="content" id="result">
            <img id="img" className="rouded-circle" src={result.img}></img>
            <p id="qu">나의 MBTI는?</p>
            <p id="mbti">{result.mbti}</p>
            <p id="explain" className="card card-body border-success">
                {result.explain}
            </p>
            <div className="result-btn">
                <button className="btn btn-success" onClick={handleRestart}>
                    다시하기
                </button>
                <button
                    className="btn btn-success mt-4"
                    onClick={handleCopyLink}
                >
                    링크복사
                </button>
            </div>
        </div>
    );
};

export default Result;

const config = {
    profile: {
        githubAccountId: "aerain",
        profileImg: "https://avatars3.githubusercontent.com/u/11453924?s=460&v=4",
        email: "j40f893@gmail.com",
        phone: "+82) 10-2309-3537"
    },
    skills: [
        "JAVA", 
        "Spring Framework", 
        "Android",
        "HTML5/CSS3/JavaScript(ES6+)", 
        "React.js", 
        "React-Native", 
        "Git", 
        "Node.js"
    ],
    careers: [
        {
            name: "Jeju National Univ. System Software Lab",
            duration: "2017.05 ~",
            description: "시스템 소프트웨어 연구실에 학생연구원으로 있습니다. 산학협력사업에 관련한 일들을 진행하고 있습니다. 현재는 반려견, 소 목장등 동물들과 관련한 연구를 진행중입니다."
        },
        {
            name: "Kakao Assistant (제주스마트팀 FE) ",
            duration: "2019.07 ~",
            description: "카카오 제주스마트 팀에서 제주위드카카오 프론트엔드 개발 어시스턴트로 근무 중입니다. 사이트의 OpenGraph 관련 메타태그 처리를 담당했습니다."
        }
    ],
    presentations: [
        {
            name: "제주도 데이터 사이언스 캐글 밋업",
            duration: "2019.01 ~ 2019.03",
            description: "캐글 플랫폼을 활용한 데이터 사이언스와 자기가 분석하고 싶은 데이터를 분석하고, 이를 데이터 사이언스에 관심있는 도민들에게 발표하는 자리를 가졌습니다.",
            contribution: "League Of Legends API를 사용하여 특정 사용자의 데이터를 크롤링하고, Pandas, Matplotlib 를 사용해 분석하였습니다.",
            skills: ["Node.js", "Python", "Pandas", "Sklearn", "Matplotlib"],
            etc: ["https://docs.google.com/presentation/d/16K9oEVgYCa2dv3vnP1ioWNT2TESMNXjcg8ZqrrF1al8/edit?usp=sharing"],
        }
    ],
    projects: [
        {
            name: "제대로 가자",
            duration: "2017.09 ~ 2018.11",
            description: `기존에 서비스 되던 제주대 꿀팁 앱의 개발자 선배님이 졸업하셔서 이에 ui 개편과 유지보수를 직접 하기 위해 개발하였습니다. 제주대 내 학생 식당, 기숙사식당 주간 메뉴, 도서 좌석 등, 제주대학교 학생들이 알아두면 좋은 꿀팁들을 모았습니다. 
            
            Play Store에 현재 업로드중이며, App Store 게시는 학생이 부담하기엔 높은 가격이어서 잠시 보류중입니다.`,
            contribution: "PM을 맡아 UX/UI 개발, 제주대 사이트 크롤링 등 전반적인 핵심 코어를 개발하였습니다",
            skills: ["React-Native", "ES6+", "Android", "iOS"],
            etc: [
                "https://play.google.com/store/apps/details?id=com.jedaeroreactnative",
                "https://github.com/aerain/jedaeroReactNative"
            ],
        }, 
        {
            name: "제주대학교 컴퓨터공학전공 코드 페스티벌",
            duration: "2018.10.27 ~ 2018.11.26",
            description: `컴퓨터공학전공 학생들을 대상으로 한 알고리즘 웹 플랫폼입니다. 
            사용자는 부여받은 아이디와 비밀번호를 입력하여 로그인하면, 학년별로 배정받은 알고리즘 문제를 풀 수 있습니다.
            알고리즘 문제를 풀고나서 제출하면, 코드의 내용은 전부 파일시스템에 저장되고, 정답을 맞출경우에는 DB에 반영되어 자신이 맞춘 문제 수를 확인할 수 있습니다.`,
            contribution: "PM을 맡아 UX/UI 전반과 언어별 컴파일 로직등의 코어 개발을 맡았습니다.",
            skills: ["SpringBoot", "Thymeleaf", "HTML5/CSS3/JavaScript(ES6+)", "AJAX"],
            etc: ["https://github.com/JNU-CE-Code-Festival/Server"],
        }, 
        {
            name: "알바톡 - 알바준비생을 위한 정보 관리 지원 앱.",
            duration: "2019.01 ~ 2019.02",
            description: `데스크탑에서 알바천국, 알바몬 홈페이지를 파싱하여 카톡으로 알바 내용을 빠르게 공유해 줄 수 있는 크롬 확장 앱입니다. 
            알바천국, 알바몬 홈페이지가 아닐경우에는 별도의 메신저가 필요없이 내게 쓰기로 메모를 보낼 수 있습니다. 또한 알바 급여 정보를 계산할 수 있게 지원해 주는 기능도 제공합니다.`,
            contribution: "React와 SPA에 대한 개발 전반을 담당하였습니다.",
            skills: ["React.js", "SPA", "Chrome Extension"],
            etc: [
                "https://albatalk.github.io",
                "https://chrome.google.com/webstore/detail/%EC%95%8C%EB%B0%94%ED%86%A1/mfbbbkcmgjogfeoapgheljkhobflkmde",
                "https://github.com/hebal400/hebal400.github.io",
                "https://github.com/hebal400/lookingforalba"
            ],
        }, 
        {
            name: "무형 물품 판매를 위한 Ticket Solution",
            duration: "2017.05 ~ 2018.08",
            description: `행사 티켓 등의 무형 물품 판매를 위한 통합 플랫폼입니다. 
            중소벤처기업부 주관 국책사업의 산학협력으로 서울의 한 기업과 협업하여 개발하였습니다. 
            
            일반 구매자를 위한 플랫폼이 아니라, GMarket, 11st, TicketMonster, Coupang 등의 다양한 오픈마켓에서 티켓을 판매하는 판매자들을 위한 무형 상품을 통합 관리 서비스입니다. 또한 특정 장소에서 바코드 스캐너등의 기기를 사용할 수 없을 때 핸드폰으로 발권된 쿠폰의 사용 처리를 간편하게 작업할 수 있습니다.`,
            contribution: "모바일 Front-End의 전반적인 개발을 맡았으며 AWS SDK 를 사용하여 앱과 연동할 수 있게 개발하였습니다.",
            skills: ["React-Native", "JavaScript(ES6+)", "Cognito", "DynamoDB"],
            etc: ["https://play.google.com/store/apps/details?id=com.jedaeroreactnative"],
        },
        {
            name: "BLE Beacon을 활용한 반려견 위치 추적 시스템",
            duration: "2017.08~ 2018.08",
            description: `집 안에 세 개의 BLE 비콘을 부착하면, 비콘에서 송출하는 RSSI 신호와 TxPower를 분석하여 세 비콘과 반려견과의 각 거리를 구합니다. 구해낸 세 거리를 통하여 삼변 측량을 통해 좌표를 계산하고 이를 서버에 POST하면, 서버에서 이를 받아 반려견의 현재 위치를 그려주는 시스템입니다.`,
            contribution: "RSSI 신호 안정화를 위한 소프트웨어 필터링을 맡았고, 테스트를 위한 안드로이드 앱을 개발하였습니다.",
            skills: ["JAVA", "Android", "Android BLE", "Kalman-Filter", "Moving-Average", "iBeacon GATT specification"],
            etc: ["https://play.google.com/store/apps/details?id=com.jedaeroreactnative"],
        }
    ]
}

export default config;
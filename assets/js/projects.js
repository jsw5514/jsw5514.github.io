const page = document.querySelector('.projects-page');
const projectGrid = document.querySelector('#projectGrid');
const tabs = document.querySelectorAll('.tab-btn');
const closeBtn = document.querySelector('.detail-close');
const foldBtn = document.querySelector('#detailFoldButton');

const detailName = document.querySelector('#detailName');
const detailMeta = document.querySelector('#detailMeta');
const detailPurpose = document.querySelector('#detailPurpose');
const detailRoles = document.querySelector('#detailRoles');
const detailTrouble = document.querySelector('#detailTrouble');
const detailStacks = document.querySelector('#detailStacks');
const detailIcon = document.querySelector('#detailIcon');
const detailGithubLink = document.querySelector('#detailGithubLink');

const icons = {
    pet: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <circle cx="6.75" cy="8.25" r="1.9"/>
        <circle cx="10.25" cy="5.75" r="1.9"/>
        <circle cx="13.75" cy="5.75" r="1.9"/>
        <circle cx="17.25" cy="8.25" r="1.9"/>
        <path d="M12 10.75c-3.3 0-6 2.46-6 5.28 0 1.81 1.39 3.22 3.14 3.22 1.09 0 1.84-.38 2.38-.66.47-.24.78-.39 1.22-.39.44 0 .75.15 1.22.39.54.28 1.29.66 2.38.66 1.75 0 3.14-1.41 3.14-3.22 0-2.82-2.7-5.28-6-5.28Z"/>
    </svg>
    `,
    news: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v14.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25ZM7.5 6.5h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5Zm0 4h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5Zm0 4h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5Z"/>
    </svg>
    `,
    people: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M12 12.2c1.77 0 3.2-1.43 3.2-3.2S13.77 5.8 12 5.8 8.8 7.23 8.8 9s1.43 3.2 3.2 3.2Zm-5.4-.8c1.38 0 2.5-1.12 2.5-2.5S7.98 6.4 6.6 6.4 4.1 7.52 4.1 8.9s1.12 2.5 2.5 2.5Zm10.8 0c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5ZM12 13.8c-2.9 0-5.6 1.45-5.6 3.45 0 .53.43.95.95.95h9.3c.52 0 .95-.42.95-.95 0-2-2.7-3.45-5.6-3.45Zm-5.4-.8c-2.2 0-4.1 1.1-4.1 2.7 0 .44.36.8.8.8h2.16c.12-1.02.73-1.93 1.68-2.6-.18-.54-.75-.9-1.54-.9Zm10.8 0c-.79 0-1.36.36-1.54.9.95.67 1.56 1.58 1.68 2.6h2.16c.44 0 .8-.36.8-.8 0-1.6-1.9-2.7-4.1-2.7Z"/>
    </svg>
    `,
    capsule: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M8.45 4.95a4.25 4.25 0 0 1 6.01 0l4.59 4.59a4.25 4.25 0 1 1-6.01 6.01l-4.59-4.59a4.25 4.25 0 0 1 0-6.01Zm1.06 1.06a2.75 2.75 0 0 0 0 3.89l1.02 1.02 3.89-3.89-1.02-1.02a2.75 2.75 0 0 0-3.89 0Zm5.97 8.84a2.75 2.75 0 0 0 2.51-.74 2.75 2.75 0 0 0 0-3.89l-2.51-2.51-3.89 3.89 2.51 2.51a2.73 2.73 0 0 0 1.38.74ZM5.75 7.5a.75.75 0 0 1 .75.75v7a1.5 1.5 0 0 0 1.5 1.5h4.25a.75.75 0 0 1 0 1.5H8a3 3 0 0 1-3-3v-7a.75.75 0 0 1 .75-.75Z"/>
    </svg>
    `,
    gallery: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M6 3.75A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6Zm0 1.5h12c.41 0 .75.34.75.75v8.38l-2.84-2.84a1.75 1.75 0 0 0-2.47 0l-1.59 1.59-2.34-2.34a1.75 1.75 0 0 0-2.47 0l-2.79 2.79V6c0-.41.34-.75.75-.75Zm-.75 10.5 3.35-3.35a.25.25 0 0 1 .35 0l2.87 2.87a.75.75 0 0 0 1.06 0l2.12-2.12a.25.25 0 0 1 .35 0l3.4 3.4V18c0 .41-.34.75-.75.75H6a.75.75 0 0 1-.75-.75v-2.25ZM15.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z"/>
    </svg>
    `,
    game: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M7.25 8.5A5.25 5.25 0 0 0 2 13.75c0 1.2.35 2.38 1 3.38l.88 1.36a2.75 2.75 0 0 0 4.37.39l1.15-1.28c.34-.38.83-.6 1.34-.6h2.52c.51 0 1 .22 1.34.6l1.15 1.28a2.75 2.75 0 0 0 4.37-.39l.88-1.36c.65-1 1-2.18 1-3.38A5.25 5.25 0 0 0 16.75 8.5h-9.5Zm0 1.5h9.5a3.75 3.75 0 0 1 3.75 3.75c0 .9-.26 1.78-.75 2.54l-.88 1.36a1.25 1.25 0 0 1-1.99.18l-1.15-1.28A3.3 3.3 0 0 0 13.26 15.5h-2.52c-.94 0-1.84.4-2.47 1.1l-1.15 1.28a1.25 1.25 0 0 1-1.99-.18l-.88-1.36a4.68 4.68 0 0 1-.75-2.54A3.75 3.75 0 0 1 7.25 10Zm.25 1.5a.75.75 0 0 0-.75.75v.75H6a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75H9a.75.75 0 0 0 0-1.5h-.75v-.75a.75.75 0 0 0-.75-.75Zm9 1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm1.75-1.75a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
    </svg>
    `,
    truck: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M5.5 5.25A2.25 2.25 0 0 0 3.25 7.5v7.25A2.25 2.25 0 0 0 5.5 17h.44a2.75 2.75 0 0 0 5.12 0h3.88a2.75 2.75 0 0 0 5.12 0h.19a1.5 1.5 0 0 0 1.5-1.5V11.9a2.75 2.75 0 0 0-.57-1.68l-1.93-2.5a2.25 2.25 0 0 0-1.78-.87H15.75V7.5a2.25 2.25 0 0 0-2.25-2.25h-8ZM15.75 8.35h1.72c.23 0 .45.1.6.28L20 11.13c.16.2.25.5.25.77v1.1h-4.5v-4.65ZM4.75 7.5c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v6.75H4.75V7.5ZM8.5 16.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm9 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
    </svg>
    `
};

const projects = [
    {
        id: 'Boxmon',
        name: 'Boxmon',
        categories: ['풀스택', '앱', '백엔드'],
        period: '2026.02 ~ 2026.03',
        duration: '38일',
        badge: '웹 + 크로스플랫폼 앱',
        subtitle: '화주와 차주를 연결하는 화물 운송 플랫폼',
        summary: '화주가 화물을 등록하면 차주가 실시간으로 조회·수락하고, 운송 상태 관리, 위치 추적, 결제·정산, 관리자 승인을 제공하는 화물 운송 매칭 플랫폼입니다. Spring Boot 백엔드, Flutter 사용자 앱, React 관리자 웹으로 구성했습니다.',
        highlights: [
            'JWT 기반 인증과 역할별 권한 제어로 화주·차주·관리자 API 접근 분리',
            'Naver Maps 및 공간 데이터 처리를 활용한 운송 위치 추적 기능 구현',
            'Toss Payments 연동을 통한 결제 프로세스와 관리자 수수료 관리 기능 구현',
            'React 관리자 웹에서 기사 승인, 문의·분쟁 처리, 통계 대시보드 기능 제공'
        ],
        stacks: [
            'Java', 'Spring Boot', 'JWT', 'MySQL', 'React', 'Flutter', 'Naver Maps', 'Toss Payments', 'Firebase', 'NCP', 'AWS'
        ],
        githubUrl: 'https://github.com/Tjoeun-Final-Proj',
        icon: 'truck',
        detail: {
            meta: '2026.02 ~ 2026.03 · 팀 프로젝트 · 물류 플랫폼 + 풀스택',
            purpose: '기존 화물 운송 과정에서 발생하는 수동 배차, 운송 상태 확인, 정산 관리의 불편함을 줄이기 위해 화주와 차주를 연결하고 관리자 운영 기능까지 포함한 통합 화물 운송 플랫폼을 개발했습니다.',
            roles: [
                '백엔드(Spring Boot): 화물 등록, 배차 수락, 운송 상태 관리, 결제·정산, 관리자 API 구현',
                '인증/보안: JWT 기반 Access Token·Refresh Token 인증과 역할별 권한 제어 적용',
                '지도/위치: Naver Maps API 및 공간 데이터 기반 위치 처리 기능 구현',
                '프론트엔드(Flutter): 로그인, 화물 목록, 지도, 결제, 채팅, 알림, 지갑 화면 구성',
                '관리자 웹(React): 기사 승인, 문의·분쟁 처리, 수수료 관리, 통계 대시보드 화면 구성'
            ],
            trouble: [
                '<strong>문제:</strong> 화주·차주·관리자 역할이 분리되어 있어 동일한 API라도 권한에 따라 접근 가능 범위를 다르게 처리해야 했음',
                '<strong>원인:</strong> 운송 플랫폼 특성상 회원 유형별 사용 흐름이 다르고, 관리자 승인/정산/분쟁 처리처럼 민감한 기능이 포함되어 있었음',
                '<strong>해결:</strong> Spring Security와 JWT를 적용해 인증 토큰을 관리하고, 역할별 API 접근 제어 구조를 설계',
                '<strong>교훈:</strong> 단순 로그인 구현보다 서비스 도메인에 맞는 권한 모델링과 API 책임 분리가 중요하다는 것을 체감'
            ]
        }
    },
    {
        id: 'actionmate',
        name: 'ActionMate',
        categories: ['크로스플랫폼 앱', '백엔드'],
        period: '2026.01 ~ 2026.02',
        duration: '24일',
        badge: '크로스 플랫폼 앱',
        subtitle: '일회성 모임 모집 및 활동 플랫폼',
        summary: '부담 없이 한 번 만나고 헤어지는 1회성 모임에 특화된 크로스 플랫폼 앱. Google Maps SDK를 이용한 주변 모임 시각화와 실시간 채팅 기능을 제공합니다.',
        highlights: [
            '인증 모듈·채팅 모듈 개발 및 서버 배포 담당',
            '에러코드/로그 기반 커뮤니케이션으로 연동 문제 해결'
        ],
        stacks: ['React Native', 'Java', 'Spring Boot', 'JWT', 'WebSocket', 'NCP', 'Google Maps'],
        githubUrl: 'https://github.com/tjoeun-second/ActionMate-Backend',
        icon: 'people',
        detail: {
            meta: '2026.01 ~ 2026.02 · 팀 프로젝트 · 크로스 플랫폼',
            purpose: '지속적 관계 부담 없이 1회성 모임에 특화된 모바일 플랫폼. Google Maps SDK로 주변 모임을 시각화하고, 실시간 채팅으로 모임 운영을 지원합니다.',
            roles: [
            '프로젝트 기획/설계: 요구사항 분석 및 다이어그램 작성 주도',
            '백엔드: 인증 모듈, 채팅 모듈 개발',
            '서버 배포 (Naver Cloud Platform)'
            ],
            trouble: [
            '<strong>문제:</strong> 마감 직전 서버-클라이언트 연동이 지속 실패',
            '<strong>원인:</strong> Swagger 문서는 제공됐으나 프론트가 스펙을 다르게 해석해 문서-코드 간 차이로 오인하며 해결 지연',
            '<strong>해결:</strong> 백엔드에서 에러코드/로그를 명시적으로 제공하고, 요청 응답 기준으로 문제를 분류해 커뮤니케이션 지원 → 스펙 재정합 후 마감 내 완료'
            ]
        }
    },
    {
        id: 'pethealthmanager',
        name: 'PetHealthManager',
        categories: ['풀스택', '앱', '백엔드'],
        period: '2024.09 ~ 2025.09',
        duration: '388일',
        badge: 'IoT + 안드로이드 앱',
        subtitle: '반려동물을 위한 헬스케어 앱',
        summary: 'GPS·가속도 센서(아두이노)를 반려동물에 부착해 실제 움직임 기반의 운동량을 측정하고, Spring Boot 백엔드와 Android 앱을 통해 통계·목표 관리를 제공하는 서비스입니다.',
        highlights: [
            'Base64 이미지 인코딩으로 멀티파트 업로드 없이 REST API 처리',
            'Chart.js를 활용한 관리자 대시보드 구현'
        ],
        stacks: ['Arduino', 'C++', 'Java', 'Spring Boot', 'Kotlin', 'MySQL', 'BLE'],
        githubUrl: 'https://github.com/jsw5514/PetHealthManager',
        icon: 'pet',
        detail: {
            meta: '2024.09 ~ 2025.09 · 팀 프로젝트 · IoT + 풀스택',
            purpose: '핸드폰 GPS만 사용하는 기존 앱의 한계를 극복하고, 아두이노 가속도·GPS 센서를 반려동물에게 직접 부착해 실제 움직임을 반영하는 헬스케어 앱을 개발했습니다.',
            roles: [
            'IoT 기기(Arduino): GPS + 가속도 데이터 측정 및 BLE 시리얼 통신 구현',
            '백엔드(Spring Boot): REST API 서버, 사용자·반려동물 데이터 관리, 관리자 대시보드',
            '프로젝트 전반 디버깅 및 테스트'
            ],
            trouble: [
            '<strong>문제:</strong> 실기기에서만 프로필 추가 버튼이 무반응인 현상 (AVD에서는 정상)',
            '<strong>원인:</strong> 로그인 API 응답 구조 불일치로 유저 객체가 null이 되었고, null 체크 후 조용히 return하는 코드가 있었음',
            '<strong>해결:</strong> 안드로이드 스튜디오 디버거로 함수 단위 추적 → API 스펙 재협상 → 이후 전 코드에 명시적 예외 처리 추가',
            '<strong>교훈:</strong> “조용히 넘어가는 오류”가 예외 발생 오류보다 더 위험하다는 것을 체감'
            ]
        }
    },
    {
        id: 'newsmoa',
        name: '뉴스모아',
        categories: ['풀스택', '백엔드'],
        period: '2025.11 ~ 2025.12',
        duration: '31일',
        badge: '웹',
        subtitle: 'AI 기반 뉴스 요약 · 해석 플랫폼',
        summary: '비전문가도 쉽게 읽을 수 있도록 AI가 뉴스를 쉬운 단어로 풀어쓰는 서비스. 크롤링·요약·해석 파이프라인을 분리해 AI 부하와 API 비용을 최소화했습니다.',
        highlights: [
            '지연처리 도입으로 크롤링 재처리 시간 1~2h → 약 3초',
            '기획·설계·요구사항 분석·다이어그램 작성 주도'
        ],
        stacks: ['React', 'Java', 'Spring Boot', 'NCP', 'Gemini'],
        githubUrl: 'https://github.com/tjoun-first/Backend',
        icon: 'news',
        detail: {
            meta: '2025.11 ~ 2025.12 · 팀 프로젝트 · 풀스택 + AI',
            purpose: '전문 용어와 함축적 문장이 많은 뉴스를 AI를 활용해 비전문가도 이해하기 쉬운 언어로 풀어서 제공하는 플랫폼입니다. 단순 요약에 그치지 않고 맥락 이해까지 돕는 것이 목표입니다.',
            roles: [
            '프로젝트 기획/설계: 요구사항 분석 및 다이어그램 작성 주도',
            '백엔드: 뉴스 기사 크롤링 모듈, AI 요약·해석 모듈 개발',
            '서버 배포 (Naver Cloud Platform)'
            ],
            trouble: [
            '<strong>문제:</strong> 크롤링 후 즉시 AI 요약/해석 시 작업이 너무 오래 걸려 실패 리스크 증가, 데이터 관리 어려움',
            '<strong>원인:</strong> 크롤링-요약-해석을 한 번에 처리하는 동기적 파이프라인',
            '<strong>해결:</strong> 크롤링과 AI 처리를 분리하여 원문만 DB에 저장 후, 사용자가 접근할 때 요약/해석을 처리하는 지연 처리 방식으로 전환',
            '<strong>성과:</strong> 크롤링 재처리 시간 1~2시간 → 약 3초, API 토큰 사용량 대폭 절감'
            ]
        }
    },
    {
        id: 'tinocapsule',
        name: '티노캡슐',
        categories: ['안드로이드 앱', '백엔드'],
        hasDetail: false,
        period: '2025.07',
        duration: '10일',
        badge: '안드로이드 앱',
        subtitle: '디지털 타임캡슐 앱',
        summary: '물리적 타임캡슐의 훼손·분실 문제를 해결하는 디지털 서비스. 위치 기반 캡슐 시각화와 타인 전송, 오픈 알림 기능을 구현했습니다.',
        highlights: [
            '데이터 구조와 연계된 UI 설계로 DB 접근 최적화',
            'AWS를 이용한 배포'
        ],
        stacks: ['Kotlin', 'Python', 'FastAPI', 'MySQL', 'AWS', 'Google Maps'],
        githubUrl: 'https://github.com/TUK-mobile-programming',
        icon: 'capsule',
        detail: {
            meta: '2025.07 · # · 앱 + 백엔드',
            purpose: '#',
            roles: [
            '#',
            '#',
            '#'
            ],
            trouble: [
            '<strong>문제:</strong> #',
            '<strong>원인:</strong> #',
            '<strong>해결:</strong> #',
            '<strong>성과:</strong> #'
            ]
        }
    },
    {
        id: 'picpic',
        name: 'Picpic',
        categories: ['풀스택', '웹', '백엔드'],
        hasDetail: false,
        period: '2024.11 ~ 2024.12',
        duration: '27일',
        badge: '웹',
        subtitle: 'PC 최적화 사진 공유 게시판',
        summary: '인스타그램의 불편한 데스크탑 UI를 개선하는 PC 친화적 사진 공유 플랫폼. MVC 아키텍처 기반의 게시글 CRUD 및 파일 업로드/다운로드 기능을 제공합니다.',
        highlights: [
            'JSP 기반으로 프레임워크를 사용하지 않은 웹페이지',
            '세션 기반 인증'
        ],
        stacks: ['Java', 'JSP', 'MVC', 'MySQL', 'Maven'],
        githubUrl: 'https://github.com/jsw5514/picpic',
        icon: 'gallery',
        detail: {
            meta: '2024.11 ~ 2024.12 · # · 웹 풀스택',
            purpose: '#',
            roles: [
            '#',
            '#',
            '#'
            ],
            trouble: [
            '<strong>문제:</strong> #',
            '<strong>원인:</strong> #',
            '<strong>해결:</strong> #',
            '<strong>성과:</strong> #'
            ]
        }
    },
    {
        id: 'escaper',
        name: 'Escaper',
        categories: ['안드로이드 앱', '백엔드'],
        hasDetail: false,
        period: '2025.04 ~ 2025.06',
        duration: '14일',
        badge: '안드로이드 앱',
        subtitle: '안드로이드 미로 찾기 게임',
        summary: '안드로이드 2D 게임 프레임워크(a2dg)를 활용한 미로 게임. 재귀적 백트래킹 알고리즘으로 미로를 생성하고, 옵저버 패턴으로 씬 간 통신을 구현했습니다.',
        highlights: [
            '안드로이드 뷰 계층 - 게임 씬 계층 - 게임 오브젝트 계층으로 분리된 계층 구조',
            '하위계층에선 상위계층을 모르는 객체지향적 단방향 의존 구조'
        ],
        stacks: ['Java', 'Android', 'SQLite', 'Tiled', 'Observer 패턴'],
        githubUrl: 'https://github.com/jsw5514/Escaper',
        icon: 'game',
        detail: {
            meta: '2025.04 ~ 2025.06 · # · 안드로이드 게임',
            purpose: '#',
            roles: [
            '#',
            '#',
            '#'
            ],
            trouble: [
            '<strong>문제:</strong> #',
            '<strong>원인:</strong> #',
            '<strong>해결:</strong> #',
            '<strong>성과:</strong> #'
            ]
        }
    }
];

let activeFilter = 'all';

function escapeHtml(value) {
    return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getProjectById(projectId) {
    return projects.find((project) => project.id === projectId);
}

function renderCards(filter = 'all') {
    const visibleProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.categories.includes(filter));

    if (!visibleProjects.length) {
    projectGrid.innerHTML = `
        <article class="project-card">
        <h2 class="project-name">No Projects</h2>
        <p class="project-summary">선택한 카테고리에 해당하는 프로젝트를 준비 중입니다.</p>
        </article>
    `;
    return;
    }

    projectGrid.innerHTML = visibleProjects.map((project) => `
    <article class="project-card" data-project-id="${escapeHtml(project.id)}">
        <div class="project-card-top">
        <div class="project-icon" aria-hidden="true">
            ${icons[project.icon] || ''}
        </div>
        <div class="project-meta">
            <div class="project-period">${escapeHtml(project.period)}&nbsp;&nbsp;(${escapeHtml(project.duration)})</div>
            <span class="pill">${escapeHtml(project.badge)}</span>
        </div>
        </div>

        <h2 class="project-name">${escapeHtml(project.name)}</h2>
        <p class="project-subtitle">${escapeHtml(project.subtitle)}</p>
        <p class="project-summary">${escapeHtml(project.summary)}</p>

        <div class="stack-list" aria-label="기술 스택">
        ${project.stacks.map((stack) => `<span class="stack-item">${escapeHtml(stack)}</span>`).join('')}
        </div>

        <ul class="point-list">
        ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>

        <div class="project-actions">
        <a class="action-btn github" href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noreferrer noopener">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56 0-.28-.01-1.03-.02-2.03-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.97.1-.75.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.8 0c2.22-1.49 3.18-1.18 3.18-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.42.36.79 1.08.79 2.17 0 1.57-.01 2.84-.01 3.22 0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
            </svg>
            GitHub
        </a>
        ${project.hasDetail !== false ? `
            <button class="action-btn detail open-detail" type="button" data-project="${escapeHtml(project.id)}">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm.2 15.2h-1.9V10h1.9Zm-1-8.5a1.15 1.15 0 1 1 1.15-1.15A1.16 1.16 0 0 1 11.2 8.7Z"/>
            </svg>
            상세 보기
            </button>
        ` : ''}
        </div>
    </article>
    `).join('');
}

function renderDetail(projectId) {
    const project = getProjectById(projectId);
    if (!project) return;

    detailName.textContent = project.name;
    detailMeta.textContent = project.detail.meta;
    detailPurpose.textContent = project.detail.purpose;
    detailIcon.innerHTML = icons[project.icon] || '';
    detailRoles.innerHTML = project.detail.roles.map((role) => `<li>${escapeHtml(role)}</li>`).join('');
    detailTrouble.innerHTML = project.detail.trouble.map((item) => `<p>${item}</p>`).join('');
    detailStacks.innerHTML = project.stacks.map((stack) => `<span class="stack-item">${escapeHtml(stack)}</span>`).join('');
    detailGithubLink.href = project.githubUrl || '#';
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
    tabs.forEach((btn) => {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-selected', 'false');
    });

    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    activeFilter = tab.dataset.filter || 'all';
    renderCards(activeFilter);
    });
});

projectGrid.addEventListener('click', (event) => {
    const detailButton = event.target.closest('.open-detail');
    if (!detailButton) return;

    const projectId = detailButton.dataset.project;
    renderDetail(projectId);
    page.classList.add('is-detail-open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

closeBtn.addEventListener('click', () => {
    page.classList.remove('is-detail-open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

foldBtn.addEventListener('click', () => {
    page.classList.remove('is-detail-open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderCards();
renderDetail(projects[0].id);
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
        <path d="M12 4.5c1.16 0 2.1-.94 2.1-2.1S13.16.3 12 .3 9.9 1.24 9.9 2.4 10.84 4.5 12 4.5Zm-4.35 4.2c1.08 0 1.95-.87 1.95-1.95S8.73 4.8 7.65 4.8 5.7 5.67 5.7 6.75 6.57 8.7 7.65 8.7Zm8.7 0c1.08 0 1.95-.87 1.95-1.95S17.43 4.8 16.35 4.8 14.4 5.67 14.4 6.75s.87 1.95 1.95 1.95ZM5.1 13.95c-1.82 0-3.3 1.41-3.3 3.15 0 1.65 1.4 2.85 3.3 2.85 1.4 0 2.61-.69 3.12-1.71.57-1.14.21-2.41-.72-3.3-.6-.57-1.46-.99-2.4-.99Zm13.8 0c-.94 0-1.8.42-2.4.99-.93.89-1.29 2.16-.72 3.3.51 1.02 1.72 1.71 3.12 1.71 1.9 0 3.3-1.2 3.3-2.85 0-1.74-1.48-3.15-3.3-3.15ZM12 8.1c-2.52 0-4.8 1.95-4.8 4.65 0 2.93 2.47 5.85 4.8 5.85s4.8-2.92 4.8-5.85c0-2.7-2.28-4.65-4.8-4.65Z"/>
    </svg>
    `,
    news: `
    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h10.5A2.75 2.75 0 0 1 20 4.75v14.5A2.75 2.75 0 0 1 17.25 22H6.75A2.75 2.75 0 0 1 4 19.25ZM7.5 6.5h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5Zm0 4h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5Zm0 4h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5Z"/>
    </svg>
    `
};

const projects = [
    {
        id: 'pethealthmanager',
        name: 'PetHealthManager',
        categories: ['풀스택', '앱', '백엔드'],
        period: '2024.09 ~ 2025.09',
        duration: '388일',
        badge: 'IoT + 풀스택',
        subtitle: '반려동물을 위한 헬스케어 앱',
        summary: 'GPS·가속도 센서(아두이노)를 반려동물에 부착해 실제 움직임 기반의 운동량을 측정하고, Spring Boot 백엔드와 Android 앱을 통해 통계·목표 관리를 제공하는 서비스입니다.',
        highlights: [
            'Base64 이미지 인코딩으로 멀티파트 업로드 없이 REST API 처리',
            'Chart.js를 활용한 관리자 대시보드 구현'
        ],
        stacks: ['Arduino/C++', 'Spring Boot', 'Kotlin', 'MySQL', 'BLE'],
        githubUrl: '#',
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
        badge: '풀스택 + AI',
        subtitle: 'AI 기반 뉴스 요약 · 해석 플랫폼',
        summary: '비전문가도 쉽게 읽을 수 있도록 AI가 뉴스를 쉬운 단어로 풀어쓰는 서비스. 크롤링·요약·해석 파이프라인을 분리해 AI 부하와 API 비용을 최소화했습니다.',
        highlights: [
            '지연처리 도입으로 크롤링 재처리 시간 1~2h → 약 3초',
            '기획·설계·요구사항 분석·다이어그램 작성 주도'
        ],
        stacks: ['React', 'Redux', 'Spring Boot', 'NCP', 'AI 모듈'],
        githubUrl: '#',
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
        <button class="action-btn detail open-detail" type="button" data-project="${escapeHtml(project.id)}">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm.2 15.2h-1.9V10h1.9Zm-1-8.5a1.15 1.15 0 1 1 1.15-1.15A1.16 1.16 0 0 1 11.2 8.7Z"/>
            </svg>
            상세 보기
        </button>
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
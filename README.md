# ✔️ Jober Client (v.0.1)

## 사용 라이브러리

- Next.JS 13
- React.JS 18
- Styled-Components
- Zustand
- Tailwind CSS
- Shadcn/UI CLI
- React-Beautiful-DND
- React-Query
- TypeScript

## 프로젝트 설치 방법

- Local에서 clone 받을 위치로 이동

```cmd
git clone https://github.com/mental-jober/frontend.git
npm install
cd frontend
npm run dev
```

## ✏️ Commit Convention

- 되도록이면 구체적으로 적을 것! - git commit -m (X)
- 반드시 vim으로 제목 / 본문에 구체적으로 작성
- footer에는 이슈 트래커 ID를 명시할 때 작성

- 새로운 기능 추가 - Feat: 커밋 메시지(한글)
- UI/ 스타일 관련 파일 추가 및 수정 - Design: 커밋 메시지(한글) #
- 버그 수정 - Fix: 커밋 메시지(한글) #
- 리팩토링(구조 변경) - Refactor: 커밋 메시지(한글)
- 이름 / 경로 / route 변경 - Rename: 커밋 메시지(한글)
- 빌드 업무 수정, 패키지 매니저 수정 - Chore: 커밋 메시지(한글)
- 문서 추가 및 수정 - Docs: 커밋 메시지(한글)
- 코드 / 파일 삭제 - Remove: 커밋 메시지(한글)
- 급하게 치명적인 버그 수정 - !HOTFIX: 커밋 메시지(한글)
- 테스트 추가, 테스트 리팩토링 - Test: 커밋 메시지(한글)

## - Code Convention

- 컴포넌트 함수 포함해서 모든 함수는 화살표 함수로 표기합니다.
- app 폴더 내에 페이지 컴포넌트를 작성할 때는 폴더를 만든 후 폴더 안에<br />page.tsx를 만듭니다. (ex. app/template/page.tsx)
- interface와 type의 이름은 동일하게 첫글자는 대문자로 적어줍니다 (ex. Component)
- interface와 type의 이름은 이름 뒤에 명확히 어떤 역할을 하는지 명시합니다. (ex. ComponentProps)
- 항상 구문 끝에는 세미콜론을 붙여줍니다.
- 개발 중에 변수값을 변경하면 안되는 경우에는 변수명을 전부 대문자로 작성합니다.
- styled-components를 사용할 때는 컴포넌트 함수 아래에서 작업합니다.

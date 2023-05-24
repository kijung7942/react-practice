# 리액트 프로젝트 배포(with Firebase)

## firebase에서 제공하는 호스팅을 이용하여 SPA를 배포해보기

- firebase 프로젝트 생성 : https://console.firebase.google.com/

    1. Google 계정으로 로그인 -> 프로젝트 추가
    2. 제품 카테고리 - 빌드 - Hosting 메뉴 진입
    3. 안내에 따라 firebase-tools 설치 (실패할 경우 독립실행 바이너리 받아서 진행하기)
            
            $> npm install -g firebase-tools
             // firebase cli 설치

            $> firebase login
             // project 만든 구글 계정 login

            $> firebase init
             // hosting (optional) githup action 선택
             // 빌드된 파일들 가진 폴더 선택(build)
             // SPA로 만들거냐? -> Yes
               // ㄴ> 특정 url을 던졌을 때 서버에서 파일을 찾는 것이 아닌 react-router를 사용하도록 하기 위해서 Yes를 설정함.
               // ㄴ> 만약 SPA 설정에 대한 내용이 없는 호스팅을 사용할 경우 모든 url에 대한 응답으로 index.html을 반환하도록 리디렉션 규칙을 수동으로 해줘야함.
             // 자동 빌드 배포 할거냐? -> No
             // index 페이지 덮어쓰기 할거냐? -> No
             // 등등.. 옵션 선택하기

            $> firebase deploy
             // build 폴더의 파일을 firebase에 업로드
             // 업로드 완료 후 주어지는 url을 브라우저에 입력해보면 호스팅 되고 있는 SPA 확인 가능



- firebase 콘솔로 이동하여 커스텀 도메인 등 설정 가능
      
         $> firebase hosting:disable
          // 호스팅 중단

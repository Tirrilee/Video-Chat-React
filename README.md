# WebRTC 기반 Web Chat App Client Side

## 디렉토리 구조 설명

[React Redux Boilerplate](https://github.com/flexdinesh/react-redux-boilerplate)를 참고해서 디렉토리 구성을 했다.

```
--src
 |
 |--components 			// 각 페이지에 들어갈 작은 단위의 컴포넌트
   |
   |--Header
   |--Footer
   |...
   |---------------
 |--containers 			// View와 Controller의 기능을 하며, 상세 설명 참조
   |
   |--App
     |
     |--index.js 		// 해당 폴더의 메인 js 실행 (여기서는 App.js)
     |--App.js 			// containers의 모든 페이지들을 Routing 
     |...
     |--------------
   |--HomePage
   |--NotFoundPage
   |...
   |----------------
 |--styles				// css 적용! 각 컴포넌트에도 있음..
   |
   |--style.css 		
   |----------------
 |--utils 				// 다양한 라이브러리 또는 기능을 구현
   |
   |--MediaHandler.js 	// 브라우저에서 미디어 권한 확인
 |--index.js 			// 앱이 실행되면 가장 먼저 실행되는 js
 |------------------

```

- containers 상세 설명
	- 각각의 컨테이너는 여러개의 컴포넌트로 구성된다.
	- App 컨테이너는 모든 페이지를 라우팅 하는 역할을 한다. 
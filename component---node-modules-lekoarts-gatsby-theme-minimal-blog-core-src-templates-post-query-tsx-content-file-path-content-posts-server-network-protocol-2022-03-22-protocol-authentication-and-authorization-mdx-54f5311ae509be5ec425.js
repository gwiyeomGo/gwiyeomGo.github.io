"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9872],{3435:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return i}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2",a:"a",ul:"ul",li:"li",ol:"ol",h3:"h3",p:"p",hr:"hr"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"1.AAA architecture protocols"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"AAA architecture protocols (Authentication, Authorization, Accounting)\nComplex protocols used in larger networks for verifying the user (Authentication), controlling access to server data (Authorization) and monitoring network resources and information needed for billing of services (Accounting).\n// 위키: https://en.wikipedia.org/wiki/Authentication_protocol\n")),"\n",l.createElement(n.h2,null,l.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Authentication"},"2.authentication (인증)")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"인증 : 사용자의 신원을 확인하는 행동"),"\n",l.createElement(n.li,null,"ex) 회원가입,로그인\nex) 대리 운전사가 내 자동차의 키를 받아서 잠시 일시적으로 자동차를 운전할 수 있는 권한이 있음"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"Authentication is \n is the act of proving an assertion, such as the identity (신원)\n  of a computer system user.\n   (컴퓨터 시스템 사용자의 신원과 같은 주장을 증명하는 행위)\n")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"유저가 로그인 시도"),"\n",l.createElement(n.li,null,"서버상에 일치하는 유저 정보를 찾는다"),"\n",l.createElement(n.li,null,"찾았다면 인증(authentication)확인의 표시로 세션/토큰을 빌급/전달"),"\n",l.createElement(n.li,null,"웹 브라우저 세션/토큰을 관리하고"),"\n",l.createElement(n.li,null,"새롭게 서버로 요청을 보낼 때 인가(authorization)하기 위해 세션/토큰을 함께 보낸다.\n",l.createElement(n.a,{href:"https://fierycoding.tistory.com/69"},"출처")),"\n"),"\n",l.createElement(n.h3,null,"authentication(인증) 의 타입"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"bearer"),"\n",l.createElement(n.li,null,"Basic\n...\n",l.createElement(n.a,{href:"https://velog.io/@cada/%ED%86%A0%EA%B7%BC-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D%EC%97%90%EC%84%9C-bearer%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C"},"(출처)bearer 는 무엇인가?")),"\n"),"\n",l.createElement(n.p,null,"###jwt (json web token)"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"JSON Web Token  is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.\nThe tokens are signed either using a private secret or a public/private key.\n//https://en.wikipedia.org/wiki/JSON_Web_Token\n")),"\n",l.createElement(n.p,null,"인증을 위한 토큰\n토큰 사용자인증을 위한 정보를 서명한 것"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://opentutorials.org/course/3405"},"https://opentutorials.org/course/3405")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"인코딩/디코딩?"),"\n"),"\n",l.createElement(n.p,null,"jwt.io 사이트에서도 jwt 토큰을 디코딩한 결과를 알수 잇다.\n이처럼 지금 사이트는 서베에서 디코딩해서 토큰안에 정보를 얻음"),"\n",l.createElement(n.p,null,"cookie의 사용을 제거\n토큰 등의 정보를 cookie로 저장하면,\ndomain 기반으로 불필요한 cookie가 전달되어 예상치 못한 오류를 야기할 수 있다.\n이런 경우 cookie 대신 HTML5 spec에 있는 Web Storage(Session/Local storage)를 사용하는 것이 더 일반적4"),"\n",l.createElement(n.hr),"\n",l.createElement(n.p,null,"이때 원인은 jwt 토큰"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://naon.me/posts/til63"},"참고")),"\n"),"\n",l.createElement(n.p,null,"admin 화면(프론트)에서 토큰 생성시간은 로컬타임\nservice 는 gmt 글로벌 타임 (GMT)"),"\n",l.createElement(n.p,null,"service 시간을 로컬타임으로 변경"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://webisfree.com/2022-01-10/%5B%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%5D-%EB%B0%A9%EB%AC%B8%EC%9E%90%EC%9D%98-%EB%A1%9C%EC%BB%AC-%ED%83%80%EC%9E%84%EC%A1%B4%EA%B3%BC-utc-%EC%8B%9C%EA%B0%84%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B5%AC%ED%95%A0%EA%B9%8C"},"참고1"),"\n",l.createElement(n.a,{href:"https://velog.io/@cada/%ED%86%A0%EA%B7%BC-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D%EC%97%90%EC%84%9C-bearer%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C"},"https://velog.io/@cada/%ED%86%A0%EA%B7%BC-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D%EC%97%90%EC%84%9C-bearer%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C")),"\n"),"\n",l.createElement(n.h2,null,l.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Authorization"},"3.authorization (인가)")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"인가하다(대상이 옳음을 소상하게 밝혀 인정하다.)"),"\n",l.createElement(n.li,null,"권한 여부 확인"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"Authorization is the function of\n specifying access rights/privileges to resources,\n  which is related to general information security and computer security,\n   and to access control in particular.\n    ( 접근 권한/특권, 특히 접근 제어를 지정하는 기능)\n")),"\n",l.createElement(n.h2,null,"세션/토큰 비교"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"<세션>")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"서버측에서 저장/관리"),"\n",l.createElement(n.li,null,"유효기간,HttpOnly,Secure 옵션 주어 쿠키 저장"),"\n",l.createElement(n.li,null,"세션?\n서버가 사용자의 정부를 저장해야헸고 이를 세션이라고 불렀다\n대부분 세션을 메모리에 저장했고 로그인중 사용자가 많아지면서 db나 서버에 무리를 주었다.\n",l.createElement(n.a,{href:"https://mangkyu.tistory.com/55"},"https://mangkyu.tistory.com/55")),"\n"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"<토큰>")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"웹 브라우저에 저장"),"\n",l.createElement(n.li,null,"세션보다 공격 노출 더 크다"),"\n",l.createElement(n.li,null,"되도록 민감한 정보를 담지 않도록 한다"),"\n",l.createElement(n.li,null,"만료 기간 설정 가능"),"\n",l.createElement(n.li,null,"토큰 주기가 짧을 때 refresh token 을 인증과정에 추가적으로 발급\n",l.createElement(n.a,{href:"https://opentutorials.org/course/3405/22010"},"Refresh token 설명 영상")),"\n"),"\n",l.createElement(n.h1,null,"실제로 적용한 방식"),"\n",l.createElement(n.p,null,"지금 사용하는 시스템은 JWT 기반의 인증을 사용합니다.\n현재는 클라이언트에서 아이디,패스워드를 보내면 서버가 응답값으로 jwt token(aceess token ,refresh token) 을 보냅니다.\n클라이언트는 로컬스트로지에 jwt token 을 저장하고 있으면\njwt 토큰은 주기 짧아 refresh token 도 같이 사용하고 있다.\nhttps:/.outsider.ne.kr/1160"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"* ### [계정 service],[resource service],[client] 를 이용한 로그인\n[실제 코드](2022-02-15-login-jwtTokenCreate/)\n\n* ### [client] 로컬 을 실행하고 [service] 개발계 의 DB와 API 사용하기\n일반적이진 않지만 화면 개발을 해야 하는데 서버 개발이 늦어져서 개발계에 서버와 연동해서 작업을 했었다.\n(이때는 서버가 보내주는 json 값이 일치 했기 때문에 가능했다.)\n\n> 1. [client]에 로그인 하면 아이디,패스워드로 jwt 토큰을 [계정 service] 에 요청합니다.\n2. [계정 service]에서 jwt token 을 만들 때 [개발계의 JWT]랑 똑같도록 변경하는 작업 진행\n3. [계정 service] 는 [개발계의 JWT]을 화면에 전달합니다.\n4. 로그인한 사용자는 [개발계 서버의 API]를 조회할때 [개발계의 JWT]을 사용\n\n")),"\n",l.createElement(n.h1,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://velog.io/@gusdnr814/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%B8%EC%A6%9D-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95"},"https://velog.io/@gusdnr814/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%B8%EC%A6%9D-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95")),"\n",l.createElement(n.hr),"\n",l.createElement(n.h1,null,"LOGIN 로그인을 공부해보자 - 구글 워크스페이스"),"\n",l.createElement(n.h1,null,"login ?"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Login"},"https://en.wikipedia.org/wiki/Login")),"\n",l.createElement(n.h1,null,"dooray login"),"\n",l.createElement(n.h1,null,"카카오 login"),"\n",l.createElement(n.h1,null,"googleWorkspace 사용 배경"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"어드민 사용자는 구글 워크스페이스 계정이 있고 자주 사용한다."),"\n",l.createElement(n.li,null,"app을 편하게 사용하기 위해서 구글 워크스페이스 계정으로 로그인 한다."),"\n",l.createElement(n.li,null,"오픈소스에 해당 코드가 있다 -> 관심이 있고 공부해보려고한다."),"\n"),"\n",l.createElement(n.h1,null,"화면 코드"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://support.google.com/accounts/answer/112802?hl=en&co=GENIE.Platform%3DAndroid"},"https://support.google.com/accounts/answer/112802?hl=en&co=GENIE.Platform%3DAndroid")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},o=t(8804);function i(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-network-protocol-2022-03-22-protocol-authentication-and-authorization-mdx-54f5311ae509be5ec425.js.map
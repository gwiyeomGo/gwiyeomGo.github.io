"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[182],{8584:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return m}});var l=t(7294),r=t(1151);function c(e){const n=Object.assign({blockquote:"blockquote",p:"p",a:"a",h4:"h4",pre:"pre",code:"code"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"CodeFreezing 코드 프리징\n=> '코드를 더 이상 수정하지 않는 상황'"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://velog.io/@sangmin7648/Monolithic-vs-Microservice-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"},"모놀리식(monolithic) 서비스"),"\nmicroservices-monolithic"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://www.redhat.com/ko/topics/microservices/what-are-microservices"},"마이크로서비스")," 서비스"),"\n"),"\n",l.createElement(n.h4,null,"배경"),"\n",l.createElement(n.p,null,"사용자에게 택배를 통해 기부를 받는 플렛폼을 개발했다\n동시에 매장에서 기부를 받고 기록하는 시스템을 개발했다"),"\n",l.createElement(n.p,null,"둘다 같은 기부 데이터 이지만 다른 테이블에서 데이터를 관리한다\n회원정보 테이블은 둘이 같이 쓴다\n필요한 정보를 찾기 위해 두 스키마에서 각각 조회해야 한다\n택배 시스템에는 기존 택배사외에 다른 택배사와 연동 작업이 진행중이다.\n연동을 위해 기존 플렛폼코드를 변경했고\n변경 완료이후 팀원들이 시스템에 문제가 없는지 하나씩 확인하고 개발해야 하는 상황이 발생했다."),"\n",l.createElement(n.p,null,"db 1개를 갖고 시스템을 쓰면서 일부 수정하기 어렵다"),"\n",l.createElement(n.h4,null,"뜻"),"\n",l.createElement(n.p,null,"관계가 있는 것끼리 모아놓자"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"소프트웨어 버전 작성 (software versioning)"),"\n"),"\n",l.createElement(n.h4,null,"배경"),"\n",l.createElement(n.p,null,"운영 배포를 하면서 버전 관리에 대해 알게되었다\n각각 의미하는 것이 무엇인지 정리하려고 한다"),"\n",l.createElement(n.p,null,"ex) release 0.0.0"),"\n",l.createElement(n.p,null,"주어진 번호 체계는 주(major) 혹은 부(minor)로 나뉘며,\n새롭게 개발된 소프트웨어에 알맞게 ,\n이들 번호는 증가하여 결정된다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"major.minor[.build[.revision]]\n혹은\nmajor.minor[.maintenance[.build]]\n")),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"구글 애널리틱스\n=> 웹 로그분석 툴"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"SEO(검색엔진 최적화)\n",l.createElement(n.a,{href:"https://www.hedleyonline.com/ko/seo/"},"https://www.hedleyonline.com/ko/seo/")),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"http://www.ktword.co.kr/test/view/view.php?m_temp1=1024"},"주/종속 시스템 (Master/Slave)"),"\nMaster: 하나의 일을 수행하는데에 있어 동작의 주체\nSlave: 종속적인 역할을 하는 것"),"\n"),"\n",l.createElement(n.p,null,"변하면 안돼는 중요한 코드 master\n대부분에 정보에 많이 영향을 미치는 곳 -> 상품을 움직이고 생산하거나"),"\n",l.createElement(n.p,null,"멤버,등록처,관리자 => 마스터\n캠페인,기부 => 거래\n에러로그(),외부서비스와 주고받은 로그=>로그"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Master detail"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"redirect"),"\n"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"맨먼스의 미신"),"\n"),"\n",l.createElement(n.p,null,"date: 2022-06-14\n추정\n계획을 하려고 모임\n기능을 개발하는데 만드는 시간을 추정한다\n프로젝트 지연\n프로젝트에 사람을 투입할수록 지연된다\n",l.createElement(n.a,{href:"http://www.yes24.com/Product/Goods/16928943"},"http://www.yes24.com/Product/Goods/16928943"),"\n팀이바뀐다는 의미는 관성대로 일하지 않는다???\n컴퍼런스의 목표와 목적은 무엇인가 => 이직을 위해 몀함을 챙긴다\n방향성을 본다 -> 저렇게 하는군나 ->  우리와 다르다\n방향과 이직을 위해 컨퍼런스 가야한다"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"React Virtual DOM"),"\n"),"\n",l.createElement(n.p,null,"이전 UI 상태를 메모리에 유지해 변경되는 최소의 집합만 적용해 좋은 성능을 낸다"),"\n",l.createElement(n.p,null,"라이브러리 :프로그램 제작에 필요한기능\n프레임워트: 뼈"),"\n",l.createElement(n.p,null,"플랫폼 : 프로그램 실행 환경"))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},o=t(8804);function m(e){return l.createElement(o.Z,e,l.createElement(a,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-etc-2022-12-08-it-term-mdx-1bb23f26c9d4149541f3.js.map
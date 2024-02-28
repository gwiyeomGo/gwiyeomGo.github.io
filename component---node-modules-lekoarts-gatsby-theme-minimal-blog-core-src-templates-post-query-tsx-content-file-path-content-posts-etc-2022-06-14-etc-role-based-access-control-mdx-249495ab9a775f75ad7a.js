"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[985],{8771:function(e,l,n){n.r(l),n.d(l,{Head:function(){return u.p},default:function(){return E}});var t=n(6540),r=n(8453);function a(e){const l=Object.assign({h3:"h3",p:"p",ol:"ol",li:"li",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,r.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(l.h3,null,"배경"),"\n",t.createElement(l.p,null,"현재 지금 시스템은\n오픈소스로 등록되어있는 계정 서비스를 받아서 쓰고 있다."),"\n",t.createElement(l.p,null,"해당 오픈소스는\nrole-base-access-control 기반으로 만들어졌다."),"\n",t.createElement(l.p,null,"이 시스템의 특징"),"\n",t.createElement(l.ol,null,"\n",t.createElement(l.li,null,"조직도 - 등록처 하나당 조직 1개 연결 가능"),"\n",t.createElement(l.li,null,"권한 설정"),"\n",t.createElement(l.li,null,"역할 생성 - 권한을 선택가능"),"\n"),"\n",t.createElement(l.blockquote,null,"\n",t.createElement(l.p,null,"등록처는 매장/부서/되살림터가 존재 (type 으로 구분\n어드민 조직도 기능은 한 멤버에게 여러 역할 등록 가능하지 현재는 한 사람이 하나의 등록처를 관리\n조직도에서 조직당 1개의 등록처만 연결 (조직:등록처 = 1:1)\n한 역할의 권한은 1개 ex) 매니저 역할의 권한은 MANAGER"),"\n"),"\n",t.createElement(l.blockquote,null,"\n",t.createElement(l.p,null,"ex) 스타벅스 매장 바리스타 A,  B 가 있다. A와 B는 업무 시스템 화면에서 볼 수 있는 화면이 다르다. A 와 B 는 바리스타 역할이지만 권한이 다르다."),"\n"),"\n",t.createElement(l.h3,null,"요구사항"),"\n",t.createElement(l.p,null,"한 사람이 매장,부서,되살림터 (등록처)를 여러개 관리하고 싶다\n매니저 1 => 여러매장 + 부서 관리\n되살림터 1 => 여러 되살림터\n팀장 => 여러매장 + 부서 + 되살림터"),"\n",t.createElement(l.h3,null,"작업내용"),"\n",t.createElement(l.ol,null,"\n",t.createElement(l.li,null,"등록처와 역할이 복수일 때 발생하는 문제로"),"\n",t.createElement(l.li,null,"복수의 등록처를 사용자가 선택할 수 있다."),"\n",t.createElement(l.li,null,"복수의 역할을 할당한다. => 시스템에서는 가능하지만 => 권한을 다시 나눠야 한다"),"\n"),"\n",t.createElement(l.h3,null,"20220615"),"\n",t.createElement(l.p,null,"권한을 처음 도입시 아주 작게 나눴다 버튼 하나씩 권한이 생겼다 ( ex) 취소 권한, 수정 권한.. 등"),"\n",t.createElement(l.p,null,"그러다가 권한이 60 개 이상이 되었고\n화면 코드에서는 if 문이 엄청 늘어났고 권한 이름만 보고 어떤 권한인지 알 수 없어서 개발자들이 혼란스럽고 설명하기도 어려웠다."),"\n",t.createElement(l.p,null,"결국 권한:역할 = 1:1 이 되도록 변경했고 유연함이 없는 시스템이 되었다.\n그래서 매장 매니저 중 한곳은 되살림터 화면을 봐야하는 상황이 있었는데.. 지금 시스템으로 쓸 수없었고"),"\n",t.createElement(l.p,null,"요구사항 등장했다."),"\n",t.createElement(l.p,null,"이거의 해결책으로"),"\n",t.createElement(l.ol,null,"\n",t.createElement(l.li,null,"복수의 등록처를 사용자가 선택할 수 있도록 바꾸고"),"\n",t.createElement(l.li,null,"특정 상황에 맞게 권한을 다시 나눠야 한다 => 크게 전체가 아닌 최근에 받은 요구사항을 충족할 수 있는 부분만 ex) 팀장 => 여러매장 + 부서 + 되살림터 가능하도록.."),"\n"),"\n",t.createElement(l.p,null,"조직에 성숙도에 맞춰서 권한을 나눈다.\n유지보수 가능하게 나눈다.\n처음에는 너무 많이 나눴으니까\n우선 운영자가 최근에 요청하셨던 문제를 해결할 수 있을만큼만 나눠보자"),"\n",t.createElement(l.h3,null,"20220620"),"\n",t.createElement(l.p,null,"복수 등록처를 선택할 수 있도록 수정했다.\n부서 팀장님이 여러 매장과 부서 화면까지 보기를 원하는데 하지 못해서\n근본적인 문제해결은 안되네요 라는 피드백을 들었다.\n기획자의 문제를 보는 관점은 개발자가 보는 상황이 다르다고 본다"),"\n",t.createElement(l.p,null,"이말을 들었을 때 불편했다.\n문제는 복수권한 역할을 고쳐달라고 요구가 오고\n개발자의 입장에서는 문제가 여러개가 섞어있었다.\n또한 역할 권한 문제 빼고\n조직도 UI/UX 개선 청까지 기획자는 하나의 문제라고 본다."),"\n",t.createElement(l.p,null,"요구를 주셨던 부분에서"),"\n",t.createElement(l.p,null,"하나의 역할이 여러 매장을 관리할 수 있도록 하는 내용이 있었고\n역할이 복수가 되었을 때 기능 오류 수정 문제가 있다.\n조직도 UI/UX 개선 요청"),"\n",t.createElement(l.p,null,"=> 의문이 드는거 하나는 나는 이 요청 3개를 다 수행해야 할 까?\n각 매장을 클릭해서 멤버를 넣어야 하기 때문에 불편 한번에 되도록 해달라...\n주어진 기능을 정말 사용해보고 활용해 봤는지 의문이 든다.."),"\n",t.createElement(l.p,null,"전체 권한을 예측하고 권한을 생성하고 적용한다면 시간이 많이 걸립니다.\n하나의 상황에 맞춰서 하나씩 권한을 수정하려고 합니다."),"\n",t.createElement(l.table,null,t.createElement(l.thead,null,t.createElement(l.tr,null,t.createElement(l.th,null,"번호"),t.createElement(l.th,null,"이름"),t.createElement(l.th,null,"역할"),t.createElement(l.th,null,"등록처"),t.createElement(l.th,null,"기능 사용 가능한가?"))),t.createElement(l.tbody,null,t.createElement(l.tr,null,t.createElement(l.td,null,"1"),t.createElement(l.td,null,"A 간사"),t.createElement(l.td,null,"매니저,되살림터 담당자"),t.createElement(l.td,null,"청주신봉점 ,천안되살림터"),t.createElement(l.td,null,"기부 물품 접수 메뉴의 경우 등록처가 되살림터일 경우 오류메세지가 보임 ( 등록처가 되살림터일 경우는 등록되지 않음)  but 문제는 아래 되살림터 선택기능이 보이지 않도록 수정이 필요")),t.createElement(l.tr,null,t.createElement(l.td,null,"2"),t.createElement(l.td,null,"B 간사"),t.createElement(l.td,null,"되살림터 담당자,부서 담당자"),t.createElement(l.td,null,"강원 되살림터 ,강원본부"),t.createElement(l.td,null,"강원본부의 경우 캠페인을 만들 때 도착지를 어디로 해야하죠? 강원본부?? 강원되살림터?? 아.. 현재 부서 캠페인의 경우 되살림터를 지정하니까.. 되살림터로만 보이네")),t.createElement(l.tr,null,t.createElement(l.td,null,"3"),t.createElement(l.td,null,"C 간사"),t.createElement(l.td,null,"매니저,부서 담당자"),t.createElement(l.td,null,"화성동탄점 ,수원행궁점 , 경기남부팀"),t.createElement(l.td,null,"경기남부팀으로 로그인했을 때 부서 캠페인 큐알을 못받음...?? 모사본으로 로그인해서 위 qr 을 받을 수 있다..? 이 화면 수정이 필요한건가??")),t.createElement(l.tr,null,t.createElement(l.td,null,"4"),t.createElement(l.td,null,"D 간사"),t.createElement(l.td,null,"되살림터 담당자"),t.createElement(l.td,null,"서울되살림터 ,경기되살림터"),t.createElement(l.td,null,"O")),t.createElement(l.tr,null,t.createElement(l.td,null,"5"),t.createElement(l.td,null,"E 간사"),t.createElement(l.td,null,"매니저"),t.createElement(l.td,null,"광진화양점 ,광진자양점"),t.createElement(l.td,null,"O")),t.createElement(l.tr,null,t.createElement(l.td,null,"6"),t.createElement(l.td,null,"F 간사"),t.createElement(l.td,null,"매니저,부서 담당자,되살림터 담당자"),t.createElement(l.td,null,"경기서부팀 ,고양화정점,경기되살림터"),t.createElement(l.td,null,"택배 기부 목록: 되살림터 선택기능 수정,서부팀 QR 생성 부분 수정")))),"\n",t.createElement(l.p,null,"오늘 스테이징에서 복수 등록처를 선택하는 기능을 테스트 해보니..\n2개의 페이지의 특정 기능빼고 모두 동작하는거로 보인다\n이번주 테스트 해보시고.. 발생하는 문제를 고치면\n일단 해결할 수 있을 거 같다."),"\n",t.createElement(l.h3,null,"역할 기반 접근 제어(Role-based access control )"),"\n",t.createElement(l.p,null,t.createElement(l.a,{href:"https://ko.wikipedia.org/wiki/%EC%97%AD%ED%95%A0_%EA%B8%B0%EB%B0%98_%EC%A0%91%EA%B7%BC_%EC%A0%9C%EC%96%B4"},"역할 기반 접근 제어"),"\n는 권한이 있는 사용자들에게 시스템 접근을 통제하는 한 방법"),"\n",t.createElement(l.p,null,"RBAC 주요 규칙\n1.역할 할당\n2.역할 권한 부여\n3.권한 부여"),"\n",t.createElement(l.h3,null,"출처"),"\n",t.createElement(l.p,null,t.createElement(l.a,{href:"https://en.m.wikipedia.org/wiki/Role-based_access_control"},"https://en.m.wikipedia.org/wiki/Role-based_access_control")))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,r.RP)(),e.components);return l?t.createElement(l,e,t.createElement(a,e)):a(e)},u=n(7292);function E(e){return t.createElement(u.A,e,t.createElement(c,e))}u.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-etc-2022-06-14-etc-role-based-access-control-mdx-249495ab9a775f75ad7a.js.map
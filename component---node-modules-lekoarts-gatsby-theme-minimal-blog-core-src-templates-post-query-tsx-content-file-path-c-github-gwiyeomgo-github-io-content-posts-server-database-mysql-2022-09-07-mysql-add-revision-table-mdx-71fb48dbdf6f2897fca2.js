"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1774],{7771:function(e,n,l){l.r(n),l.d(n,{Head:function(){return E.F},default:function(){return a}});var r=l(7294),t=l(1151);function m(e){const n=Object.assign({p:"p",h1:"h1",ul:"ul",li:"li",ol:"ol",pre:"pre",code:"code"},(0,t.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.p,null,"Experience adding a the cellphone number revision table in mysql"),"\n",r.createElement(n.h1,null,"배경"),"\n",r.createElement(n.p,null,"1.회원 테이블에는 회원가입한 휴대번호를 저장하고있다 (암호화된 휴대번호)\r\n2.초기 택배 기부 시스템의 영향으로 회원과 기부자가 같지않다\r\n3.기부영수증은 기부자만 발급할 수 있으며 지금 시스템의 회원은 기부자가 아니다"),"\n",r.createElement(n.p,null,"상황1) 어머니가 매장에 기부함.\r\n딸에게 공제 혜택을 주고 싶다.\r\n어머니는 딸의 주민등록 번호를 모른다.\r\n딸이 직접 입력하게 하기 위해서 휴대폰번호를 바꾸는 상황이 종종 발생"),"\n",r.createElement(n.p,null,"어머님이 다음에 기부하러 왔는데\r\n본인이 바꾸셨는데 기억하지 못한다.\r\n매장오셔서 딸에게 문자가 계속 온다고 불만을 요청하심..."),"\n",r.createElement(n.p,null,"문제) 매니저님이 그 회원이 휴대폰 번호를 변경했는지 조회가 불가능하다"),"\n",r.createElement(n.p,null,"상황2) 아내가 매장에 기부함.\r\n남편에게 공제 혜택을 주고 싶다.\r\n아내는 딸의 주민등록 번호를 모른다.\r\n남편이 직접 입력하게 하기 위해서 휴대폰번호를 바꾸는 상황이 종종 발생"),"\n",r.createElement(n.p,null,"본인이 바꾸셨는데 기억하지 못한다\r\n아내는 알림톡이 안온다고 불만을 요청하심"),"\n",r.createElement(n.p,null,"관리자가 문제를 확인하려고 어드민 기부 목록에서 휴대번호를 조회했는데 검색내용의 휴대번호가  검색한 휴대번호와 다르다.\r\n문제1)    관리자는 오류라고 생각하고 개발자에게 확인요청, 오류는 아니고 목록에서는 현재 회원의 휴대번호가 보이는 상황이다.\r\n=> 이부분은 개선작업이 필요\r\n문제2)    관리자는 그 회원이 휴대폰 번호를 변경했는지 조회가 불가능하다"),"\n",r.createElement(n.h1,null,"작업내용"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"휴대번호 변경 이력을 관리 테이블 추가"),"\n",r.createElement(n.li,null,"휴대번호 변경 이력을 저장,조회하는 API 개발"),"\n",r.createElement(n.li,null,"어드민 방문기부,택배기부 목록에 검색기능 개선","\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"휴대번호 검색"),"\n",r.createElement(n.li,null,"휴대번호 변경 이력에서 memberId 를 찾고"),"\n",r.createElement(n.li,null,"memberId 에 해당하는 기부이력 전체 보여지도록 수정"),"\n"),"\n"),"\n",r.createElement(n.li,null,"회원 어드민 목록에 회원 상세 페이지 추가 개발 (해당 페이지에서 휴대번호 변경이력을 볼 수 있음)"),"\n"),"\n",r.createElement(n.h1,null,"테이블 추가작업"),"\n",r.createElement(n.p,null,"회원의 휴대번호 이력 관리 테이블"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"언제 데이터 추가?","\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"최초 member 가입시 추가 (재가입자도 포함)"),"\n",r.createElement(n.li,null,"회원이 휴대번호 변경 완료 후 추가"),"\n"),"\n"),"\n",r.createElement(n.li,null,"테이블 추가 이전데이터는 어떻게 처리?\r\n1.탈퇴한 회원? => 이경우 이전 회원 정보는 탈퇴 표시 컬럼에 true 가 표시되고 새로운 회원 id 를 부여받음 (영향 없음)\r\n2.지금은 휴대번호가 꼭 입력된다 ,과거 데이터에 휴대번호가 없는 회원이 있다 => 휴대번호가 없는 회원?\r\n과거 데이터는 그대로 mobile 컬럼에 공백으로 저장\r\n휴대폰 번호 변경시 새 컬럼이 추가됨으로 member_id 로 특정 회원의 변경 이력을 볼 수 있다."),"\n"),"\n",r.createElement(n.h1,null,"mysql CREATE TABLE"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"CREATE TABLE IF NOT EXISTS member_cellphone_number_revisions(\r\n    id                            INT NOT NULL AUTO_INCREMENT,\r\n    member_id                     INT NOT NULL COMMENT 'member ID',\r\n    mobile                        VARCHAR(50) NOT NULL COMMENT '변경된 휴대번호',\r\n    created                       JSON NOT NULL,\r\n    PRIMARY KEY(id),\r\n    CONSTRAINT fk_member_cellphone_number_revisions_members\r\n        FOREIGN KEY (member_id)\r\n            REFERENCES members (id)\r\n);\n")),"\n",r.createElement(n.h1,null,"mysql SELECT 된 결과로 INSERT 하기"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"INSERT INTO 들어갈테이블명\r\n(컬럼명1, 컬럼명2, 컬럼명3)\r\nSELECT 컬럼명1, 컬럼명2, 컬럼명3\r\nFROM 조회할테이블명\n")),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"INSERT INTO member_cellphone_number_revisions\r\n(member_id, mobile, created)\r\nselect id as member_id, mobile , json_object(\r\n'id', '',\r\n'name', '',\r\n'datetime', DATE_FORMAT(NOW(),'%Y-%m-%d %h:%m:%s')\r\n) as created from  members as m\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?r.createElement(n,e,r.createElement(m,e)):m(e)},E=l(8804);function a(e){return r.createElement(E.Z,e,r.createElement(c,e))}E.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2022-09-07-mysql-add-revision-table-mdx-71fb48dbdf6f2897fca2.js.map
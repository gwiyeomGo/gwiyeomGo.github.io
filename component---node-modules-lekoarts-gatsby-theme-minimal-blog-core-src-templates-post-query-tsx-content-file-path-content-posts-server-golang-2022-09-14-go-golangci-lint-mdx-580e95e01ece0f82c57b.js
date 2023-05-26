"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9045],{1859:function(e,n,l){l.r(n),l.d(n,{Head:function(){return r.F},default:function(){return o}});var t=l(7294),a=l(1151);function c(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",ol:"ol",li:"li",h2:"h2"},(0,a.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,null,"배경"),"\n",t.createElement(n.p,null,"golang 으로 service 코드를 만들면서\n코드를 관리하는 lint 를 적용하기로 했다"),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://medium.com/daangn/golangci-lint%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EC%BD%94%EB%94%A9-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%84-%ED%9A%A8%EA%B3%BC%EC%A0%81%EC%9C%BC%EB%A1%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-4bd0e24e1bbd"},"당근마켓 플래폼에 적용 글"),"\n을 보고 진행했다"),"\n",t.createElement(n.h1,null,"설치"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"https://golangci-lint.run/usage/install/")),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"# binary will be $(go env GOPATH)/bin/golangci-lint\ncurl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.49.0\n\ngolangci-lint --version\n")),"\n",t.createElement(n.h1,null,"사용"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"golangci-lint run"),"을 실행"),"\n",t.createElement(n.h1,null,"구체적인 조건으로 주고싶다면.."),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://golangci-lint.run/usage/configuration/"},"프로젝트에 ",t.createElement(n.code,null,"golangci.yml")," 파일을 생성")),"\n",t.createElement(n.h1,null,"window 에서 설치하면서 발생했던 문제"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"shell 명령어여서 window 에서 gitbash 를 사용해서 설치"),"\n",t.createElement(n.li,null,"golang GOPATH 경로가 어디있는지 확인하고 해당 경로의 bin 에 golangci-lint.exe 파일이 생성됨"),"\n",t.createElement(n.li,null,"path 에 설치된 golangci-lint 가 있는 bin 경로를 추가 안하나ㅣ golangci 명령어를 찾아을 수 없다고 에러가 발생\n=> 환경변수 path 에 bin 경로를 추가함\n",t.createElement(n.code,null,"I found out the issue,the go/bin folder was not in the path"),"\n",t.createElement(n.a,{href:"https://github.com/golangci/golangci-lint/issues/648"},"git issues 찾아봄")),"\n"),"\n",t.createElement(n.h2,null,"책을 찾아보니"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?t.createElement(n,e,t.createElement(c,e)):c(e)},r=l(8804);function o(e){return t.createElement(r.Z,e,t.createElement(i,e))}r.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-09-14-go-golangci-lint-mdx-580e95e01ece0f82c57b.js.map
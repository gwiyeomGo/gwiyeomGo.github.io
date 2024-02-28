"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9385],{4:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.p},default:function(){return s}});var o=n(6540),r=n(8453);function l(e){const t=Object.assign({p:"p",h1:"h1",h3:"h3",pre:"pre",code:"code",h2:"h2",a:"a"},(0,r.RP)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"body 값이 어느 상황에 출력되지 않는지 문제 찾아보고 수정하기"),"\n",o.createElement(t.h1,null,"발견한 문제는"),"\n",o.createElement(t.p,null,"고사에렌에 401에러가 발생시 body 값이 출력됨\n고사에렌에 500에러가 발생시 body 값이 출력 X\n고사에렌에 400에러가 발생시 body 값이 출력 X"),"\n",o.createElement(t.p,null,"post api 를 호출했을 때 401 에러의 경우 body 가 출력된다.\n토큰이 만료된 상태에서 등록시 토큰이 만료되서 에러 발생 => 개발오류로 보냄\n401 에러가 나면 => 개발오류에 body 값이 출력된 post 오류 업무가 존재함\nbody 는 제대로 읽혀서 보내지고 있음"),"\n",o.createElement(t.h1,null,"내가 원하는 것은"),"\n",o.createElement(t.p,null,"400,500 상태 코드의 에러 발생시 body 값이 출력되었으면 한다"),"\n",o.createElement(t.h1,null,"두 경우를 디버깅하면서 알게된 점은"),"\n",o.createElement(t.p,null,"400번의 경우 CustomHTTPErrorHandler 를 오기 전\nCreateDatabaseContext 미들웨어를 들리고\nCreateDatabaseContext 미들웨어 에서 request 의 Body 의 N 이 0이 된다\n이 상황을 거친 request Body 를 readAll 하면 EOF 라는 에러가 발생한다\n=> req.Body 를 읽을수 없다"),"\n",o.createElement(t.p,null,"401번의 경우 CustomHTTPErrorHandler 를 오기 전 CreateDatabaseContext를 들리지 않음\nCreateDatabaseContext를 에서 next 를 들리면\nsawEOF = true 로 바뀜\nreq.Body 를 읽을 수 없다"),"\n",o.createElement(t.h3,null,"idea"),"\n",o.createElement(t.p,null,"*req 가 사라지기 전에 body 값을 context 에 넣는다\n*req 가 사라지기 전에 body 값을 log 에 넣는다?"),"\n",o.createElement(t.pre,null,o.createElement(t.code,null,'//400,500 에러 시 body 를 알 수 없어서 body 를 Context 에 추가하는 코드\nvar bodyBytes []byte\nif req.Body != nil {\n\tbodyBytes, _ = ioutil.ReadAll(req.Body)\n}\n// Restore the io.ReadCloser to its original state\nreq.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))\nctx = context.WithValue(ctx, config.ContextRequestBody, string(bodyBytes))\nc.SetRequest(req.WithContext(ctx))\n\n\nbody := req.Context().Value(config.ContextRequestBody)\nstr := fmt.Sprintf("%v", body)\n\n\nContextRequestBody= "REQUEST_BODY"\n\n')),"\n",o.createElement(t.p,null,"context 에는 db성보와 userclaim 만 저장한다"),"\n",o.createElement(t.h1,null,"여기에 body 값을 넣는것은 옳은 것 일까요?"),"\n",o.createElement(t.p,null,"context 를 번역하면 문맥,흐름으로\n웹과 서버의 통신을 하는데에 필요한 데이터나 값을 이 context안에 넣고 필요할때 뽑아 쓰는 형식\n이 컨텍스트에 하나의 웹 요청이 처리되는 동안\n유지해야 할 값을 담아놓고\n필요한 곳에서 사용하면 된다"),"\n",o.createElement(t.p,null,"시도1\n고사이렌이 실행되는 과정에서 err 가 났고\nrequest 를 내가 예상할 수 없는 장소에서 사용할 수 있으니\nbody 값을 읽는 코드 다음에\nbody 값을 다시 넣어주는 코드도 추가해 보기로함"),"\n",o.createElement(t.p,null,"확인은 어떻게?\ndev 에 코드를 추가 배포 후 dev 에서 400번 에러를 발생시킴\ndev 에 코드를 추가 배포 후 dev 에서 500번 에러를 발생시킴"),"\n",o.createElement(t.p,null,"=> 실패"),"\n",o.createElement(t.p,null,"시도 2\n400번의 경우 CustomHTTPErrorHandler 를 오기 전\nCreateDatabaseContext 미들웨어를 들리고\nnext(c) 를 거치면 reqeust.Body 를 읽을 수 없도록 제한한다"),"\n",o.createElement(t.h2,null,"참고"),"\n",o.createElement(t.p,null,"*Context\n",o.createElement(t.a,{href:"https://jaehue.github.io/post/how-to-use-golang-context/"},"https://jaehue.github.io/post/how-to-use-golang-context/"),"\n",o.createElement(t.a,{href:"https://myungsworld.tistory.com/13"},"https://myungsworld.tistory.com/13"),"\n*body 읽는법\n",o.createElement(t.a,{href:"https://jusths.tistory.com/65"},"https://jusths.tistory.com/65")),"\n",o.createElement(t.pre,null,o.createElement(t.code,null,"buf := make([]byte, req.ContentLength)\nif _, err := io.ReadFull(req.Body, buf); err == io.EOF {\n\tfmt.Println( io.ErrUnexpectedEOF)\n} else if err != nil {\n\tfmt.Println( io.ErrUnexpectedEOF)\n}\n")),"\n",o.createElement(t.h2,null,"20230313"),"\n",o.createElement(t.p,null,"defer req.Body.Close() 닫아?\n",o.createElement(t.a,{href:"https://stackoverflow.com/questions/42525499/where-to-put-defer-req-body-close"},"https://stackoverflow.com/questions/42525499/where-to-put-defer-req-body-close")),"\n",o.createElement(t.p,null,"*기타\n",o.createElement(t.a,{href:"https://mingrammer.com/translation-go-walkthrough-io-package/"},"https://mingrammer.com/translation-go-walkthrough-io-package/"),"\n",o.createElement(t.a,{href:"https://www.geeksforgeeks.org/io-limitreader-function-in-golang-with-examples/"},"https://www.geeksforgeeks.org/io-limitreader-function-in-golang-with-examples/"),"\n",o.createElement(t.a,{href:"https://velog.io/@yeonjoo7/go%EC%96%B8%EC%96%B4%EC%9D%98-io%ED%8C%A8%ED%82%A4%EC%A7%80"},"https://velog.io/@yeonjoo7/go%EC%96%B8%EC%96%B4%EC%9D%98-io%ED%8C%A8%ED%82%A4%EC%A7%80")))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?o.createElement(t,e,o.createElement(l,e)):l(e)},c=n(7292);function s(e){return o.createElement(c.A,e,o.createElement(a,e))}c.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-09-02-go-read-request-body-mdx-5fa0909ced2942f84ebe.js.map
"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[540],{9233:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.p},default:function(){return u}});var l=t(6540),r=t(8453);function c(e){const n=Object.assign({h3:"h3",a:"a",blockquote:"blockquote",p:"p",pre:"pre",code:"code",h2:"h2",ol:"ol",li:"li",h1:"h1"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,l.createElement(n.a,{href:"https://echo.labstack.com/"},"ehco프레임워크")," 를 사용하면서 사용했던 내용 기록"),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"ctx ? ctx echo.Context"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"     Context represents the context of the current HTTP request. It holds request and response objects, path, path parameters, data and registered handler.\n")),"\n",l.createElement(n.h3,null,"ctx가 필요한 이유"),"\n",l.createElement(n.p,null,"인터페이스?\n팩토리를 통해서 의존성주입\n폴더만들때 복수?사상의차이\n팩토리난에 스트럭트 이름은 new로시작\n쉬프투 f6\n싱글톤\n리시버\n목객체?mock\n덕타이핑\n의존성을 느슨하게\nmock을 자동으로 준다"),"\n",l.createElement(n.p,null,"단위테스트\ns-r2"),"\n",l.createElement(n.h2,null,"db를 dev에 만들고"),"\n",l.createElement(n.p,null,"echo 가 하는일이\nrequest,response 를 할때 중간에 middleware가 잡아주는 역할을 한다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.Use"),"의 argument로 넣은 함수가 moddleware"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.HTTPErrorHandler")," 에러가 발생하면 발동한다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.Pre")," 는 url 에 /가 있다면 빼주는 역할"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"middleware.CORS")," 받을 메소드를 지정한다"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.Validator")," validator 지정 => registernumber 등등 코드에는 RegisterValidation 함수를 넣어 커스톰 해줬다"),"\n",l.createElement(n.p,null,"main() config ,xormDb(db설정 셋팅) 는 1번만 설정된다"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.Use(handel.Create~)"),"\nNewSession =>  트랜젝션 시작 (세션을 열어준다)"),"\n",l.createElement(n.p,null,"echo의 context 는  결국 변수다"),"\n",l.createElement(n.p,null,"request 에는 많은 정보가  잇고 이것을 echo가 담아놓은것"),"\n",l.createElement(n.p,null,"echo 자체에 토큰을 파싱해주는 parsendToken.Claims.~"),"\n",l.createElement(n.p,null,"토큭 파싱한 정보를 우리 코드에 설정"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"CreateTokenWithExpire"),"\n처음 접근할때 memberId있는거 확인하고 토큰을 생성해 프론트로 보낸다\n서버쪽 코드에서 cookie가 있는지도 확인하는 코드도 있다"),"\n",l.createElement(n.p,null,"routing"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.Start")," webserver start"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Logger")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"middleware.ReauestId")," call마다 유니크한 id 를 생성한다."),"\n",l.createElement(n.p,null,"JWTWithConfig => jwt 토큰 확인\nsetSession => echo가 token을 분석해 꺼내서 user consetx로\nsetXormSession으로 이름 변경"),"\n",l.createElement(n.p,null,"get할때는 session.Begin 을 안한다 sessioin 하면 비용 많이듬"),"\n",l.createElement(n.p,null,"db session 과 log session 같이 만듬"),"\n",l.createElement(n.p,null,"de seesion은 중간 오류시 rollback,commit\nlog session은 끝까지 간다"),"\n",l.createElement(n.p,null,"context.DB(c) => 이런식으로"),"\n",l.createElement(n.p,null,"exp 등 고정된 key값을 echo가 자동으로 알고 분석"),"\n",l.createElement(n.p,null,"echo\nContext 안에는\nUser\nRequest\nResponse 가 있는데 자동으로 echo가 넣음"),"\n",l.createElement(n.p,null,'setSession에서 c.Get("user").(*jwt.Token) 으로 형변환'),"\n",l.createElement(n.p,null,"rawClaims 는 map으로 되어있어서 struct 로 바꿔주는 작업이 MapToStruct 를 만들어 쓰기로힘"),"\n",l.createElement(n.p,null,"request_id => echo기능으로 자동으로 얻음"),"\n",l.createElement(n.p,null,"function에서 function에서 값을 넘기려면 파라미터에 추가해서 넣어야 하는데\necho가 context에 넣어 줌으로 모든 function으로 이동이 자유롭도록\n",l.createElement(n.code,null,"getUserClaim")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"serLogger"),"\n",l.createElement(n.code,null,"c.Set")," context에 저장한다는 뜻"),"\n",l.createElement(n.p,null,"기존에 log.infln 으로 했는데"),"\n",l.createElement(n.p,null,"requst _id를 logger에 같이 넣고 싶어서"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"l := logrus.WithFields )\n\n")),"\n",l.createElement(n.p,null,'사용할때는 context.Log(c).Token("")'),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"e.HideBanner")),"\n",l.createElement(n.p,null,"실행시 echo 메세지 지움"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,".bodyDump")," 를 하면 request ,response 정보모두 한눈에 log가 찍힘 => 이건 더 테스트"),"\n",l.createElement(n.p,null,"이제는 controller 대신 handler 로 이름 바꿔서 쓰다"),"\n",l.createElement(n.p,null,"assets => html 이나 이미지"),"\n",l.createElement(n.p,null,"common은 공통 func 넣을 예정"),"\n",l.createElement(n.p,null,"비즈니스로직은 handler"),"\n",l.createElement(n.p,null,"context.Log log 가져옴\ncontext.DB\n등 쉽게 가져오게 하려고 만듬"),"\n",l.createElement(n.p,null,"폴더 이름\norg\ngoods\napplication\nreports"),"\n",l.createElement(n.p,null,"enum?"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"CRUD 에 썼던 DTO => OrgCUD 에 공통함수"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Query  =>orgQuery => get"),"\n"),"\n"),"\n",l.createElement(n.p,null,"dto를 만들지 않고 query에서는 *로 찾지 않고 필요한거 컬럼에 넣어서 해야 한다"),"\n",l.createElement(n.p,null,"interface적용"),"\n",l.createElement(n.p,null,"handerInterface\nRouteDefault"),"\n",l.createElement(n.p,null,"Org",".Init() 는 crud\\"),"\n",l.createElement(n.p,null,"internal에 entity 들어가 있음"),"\n",l.createElement(n.p,null,"dto service rpository 합친게 service 폴더"),"\n",l.createElement(n.p,null,"private public  handle까지 오픈하고 싶은데.. 그럼 딴데서 사용 x\ninternal 안에 있는 pulbic 대문자로 쓰더라도\nmoddleware에서는 부를 수 없다\nhandle 에서는 부를 수 잇다\n폴더 구조의 상위에서만 부를 수 있다"),"\n",l.createElement(n.p,null,"service 는 형제는 못부르고 부모handel만 부를 수 있다\n나머지는 다 안됨"),"\n",l.createElement(n.p,null,"entiyInterface"),"\n",l.createElement(n.h1,null,"echo PathParamsBinder"),"\n",l.createElement(n.p,null,"4/18"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'var application service.ApplicationRepository\n\n\tvar id int64\n\tvar key int64\n\tif err := echo.PathParamsBinder(c).Int64("id", &id).Int64("key", &key).BindError(); err != nil {\n\t\treturn err\n\t}\n')),"\n",l.createElement(n.p,null,"#참고\n",l.createElement(n.a,{href:"https://mingrammer.com/translation-go-walkthrough-encoding-json-package/"},"https://mingrammer.com/translation-go-walkthrough-encoding-json-package/"),"\n",l.createElement(n.a,{href:"https://github.com/labstack/echo/blob/master/binder_test.go"},"https://github.com/labstack/echo/blob/master/binder_test.go")))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},o=t(7292);function u(e){return l.createElement(o.A,e,l.createElement(a,e))}o.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2021-08-19-go-echo-framework-mdx-a184758582f0df621fc2.js.map
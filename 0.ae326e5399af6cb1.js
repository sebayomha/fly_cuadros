"use strict";(self.webpackChunkfly_cuadros=self.webpackChunkfly_cuadros||[]).push([[0],{6e3:(W,C,i)=>{i.r(C),i.d(C,{PaintingCatalogModule:()=>G});var x=i(4466),m=i(9808),u=i(1402),t=i(5e3);let U=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail-purchase"]],decls:1,vars:0,template:function(n,a){1&n&&t._uU(0,"detail purhcase woooorsk")},styles:[""]}),e})();var O=i(7579),M=i(9300),v=i(4004),F=i(3900),R=i(2722),g=(()=>((g||(g={})).CONFIRM="CONFIRMAR",g))(),p=i(3075),d=i(7399),c=i(9224),T=i(4623),A=i(508),h=i(7322),S=i(4107),q=i(4834),Z=i(7423);function b(e,o){if(1&e&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&e){const n=o.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n.tamanio," ")}}let _=(()=>{class e{constructor(n,a,s){this.data=n,this._bottomSheetRef=a,this.formBuilder=s,this.purchaseForm=this.formBuilder.group({measure:[null,p.kI.required],price:null}),this.painting=n,this.measures=n.medidas}measureChange({value:n}){this.purchaseForm.get("price").patchValue(n.precio)}confirm(){this._bottomSheetRef.dismiss({event:g.CONFIRM,data:Object.assign(Object.assign({},this.purchaseForm),{painting:this.painting})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.OG),t.Y36(d.oL),t.Y36(p.qu))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-purchase"]],decls:33,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"purchase-card"],[1,"purchase-list"],["mat-card-avatar","",3,"src"],["mat-list-item",""],["mat-line",""],[2,"margin-top","24px"],["formControlName","measure",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"price-container"],["mat-line","",1,"price"],[2,"margin","0 16px"],["mat-raised-button","","type","submit","color","primary",1,"full-width",3,"disabled"],[3,"value"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.confirm()}),t.TgZ(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Confirmar reserva"),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"mat-list",2)(7,"mat-list-item"),t._UZ(8,"img",3),t.TgZ(9,"a",4)(10,"span",5),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-list-item")(13,"mat-form-field",6)(14,"mat-label"),t._uU(15,"Tama\xf1o"),t.qZA(),t.TgZ(16,"mat-select",7),t.NdJ("selectionChange",function(r){return a.measureChange(r)}),t.YNc(17,b,2,2,"mat-option",8),t.qZA(),t.TgZ(18,"mat-error"),t._uU(19,"Campo requerido"),t.qZA()()(),t.TgZ(20,"mat-list-item")(21,"div",9)(22,"span",5),t._uU(23,"Precio final"),t.qZA(),t.TgZ(24,"span",10),t._uU(25),t.ALo(26,"currency"),t.ALo(27,"currency"),t.qZA()()()(),t._UZ(28,"mat-divider")(29,"div"),t.qZA(),t.TgZ(30,"mat-card-actions",11)(31,"button",12),t._uU(32,"CONFIRMAR"),t.qZA()()()()),2&n&&(t.Q6J("formGroup",a.purchaseForm),t.xp6(8),t.Q6J("src",a.painting.imagenSeleccionada.src,t.LSH),t.xp6(3),t.AsE("",a.painting.nombre," - ",a.painting.imagenSeleccionada.titulo,""),t.xp6(6),t.Q6J("ngForOf",a.measures),t.xp6(8),t.Oqu(t.lcZ(26,7,a.purchaseForm.get("price").value)||t.lcZ(27,9,"0")),t.xp6(6),t.Q6J("disabled",a.purchaseForm.invalid))},directives:[p._Y,p.JL,p.sg,c.a8,c.dk,c.n5,c.dn,T.i$,T.Tg,c.kc,A.X2,h.KE,h.hX,S.gD,p.JJ,p.u,m.sg,A.ey,h.TO,q.d,c.hq,Z.lW],pipes:[m.H9],styles:[".purchase-card[_ngcontent-%COMP%]{box-shadow:none!important;padding-left:0!important;padding-right:0!important;padding-bottom:0!important}mat-list-item[_ngcontent-%COMP%]{display:flex!important;gap:10px}.purchase-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{margin-top:16px}.price-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:20px}.price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:500}"]}),e})();var P=i(7261),D=i(8099),I=i(7238),J=i(9287);function B(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div")(1,"button",5,6),t.NdJ("mouseenter",function(s){return s.stopImmediatePropagation()})("mouseleave",function(s){return s.stopImmediatePropagation()})("click",function(){return t.CHM(n),t.MAs(2).toggle()}),t._uU(3," COPIAR "),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("color","warn")("cdkCopyToClipboard",n.data.url)}}let N=(()=>{class e{constructor(n){this.data=n}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(P.qD))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-result"]],decls:7,vars:2,consts:[[1,"result-wrapper"],[1,"result-wrapper-text"],[1,"success-color"],[3,"innerHTML"],[4,"ngIf"],["mat-button","","matTooltip","Copiado!","matTooltipHideDelay","300",3,"color","cdkCopyToClipboard","mouseenter","mouseleave","click"],["tooltip","matTooltip"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span")(3,"mat-icon",2),t._uU(4,"done"),t.qZA()(),t._UZ(5,"span",3),t.qZA(),t.YNc(6,B,4,2,"div",4),t.qZA()),2&n&&(t.xp6(5),t.Q6J("innerHTML",a.data.message,t.oJD),t.xp6(1),t.Q6J("ngIf",a.data.url))},directives:[D.Hw,m.O5,Z.lW,I.gM,J.i3],styles:[".result-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.result-wrapper-text[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}"]}),e})();var y=i(7018),Q=i(7985),j=i(5651);let E=(()=>{class e{constructor(n,a){this.db=n,this.measuresService=a}getPaintings(n){return this.db.collection(y.M.PAINTINGS,a=>a.where("tipo_cuadro","==",n)).valueChanges({idField:"id"}).pipe((0,v.U)(a=>a.map(s=>{var r,l;return Object.assign(Object.assign({},s),{medidas:null!==(l=null===(r=this.measuresService.measures$.getValue())||void 0===r?void 0:r.filter(V=>V.tipo===s.tipo_cuadro))&&void 0!==l?l:[]})})))}getBoxDetail(n){return this.db.collection(y.M.BOX_TYPES).doc(n).valueChanges()}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(Q.ST),t.LFG(j.W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=i(6688),L=i(5381);function $(e,o){if(1&e&&(t.TgZ(0,"section")(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",12),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"p",13),t._uU(7),t.qZA(),t._UZ(8,"div"),t.qZA()()()),2&e){const n=o.ngIf;t.xp6(4),t.Oqu(null==n?null:n.nombre),t.xp6(3),t.hij(" ",n.descripcion," ")}}function H(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-image-card",14),t.ynx(2,15),t.TgZ(3,"button",16),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw().openReservationConfirmation(r)}),t._uU(4,"RESERVAR"),t.qZA(),t.BQk(),t.qZA(),t.BQk()}if(2&e){const n=o.$implicit;t.xp6(1),t.Q6J("cardInfo",n)("showRipple",!1)}}const w=[{path:"",data:{animation:"PaintingPage"},children:[{path:"",component:(()=>{class e{constructor(n,a,s,r,l){this.activatedRoute=n,this.bottomSheet=a,this.paintingService=s,this.snackBar=r,this.renderer2=l,this.onDestroy$=new O.x,this.paintingCode=n.snapshot.paramMap.get("code")}ngOnInit(){this.getPaintings(),this.getBoxDetail()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}openReservationConfirmation(n){this.bottomSheet.open(_,{data:n}).afterDismissed().pipe((0,M.h)(a=>a&&a.event===g.CONFIRM),(0,v.U)(a=>a.data),(0,F.w)(()=>this.snackBar.openFromComponent(N,{data:{message:'Reserva confirmada! \n          Hac\xe9 click en <strong style="letter-spacing: 0.5px;"> Copiar </strong> y envialo a \n          <a target="_blank" class="link-color" href="https://www.instagram.com/flycuadros_oficial/">FlyCuadros</a>',status:"success",url:"una-url-que-tengo-que-generar"},panelClass:"custom-snackbar"}).afterOpened()),(0,R.R)(this.onDestroy$)).subscribe(()=>{})}closeSnackbar(){this.snackBar.dismiss()}onTeamChanges(n){console.log(n)}getPaintings(){this.paintings$=this.paintingService.getPaintings(this.paintingCode)}getBoxDetail(){this.boxDetail$=this.paintingService.getBoxDetail(this.paintingCode)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.gz),t.Y36(d.ch),t.Y36(E),t.Y36(P.ux),t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-painting-catalog"]],decls:61,vars:8,consts:[[4,"ngIf"],[1,"filter-section"],[3,"multiple","selectable","change"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116649/aldosivi.png"],["color","primary"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116700/argentinos-juniors.png"],["color","accent"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116701/arsenal.png"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116650/atletico-tucuman.png"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116702/banfield.png"],[1,"image-container"],[4,"ngFor","ngForOf"],[2,"font-size","32px"],[2,"margin-top","16px","font-size","16px"],[2,"flex","0 1 33%",3,"cardInfo","showRipple"],["slot","actions"],["mat-raised-button","","color","primary",1,"full-width",3,"click"]],template:function(n,a){1&n&&(t.YNc(0,$,9,2,"section",0),t.ALo(1,"async"),t.TgZ(2,"section",1)(3,"mat-chip-list",2),t.NdJ("change",function(r){return a.onTeamChanges(r)}),t.TgZ(4,"mat-chip"),t._UZ(5,"img",3),t.qZA(),t.TgZ(6,"mat-chip",4),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"mat-chip",6),t._UZ(9,"img",7),t.qZA(),t.TgZ(10,"mat-chip",6),t._UZ(11,"img",8),t.qZA(),t.TgZ(12,"mat-chip",6),t._UZ(13,"img",9),t.qZA(),t.TgZ(14,"mat-chip"),t._UZ(15,"img",3),t.qZA(),t.TgZ(16,"mat-chip",4),t._UZ(17,"img",5),t.qZA(),t.TgZ(18,"mat-chip",6),t._UZ(19,"img",7),t.qZA(),t.TgZ(20,"mat-chip",6),t._UZ(21,"img",8),t.qZA(),t.TgZ(22,"mat-chip",6),t._UZ(23,"img",9),t.qZA(),t.TgZ(24,"mat-chip"),t._UZ(25,"img",3),t.qZA(),t.TgZ(26,"mat-chip",6),t._UZ(27,"img",8),t.qZA(),t.TgZ(28,"mat-chip",6),t._UZ(29,"img",9),t.qZA(),t.TgZ(30,"mat-chip"),t._UZ(31,"img",3),t.qZA(),t.TgZ(32,"mat-chip",6),t._UZ(33,"img",8),t.qZA(),t.TgZ(34,"mat-chip",6),t._UZ(35,"img",9),t.qZA(),t.TgZ(36,"mat-chip"),t._UZ(37,"img",3),t.qZA(),t.TgZ(38,"mat-chip",6),t._UZ(39,"img",8),t.qZA(),t.TgZ(40,"mat-chip",6),t._UZ(41,"img",9),t.qZA(),t.TgZ(42,"mat-chip"),t._UZ(43,"img",3),t.qZA(),t.TgZ(44,"mat-chip",6),t._UZ(45,"img",8),t.qZA(),t.TgZ(46,"mat-chip",6),t._UZ(47,"img",9),t.qZA(),t.TgZ(48,"mat-chip"),t._UZ(49,"img",3),t.qZA(),t.TgZ(50,"mat-chip",6),t._UZ(51,"img",8),t.qZA(),t.TgZ(52,"mat-chip",6),t._UZ(53,"img",9),t.qZA(),t.TgZ(54,"mat-chip"),t._UZ(55,"img",3),t.qZA(),t.TgZ(56,"mat-chip"),t._UZ(57,"img",3),t.qZA()()(),t.TgZ(58,"div",10),t.YNc(59,H,5,2,"ng-container",11),t.ALo(60,"async"),t.qZA()),2&n&&(t.Q6J("ngIf",t.lcZ(1,4,a.boxDetail$)),t.xp6(3),t.Q6J("multiple",!1)("selectable",!0),t.xp6(56),t.Q6J("ngForOf",t.lcZ(60,6,a.paintings$)))},directives:[m.O5,c.a8,c.dk,c.n5,c.dn,f.qn,f.HS,f.EC,m.sg,L.Y,Z.lW],pipes:[m.Ov],styles:[".image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:40px}@media (max-width: 800px){.image-container[_ngcontent-%COMP%]{flex-direction:column}}.filter-section[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px}.mat-chip[_ngcontent-%COMP%]{padding:0!important}.mat-chip-avatar[_ngcontent-%COMP%]{width:32px!important;height:32px!important}"]}),e})()},{path:":code",component:U}]}];let X=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(w)],u.Bz]}),e})();var z=i(4872);let G=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[m.ez,X,x.m,z.q]]}),e})()}}]);
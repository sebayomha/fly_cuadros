"use strict";(self.webpackChunkfly_cuadros=self.webpackChunkfly_cuadros||[]).push([[700],{2700:(w,f,e)=>{e.r(f),e.d(f,{PaintingCatalogModule:()=>L});var y=e(4466),c=e(9808),g=e(1402),P=e(7579),U=e(9300),O=e(4004),C=e(3900),M=e(2722),l=(()=>((l||(l={})).CONFIRM="CONFIRMAR",l))(),m=e(3075),u=e(7399),t=e(5e3),r=e(9224),v=e(4623),T=e(508),d=e(7322),R=e(4107),q=e(4834),h=e(7423);function F(i,o){if(1&i&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&i){const n=o.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n.tamanio," ")}}let S=(()=>{class i{constructor(n,a,s){this.data=n,this._bottomSheetRef=a,this.formBuilder=s,this.purchaseForm=this.formBuilder.group({measure:[null,m.kI.required],price:null}),this.painting=n,this.measures=n.medidas}measureChange({value:n}){this.purchaseForm.get("price").patchValue(n.precio)}confirm(){this._bottomSheetRef.dismiss({event:l.CONFIRM,data:Object.assign(Object.assign({},this.purchaseForm.getRawValue()),{painting:this.painting})})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(u.OG),t.Y36(u.oL),t.Y36(m.qu))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-purchase"]],decls:33,vars:11,consts:[[3,"formGroup","ngSubmit"],[1,"purchase-card"],[1,"purchase-list"],["mat-card-avatar","",3,"src"],["mat-list-item",""],["mat-line",""],[2,"margin-top","24px"],["formControlName","measure",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"price-container"],["mat-line","",1,"price"],[2,"margin","0 16px"],["mat-raised-button","","type","submit","color","primary",1,"full-width",3,"disabled"],[3,"value"]],template:function(n,a){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return a.confirm()}),t.TgZ(1,"mat-card",1)(2,"mat-card-header")(3,"mat-card-title"),t._uU(4,"Confirmar reserva"),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"mat-list",2)(7,"mat-list-item"),t._UZ(8,"img",3),t.TgZ(9,"a",4)(10,"span",5),t._uU(11),t.qZA()()(),t.TgZ(12,"mat-list-item")(13,"mat-form-field",6)(14,"mat-label"),t._uU(15,"Tama\xf1o"),t.qZA(),t.TgZ(16,"mat-select",7),t.NdJ("selectionChange",function(p){return a.measureChange(p)}),t.YNc(17,F,2,2,"mat-option",8),t.qZA(),t.TgZ(18,"mat-error"),t._uU(19,"Campo requerido"),t.qZA()()(),t.TgZ(20,"mat-list-item")(21,"div",9)(22,"span",5),t._uU(23,"Precio final"),t.qZA(),t.TgZ(24,"span",10),t._uU(25),t.ALo(26,"currency"),t.ALo(27,"currency"),t.qZA()()()(),t._UZ(28,"mat-divider")(29,"div"),t.qZA(),t.TgZ(30,"mat-card-actions",11)(31,"button",12),t._uU(32,"CONFIRMAR"),t.qZA()()()()),2&n&&(t.Q6J("formGroup",a.purchaseForm),t.xp6(8),t.Q6J("src",a.painting.imagenSeleccionada.src,t.LSH),t.xp6(3),t.AsE("",a.painting.nombre," - ",a.painting.imagenSeleccionada.titulo,""),t.xp6(6),t.Q6J("ngForOf",a.measures),t.xp6(8),t.Oqu(t.lcZ(26,7,a.purchaseForm.get("price").value)||t.lcZ(27,9,"0")),t.xp6(6),t.Q6J("disabled",a.purchaseForm.invalid))},directives:[m._Y,m.JL,m.sg,r.a8,r.dk,r.n5,r.dn,v.i$,v.Tg,r.kc,T.X2,d.KE,d.hX,R.gD,m.JJ,m.u,c.sg,T.ey,d.TO,q.d,r.hq,h.lW],pipes:[c.H9],styles:[".purchase-card[_ngcontent-%COMP%]{box-shadow:none!important;padding-left:0!important;padding-right:0!important;padding-bottom:0!important}mat-list-item[_ngcontent-%COMP%]{display:flex!important;gap:10px}.purchase-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{margin-top:16px}.price-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:20px}.price-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:500}"]}),i})();var A=e(7261),J=e(8099),b=e(7238),I=e(9287);function _(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div")(1,"button",5,6),t.NdJ("mouseenter",function(s){return s.stopImmediatePropagation()})("mouseleave",function(s){return s.stopImmediatePropagation()})("click",function(){return t.CHM(n),t.MAs(2).toggle()}),t._uU(3," COPIAR "),t.qZA()()}if(2&i){const n=t.oxw();t.xp6(1),t.Q6J("color","warn")("cdkCopyToClipboard",n.data.url)}}let D=(()=>{class i{constructor(n){this.data=n}ngOnInit(){}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(A.qD))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-result"]],decls:7,vars:2,consts:[[1,"result-wrapper"],[1,"result-wrapper-text"],[1,"success-color"],[3,"innerHTML"],[4,"ngIf"],["mat-button","","matTooltip","Copiado!","matTooltipHideDelay","300",3,"color","cdkCopyToClipboard","mouseenter","mouseleave","click"],["tooltip","matTooltip"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span")(3,"mat-icon",2),t._uU(4,"done"),t.qZA()(),t._UZ(5,"span",3),t.qZA(),t.YNc(6,_,4,2,"div",4),t.qZA()),2&n&&(t.xp6(5),t.Q6J("innerHTML",a.data.message,t.oJD),t.xp6(1),t.Q6J("ngIf",a.data.url))},directives:[J.Hw,c.O5,h.lW,b.gM,I.i3],styles:[".result-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.result-wrapper-text[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}"]}),i})();var N=e(4463),B=e(5885),Z=e(6688),Y=e(5381);function Q(i,o){if(1&i&&(t.TgZ(0,"section")(1,"mat-card")(2,"mat-card-header")(3,"mat-card-title",12),t._uU(4),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"p",13),t._uU(7),t.qZA(),t._UZ(8,"div"),t.qZA()()()),2&i){const n=o.ngIf;t.xp6(4),t.Oqu(null==n?null:n.nombre),t.xp6(3),t.hij(" ",n.descripcion," ")}}function $(i,o){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-image-card",14),t.ynx(2,15),t.TgZ(3,"button",16),t.NdJ("click",function(){const p=t.CHM(n).$implicit;return t.oxw().openReservationConfirmation(p)}),t._uU(4,"RESERVAR"),t.qZA(),t.BQk(),t.qZA(),t.BQk()}if(2&i){const n=o.$implicit;t.xp6(1),t.Q6J("cardInfo",n)("showRipple",!1)}}const j=[{path:"",data:{animation:"PaintingPage"},children:[{path:"",component:(()=>{class i{constructor(n,a,s,p,x){this.activatedRoute=n,this.bottomSheet=a,this.paintingService=s,this.snackBar=p,this.purchaseService=x,this.onDestroy$=new P.x,this.paintingCode=n.snapshot.paramMap.get("code")}ngOnInit(){this.getPaintings(),this.getBoxDetail()}ngOnDestroy(){this.onDestroy$.next(),this.onDestroy$.complete()}openReservationConfirmation(n){this.bottomSheet.open(S,{data:n}).afterDismissed().pipe((0,U.h)(a=>a&&a.event===l.CONFIRM),(0,O.U)(a=>a.data),(0,C.w)(a=>this.purchaseService.storePurchase({idCuadro:a.painting.id,idMedida:a.measure.id,descripcionMedida:a.measure.tamanio,precio:a.price,imagen:a.painting.imagenSeleccionada.src,tipoImagen:a.painting.imagenSeleccionada.titulo})),(0,C.w)(()=>this.snackBar.openFromComponent(D,{data:{message:'Reserva confirmada! \n          Hac\xe9 click en <strong style="letter-spacing: 0.5px;"> Copiar </strong> y envialo a \n          <a target="_blank" class="link-color" href="https://www.instagram.com/flycuadros_oficial/">FlyCuadros</a>',status:"success",url:"una-url-que-tengo-que-generar"},panelClass:"custom-snackbar"}).afterOpened()),(0,M.R)(this.onDestroy$)).subscribe(()=>{})}closeSnackbar(){this.snackBar.dismiss()}onTeamChanges(n){console.log(n)}getPaintings(){this.paintings$=this.paintingService.getPaintings(this.paintingCode)}getBoxDetail(){this.boxDetail$=this.paintingService.getBoxDetail(this.paintingCode)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g.gz),t.Y36(u.ch),t.Y36(N.$),t.Y36(A.ux),t.Y36(B.B))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-painting-catalog"]],decls:61,vars:8,consts:[[4,"ngIf"],[1,"filter-section"],[3,"multiple","selectable","change"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116649/aldosivi.png"],["color","primary"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116700/argentinos-juniors.png"],["color","accent"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116701/arsenal.png"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116650/atletico-tucuman.png"],["matChipAvatar","","src","https://media.tycsports.com/files/2020/09/04/116702/banfield.png"],[1,"image-container"],[4,"ngFor","ngForOf"],[2,"font-size","32px"],[2,"margin-top","16px","font-size","16px"],[2,"flex","0 1 33%",3,"cardInfo","showRipple"],["slot","actions"],["mat-raised-button","","color","primary",1,"full-width",3,"click"]],template:function(n,a){1&n&&(t.YNc(0,Q,9,2,"section",0),t.ALo(1,"async"),t.TgZ(2,"section",1)(3,"mat-chip-list",2),t.NdJ("change",function(p){return a.onTeamChanges(p)}),t.TgZ(4,"mat-chip"),t._UZ(5,"img",3),t.qZA(),t.TgZ(6,"mat-chip",4),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"mat-chip",6),t._UZ(9,"img",7),t.qZA(),t.TgZ(10,"mat-chip",6),t._UZ(11,"img",8),t.qZA(),t.TgZ(12,"mat-chip",6),t._UZ(13,"img",9),t.qZA(),t.TgZ(14,"mat-chip"),t._UZ(15,"img",3),t.qZA(),t.TgZ(16,"mat-chip",4),t._UZ(17,"img",5),t.qZA(),t.TgZ(18,"mat-chip",6),t._UZ(19,"img",7),t.qZA(),t.TgZ(20,"mat-chip",6),t._UZ(21,"img",8),t.qZA(),t.TgZ(22,"mat-chip",6),t._UZ(23,"img",9),t.qZA(),t.TgZ(24,"mat-chip"),t._UZ(25,"img",3),t.qZA(),t.TgZ(26,"mat-chip",6),t._UZ(27,"img",8),t.qZA(),t.TgZ(28,"mat-chip",6),t._UZ(29,"img",9),t.qZA(),t.TgZ(30,"mat-chip"),t._UZ(31,"img",3),t.qZA(),t.TgZ(32,"mat-chip",6),t._UZ(33,"img",8),t.qZA(),t.TgZ(34,"mat-chip",6),t._UZ(35,"img",9),t.qZA(),t.TgZ(36,"mat-chip"),t._UZ(37,"img",3),t.qZA(),t.TgZ(38,"mat-chip",6),t._UZ(39,"img",8),t.qZA(),t.TgZ(40,"mat-chip",6),t._UZ(41,"img",9),t.qZA(),t.TgZ(42,"mat-chip"),t._UZ(43,"img",3),t.qZA(),t.TgZ(44,"mat-chip",6),t._UZ(45,"img",8),t.qZA(),t.TgZ(46,"mat-chip",6),t._UZ(47,"img",9),t.qZA(),t.TgZ(48,"mat-chip"),t._UZ(49,"img",3),t.qZA(),t.TgZ(50,"mat-chip",6),t._UZ(51,"img",8),t.qZA(),t.TgZ(52,"mat-chip",6),t._UZ(53,"img",9),t.qZA(),t.TgZ(54,"mat-chip"),t._UZ(55,"img",3),t.qZA(),t.TgZ(56,"mat-chip"),t._UZ(57,"img",3),t.qZA()()(),t.TgZ(58,"div",10),t.YNc(59,$,5,2,"ng-container",11),t.ALo(60,"async"),t.qZA()),2&n&&(t.Q6J("ngIf",t.lcZ(1,4,a.boxDetail$)),t.xp6(3),t.Q6J("multiple",!1)("selectable",!0),t.xp6(56),t.Q6J("ngForOf",t.lcZ(60,6,a.paintings$)))},directives:[c.O5,r.a8,r.dk,r.n5,r.dn,Z.qn,Z.HS,Z.EC,c.sg,Y.Y,h.lW],pipes:[c.Ov],styles:[".image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:40px}@media (max-width: 800px){.image-container[_ngcontent-%COMP%]{flex-direction:column}}.filter-section[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:16px}.mat-chip[_ngcontent-%COMP%]{padding:0!important}.mat-chip-avatar[_ngcontent-%COMP%]{width:32px!important;height:32px!important}"]}),i})()}]}];let E=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[g.Bz.forChild(j)],g.Bz]}),i})();var H=e(4872);let L=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[],imports:[[c.ez,E,y.m,H.q]]}),i})()}}]);
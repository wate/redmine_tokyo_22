/*
 * パスのパターン: /$
 * 挿入位置：全てのページのヘッダ
 * 種別：JavaScript
 * コメント：ログイン後の画面遷移
 */
(function(){
  const settingName = 'ログイン後の遷移先';
  let redirectURL = null;
  if (ViewCustomize.context.user.customFields.length >= 1) {
    $.each(ViewCustomize.context.user.customFields, function (index, customField) {
      if (settingName === customField.name && customField.value !== '') {
        redirectURL = customField.value;
      }
    });
  }
  isRedirect = false
  if(document.referrer){
    let parser = new URL(document.referrer);
    if(location.origin == parser.origin && parser.pathname === '/login'){
      //ログイン画面からの遷移
      isRedirect = true;
    }
  } else {
    //ブックマーク、または、URLを直接入力
    isRedirect = true;
  }
  //リダイレクト判定
  if (redirectURL && isRedirect) {
    location.href = redirectURL;
  }
})();

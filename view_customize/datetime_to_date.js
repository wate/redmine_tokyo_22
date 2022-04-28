/*
 * パスのパターン: /*
 * 挿入位置：全てのページのヘッダ
 * 種別：JavaScript
 * コメント：作成日・更新日を日付形式で表示する
 */
$(function(){
  $("td.created_on,td.updated_on,td.closed_on").each(function(){
        $(this).text($(this).text().split(' ')[0]);
  });
});

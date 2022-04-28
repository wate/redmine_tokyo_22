/*
 * パスのパターン: /issues/\d+$
 * 挿入位置：全てのページのヘッダ
 * 種別：JavaScript
 * コメント：ステータス切り替え時の進捗率の自動割り当て
 */
$(function () {
  $(document).on('change', '#issue_status_id', function () {
    let targetTracherIds = [

    ];
    let currentTrackerId = parseInt($('#issue_tracker_id').val());
    if ($('#issue_done_ratio').length > 0 && (targetTracherIds.length == 0 || targetTracherIds.includes(currentTrackerId))) {
      let curremtStatusId = parseInt($(this).val());
      let currentDoneRatio = parseInt($('#issue_done_ratio').val());
      switch (curremtStatusId) {
        case 1:    //未対応
          $('#issue_done_ratio').val('0');
          break;
        case 2:    //対応中
          if (currentDoneRatio === 0) {
            $('#issue_done_ratio').val('10');
          }
          break;
        case 3:    //対応済み
          $('#issue_done_ratio').val('90');
          break;
        case 5:    //完了
          $('#issue_done_ratio').val('100');
          break;
      }
    }
  });
});

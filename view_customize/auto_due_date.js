/*
 * パスのパターン: /issues/\d+$
 * 挿入位置：全てのページのヘッダ
 * 種別：JavaScript
 * コメント：ステータス切り替え時の期日自動割り当て
 */
$(function () {
  $(document).on('change', '#issue_status_id', function () {
    let getFormatDate = function (date) {
      return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    }
    let targetTracherIds = [

    ];
    let currentTrackerId = parseInt($('#issue_tracker_id').val());
    let limitAfterDay = 7;
    if ($('#issue_due_date').length > 0 && (targetTracherIds.length == 0 || targetTracherIds.includes(currentTrackerId))) {
      let curremtStatusId = parseInt($(this).val());
      let currentDueDate = $('#issue_due_date').val();
      let dueDate = new Date();
      let toDay = new Date();
      switch (curremtStatusId) {
        case 7:    //確認待ち
          limitAfterDay = 7;
          dueDate.setDate(toDay.getDate() + limitAfterDay);
          $('#issue_due_date').val(getFormatDate(dueDate));
          break;
        case 8:    //保留
          limitAfterDay = 60;
          dueDate.setDate(toDay.getDate() + limitAfterDay);
          $('#issue_due_date').val(getFormatDate(dueDate));
          break;
        case 9:    //経過観察
          limitAfterDay = 30;
          dueDate.setDate(toDay.getDate() + limitAfterDay);
          $('#issue_due_date').val(getFormatDate(dueDate));
          break;
      }
    }
  });
});

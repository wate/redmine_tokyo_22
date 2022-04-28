運用方法
==========================

チケットの登録から完了までの流れ
---------------------------

![チケットの登録から完了までの流れ](http://www.plantuml.com/plantuml/png/dP5TIiD058NViufim0tu8DsAe6_LYjRtt1bI4fE2Lgo6AjOVMsaXKX75fCR5d4n-Tk6T4GM389YdpBa_tpdSrbvtVRUxlzMsr7YXZWugnxLNrknw69HHmezLkvfGSJw2640In09IGdgWUHcbTVXejJkT7TkKfhea7Y1d4A-c9-RPF7tcMUNUWoP5ue0kGH4e0qqjcxzlaiP-UM0idD2iwK4k8TxrlzFdJQoNrqarwwlC1LrfaURgrYz6Jw1JvTqnjWXSzNRCQxXaclLWdbtKuwM6Yy2GVmdy5ndo1E96wzA7FFmCtBJWoeO5zHApNdWfmwtDxGth7sGLXtdIQw1-N4GCwg4FEjFnMapXctu0)

### [PlantUML](https://plantuml.com/ja/)や[diagrams.net](https://www.diagrams.net/)でRedmineの運用フロー図を作成しよう

* [PlantUML Online Server](http://www.plantuml.com/plantuml/uml/dP5TIiD058NViufim0tu8DsAe6_LYjRtt1bI4fE2Lgo6AjOVMsaXKX75fCR5d4n-Tk6T4GM389YdpBa_tpdSrbvtVRUxlzMsr7YXZWugnxLNrknw69HHmezLkvfGSJw2640In09IGdgWUHcbTVXejJkT7TkKfhea7Y1d4A-c9-RPF7tcMUNUWoP5ue0kGH4e0qqjcxzlaiP-UM0idD2iwK4k8TxrlzFdJQoNrqarwwlC1LrfaURgrYz6Jw1JvTqnjWXSzNRCQxXaclLWdbtKuwM6Yy2GVmdy5ndo1E96wzA7FFmCtBJWoeO5zHApNdWfmwtDxGth7sGLXtdIQw1-N4GCwg4FEjFnMapXctu0)
* [diagrams.net](https://app.diagrams.net/)

ステータスの遷移
---------------------------

![ステータスの遷移](status_transition.drawio.png)

トラッカー/チケット種別
---------------------------

各チケットがどのような内容のなのかを表してます。

### 要望

対応することが決まっていないチケットです。

### タスク

対応することが決まったチケットです。

### 不具合

不具合が発生したことを表すチケットです。

### 運用保守

運用保守レポートの作成など運用保守作業に関するチケットです。

ステータス
---------------------------

各チケットがどのような状態なのかを表してます。

### 未着手

まだ何も作業を開始していない状態を表しています。

### 対応中

現在対応しているの状態を表しています。

### 対応済み

対応が終了し、担当者がテストや確認中の状態を表しています。

### 確認待ち

仕様確認など何かしらの理由により確認待ちになっている状態を表しています。  
※このステータスに変更する場合は、同時に「担当者」を確認を実施する対象者に変更します。

### フィードバック

「確認待ち」の内容に対して回答を返した状態を表しています。  
※このステータスに変更する場合は、同時に「担当者」を元の担当者に変更します。

### 保留

何かしらの理由により作業が中断になっている状態を表しています。

### 経過観察

不具合の事象が再現しない/対応は終了しているが、何かしらの理由によりしばらく様子を見ないといけないなど、  
経過観察が必要な状態を表しています。

### 完了

チケットの対応が終わり完了した状態を表しています。  
※このステータスに変更する場合は、コメントに完了理由を記載しステータスを変更します。

### 破棄

何かしらの理由によりチケットの対応は行わなかった状態を表しています。  
※このステータスに変更する場合は、コメントに破棄理由を記載しステータスを変更します。


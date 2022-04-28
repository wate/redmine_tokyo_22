デプロイ方法
======================

システムのデプロイ方法は以下の通りです。

### 前提条件

デプロイ処理を実行するには以下のものが必要になります

* [Ansible](https://www.ansible.com/)
    * [インストールガイド](https://docs.ansible.com/ansible/latest/installation_guide/index.html)

### 補足説明

デプロイ処理の実行コマンド中の`${PROJECT_ROOT}`は  
システムのソースコードのルートディレクトリを指しています。

開発環境へのデプロイ
------------------------

以下のコマンドを実行します

```
cd ${PROJECT_ROOT}
ansible-playbook deploy.yml --limit develop
```

ステージング環境へのデプロイ
------------------------

以下のコマンドを実行します

```
cd ${PROJECT_ROOT}
ansible-playbook deploy.yml --limit staging
```

本番環境へのデプロイ
------------------------

以下のコマンドを実行します

```
cd ${PROJECT_ROOT}
ansible-playbook deploy.yml --limit production
```


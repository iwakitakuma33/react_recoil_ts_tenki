## 概要

本レポジトリは、Typescript/React/Recoil を使用した、検索した都市の天気予報を表示するSPAアプリケーションである。
以下の機能を実現する。

- 基本機能

1. Open Weather APIより都市を指定して、天気予報情報を取得する。
2. API レスポンスから1日の天気予報と週間の天気のグラフを生成する。

- URL(デプロイ先:netlify)

```
https://623b2f11fa03230094162ee8--luminous-pegasus-feb30b.netlify.app/
```
## スクリーンショット
  ![pc](https://github.com/iwakitakuma33/react_recoil_ts_tenki/blob/main/example.png?raw=true)



## 使用技術

- React
- Recoil
- axios
- Typescript
- Node.js

## セットアップ方法
1. yarnとnode のバージョンを合わせる(12.16.2以上)
   ```bash
	$ yarn -v
		1.22.10
    $ nodenv local 12.16.2
    $ node -v
      v12.16.2
   ```
2. npm モジュールのインストール
   ```bash
    $ yarn install
   ```
3. Open weather API の利用登録(無料)を行い、API Key を発行する。
   ```bash
    URL: https://openweathermap.org/
   ```
4. 取得したapi keyをプロジェクトルートの.envファイルに以下の内容を記載する。
   ```bash
    REACT_APP_API_KEY=xxxx
   ```
5. 実行
   ```bash
    $ yarn start 
    ブラウザでlcalhost:3000 にアクセスする。
   ```
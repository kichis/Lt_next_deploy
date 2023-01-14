# Lt_next_deploy
Next.jsアプリをAWSにデプロイする検証のためのレポジトリ

# デプロイまでの障害

## 1. Imageタグ
### 問題
静的HTMLをbuild & exportする際、Imageタグが含まれているとエラーになる
### 解決策
__画像最適化したい場合__
- デフォルトの画像最適化APIではなく別の画像最適化サービスを利用する。loader propsでURLを指定する。  
もしくは
- next-optimized-imagesライブラリ

__画像最適化しない場合__
- `<Image>` タグを使うなら、next.config.jsでunoptimizedを指定する。
- `<img>` タグを使うなら、特に対応不要（v13の場合。v11はeslintrcに要記述。）

__そもそも論__  
静的HTMLに拘らずSSRでも良いなら回避できる。（が、レンダリング方式の選定の方が優先度が高いと思われるのでほぼ解決策にはならない）

## 2. web serverのドキュメントルートにデプロイしないとデザインが崩れる（サブディレクトリ問題）

### 問題
デザインが崩れるのはweb serverで指定したドキュメントルートの直下にNextアプリを配置しない場合。  
これは、HTMLファイルで読み込むcssなどのファイルのパスがドキュメントルート直下に配置する前提で生成されているため。

```js
// 例
ドキュメントルート/sub/index.html // 実際のHTMLファイルの場所
ドキュメントルート/sub/_next/hoge.css // 実際のCSSファイルの場所

ドキュメントルート/_next/hoge.css // ビルド時に生成されているCSSファイルのパス
```

### 解決策
ドキュメントルートからNextアプリの間にあるディレクトリのパスをプリフィクスとして追加する。  
__CSSやjavascript__
- `/_next` 配下に設置されるファイル
- next.config.jsのassetPrefixを設定することで簡単にプリフィクスの追加が可能  
https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix    

__publicフォルダ内のファイル__
- next.config.jsのassetPrefixではプリフィクスは追加されない。
- 環境変数などを使用して自前でプリフィクスを差し込む。


## 3. 動的ルーティング

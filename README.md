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

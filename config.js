// 検索画面の接続設定。SupabaseのProject Settings → API にある値を設定する。
// 公開キー(anon / publishable)は「公開してよいキー」。ログインしないとDBは何も返さない（db/web_read.sql）。
// DATABASE_URL（書き込み用の接続文字列）や service_role キーは絶対にここへ書かないこと。
window.CTI_CONFIG = {
  SUPABASE_URL: "https://spijtqivnktfqmokwomm.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_-d62-o1gjthL9QUgLR3Y4A_YqwZdJjB",
};

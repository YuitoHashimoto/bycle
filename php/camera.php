<?php
    header("Access-Control-Allow-Origin:*");

    // 受信した画像データをデコード
    $params = json_decode(file_get_contents('php://input'), true);
    // $imgData = $params['data'];
    // $data = base64_decode($imgData);

    // // finfo_bufferでMIMEタイプを取得
    // $finfo = finfo_open(FILEINFO_MIME_TYPE);
    // $mime_type = finfo_buffer($finfo, $data);

    // // MIMEタイプをキーとした拡張子の配列
    // $extensions = [
    //     'image/gif' => 'gif',
    //     'image/jpeg' => 'jpg',
    //     'image/png' => 'png'
    // ];

    // //MIMEタイプから拡張子を選択してファイル名を作成
    // $filename = 'image.' . $extensions[$mime_type];

    // print ($imgData);
?>
<?php
    header("Access-Control-Allow-Origin:*");
    header("charset=utf-8");

    // 受信した画像データをデコード
    $params = json_decode(file_get_contents('php://input'), true);
    $imgData = $params['imgData'];
    $uName = $params['uName'];
    $json = [
        'filePath' => "",
        'uName' => "",
    ];
    $data = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $imgData));
 
    // finfo_bufferでMIMEタイプを取得
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mimeType = finfo_buffer($finfo, $data);
    finfo_close($finfo);

    //MIMEタイプから拡張子を選択してファイル名を作成
    $filename = "{$uName}_image.png";
    $filePath = "img/users/";
    $json['uName'] = $uName;
    $json['filePath'] = "{$filePath}{$filename}";

    file_put_contents("../{$filePath}{$filename}", $data);

    print json_encode($json);
?>
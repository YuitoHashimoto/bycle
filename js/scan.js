window.onload = () => {
    // Canvasの内容を画像として取り出す
    var video = document.createElement("video");
    const canvas = document.getElementById('canvas');
    console.log(canvas);
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // jsQRでチェック
    const code = jsQR(imageData.data, canvas.width, canvas.height);
    if (code) {
        console.log("Found QR code", code);
    }

    // カメラ設定
    const constraints = {
        audio: false,
        video: {
        width: canvas.width,
        height: canvas.height,
        facingMode: "user"
        }
        };
        const drawLine = (ctx, pos, options={color:"blue", size:5})=>{
        // 線のスタイル設定
        ctx.strokeStyle = options.color;
        ctx.lineWidth   = options.size;
        // 線を描く
        ctx.beginPath();
        ctx.moveTo(pos.topLeftCorner.x, pos.topLeftCorner.y);
        ctx.lineTo(pos.topRightCorner.x, pos.topRightCorner.y);
        ctx.lineTo(pos.bottomRightCorner.x, pos.bottomRightCorner.y);
        ctx.lineTo(pos.bottomLeftCorner.x, pos.bottomLeftCorner.y);
        ctx.lineTo(pos.topLeftCorner.x, pos.topLeftCorner.y);
        ctx.stroke();
        }
        const checkPicture = ()=>{
        // 映像をCanvasへ
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        // QRコード読取
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height);
        if( code ){
        // 存在する場合
        // 結果を表示
        console.log(code.data);  // 取得した文字列
        drawLine(ctx, code.location);       // 見つかった箇所に線を引く
        // video と canvas を入れ替え
        canvas.style.display = 'block';
        video.style.display = 'none';
        video.pause();
        } else{
        // 存在しない場合
        // 0.3秒後にもう一度チェックする
        setTimeout( () => {
        checkPicture();
        }, 300);
        }
        }
        // カメラを video と同期
        navigator.mediaDevices.getUserMedia(constraints)
        .then( (stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
        video.play();
        // QRコードのチェック開始
        checkPicture();
        };
        })
        .catch( (err) => {
        console.log(err.name + ": " + err.message);
    });
}

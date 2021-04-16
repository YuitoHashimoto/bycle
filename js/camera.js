window.onload = () => {
    const video  = document.getElementById('video'),
          canvas = document.getElementById('canvas'),
          userData = JSON.parse(localStorage.getItem('profileData'));
    
    console.log(video);
    
    // カメラ設定
    const constraints = {
      video: {
        facingMode: "environment"
      }
    };
  

    // カメラを<video>と同期
    navigator.mediaDevices.getUserMedia(constraints)
    .then( (stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    })
    .catch( (err) => {
      console.log(err.name + ": " + err.message);
    });
    
    // シャッターボタン
  
    document.getElementById('shutterBtn').addEventListener('click', () => {
        const ctx = canvas.getContext("2d");
  
        // 演出的な目的で一度映像を止めてSEを再生する
        video.pause();
        setTimeout( () => {
            video.play();
        }, 500);
  
        // canvasに画像を貼り付ける
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // canvasの画像データ取得s
        let base64 = canvas.toDataURL();
        let postData = JSON.stringify({
            imgData: base64,
            uName: userData.name,
        });

        // console.log(userData.name)

        // 取得した画像データをphpに送信
        fetch('./php/camera.php', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: postData
        })
        .then(response => {
          return response.json();
        })
        .then(data => { 
          console.log(data);
          userData.proofFront = data.filePath;
          localStorage.setItem('profileData', JSON.stringify(userData));
          location.href = "pictureRegi.html";
        })
        .catch(e => {
          console.error(e);
        });
    });
  };
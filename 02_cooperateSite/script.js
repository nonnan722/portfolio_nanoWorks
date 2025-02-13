$(function () {
  // ボタンアニメーション
  $(".btn").hover(
    function () {
      $(this).animate(
        {
          opacity: 0.5,
          marginLeft: 20,
        },
        100
      );
    },
    function () {
      $(this).animate({
        opacity: 1,
        marginLeft: 0,
      });
    }
  );
  // カルーセル
  $(".slide").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
  });

  // 送信ボタンクリック時の処理
  $("#submit").on("click", function (event) {
    // 送信をキャンセル
    event.preventDefault();

    // 入力チェックした結果をresultに格納
    let result = inputCheck();

    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    if (error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
      alert("お問い合わせを送信しました。");
    } else {
      // エラーメッセージを表示する
      alert(message);
    }
  });

  $("#name").blur(function () {
    inputCheck();
  });
  $("#furigana").blur(function () {
    inputCheck();
  });
  $("#email").blur(function () {
    inputCheck();
  });
  $("#tel").blur(function () {
    inputCheck();
  });
  $("#message").blur(function () {
    inputCheck();
  });
  $("#agree").blur(function () {
    inputCheck();
  });

  // 問合せフォームの入力チェック
  function inputCheck() {
    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = "";

    // エラーがなければfalse,エラーがあればtrue
    let error = false;

    // 名前の入力チェック
    if ($("#name").val() == "") {
      // エラーあり
      $("#name").css("background-color", "#f79999");
      error = true;
      message += "お名前を入力してください。\n";
    } else {
      // エラーなし
      $("#name").css("background-color", "#fafafa");
    }

    // フリガナの入力チェック
    if ($("#furigana").val() == "") {
      // エラーあり
      $("#furigana").css("background-color", "#f79999");
      error = true;
      message += "フリガナを入力してください。\n";
    } else {
      // エラーなし
      $("#furigana").css("background-color", "#fafafa");
    }

    // お問い合わせ内容の入力チェック
    if ($("#message").val() == "") {
      // エラーあり
      $("#message").css("background-color", "#f79999");
      error = true;
      message += "お問い合わせ内容を入力してください。\n";
    } else {
      // エラーなし
      $("#message").css("background-color", "#fafafa");
    }

    // メールの入力チェック
    if (
      $("#email").val() == "" ||
      $("#email").val().indexOf("@") == -1 ||
      $("#email").val().indexOf(".") == -1
    ) {
      // エラーあり
      $("#email").css("background-color", "#f79999");
      error = true;
      message +=
        "メールアドレスが未記入、または「@」「.」が含まれていません。\n";
    } else {
      // エラーなし
      $("#email").css("background-color", "#fafafa");
    }

    // 電話番号入力チェック（未入力はOK、未入力でない場合は-が必要）
    if ($("#tel").val() != "" && $("#tel").val().indexOf("-") == -1) {
      // エラーあり
      $("#tel").css("background-color", "#f79999");
      error = true;
      message += "電話番号に「-」が含まれていません。\n";
    } else {
      // エラーなし
      $("#tel").css("background-color", "#fafafa");
    }

    // 個人情報取り扱い入力チェック
    if ($("#agree").prop("checked") == false) {
      // エラーあり
      error = true;
      message +=
        "個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n";
    }

    // エラーの有無で送信ボタンを切替
    if (error == true) {
      $("#submit").attr("src", "images/button-submit.png");
    } else {
      $("#submit").attr("src", "images/button-submit-blue.png");
    }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message,
    };

    // 戻り値としてエラーがあるかどうかを返す
    return result;
  }
});

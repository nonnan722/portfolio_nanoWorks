$(function () {
  // MY Profile-マウスオーバーの時
  $(".title, a, .works-div img").hover(
    function () {
      $(this).animate({ opacity: 0.5 }, 300);
    },
    function () {
      $(this).animate({ opacity: 1.0 }, 300);
    }
  );

  // カルーセル
  $(".carousel").slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    dots: true,
  });

  // スクロールしたらTOPボタンを表示させる
  $(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
      $(".topBtn").fadeIn();
    } else {
      $(".topBtn").fadeOut();
    }
  });

  // スクロール時にセクションをフェードインする
  $(window).scroll(function () {
    // スクロール量を取得
    const scrollAmount = $(window).scrollTop();
    // ウィンドウの高さを取得
    const windowHeight = $(window).height();

    $("section").each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  });

  // Worksの画像をクリックすると拡大表示する
  $(".works img").click(function () {
    const imgSrc = $(this).attr("src");
    const imgAlt = $(this).attr("alt");
    $(".bigImg").attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $(".modal").fadeIn();
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $(".closeBtn").click(function () {
    $(".modal").fadeOut();
  });

  //スクロールを滑らかに
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });});


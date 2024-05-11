export const useKakaoSdk = () => {
  const shareKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_SDK_KEY);
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Linkbrary",
          description: "Linkbrary 입니다.",
          imageUrl:
            "https://i.pinimg.com/564x/32/37/f4/3237f4e43ece2c986825cbd4954275f4.jpg",
          link: {
            mobileWebUrl: "https://localhost:3000/",
            webUrl: "https://localhost:3000/",
          },
        },
        buttons: [
          {
            title: "자세히 보러 가기",
            link: {
              mobileWebUrl: "https://localhost:3000/",
              webUrl: "https://localhost:3000/",
            },
          },
        ],
      });
    }
  };

  return { shareKakao };
};

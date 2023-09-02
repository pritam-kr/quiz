export const getPlayingHistory = (data) => {
    if (!localStorage.getItem("board")) {
      localStorage.setItem(
        "board",
        JSON.stringify([data?.filter((item) => item.isAttended.length)])
      );
    } else {
      localStorage.setItem(
        "board",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("board")),
          data?.filter((item) => item.isAttended.length),
        ])
      );
    }
  };
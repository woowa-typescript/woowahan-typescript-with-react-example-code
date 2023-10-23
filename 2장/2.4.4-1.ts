type NoticePopupType = {
  title: string;
  description: string;
};

interface INoticePopup {
  title: string;
  description: string;
}
const noticePopup1: NoticePopupType = { /* ... */ };
const noticePopup2: INoticePopup = { /* ... */ };

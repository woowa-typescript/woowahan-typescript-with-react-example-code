const NoticeDialog: React.FC<NoticeDialogProps> = (props) => {
  if (“cookieKey” in props) return <NoticeDialogWithCookie {...props} />;
  return <NoticeDialogBase {...props} />;
};

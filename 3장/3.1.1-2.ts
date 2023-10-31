type FeedbackModalParams = {
    show: boolean;
    content: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    beforeOnClose?: () => void;
    action?: any;
  };
  
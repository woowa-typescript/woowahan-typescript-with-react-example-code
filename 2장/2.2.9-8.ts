let error: unknown;

if (error instanceof Error) {
  showAlertModal(error.message);
} else {
  throw Error(error);
}

componentDidMount() {
  this.props.updateCurrentPage(routeName);
  this.didFocusSubscription = this.props.navigation.addListener('focus', () => {/*
add focus handler to navigation */});
  this.didBlurSubscription = this.props.navigation.addListener('blur', () => {/* add
blur handler to navigation */});
}

componentWillUnmount() {
  if (this.didFocusSubscription != null) {
    this.didFocusSubscription();
  }
  if (this.didBlurSubscription != null) {
    this.didBlurSubscription();
  }
  if (this._screenCloseTimer != null) {
    clearTimeout(this._screenCloseTimer);
    this._screenCloseTimer = null;
  }
}

componentDidUpdate(prevProps) {
  if (this.props.currentPage != routeName) return;

  if (this.props.errorResponse != prevProps.errorResponse) {/* handle error response
*/}
  else if (this.props.logoutResponse != prevProps.logoutResponse) {/* handle logout
response */}
  else if (this.props.navigateByType != prevProps.navigateByType) {/* handle
navigateByType change */}

  // Handle other prop changes here
}
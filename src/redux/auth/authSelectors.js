export const getUserEmail = state => state.auth.user.email;
export const isLoggedIn = state => state.auth.isLoggedIn;
// export const isCurrentUserLoading = state => state.auth.isCurrentUserLoading;
export const getAuthError = state => state.auth.error;
export const isRefreshed = state => state.auth.isRefreshed;

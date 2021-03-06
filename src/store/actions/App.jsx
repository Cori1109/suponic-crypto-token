import * as actionTypes from "./ActionTypes";

export const setHeaderTitle = (payload) => ({
  type: actionTypes.SET_HEADER_TITLE,
  headerTitle: payload
});

export const setJoinedParam = (payload) => ({
  type: actionTypes.SET_JOINED_PARAM,
  joinedParam: payload
});

export const setTransferParam = (payload) => ({
  type: actionTypes.SET_TRANSFER_PARAM,
  transferParam: payload
});

export const setPartyList = (payload) => ({
  type: actionTypes.SET_PARTY_LIST,
  partyList: payload
});

export const setPublicParty = (payload) => ({
  type: actionTypes.SET_PUBLIC_PARTY,
  publicParty: payload
});

export const editParty = (payload) => ({
  type: actionTypes.EDIT_PARTY,
  party: payload
});

export const createParty = (payload) => ({
  type: actionTypes.CREATE_PARTY,
  party: payload
});

export const setBlackTheme = (payload) => ({
  type: actionTypes.SET_BLACK_THEME,
  isBlack: payload
});

export const setBalance = (payload) => ({
  type: actionTypes.SET_BALANCE,
  balance: payload
});

export const setLockBalance = (payload) => ({
  type: actionTypes.SET_LOCK_BALANCE,
  lockBalance: payload
});

export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  loading: payload
});

export const setLoadingDeposit = (payload) => ({
  type: actionTypes.SET_LOADING_DEPOSIT,
  loadingDeposit: payload
});

export const setIsDemo = (payload) => ({
  type: actionTypes.SET_IS_DEMO,
  isDemo: payload
});

export const setNotificationData = (payload) => ({
  type: actionTypes.SET_NOTIFICATION_DATA,
  notificationData: payload
})
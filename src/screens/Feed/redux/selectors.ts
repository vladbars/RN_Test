import { createSelector } from 'reselect'

const selectDomain = () => (state: { get: (arg: string) => any }) => state.get('feed')

const selectPosts = () => createSelector(selectDomain(), (substate) => substate.get('posts'))
const selectIsLoading = () =>
  createSelector(selectDomain(), (substate) => substate.get('isLoading'))

export { selectPosts, selectIsLoading }

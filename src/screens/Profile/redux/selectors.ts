import { createSelector } from 'reselect'

const selectDomain = () => (state: { get: (arg: string) => any }) => state.get('profile')

const selectProfiles = () => createSelector(selectDomain(), (substate) => substate.get('profiles'))

const selectProfile = () =>
  createSelector(selectDomain(), (substate) => (id: number) => {
    const profiles = substate.get('profiles')
    return id && profiles ? profiles[id] : null
  })
const selectIsLoading = () =>
  createSelector(selectDomain(), (substate) => substate.get('isLoading'))

export { selectProfile, selectProfiles, selectIsLoading }

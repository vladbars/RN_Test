import { createSelector } from 'reselect'

const selectDomain = () => (state: { get: (arg: string) => any }) => state.get('profile')

const selectProfile = () => createSelector(selectDomain(), (substate) => substate.get('profile'))

export { selectProfile }

import { createAction } from 'redux-act'

function createApiAction(name: string): any {
  const action: any = createAction(name)
  action.success = createAction(`${name}_SUCCESS`)
  action.error = createAction(`${name}_ERROR`)
  return action
}

export { createApiAction }

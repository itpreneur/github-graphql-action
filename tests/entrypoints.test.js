const { Toolkit } = require('actions-toolkit')

describe('Your action name', () => {
  let action, tools

  // Mock Toolkit.run to define `action` so we can call it
  Toolkit.run = jest.fn((actionFn) => { action = actionFn })
  // Load up our entrypoint file
  require('../entrypoint.js')

  beforeEach(() => {
    // Create a new Toolkit instance
    tools = new Toolkit()
    // Mock methods on it!
    tools.exit.success = jest.fn()
  })

  it('exits successfully', () => {
    action(tools)
    expect(tools.exit.success).toHaveBeenCalled()
    expect(tools.exit.success).toHaveBeenCalledWith('Sweet success')
  })
})

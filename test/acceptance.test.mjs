import assert from 'node:assert/strict'
import { test } from 'node:test'
import { acceptanceStamp } from '../src/acceptance.js'

test('records the acceptance stamp', () => {
  assert.match(acceptanceStamp, /^\d{4}-\d{2}-\d{2}T/u)
})

import assert from 'node:assert/strict'
import { test } from 'node:test'
import { greeting } from '../src/greeting.js'

test('greets a trimmed name', () => {
  assert.equal(greeting('  Ada  '), 'Hello, Ada!')
})

test('rejects an empty name', () => {
  assert.throws(() => greeting('   '), /A name is required/u)
})

import { describe, expect, it } from 'vitest'
import { formatTodoTitle } from './formatTodoTitle'

describe('formatTodoTitle', () => {
  it('trims leading and trailing spaces', () => {
    expect(formatTodoTitle('  Buy milk  ')).toBe('Buy milk')
  })

  it('collapses duplicate internal spaces', () => {
    expect(formatTodoTitle('Write   unit    tests')).toBe('Write unit tests')
  })

  it('returns an empty string for whitespace-only input', () => {
    expect(formatTodoTitle('   ')).toBe('')
  })
})

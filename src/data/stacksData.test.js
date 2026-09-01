import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { STACKS_DATA } from './stacksData.js';

const TERMINALS = ['cmd', 'powershell', 'bash'];

describe('STACKS_DATA', () => {
  it('contains at least one stack', () => {
    assert.ok(STACKS_DATA.length > 0);
  });

  it('has unique stack ids', () => {
    const ids = STACKS_DATA.map((stack) => stack.id);
    assert.equal(new Set(ids).size, ids.length);
  });

  it('every stack has required metadata', () => {
    for (const stack of STACKS_DATA) {
      assert.ok(stack.id, `missing id for ${stack.name}`);
      assert.ok(stack.name, `missing name for ${stack.id}`);
      assert.ok(stack.category, `missing category for ${stack.id}`);
      assert.ok(stack.description, `missing description for ${stack.id}`);
      assert.ok(Array.isArray(stack.prerequisites), `missing prerequisites array for ${stack.id}`);
      assert.ok(stack.commands, `missing commands for ${stack.id}`);
    }
  });

  it('every stack defines commands for all supported terminals', () => {
    for (const stack of STACKS_DATA) {
      for (const terminal of TERMINALS) {
        assert.ok(Array.isArray(stack.commands[terminal]), `${stack.id} missing ${terminal} commands`);
        assert.ok(stack.commands[terminal].length > 0, `${stack.id} has no ${terminal} commands`);
      }
    }
  });

  it('every command has a label and code', () => {
    for (const stack of STACKS_DATA) {
      for (const terminal of TERMINALS) {
        for (const command of stack.commands[terminal]) {
          assert.ok(command.label, `${stack.id}/${terminal} has command without label`);
          assert.ok(command.code, `${stack.id}/${terminal} has command without code`);
        }
      }
    }
  });

  it('categories are consistent across stacks', () => {
    const allowed = new Set([
      'Frontend',
      'Backend',
      'Mobile',
      'Database',
      'DevOps',
      'Testing',
      'AI/ML',
      'Monorepo',
      'Tools',
    ]);
    for (const stack of STACKS_DATA) {
      assert.ok(allowed.has(stack.category), `${stack.id} uses unexpected category ${stack.category}`);
    }
  });
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-primer-country', 'Unit | Serializer | i-i-s-primer-country', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-primer-country',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-primer-animal',
    'model:i-i-s-primer-burrow',
    'model:i-i-s-primer-country',
    'model:i-i-s-primer-forest',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

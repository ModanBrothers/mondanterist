'use strict';

const db = require('./../../../database/dbHelpers.js');
const _id = '_id';
const all = '*';

function combineTagsAndCards(cards, tags) {
  return cards.map(card => {
    const newCard = card;
    newCard.tags_ids = newCard.tags_ids.map(tagID => {
      const newTag = tags[tagID];
      return newTag;
    });
    return newCard;
  });
}

const savePin = function* () {
  let imageData;
  const fields = this.request.body.fields;
  yield db.cloudinaryUpload(this.request.body.files.file.path, data => (imageData = data));
  fields.image_url = imageData.url;
  fields.image_url = 'hello';
  yield db.queryDB(db.insertQueryBuilder(db.TAGS, fields.tags));
  fields.tags = yield db.queryDB(
    db.selectQueryBuilder(db.TAGS, { column: _id, params: fields.tags.split(' ') })
  );
  const result = yield db.queryDB(db.insertQueryBuilder(db.CARDS, fields));
  if (result.command === 'INSERT' && result.rowCount === 1) {
    this.response.status = 200;
  }
};

const getPins = function* () {
  const tags = this.request.query.tags.split(',');
  const tagQuery = yield db.queryDB(
    db.selectQueryBuilder(db.TAGS, { column: all, params: tags })
  );

  const tagsAndIDs = tagQuery.rows.reduce((tagsObject, tag) => {
    const tagsObj = tagsObject;
    tagsObj[tag._id] = tag.tag;
    return tagsObj;
  }, {});

  const cardsQuery = yield db.queryDB(
    db.selectQueryBuilder(db.CARDS, {
      column: [all],
      params: tagQuery.rows
    })
  );
  this.status = 200;
  this.body = combineTagsAndCards(cardsQuery.rows, tagsAndIDs);
};

module.exports = {
  savePin,
  getPins
};

// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/file_links',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/file_links/{link}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/file_links/{link}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/file_links',
    methodType: 'list',
  }),
});

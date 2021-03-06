/**!
 * Copyright(c) ali-sdk and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var assert = require('assert');
var oss = require('../');

describe('test/client.test.js', function () {
  it('should init with region', function () {
    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      region: 'oss-cn-hangzhou',
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://oss-cn-hangzhou.aliyuncs.com/');

    store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      region: 'oss-cn-hangzhou',
      internal: true,
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://oss-cn-hangzhou-internal.aliyuncs.com/');

    store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      region: 'oss-cn-hangzhou',
      internal: true,
      secure: true
    });

    assert.equal(
      store.options.endpoint.format(),
      'https://oss-cn-hangzhou-internal.aliyuncs.com/');
  });

  it('should init with cname: foo.bar.com', function () {
    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'foo.bar.com',
      cname: true
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://foo.bar.com/');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'http://foo.bar.com',
      cname: true
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://foo.bar.com/');
  });

  it('should init with endpoint: http://test.oss.com', function () {
    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'test.oss.com'
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://test.oss.com/');

    store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'http://test.oss.com'
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://test.oss.com/');

    store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'https://test.oss.com'
    });

    assert.equal(
      store.options.endpoint.format(),
      'https://test.oss.com/');
  });

  it('should init with ip address: http://127.0.0.1', function () {
    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: '127.0.0.1'
    });

    assert.equal(
      store.options.endpoint.format(),
      'http://127.0.0.1/');
  });

  it('should create request url with bucket', function() {
    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      region: 'oss-cn-hangzhou',
    });

    var params = {
      bucket: 'gems'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://gems.oss-cn-hangzhou.aliyuncs.com/');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'test.oss.com'
    });

    var params = {
      bucket: 'gems'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://gems.test.oss.com/');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'foo.bar.com',
      cname: true
    });

    var params = {
      bucket: 'gems'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://foo.bar.com/');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'http://127.0.0.1:6000'
    });

    var params = {
      bucket: 'gems'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://127.0.0.1:6000/gems/');
  });

  it('should create request url with bucket/object/subres', function() {
    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      region: 'oss-cn-hangzhou',
    });

    var params = {
      bucket: 'gems',
      object: 'hello'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://gems.oss-cn-hangzhou.aliyuncs.com/hello');

    var params = {
      bucket: 'gems',
      object: 'hello',
      subres: {acl: '', mime: ''}
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://gems.oss-cn-hangzhou.aliyuncs.com/hello?acl=&mime=');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'test.oss.com'
    });

    var params = {
      bucket: 'gems',
      object: 'hello'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://gems.test.oss.com/hello');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'foo.bar.com',
      cname: true
    });

    var params = {
      bucket: 'gems',
      object: 'hello'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://foo.bar.com/hello');

    var store = oss({
      accessKeyId: 'foo',
      accessKeySecret: 'bar',
      endpoint: 'http://127.0.0.1:3000'
    });

    var params = {
      bucket: 'gems',
      object: 'hello'
    };

    var url = store._getReqUrl(params);
    assert.equal(url, 'http://127.0.0.1:3000/gems/hello');
  });
});

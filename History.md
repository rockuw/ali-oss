
4.1.4 / 2016-01-27
==================

  * Update version in package.json
  * Release 4.1.2
  * Release 4.1.1
  * deps: update dependencies
  * update dist
  * add build-dist script
  * Release 4.1.0
  * refine put/putStream interfaces
  * add putACL & getACL
  * fix bug when endpoint is IP with port
  * use sts.us-west for sts test
  * Release 4.0.1
  * add bower.json
  * add filereader dev-dependency
  * add web file (mock) test for multipart.test
  * add error case for sts.test
  * fix IE10 compatibility and refine test
  * chore: fix readme
  * Release 4.0.0
  * build: only test on 4&5
  * add .babelrc
  * use readAsArrayBuffer for IE11 doesn't support readAsBinaryString
  * reduce putBucketACL() case
  * avoid putBucketACL() timeout
  * sleep logger in bucket.test.js
  * add node 5 and tidy .travis.yml
  * use ms to tidy code
  * Wait some time in test for bucket meta sync
  * make region configurable
  * test travis ci
  * Set sts client default timeout to 60s
  * test travis ci
  * handle policy string in STS
  * fix cdn addr
  * use utility.escape
  * chore(package): update autod to version 2.4.2
  * refine as review comments
  * add object key encoding test
  * refine bucket test
  * add content type test
  * add browser usage in README
  * signatureUrl() supports STS
  * refine as review comments
  * chore(package): update merge-descriptors to version 1.0.1
  * add policy to STS assumeRole
  * correct author & cont. remove indent tabs
  * expose .putData as public function
  * remove indent tabs
  * add comments to browser.js
  * add browser.js and change 'let' to 'var'
  * move multipart into a separate file
  * refine subres
  * rich multipart test
  * support STS in oss client
  * add STS client, test pass
  * fix bug in uploadPart, and refine multipart test
  * support generator progress callback
  * add progress callback
  * browser multipartUpload test pass
  * multipart for server test pass
  * fix object url
  * pass all tests
  * refine client constructor to handle endpoint/ip/cname/region
  * Change 'Date' header to 'x-oss-date' for browser compatibility

4.1.2 / 2016-01-27
==================

  * update dist

4.1.1 / 2016-01-27
==================

  * deps: update dependencies
  * update dist
  * add build-dist script

4.1.0 / 2016-01-26
==================

  * refine put/putStream interfaces
  * add putACL & getACL
  * fix bug when endpoint is IP with port

4.0.1 / 2016-01-25
==================

  * fix IE10 compatibility and refine test

4.0.0 / 2016-01-22
==================

  * build: only test on 4&5
  * Merge pull request #55 from rockuw/master
  * add .babelrc
  * use readAsArrayBuffer for IE11 doesn't support readAsBinaryString
  * reduce putBucketACL() case
  * avoid putBucketACL() timeout
  * sleep logger in bucket.test.js
  * add node 5 and tidy .travis.yml
  * use ms to tidy code
  * Wait some time in test for bucket meta sync
  * make region configurable
  * test travis ci
  * Set sts client default timeout to 60s
  * test travis ci
  * handle policy string in STS
  * Merge pull request #57 from ali-sdk/greenkeeper-autod-2.4.2
  * fix cdn addr
  * use utility.escape
  * chore(package): update autod to version 2.4.2
  * refine as review comments
  * add object key encoding test
  * refine bucket test
  * add content type test
  * add browser usage in README
  * signatureUrl() supports STS
  * refine as review comments
  * Merge pull request #56 from ali-sdk/greenkeeper-merge-descriptors-1.0.1
  * chore(package): update merge-descriptors to version 1.0.1
  * add policy to STS assumeRole
  * correct author & cont. remove indent tabs
  * expose .putData as public function
  * remove indent tabs
  * add comments to browser.js
  * add browser.js and change 'let' to 'var'
  * move multipart into a separate file
  * refine subres
  * rich multipart test
  * support STS in oss client
  * add STS client, test pass
  * fix bug in uploadPart, and refine multipart test
  * support generator progress callback
  * add progress callback
  * browser multipartUpload test pass
  * multipart for server test pass
  * fix object url
  * pass all tests
  * refine client constructor to handle endpoint/ip/cname/region
  * Change 'Date' header to 'x-oss-date' for browser compatibility

3.1.3 / 2015-12-18
==================

  * fix(object): custom content-type support lower case
  * deps: update dependencies

3.1.2 / 2015-10-26
==================

  * feat: support custom Content-Type

3.1.1 / 2015-10-23
==================

 * fix(cluster): simplify cluster config

3.1.0 / 2015-10-23
==================

 * feat: support custom urllib client
 * chore: add node required on package.json

3.0.3 / 2015-10-03
==================

  * feat: change check status file path

3.0.2 / 2015-10-01
==================

  * feat: make chooseAvailable public

3.0.1 / 2015-09-30
==================

  * deps: urllib@2.5.0

3.0.0 / 2015-09-30
==================

  * refactor: change signatureUrl to normal function
  * feat: add available checking

2.8.0 / 2015-09-29
==================

 * test: cluster store to two different bucket
 * feat: support signatureUrl
 * feat: add clusterClient

2.7.0 / 2015-09-22
==================

 * feat: support cname and object url

2.6.1 / 2015-09-09
==================

 * add endpoint into readme
 * chore: fix codecov link

2.6.0 / 2015-09-07
==================

 * test: skip image upload
 * docs: add putStream doc
 * test: use codecov
 * feat: put object support streaming

2.5.1 / 2015-08-24
==================

 * fix: remove unnecessary decode
 * fix: signature url
 * fix: escape resource

2.5.0 / 2015-08-22
==================

 * chore: travis use sudo: false
 * feat: request error add params info

2.4.0 / 2015-08-15
==================

  * feat(createRequest): expose create request method
  * deps upgrade

2.3.0 / 2015-07-25
==================

 * feature: support custom agent by options.agent

2.2.0 / 2015-04-02
==================

 * Image service API (@zensh)

2.1.0 / 2015-03-23
==================

 * feat: add getStream*() api

2.0.0 / 2015-02-28
==================

  * fix get not exists object TypeError
  * transfer to ali-sdk/ali-oss
  * feat(object): support streaming put
  * refactor object operations with successStatuses and xmpResponse
  * finish bucket operations
  * ensure tmp dir exists
  * add appveyor.yml
  * add bucket operations
  * support deleteMulti
  * support copy and updateMeta
  * support get object
  * support delete object
  * totally refactor according to ali-sdk

1.1.0 / 2015-01-30
==================

 * feat: support signature url

1.0.0 / 2014-10-26
==================

  * use urllib replace of co-urllib
  * fix readme
  * ocd
  * update examples

0.0.3 / 2014-04-11
==================

  * update co-urllib, add mime, add alias

0.0.2 / 2014-04-10
==================

  * fix 404 error handler
  * Merge branch 'master' of github.com:node-modules/ali-oss
  * add istanbul
  * Merge pull request #1 from chunpu/patch-1
  * fix regenerator url

0.0.1 / 2014-04-08
==================

  * fix readme
  * add travis-ci
  * use renegerator
  * update readme
  * add callback example
  * add test
  * finish get and remove
  * complete upload
  * Initial commit

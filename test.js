'use strict';

var should = require('should');

var Semrush = require('./index');

var Sh = new Semrush();

describe('Semrush unit tests', function() {
	it('getDomainOrganic', function(done) {
		Sh.getDomainOrganic({
			domain: 'www.yahoo.com',
			database: 'us'
			}, function(err, res){
				should.not.exist(err);
				//res.should.have.property('data');
				//res.data.should.be.instanceof(Array);
				done();
				console.log('domain_organic', res);
		});
	});

	it('getDomainAdwords', function(done) {
		Sh.getDomainAdwords({
			domain: 'www.yahoo.com',
			database: 'us'
			}, function(err, res){
				should.not.exist(err);
				//res.should.have.property('data');
				//res.data.should.be.instanceof(Array);
				done();
				console.log('domain_adwords', res);
		});
	});

	it('getAdvertiserRank', function(done) {
		Sh.getAdvertiserRank({
			domain: 'www.yahoo.com',
			database: 'us'
			}, function(err, res){
				should.not.exist(err);
				//res.should.have.property('data');
				//res.data.should.be.instanceof(Array);
				done();
				console.log('advertiser_rank', res);
		});
	});

	it('getBacklinksOverview', function(done) {
		Sh.getBacklinksOverview({
			domain: 'www.yahoo.com',
			database: 'us'
			}, function(err, res){
				should.not.exist(err);
				//res.should.have.property('data');
				//res.data.should.be.instanceof(Array);
				done();
				console.log('backlinks_overview', res);
		});
	});
});
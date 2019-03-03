const Keypairs = require('../src/index.js').KeyPair;
const expect = require('chai').expect;
const {
    chains,
    data
} = require('./config');

describe('test keypairs', function () {

    describe('create instance', function () {
        it('throw error if the config of given token is empty', function () {
            expect(() => new Keypairs('moac')).throw('config of moac is empty')
        })
    })

    describe('convertAddressToBytes and convertBytesToAddress', function () {
        it('convert address to bytes successfully', function () {
            for (let chain of chains) {
                let validAddress = data[chain].validAddress;
                let inst = new Keypairs(chain == 'swt' ? undefined : chain);
                let bytes = inst.convertAddressToBytes(validAddress);
                let address = inst.convertBytesToAddress(Buffer.from(bytes));
                expect(address).to.equal(validAddress)
            }
        })

        it('convertAddressToBytes in error if the address is invalid', function () {
            for (let chain of chains) {
                let inst = new Keypairs(chain == 'swt' ? undefined : chain);
                expect(() => inst.convertAddressToBytes(undefined)).throw('convert address to bytes in error')
            }
        })

        it('convertBytesToAddress in error if bytes is invalid', function () {
            for (let chain of chains) {
                let inst = new Keypairs(chain == 'swt' ? undefined : chain);
                expect(() => inst.convertBytesToAddress('')).throw('convert bytes to address in error')
            }
        })
    })
})

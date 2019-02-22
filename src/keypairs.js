'use strict';

var swtc_keypairs = require('swtc-keypairs');

/**
 * generate random bytes and encode it to secret
 * @returns {string}
 */
exports.generateSeed = swtc_keypairs.generateSeed;

/**
 * derive keypair from secret
 * @param {string} secret
 * @returns {{privateKey: string, publicKey: *}}
 */
exports.deriveKeyPair = swtc_keypairs.deriveKeypair;

/**
 * devive keypair from privatekey
 */
exports.deriveKeyPairWithKey = function(key) {
	var privateKey = key;
	var publicKey = bytesToHex(swtc_keypairs.ec.keyFromPrivate(key).getPublic().encodeCompressed());
	return { privateKey: privateKey, publicKey: publicKey };
};


/**
 * derive wallet address from publickey
 * @param {string} publicKey
 * @returns {string}
 */
exports.deriveAddress = swtc_keypairs.deriveAddress;

/**
 * check is address is valid
 * @param address
 * @returns {boolean}
 */
exports.checkAddress = swtc_keypairs.addressCodec.isValidAddress;

/**
 * convert the input address to byte array
 *
 * @param address
 * @returns byte array
 */
exports.convertAddressToBytes = swtc_keypairs.addressCodec.decode;

/*
 * Convert a byte array to a wallet address string
 *
*/
//Wallet.prototype.convertBytesToAddress= function(bytes) {
exports.convertBytesToAddress = swtc_keypairs.addressCodec.encode;

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name response total huge grid knife army general'; 
let testAccounts = [
"0x47fddfbadc9fdb5ee91acd09fffbffe00ebee988d406ea4e7ba359c257ad1d7f",
"0x84efdd2ce94fc91c861cc822e8673aad16d83baa02071b86ca4b531eed1b84b4",
"0x55b13ed62f6b0a2cd8a53196b2146311885e4951f97d3978de460f7e585aad53",
"0xa94c2b018f3260ad6f375b5fbc15ef533d32373ea901f1022063355d9dacd8ca",
"0x97ee14b81e259f37efaa65c6b1e9466b298736bbc3d395aaa6f1f17e3c55f1d6",
"0x899aad8a995cf9cca1a150f379a076a5ab96f14a0bfd01c9cda06f9f33c09c85",
"0x2067a34c8370b8e42c2412099f3f12ddc1ab67b2ffd480f92e618ca9eed5101d",
"0xb28e38cac84d233edde28d2c712211131d467e5f883035b64453163dd28ef2a2",
"0x1f4e5a0734d8ae3a38cc07bddfc0f1ec86b19ed082ac6a5e56555900cec83f04",
"0x5efa58d0ea0556eef39346e9af2ef91374d7b401d8f4d4eeaf20b453251572af"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note shift protect inflict kiwi orange stove'; 
let testAccounts = [
"0xc46e97aa5388626153402ceb107e3c98c5e0178d9f9b6920888e68c607c29e97",
"0x24019b088438052b67ce67cd0d57f40288280516a4c8b921c3b96fff6fec0da5",
"0x659a20ca8a2bdda53dac87857f7c8d7878765f2f0136c014b0b7f71ad16b1e96",
"0x5483d589801abee100afd25fd80cc71fe5037aa7524c4b60c4a2cfde79f2dae7",
"0x8d3421bb1ef3f20dd8c0a5ea1a9be24789c83395f2db4056f95a2f97bad1758c",
"0xf8efbf34a992ea10fc9ca33ccd13bdd411ab39efac1ca78449902374759128b8",
"0x313693b1f33ddd9afc74c3e084d3b2203a08d24710a4d1adbdbedcb501fbaca2",
"0x2a217e857fb1ae9649132dffa07e028392d1e6266b74c94f9543ba1d63344b82",
"0x4fba0de3addacc8fee28fb91c4b96a7646664efe99dbdd78b490b2b9f7810d10",
"0xaccff3ade6bfab2f3ab7d73d6997b4c35ff97977a14b3143bddd66b15b359433"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


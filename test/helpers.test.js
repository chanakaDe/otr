var assert = require('assert')
  , BigInt = require('../vendor/bigint.js')
  , hlp = require('../helpers.js')


assert.equal('\0\0\0\0', hlp.packData(''), 'Empty pack.')

var test = hlp.packMPI(BigInt.str2bigInt('65280', 10))
assert.equal('\0\0\0\2\xff\0', test, 'They be equal.')

var test3 = hlp.packMPI(BigInt.str2bigInt('0', 10))
assert.equal('\0\0\0\0', test3, 'Zero')


var two55 = '32317006071311007300714876688669951960444102669715484032130345427524655138867890893197201411522913463688717960921898019494119559150490921095088152386448283120630877367300996091750197750389652106796057638384067568276792218642619756161838094338476170470581645852036305042887575891541065808607552399123930385521914333389668342420684974786564569494856176035326322058077805659331026192708460314150258592864177116725943603718461857357598351152301645904403697613233287231227125684710820209725157101726931323469678542580656697935045997268352998638215525166389437335543602135433229604645318478604952148193555853611059596230656'
var str = '\0\0\1\1\1'
for (var i = 0; i < 256; i++) str += '\0'
assert.equal(str, hlp.packMPI(BigInt.str2bigInt(two55, 10)), 'BigInt')

assert.equal('65280', BigInt.bigInt2str(hlp.readMPI('\0\0\0\2\xff\0'), 10), 'Read MPI.')

assert.equal(two55, BigInt.bigInt2str(hlp.readMPI(str), 10))
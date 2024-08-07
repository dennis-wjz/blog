/* 加法哈希 */
function addHash(key: string): number {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
    hash = (hash + c.charCodeAt(0)) % MODULUS;
  }
  return hash;
}
console.log(addHash("Aui"));

/* 乘法哈希 */
function mulHash(key: string): number {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
    hash = (31 * hash + c.charCodeAt(0)) % MODULUS;
  }
  return hash;
}
console.log(mulHash("Abc"));

/* 异或哈希 */
function xorHash(key: string): number {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
      hash ^= c.charCodeAt(0);
  }
  return hash & MODULUS;
}
console.log(xorHash("Aqw"));

/* 旋转哈希 */
function rotHash(key: string): number {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
      hash = ((hash << 4) ^ (hash >> 28) ^ c.charCodeAt(0)) % MODULUS;
  }
  return hash;
}
console.log(rotHash("Art"));
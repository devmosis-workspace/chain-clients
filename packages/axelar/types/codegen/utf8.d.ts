/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.4.12
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
export declare function utf8Length(str: string): number;
/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
export declare function utf8Read(buffer: ArrayLike<number>, start: number, end: number): string;
/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
export declare function utf8Write(str: string, buffer: Uint8Array | Array<number>, offset: number): number;

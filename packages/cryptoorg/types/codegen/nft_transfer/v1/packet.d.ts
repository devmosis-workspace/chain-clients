import * as _m0 from "protobufjs/minimal";
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface NonFungibleTokenPacketData {
    /** the class_id of tokens to be transferred */
    classId: string;
    /** the class_uri of tokens to be transferred */
    classUri: string;
    /** the non fungible tokens to be transferred (count should be equal to token_uris) */
    tokenIds: string[];
    /** the non fungible tokens's uri to be transferred (count should be equal to token ids) */
    tokenUris: string[];
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface NonFungibleTokenPacketDataSDKType {
    class_id: string;
    class_uri: string;
    token_ids: string[];
    token_uris: string[];
    sender: string;
    receiver: string;
}
export declare const NonFungibleTokenPacketData: {
    encode(message: NonFungibleTokenPacketData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NonFungibleTokenPacketData;
    fromPartial(object: Partial<NonFungibleTokenPacketData>): NonFungibleTokenPacketData;
};

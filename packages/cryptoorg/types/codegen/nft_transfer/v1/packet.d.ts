import { BinaryWriter } from "../../binary";
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
export interface NonFungibleTokenPacketDataProtoMsg {
    typeUrl: "/chainmain.nft_transfer.v1.NonFungibleTokenPacketData";
    value: Uint8Array;
}
/**
 * NonFungibleTokenPacketData defines a struct for the packet payload
 * See NonFungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-721-nft-transfer#data-structures
 */
export interface NonFungibleTokenPacketDataAmino {
    /** the class_id of tokens to be transferred */
    class_id: string;
    /** the class_uri of tokens to be transferred */
    class_uri: string;
    /** the non fungible tokens to be transferred (count should be equal to token_uris) */
    token_ids: string[];
    /** the non fungible tokens's uri to be transferred (count should be equal to token ids) */
    token_uris: string[];
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
export interface NonFungibleTokenPacketDataAminoMsg {
    type: "/chainmain.nft_transfer.v1.NonFungibleTokenPacketData";
    value: NonFungibleTokenPacketDataAmino;
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
    typeUrl: string;
    encode(message: NonFungibleTokenPacketData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NonFungibleTokenPacketData;
    fromPartial(object: Partial<NonFungibleTokenPacketData>): NonFungibleTokenPacketData;
    fromAmino(object: NonFungibleTokenPacketDataAmino): NonFungibleTokenPacketData;
    toAmino(message: NonFungibleTokenPacketData): NonFungibleTokenPacketDataAmino;
    fromAminoMsg(object: NonFungibleTokenPacketDataAminoMsg): NonFungibleTokenPacketData;
    fromProtoMsg(message: NonFungibleTokenPacketDataProtoMsg): NonFungibleTokenPacketData;
    toProto(message: NonFungibleTokenPacketData): Uint8Array;
    toProtoMsg(message: NonFungibleTokenPacketData): NonFungibleTokenPacketDataProtoMsg;
};

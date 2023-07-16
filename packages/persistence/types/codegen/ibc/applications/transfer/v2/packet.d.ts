import * as _m0 from "protobufjs/minimal";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: string;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /** optional memo */
    memo: string;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
    denom: string;
    amount: string;
    sender: string;
    receiver: string;
    memo: string;
}
export declare const FungibleTokenPacketData: {
    encode(message: FungibleTokenPacketData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FungibleTokenPacketData;
    fromPartial(object: Partial<FungibleTokenPacketData>): FungibleTokenPacketData;
};

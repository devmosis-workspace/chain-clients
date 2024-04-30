import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpend {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority: string;
    /** Recipient is the account to receive the funds */
    recipient: string;
    /** Amount is the coins that are to be released from the safety funds */
    amount: Coin[];
}
export interface MsgSafetyFundSpendProtoMsg {
    typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpend";
    value: Uint8Array;
}
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpendAmino {
    /**
     * Authority is the account executing the safety fund spend.
     * It should be the gov module account.
     */
    authority?: string;
    /** Recipient is the account to receive the funds */
    recipient?: string;
    /** Amount is the coins that are to be released from the safety funds */
    amount?: CoinAmino[];
}
export interface MsgSafetyFundSpendAminoMsg {
    type: "/mars.safety.v1beta1.MsgSafetyFundSpend";
    value: MsgSafetyFundSpendAmino;
}
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 *
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */
export interface MsgSafetyFundSpendSDKType {
    authority: string;
    recipient: string;
    amount: CoinSDKType[];
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponse {
}
export interface MsgSafetyFundSpendResponseProtoMsg {
    typeUrl: "/mars.safety.v1beta1.MsgSafetyFundSpendResponse";
    value: Uint8Array;
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponseAmino {
}
export interface MsgSafetyFundSpendResponseAminoMsg {
    type: "/mars.safety.v1beta1.MsgSafetyFundSpendResponse";
    value: MsgSafetyFundSpendResponseAmino;
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */
export interface MsgSafetyFundSpendResponseSDKType {
}
export declare const MsgSafetyFundSpend: {
    typeUrl: string;
    encode(message: MsgSafetyFundSpend, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSafetyFundSpend;
    fromPartial(object: Partial<MsgSafetyFundSpend>): MsgSafetyFundSpend;
    fromAmino(object: MsgSafetyFundSpendAmino): MsgSafetyFundSpend;
    toAmino(message: MsgSafetyFundSpend): MsgSafetyFundSpendAmino;
    fromAminoMsg(object: MsgSafetyFundSpendAminoMsg): MsgSafetyFundSpend;
    fromProtoMsg(message: MsgSafetyFundSpendProtoMsg): MsgSafetyFundSpend;
    toProto(message: MsgSafetyFundSpend): Uint8Array;
    toProtoMsg(message: MsgSafetyFundSpend): MsgSafetyFundSpendProtoMsg;
};
export declare const MsgSafetyFundSpendResponse: {
    typeUrl: string;
    encode(_: MsgSafetyFundSpendResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSafetyFundSpendResponse;
    fromPartial(_: Partial<MsgSafetyFundSpendResponse>): MsgSafetyFundSpendResponse;
    fromAmino(_: MsgSafetyFundSpendResponseAmino): MsgSafetyFundSpendResponse;
    toAmino(_: MsgSafetyFundSpendResponse): MsgSafetyFundSpendResponseAmino;
    fromAminoMsg(object: MsgSafetyFundSpendResponseAminoMsg): MsgSafetyFundSpendResponse;
    fromProtoMsg(message: MsgSafetyFundSpendResponseProtoMsg): MsgSafetyFundSpendResponse;
    toProto(message: MsgSafetyFundSpendResponse): Uint8Array;
    toProtoMsg(message: MsgSafetyFundSpendResponse): MsgSafetyFundSpendResponseProtoMsg;
};

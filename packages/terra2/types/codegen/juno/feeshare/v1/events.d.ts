import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEvent {
    /** Address of the account that will receive the payout */
    withdrawAddress: string;
    /** Amount of the payout */
    feesPaid: Coin[];
}
export interface FeePayoutEventProtoMsg {
    typeUrl: "/juno.feeshare.v1.FeePayoutEvent";
    value: Uint8Array;
}
/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEventAmino {
    /** Address of the account that will receive the payout */
    withdraw_address?: string;
    /** Amount of the payout */
    fees_paid?: CoinAmino[];
}
export interface FeePayoutEventAminoMsg {
    type: "/juno.feeshare.v1.FeePayoutEvent";
    value: FeePayoutEventAmino;
}
/**
 * FeeShareEvent defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface FeePayoutEventSDKType {
    withdraw_address: string;
    fees_paid: CoinSDKType[];
}
export declare const FeePayoutEvent: {
    typeUrl: string;
    encode(message: FeePayoutEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeePayoutEvent;
    fromPartial(object: Partial<FeePayoutEvent>): FeePayoutEvent;
    fromAmino(object: FeePayoutEventAmino): FeePayoutEvent;
    toAmino(message: FeePayoutEvent): FeePayoutEventAmino;
    fromAminoMsg(object: FeePayoutEventAminoMsg): FeePayoutEvent;
    fromProtoMsg(message: FeePayoutEventProtoMsg): FeePayoutEvent;
    toProto(message: FeePayoutEvent): Uint8Array;
    toProtoMsg(message: FeePayoutEvent): FeePayoutEventProtoMsg;
};

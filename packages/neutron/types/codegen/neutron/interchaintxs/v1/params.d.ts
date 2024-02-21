import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /** Defines maximum amount of messages to be passed in MsgSubmitTx */
    msgSubmitTxMaxMessages: bigint;
    /** Defines a minimum fee required to register interchain account */
    registerFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /** Defines maximum amount of messages to be passed in MsgSubmitTx */
    msg_submit_tx_max_messages?: string;
    /** Defines a minimum fee required to register interchain account */
    register_fee?: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "/neutron.interchaintxs.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    msg_submit_tx_max_messages: bigint;
    register_fee: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};

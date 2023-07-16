import { Any, AnySDKType } from "../../google/protobuf/any";
import { Fee, FeeSDKType } from "../../feerefunder/fee";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
    fromAddress: string;
    connectionId: string;
    interchainAccountId: string;
}
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccountSDKType {
    from_address: string;
    connection_id: string;
    interchain_account_id: string;
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponseSDKType {
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
    fromAddress: string;
    /**
     * interchain_account_id is supposed to be the unique identifier, e.g.,
     * lido/kava. This allows contracts to have more than one interchain accounts
     * on remote zone This identifier will be a part of the portID that we'll
     * claim our capability for.
     */
    interchainAccountId: string;
    connectionId: string;
    msgs: Any[];
    memo: string;
    /** timeout in seconds after which the packet times out */
    timeout: Long;
    fee?: Fee;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTxSDKType {
    from_address: string;
    interchain_account_id: string;
    connection_id: string;
    msgs: AnySDKType[];
    memo: string;
    timeout: Long;
    fee?: FeeSDKType;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
    /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
    sequenceId: Long;
    /** channel src channel on neutron side trasaction was submitted from */
    channel: string;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponseSDKType {
    sequence_id: Long;
    channel: string;
}
export declare const MsgRegisterInterchainAccount: {
    encode(message: MsgRegisterInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterInterchainAccount;
    fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount;
};
export declare const MsgRegisterInterchainAccountResponse: {
    encode(_: MsgRegisterInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterInterchainAccountResponse;
    fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitTx;
    fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(message: MsgSubmitTxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitTxResponse;
    fromPartial(object: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
};

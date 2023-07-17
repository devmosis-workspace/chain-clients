import { EthBridgeClaim, EthBridgeClaimSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgPause {
    signer: string;
    isPaused: boolean;
}
export interface MsgPauseSDKType {
    signer: string;
    is_paused: boolean;
}
export interface MsgPauseResponse {
}
export interface MsgPauseResponseSDKType {
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLock {
    cosmosSender: string;
    amount: string;
    symbol: string;
    ethereumChainId: Long;
    ethereumReceiver: string;
    cethAmount: string;
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLockSDKType {
    cosmos_sender: string;
    amount: string;
    symbol: string;
    ethereum_chain_id: Long;
    ethereum_receiver: string;
    ceth_amount: string;
}
export interface MsgLockResponse {
}
export interface MsgLockResponseSDKType {
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurn {
    cosmosSender: string;
    amount: string;
    symbol: string;
    ethereumChainId: Long;
    ethereumReceiver: string;
    cethAmount: string;
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurnSDKType {
    cosmos_sender: string;
    amount: string;
    symbol: string;
    ethereum_chain_id: Long;
    ethereum_receiver: string;
    ceth_amount: string;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseSDKType {
}
export interface MsgCreateEthBridgeClaim {
    ethBridgeClaim?: EthBridgeClaim;
}
export interface MsgCreateEthBridgeClaimSDKType {
    eth_bridge_claim?: EthBridgeClaimSDKType;
}
export interface MsgCreateEthBridgeClaimResponse {
}
export interface MsgCreateEthBridgeClaimResponseSDKType {
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidator {
    cosmosSender: string;
    validator: string;
    operationType: string;
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidatorSDKType {
    cosmos_sender: string;
    validator: string;
    operation_type: string;
}
export interface MsgUpdateWhiteListValidatorResponse {
}
export interface MsgUpdateWhiteListValidatorResponseSDKType {
}
export interface MsgUpdateCethReceiverAccount {
    cosmosSender: string;
    cethReceiverAccount: string;
}
export interface MsgUpdateCethReceiverAccountSDKType {
    cosmos_sender: string;
    ceth_receiver_account: string;
}
export interface MsgUpdateCethReceiverAccountResponse {
}
export interface MsgUpdateCethReceiverAccountResponseSDKType {
}
export interface MsgRescueCeth {
    cosmosSender: string;
    cosmosReceiver: string;
    cethAmount: string;
}
export interface MsgRescueCethSDKType {
    cosmos_sender: string;
    cosmos_receiver: string;
    ceth_amount: string;
}
export interface MsgRescueCethResponse {
}
export interface MsgRescueCethResponseSDKType {
}
export interface MsgSetBlacklist {
    from: string;
    addresses: string[];
}
export interface MsgSetBlacklistSDKType {
    from: string;
    addresses: string[];
}
export interface MsgSetBlacklistResponse {
}
export interface MsgSetBlacklistResponseSDKType {
}
export declare const MsgPause: {
    encode(message: MsgPause, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPause;
    fromPartial(object: Partial<MsgPause>): MsgPause;
};
export declare const MsgPauseResponse: {
    encode(_: MsgPauseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgPauseResponse;
    fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse;
};
export declare const MsgLock: {
    encode(message: MsgLock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgLock;
    fromPartial(object: Partial<MsgLock>): MsgLock;
};
export declare const MsgLockResponse: {
    encode(_: MsgLockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgLockResponse;
    fromPartial(_: Partial<MsgLockResponse>): MsgLockResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurn;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBurnResponse;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgCreateEthBridgeClaim: {
    encode(message: MsgCreateEthBridgeClaim, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateEthBridgeClaim;
    fromPartial(object: Partial<MsgCreateEthBridgeClaim>): MsgCreateEthBridgeClaim;
};
export declare const MsgCreateEthBridgeClaimResponse: {
    encode(_: MsgCreateEthBridgeClaimResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateEthBridgeClaimResponse;
    fromPartial(_: Partial<MsgCreateEthBridgeClaimResponse>): MsgCreateEthBridgeClaimResponse;
};
export declare const MsgUpdateWhiteListValidator: {
    encode(message: MsgUpdateWhiteListValidator, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateWhiteListValidator;
    fromPartial(object: Partial<MsgUpdateWhiteListValidator>): MsgUpdateWhiteListValidator;
};
export declare const MsgUpdateWhiteListValidatorResponse: {
    encode(_: MsgUpdateWhiteListValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateWhiteListValidatorResponse;
    fromPartial(_: Partial<MsgUpdateWhiteListValidatorResponse>): MsgUpdateWhiteListValidatorResponse;
};
export declare const MsgUpdateCethReceiverAccount: {
    encode(message: MsgUpdateCethReceiverAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateCethReceiverAccount;
    fromPartial(object: Partial<MsgUpdateCethReceiverAccount>): MsgUpdateCethReceiverAccount;
};
export declare const MsgUpdateCethReceiverAccountResponse: {
    encode(_: MsgUpdateCethReceiverAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateCethReceiverAccountResponse;
    fromPartial(_: Partial<MsgUpdateCethReceiverAccountResponse>): MsgUpdateCethReceiverAccountResponse;
};
export declare const MsgRescueCeth: {
    encode(message: MsgRescueCeth, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRescueCeth;
    fromPartial(object: Partial<MsgRescueCeth>): MsgRescueCeth;
};
export declare const MsgRescueCethResponse: {
    encode(_: MsgRescueCethResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRescueCethResponse;
    fromPartial(_: Partial<MsgRescueCethResponse>): MsgRescueCethResponse;
};
export declare const MsgSetBlacklist: {
    encode(message: MsgSetBlacklist, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetBlacklist;
    fromPartial(object: Partial<MsgSetBlacklist>): MsgSetBlacklist;
};
export declare const MsgSetBlacklistResponse: {
    encode(_: MsgSetBlacklistResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetBlacklistResponse;
    fromPartial(_: Partial<MsgSetBlacklistResponse>): MsgSetBlacklistResponse;
};

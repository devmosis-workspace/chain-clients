import { EthBridgeClaim, EthBridgeClaimAmino, EthBridgeClaimSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface MsgPause {
    signer: string;
    isPaused: boolean;
}
export interface MsgPauseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgPause";
    value: Uint8Array;
}
export interface MsgPauseAmino {
    signer?: string;
    is_paused?: boolean;
}
export interface MsgPauseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgPause";
    value: MsgPauseAmino;
}
export interface MsgPauseSDKType {
    signer: string;
    is_paused: boolean;
}
export interface MsgPauseResponse {
}
export interface MsgPauseResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgPauseResponse";
    value: Uint8Array;
}
export interface MsgPauseResponseAmino {
}
export interface MsgPauseResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgPauseResponse";
    value: MsgPauseResponseAmino;
}
export interface MsgPauseResponseSDKType {
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLock {
    cosmosSender: string;
    amount: string;
    symbol: string;
    ethereumChainId: bigint;
    ethereumReceiver: string;
    cethAmount: string;
}
export interface MsgLockProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgLock";
    value: Uint8Array;
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLockAmino {
    cosmos_sender?: string;
    amount?: string;
    symbol?: string;
    ethereum_chain_id?: string;
    ethereum_receiver?: string;
    ceth_amount?: string;
}
export interface MsgLockAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgLock";
    value: MsgLockAmino;
}
/** MsgLock defines a message for locking coins and triggering a related event */
export interface MsgLockSDKType {
    cosmos_sender: string;
    amount: string;
    symbol: string;
    ethereum_chain_id: bigint;
    ethereum_receiver: string;
    ceth_amount: string;
}
export interface MsgLockResponse {
}
export interface MsgLockResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgLockResponse";
    value: Uint8Array;
}
export interface MsgLockResponseAmino {
}
export interface MsgLockResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgLockResponse";
    value: MsgLockResponseAmino;
}
export interface MsgLockResponseSDKType {
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurn {
    cosmosSender: string;
    amount: string;
    symbol: string;
    ethereumChainId: bigint;
    ethereumReceiver: string;
    cethAmount: string;
}
export interface MsgBurnProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgBurn";
    value: Uint8Array;
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurnAmino {
    cosmos_sender?: string;
    amount?: string;
    symbol?: string;
    ethereum_chain_id?: string;
    ethereum_receiver?: string;
    ceth_amount?: string;
}
export interface MsgBurnAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgBurn";
    value: MsgBurnAmino;
}
/** MsgBurn defines a message for burning coins and triggering a related event */
export interface MsgBurnSDKType {
    cosmos_sender: string;
    amount: string;
    symbol: string;
    ethereum_chain_id: bigint;
    ethereum_receiver: string;
    ceth_amount: string;
}
export interface MsgBurnResponse {
}
export interface MsgBurnResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgBurnResponse";
    value: Uint8Array;
}
export interface MsgBurnResponseAmino {
}
export interface MsgBurnResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgBurnResponse";
    value: MsgBurnResponseAmino;
}
export interface MsgBurnResponseSDKType {
}
export interface MsgCreateEthBridgeClaim {
    ethBridgeClaim?: EthBridgeClaim;
}
export interface MsgCreateEthBridgeClaimProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim";
    value: Uint8Array;
}
export interface MsgCreateEthBridgeClaimAmino {
    eth_bridge_claim?: EthBridgeClaimAmino;
}
export interface MsgCreateEthBridgeClaimAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim";
    value: MsgCreateEthBridgeClaimAmino;
}
export interface MsgCreateEthBridgeClaimSDKType {
    eth_bridge_claim?: EthBridgeClaimSDKType;
}
export interface MsgCreateEthBridgeClaimResponse {
}
export interface MsgCreateEthBridgeClaimResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaimResponse";
    value: Uint8Array;
}
export interface MsgCreateEthBridgeClaimResponseAmino {
}
export interface MsgCreateEthBridgeClaimResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaimResponse";
    value: MsgCreateEthBridgeClaimResponseAmino;
}
export interface MsgCreateEthBridgeClaimResponseSDKType {
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidator {
    cosmosSender: string;
    validator: string;
    operationType: string;
}
export interface MsgUpdateWhiteListValidatorProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator";
    value: Uint8Array;
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidatorAmino {
    cosmos_sender?: string;
    validator?: string;
    operation_type?: string;
}
export interface MsgUpdateWhiteListValidatorAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator";
    value: MsgUpdateWhiteListValidatorAmino;
}
/** MsgUpdateWhiteListValidator add or remove validator from whitelist */
export interface MsgUpdateWhiteListValidatorSDKType {
    cosmos_sender: string;
    validator: string;
    operation_type: string;
}
export interface MsgUpdateWhiteListValidatorResponse {
}
export interface MsgUpdateWhiteListValidatorResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidatorResponse";
    value: Uint8Array;
}
export interface MsgUpdateWhiteListValidatorResponseAmino {
}
export interface MsgUpdateWhiteListValidatorResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidatorResponse";
    value: MsgUpdateWhiteListValidatorResponseAmino;
}
export interface MsgUpdateWhiteListValidatorResponseSDKType {
}
export interface MsgUpdateCethReceiverAccount {
    cosmosSender: string;
    cethReceiverAccount: string;
}
export interface MsgUpdateCethReceiverAccountProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount";
    value: Uint8Array;
}
export interface MsgUpdateCethReceiverAccountAmino {
    cosmos_sender?: string;
    ceth_receiver_account?: string;
}
export interface MsgUpdateCethReceiverAccountAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount";
    value: MsgUpdateCethReceiverAccountAmino;
}
export interface MsgUpdateCethReceiverAccountSDKType {
    cosmos_sender: string;
    ceth_receiver_account: string;
}
export interface MsgUpdateCethReceiverAccountResponse {
}
export interface MsgUpdateCethReceiverAccountResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccountResponse";
    value: Uint8Array;
}
export interface MsgUpdateCethReceiverAccountResponseAmino {
}
export interface MsgUpdateCethReceiverAccountResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccountResponse";
    value: MsgUpdateCethReceiverAccountResponseAmino;
}
export interface MsgUpdateCethReceiverAccountResponseSDKType {
}
export interface MsgRescueCeth {
    cosmosSender: string;
    cosmosReceiver: string;
    cethAmount: string;
}
export interface MsgRescueCethProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgRescueCeth";
    value: Uint8Array;
}
export interface MsgRescueCethAmino {
    cosmos_sender?: string;
    cosmos_receiver?: string;
    ceth_amount?: string;
}
export interface MsgRescueCethAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgRescueCeth";
    value: MsgRescueCethAmino;
}
export interface MsgRescueCethSDKType {
    cosmos_sender: string;
    cosmos_receiver: string;
    ceth_amount: string;
}
export interface MsgRescueCethResponse {
}
export interface MsgRescueCethResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgRescueCethResponse";
    value: Uint8Array;
}
export interface MsgRescueCethResponseAmino {
}
export interface MsgRescueCethResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgRescueCethResponse";
    value: MsgRescueCethResponseAmino;
}
export interface MsgRescueCethResponseSDKType {
}
export interface MsgSetBlacklist {
    from: string;
    addresses: string[];
}
export interface MsgSetBlacklistProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklist";
    value: Uint8Array;
}
export interface MsgSetBlacklistAmino {
    from?: string;
    addresses?: string[];
}
export interface MsgSetBlacklistAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgSetBlacklist";
    value: MsgSetBlacklistAmino;
}
export interface MsgSetBlacklistSDKType {
    from: string;
    addresses: string[];
}
export interface MsgSetBlacklistResponse {
}
export interface MsgSetBlacklistResponseProtoMsg {
    typeUrl: "/sifnode.ethbridge.v1.MsgSetBlacklistResponse";
    value: Uint8Array;
}
export interface MsgSetBlacklistResponseAmino {
}
export interface MsgSetBlacklistResponseAminoMsg {
    type: "/sifnode.ethbridge.v1.MsgSetBlacklistResponse";
    value: MsgSetBlacklistResponseAmino;
}
export interface MsgSetBlacklistResponseSDKType {
}
export declare const MsgPause: {
    typeUrl: string;
    encode(message: MsgPause, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPause;
    fromPartial(object: Partial<MsgPause>): MsgPause;
    fromAmino(object: MsgPauseAmino): MsgPause;
    toAmino(message: MsgPause): MsgPauseAmino;
    fromAminoMsg(object: MsgPauseAminoMsg): MsgPause;
    fromProtoMsg(message: MsgPauseProtoMsg): MsgPause;
    toProto(message: MsgPause): Uint8Array;
    toProtoMsg(message: MsgPause): MsgPauseProtoMsg;
};
export declare const MsgPauseResponse: {
    typeUrl: string;
    encode(_: MsgPauseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPauseResponse;
    fromPartial(_: Partial<MsgPauseResponse>): MsgPauseResponse;
    fromAmino(_: MsgPauseResponseAmino): MsgPauseResponse;
    toAmino(_: MsgPauseResponse): MsgPauseResponseAmino;
    fromAminoMsg(object: MsgPauseResponseAminoMsg): MsgPauseResponse;
    fromProtoMsg(message: MsgPauseResponseProtoMsg): MsgPauseResponse;
    toProto(message: MsgPauseResponse): Uint8Array;
    toProtoMsg(message: MsgPauseResponse): MsgPauseResponseProtoMsg;
};
export declare const MsgLock: {
    typeUrl: string;
    encode(message: MsgLock, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLock;
    fromPartial(object: Partial<MsgLock>): MsgLock;
    fromAmino(object: MsgLockAmino): MsgLock;
    toAmino(message: MsgLock): MsgLockAmino;
    fromAminoMsg(object: MsgLockAminoMsg): MsgLock;
    fromProtoMsg(message: MsgLockProtoMsg): MsgLock;
    toProto(message: MsgLock): Uint8Array;
    toProtoMsg(message: MsgLock): MsgLockProtoMsg;
};
export declare const MsgLockResponse: {
    typeUrl: string;
    encode(_: MsgLockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLockResponse;
    fromPartial(_: Partial<MsgLockResponse>): MsgLockResponse;
    fromAmino(_: MsgLockResponseAmino): MsgLockResponse;
    toAmino(_: MsgLockResponse): MsgLockResponseAmino;
    fromAminoMsg(object: MsgLockResponseAminoMsg): MsgLockResponse;
    fromProtoMsg(message: MsgLockResponseProtoMsg): MsgLockResponse;
    toProto(message: MsgLockResponse): Uint8Array;
    toProtoMsg(message: MsgLockResponse): MsgLockResponseProtoMsg;
};
export declare const MsgBurn: {
    typeUrl: string;
    encode(message: MsgBurn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurn;
    fromPartial(object: Partial<MsgBurn>): MsgBurn;
    fromAmino(object: MsgBurnAmino): MsgBurn;
    toAmino(message: MsgBurn): MsgBurnAmino;
    fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn;
    fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn;
    toProto(message: MsgBurn): Uint8Array;
    toProtoMsg(message: MsgBurn): MsgBurnProtoMsg;
};
export declare const MsgBurnResponse: {
    typeUrl: string;
    encode(_: MsgBurnResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBurnResponse;
    fromPartial(_: Partial<MsgBurnResponse>): MsgBurnResponse;
    fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse;
    toAmino(_: MsgBurnResponse): MsgBurnResponseAmino;
    fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse;
    fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse;
    toProto(message: MsgBurnResponse): Uint8Array;
    toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg;
};
export declare const MsgCreateEthBridgeClaim: {
    typeUrl: string;
    encode(message: MsgCreateEthBridgeClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateEthBridgeClaim;
    fromPartial(object: Partial<MsgCreateEthBridgeClaim>): MsgCreateEthBridgeClaim;
    fromAmino(object: MsgCreateEthBridgeClaimAmino): MsgCreateEthBridgeClaim;
    toAmino(message: MsgCreateEthBridgeClaim): MsgCreateEthBridgeClaimAmino;
    fromAminoMsg(object: MsgCreateEthBridgeClaimAminoMsg): MsgCreateEthBridgeClaim;
    fromProtoMsg(message: MsgCreateEthBridgeClaimProtoMsg): MsgCreateEthBridgeClaim;
    toProto(message: MsgCreateEthBridgeClaim): Uint8Array;
    toProtoMsg(message: MsgCreateEthBridgeClaim): MsgCreateEthBridgeClaimProtoMsg;
};
export declare const MsgCreateEthBridgeClaimResponse: {
    typeUrl: string;
    encode(_: MsgCreateEthBridgeClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateEthBridgeClaimResponse;
    fromPartial(_: Partial<MsgCreateEthBridgeClaimResponse>): MsgCreateEthBridgeClaimResponse;
    fromAmino(_: MsgCreateEthBridgeClaimResponseAmino): MsgCreateEthBridgeClaimResponse;
    toAmino(_: MsgCreateEthBridgeClaimResponse): MsgCreateEthBridgeClaimResponseAmino;
    fromAminoMsg(object: MsgCreateEthBridgeClaimResponseAminoMsg): MsgCreateEthBridgeClaimResponse;
    fromProtoMsg(message: MsgCreateEthBridgeClaimResponseProtoMsg): MsgCreateEthBridgeClaimResponse;
    toProto(message: MsgCreateEthBridgeClaimResponse): Uint8Array;
    toProtoMsg(message: MsgCreateEthBridgeClaimResponse): MsgCreateEthBridgeClaimResponseProtoMsg;
};
export declare const MsgUpdateWhiteListValidator: {
    typeUrl: string;
    encode(message: MsgUpdateWhiteListValidator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateWhiteListValidator;
    fromPartial(object: Partial<MsgUpdateWhiteListValidator>): MsgUpdateWhiteListValidator;
    fromAmino(object: MsgUpdateWhiteListValidatorAmino): MsgUpdateWhiteListValidator;
    toAmino(message: MsgUpdateWhiteListValidator): MsgUpdateWhiteListValidatorAmino;
    fromAminoMsg(object: MsgUpdateWhiteListValidatorAminoMsg): MsgUpdateWhiteListValidator;
    fromProtoMsg(message: MsgUpdateWhiteListValidatorProtoMsg): MsgUpdateWhiteListValidator;
    toProto(message: MsgUpdateWhiteListValidator): Uint8Array;
    toProtoMsg(message: MsgUpdateWhiteListValidator): MsgUpdateWhiteListValidatorProtoMsg;
};
export declare const MsgUpdateWhiteListValidatorResponse: {
    typeUrl: string;
    encode(_: MsgUpdateWhiteListValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateWhiteListValidatorResponse;
    fromPartial(_: Partial<MsgUpdateWhiteListValidatorResponse>): MsgUpdateWhiteListValidatorResponse;
    fromAmino(_: MsgUpdateWhiteListValidatorResponseAmino): MsgUpdateWhiteListValidatorResponse;
    toAmino(_: MsgUpdateWhiteListValidatorResponse): MsgUpdateWhiteListValidatorResponseAmino;
    fromAminoMsg(object: MsgUpdateWhiteListValidatorResponseAminoMsg): MsgUpdateWhiteListValidatorResponse;
    fromProtoMsg(message: MsgUpdateWhiteListValidatorResponseProtoMsg): MsgUpdateWhiteListValidatorResponse;
    toProto(message: MsgUpdateWhiteListValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateWhiteListValidatorResponse): MsgUpdateWhiteListValidatorResponseProtoMsg;
};
export declare const MsgUpdateCethReceiverAccount: {
    typeUrl: string;
    encode(message: MsgUpdateCethReceiverAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateCethReceiverAccount;
    fromPartial(object: Partial<MsgUpdateCethReceiverAccount>): MsgUpdateCethReceiverAccount;
    fromAmino(object: MsgUpdateCethReceiverAccountAmino): MsgUpdateCethReceiverAccount;
    toAmino(message: MsgUpdateCethReceiverAccount): MsgUpdateCethReceiverAccountAmino;
    fromAminoMsg(object: MsgUpdateCethReceiverAccountAminoMsg): MsgUpdateCethReceiverAccount;
    fromProtoMsg(message: MsgUpdateCethReceiverAccountProtoMsg): MsgUpdateCethReceiverAccount;
    toProto(message: MsgUpdateCethReceiverAccount): Uint8Array;
    toProtoMsg(message: MsgUpdateCethReceiverAccount): MsgUpdateCethReceiverAccountProtoMsg;
};
export declare const MsgUpdateCethReceiverAccountResponse: {
    typeUrl: string;
    encode(_: MsgUpdateCethReceiverAccountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateCethReceiverAccountResponse;
    fromPartial(_: Partial<MsgUpdateCethReceiverAccountResponse>): MsgUpdateCethReceiverAccountResponse;
    fromAmino(_: MsgUpdateCethReceiverAccountResponseAmino): MsgUpdateCethReceiverAccountResponse;
    toAmino(_: MsgUpdateCethReceiverAccountResponse): MsgUpdateCethReceiverAccountResponseAmino;
    fromAminoMsg(object: MsgUpdateCethReceiverAccountResponseAminoMsg): MsgUpdateCethReceiverAccountResponse;
    fromProtoMsg(message: MsgUpdateCethReceiverAccountResponseProtoMsg): MsgUpdateCethReceiverAccountResponse;
    toProto(message: MsgUpdateCethReceiverAccountResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateCethReceiverAccountResponse): MsgUpdateCethReceiverAccountResponseProtoMsg;
};
export declare const MsgRescueCeth: {
    typeUrl: string;
    encode(message: MsgRescueCeth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRescueCeth;
    fromPartial(object: Partial<MsgRescueCeth>): MsgRescueCeth;
    fromAmino(object: MsgRescueCethAmino): MsgRescueCeth;
    toAmino(message: MsgRescueCeth): MsgRescueCethAmino;
    fromAminoMsg(object: MsgRescueCethAminoMsg): MsgRescueCeth;
    fromProtoMsg(message: MsgRescueCethProtoMsg): MsgRescueCeth;
    toProto(message: MsgRescueCeth): Uint8Array;
    toProtoMsg(message: MsgRescueCeth): MsgRescueCethProtoMsg;
};
export declare const MsgRescueCethResponse: {
    typeUrl: string;
    encode(_: MsgRescueCethResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRescueCethResponse;
    fromPartial(_: Partial<MsgRescueCethResponse>): MsgRescueCethResponse;
    fromAmino(_: MsgRescueCethResponseAmino): MsgRescueCethResponse;
    toAmino(_: MsgRescueCethResponse): MsgRescueCethResponseAmino;
    fromAminoMsg(object: MsgRescueCethResponseAminoMsg): MsgRescueCethResponse;
    fromProtoMsg(message: MsgRescueCethResponseProtoMsg): MsgRescueCethResponse;
    toProto(message: MsgRescueCethResponse): Uint8Array;
    toProtoMsg(message: MsgRescueCethResponse): MsgRescueCethResponseProtoMsg;
};
export declare const MsgSetBlacklist: {
    typeUrl: string;
    encode(message: MsgSetBlacklist, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetBlacklist;
    fromPartial(object: Partial<MsgSetBlacklist>): MsgSetBlacklist;
    fromAmino(object: MsgSetBlacklistAmino): MsgSetBlacklist;
    toAmino(message: MsgSetBlacklist): MsgSetBlacklistAmino;
    fromAminoMsg(object: MsgSetBlacklistAminoMsg): MsgSetBlacklist;
    fromProtoMsg(message: MsgSetBlacklistProtoMsg): MsgSetBlacklist;
    toProto(message: MsgSetBlacklist): Uint8Array;
    toProtoMsg(message: MsgSetBlacklist): MsgSetBlacklistProtoMsg;
};
export declare const MsgSetBlacklistResponse: {
    typeUrl: string;
    encode(_: MsgSetBlacklistResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetBlacklistResponse;
    fromPartial(_: Partial<MsgSetBlacklistResponse>): MsgSetBlacklistResponse;
    fromAmino(_: MsgSetBlacklistResponseAmino): MsgSetBlacklistResponse;
    toAmino(_: MsgSetBlacklistResponse): MsgSetBlacklistResponseAmino;
    fromAminoMsg(object: MsgSetBlacklistResponseAminoMsg): MsgSetBlacklistResponse;
    fromProtoMsg(message: MsgSetBlacklistResponseProtoMsg): MsgSetBlacklistResponse;
    toProto(message: MsgSetBlacklistResponse): Uint8Array;
    toProtoMsg(message: MsgSetBlacklistResponse): MsgSetBlacklistResponseProtoMsg;
};

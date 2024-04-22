import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Chain, ChainAmino, ChainSDKType, CrossChainTransfer, CrossChainTransferAmino, CrossChainTransferSDKType, TransferFee, TransferFeeAmino, TransferFeeSDKType, FeeInfo, FeeInfoAmino, FeeInfoSDKType, GeneralMessage, GeneralMessageAmino, GeneralMessageSDKType } from "../exported/v1beta1/types";
import { ChainState, ChainStateAmino, ChainStateSDKType, LinkedAddresses, LinkedAddressesAmino, LinkedAddressesSDKType, RateLimit, RateLimitAmino, RateLimitSDKType, TransferEpoch, TransferEpochAmino, TransferEpochSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
/** GenesisState represents the genesis state */
export interface GenesisState {
    params: Params;
    nonce: bigint;
    chains: Chain[];
    chainStates: ChainState[];
    linkedAddresses: LinkedAddresses[];
    transfers: CrossChainTransfer[];
    fee: TransferFee;
    feeInfos: FeeInfo[];
    rateLimits: RateLimit[];
    transferEpochs: TransferEpoch[];
    messages: GeneralMessage[];
    messageNonce: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    nonce?: string;
    chains?: ChainAmino[];
    chain_states?: ChainStateAmino[];
    linked_addresses?: LinkedAddressesAmino[];
    transfers?: CrossChainTransferAmino[];
    fee?: TransferFeeAmino;
    fee_infos?: FeeInfoAmino[];
    rate_limits?: RateLimitAmino[];
    transfer_epochs?: TransferEpochAmino[];
    messages?: GeneralMessageAmino[];
    message_nonce?: string;
}
export interface GenesisStateAminoMsg {
    type: "/axelar.nexus.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    nonce: bigint;
    chains: ChainSDKType[];
    chain_states: ChainStateSDKType[];
    linked_addresses: LinkedAddressesSDKType[];
    transfers: CrossChainTransferSDKType[];
    fee: TransferFeeSDKType;
    fee_infos: FeeInfoSDKType[];
    rate_limits: RateLimitSDKType[];
    transfer_epochs: TransferEpochSDKType[];
    messages: GeneralMessageSDKType[];
    message_nonce: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};

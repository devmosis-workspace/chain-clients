import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Valset, ValsetAmino, ValsetSDKType, ERC20ToDenom, ERC20ToDenomAmino, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesAmino, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { BinaryWriter } from "../../../binary";
/** GenesisState struct */
export interface GenesisState {
    params: Params;
    lastObservedNonce: bigint;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    attestations: Attestation[];
    orchestratorAddresses: MsgSetOrchestratorAddresses[];
    erc20ToDenoms: ERC20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
    lastObservedEthereumHeight: bigint;
    lastOutgoingBatchId: bigint;
    lastOutgoingPoolId: bigint;
    lastObservedValset: Valset;
    ethereumBlacklist: string[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.peggy.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState struct */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    last_observed_nonce: string;
    valsets: ValsetAmino[];
    valset_confirms: MsgValsetConfirmAmino[];
    batches: OutgoingTxBatchAmino[];
    batch_confirms: MsgConfirmBatchAmino[];
    attestations: AttestationAmino[];
    orchestrator_addresses: MsgSetOrchestratorAddressesAmino[];
    erc20_to_denoms: ERC20ToDenomAmino[];
    unbatched_transfers: OutgoingTransferTxAmino[];
    last_observed_ethereum_height: string;
    last_outgoing_batch_id: string;
    last_outgoing_pool_id: string;
    last_observed_valset?: ValsetAmino;
    ethereum_blacklist: string[];
}
export interface GenesisStateAminoMsg {
    type: "/injective.peggy.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState struct */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    last_observed_nonce: bigint;
    valsets: ValsetSDKType[];
    valset_confirms: MsgValsetConfirmSDKType[];
    batches: OutgoingTxBatchSDKType[];
    batch_confirms: MsgConfirmBatchSDKType[];
    attestations: AttestationSDKType[];
    orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
    erc20_to_denoms: ERC20ToDenomSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
    last_observed_ethereum_height: bigint;
    last_outgoing_batch_id: bigint;
    last_outgoing_pool_id: bigint;
    last_observed_valset: ValsetSDKType;
    ethereum_blacklist: string[];
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

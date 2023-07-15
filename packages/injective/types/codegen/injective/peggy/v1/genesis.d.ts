import { Params, ParamsSDKType } from "./params";
import { Valset, ValsetSDKType, ERC20ToDenom, ERC20ToDenomSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType, MsgSetOrchestratorAddresses, MsgSetOrchestratorAddressesSDKType } from "./msgs";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationSDKType } from "./attestation";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState struct */
export interface GenesisState {
    params?: Params;
    lastObservedNonce: Long;
    valsets: Valset[];
    valsetConfirms: MsgValsetConfirm[];
    batches: OutgoingTxBatch[];
    batchConfirms: MsgConfirmBatch[];
    attestations: Attestation[];
    orchestratorAddresses: MsgSetOrchestratorAddresses[];
    erc20ToDenoms: ERC20ToDenom[];
    unbatchedTransfers: OutgoingTransferTx[];
    lastObservedEthereumHeight: Long;
    lastOutgoingBatchId: Long;
    lastOutgoingPoolId: Long;
    lastObservedValset?: Valset;
    ethereumBlacklist: string[];
}
/** GenesisState struct */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    last_observed_nonce: Long;
    valsets: ValsetSDKType[];
    valset_confirms: MsgValsetConfirmSDKType[];
    batches: OutgoingTxBatchSDKType[];
    batch_confirms: MsgConfirmBatchSDKType[];
    attestations: AttestationSDKType[];
    orchestrator_addresses: MsgSetOrchestratorAddressesSDKType[];
    erc20_to_denoms: ERC20ToDenomSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
    last_observed_ethereum_height: Long;
    last_outgoing_batch_id: Long;
    last_outgoing_pool_id: Long;
    last_observed_valset?: ValsetSDKType;
    ethereum_blacklist: string[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};

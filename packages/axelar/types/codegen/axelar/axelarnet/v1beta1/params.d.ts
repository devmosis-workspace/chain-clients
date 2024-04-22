import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params represent the genesis parameters for the module */
export interface Params {
    /** IBC packet route timeout window */
    routeTimeoutWindow: bigint;
    transferLimit: bigint;
    endBlockerLimit: bigint;
    callContractsProposalMinDeposits: CallContractProposalMinDeposit[];
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.Params";
    value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
    /** IBC packet route timeout window */
    route_timeout_window?: string;
    transfer_limit?: string;
    end_blocker_limit?: string;
    call_contracts_proposal_min_deposits?: CallContractProposalMinDepositAmino[];
}
export interface ParamsAminoMsg {
    type: "/axelar.axelarnet.v1beta1.Params";
    value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    route_timeout_window: bigint;
    transfer_limit: bigint;
    end_blocker_limit: bigint;
    call_contracts_proposal_min_deposits: CallContractProposalMinDepositSDKType[];
}
export interface CallContractProposalMinDeposit {
    chain: string;
    contractAddress: string;
    minDeposits: Coin[];
}
export interface CallContractProposalMinDepositProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit";
    value: Uint8Array;
}
export interface CallContractProposalMinDepositAmino {
    chain?: string;
    contract_address?: string;
    min_deposits?: CoinAmino[];
}
export interface CallContractProposalMinDepositAminoMsg {
    type: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit";
    value: CallContractProposalMinDepositAmino;
}
export interface CallContractProposalMinDepositSDKType {
    chain: string;
    contract_address: string;
    min_deposits: CoinSDKType[];
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
export declare const CallContractProposalMinDeposit: {
    typeUrl: string;
    encode(message: CallContractProposalMinDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CallContractProposalMinDeposit;
    fromPartial(object: Partial<CallContractProposalMinDeposit>): CallContractProposalMinDeposit;
    fromAmino(object: CallContractProposalMinDepositAmino): CallContractProposalMinDeposit;
    toAmino(message: CallContractProposalMinDeposit): CallContractProposalMinDepositAmino;
    fromAminoMsg(object: CallContractProposalMinDepositAminoMsg): CallContractProposalMinDeposit;
    fromProtoMsg(message: CallContractProposalMinDepositProtoMsg): CallContractProposalMinDeposit;
    toProto(message: CallContractProposalMinDeposit): Uint8Array;
    toProtoMsg(message: CallContractProposalMinDeposit): CallContractProposalMinDepositProtoMsg;
};

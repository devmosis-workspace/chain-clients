import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BurnerInfo, BurnerInfoAmino, BurnerInfoSDKType, ERC20Deposit, ERC20DepositAmino, ERC20DepositSDKType, CommandBatchMetadata, CommandBatchMetadataAmino, CommandBatchMetadataSDKType, Gateway, GatewayAmino, GatewaySDKType, ERC20TokenMetadata, ERC20TokenMetadataAmino, ERC20TokenMetadataSDKType, Event, EventAmino, EventSDKType } from "./types";
import { QueueState, QueueStateAmino, QueueStateSDKType } from "../../utils/v1beta1/queuer";
import { BinaryWriter } from "../../../binary";
/** GenesisState represents the genesis state */
export interface GenesisState {
    chains: GenesisState_Chain[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState represents the genesis state */
export interface GenesisStateAmino {
    chains?: GenesisState_ChainAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/axelar.evm.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState represents the genesis state */
export interface GenesisStateSDKType {
    chains: GenesisState_ChainSDKType[];
}
export interface GenesisState_Chain {
    params: Params;
    burnerInfos: BurnerInfo[];
    commandQueue: QueueState;
    confirmedDeposits: ERC20Deposit[];
    burnedDeposits: ERC20Deposit[];
    commandBatches: CommandBatchMetadata[];
    gateway: Gateway;
    tokens: ERC20TokenMetadata[];
    events: Event[];
    confirmedEventQueue: QueueState;
    legacyConfirmedDeposits: ERC20Deposit[];
    legacyBurnedDeposits: ERC20Deposit[];
}
export interface GenesisState_ChainProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Chain";
    value: Uint8Array;
}
export interface GenesisState_ChainAmino {
    params?: ParamsAmino;
    burner_infos?: BurnerInfoAmino[];
    command_queue?: QueueStateAmino;
    confirmed_deposits?: ERC20DepositAmino[];
    burned_deposits?: ERC20DepositAmino[];
    command_batches?: CommandBatchMetadataAmino[];
    gateway?: GatewayAmino;
    tokens?: ERC20TokenMetadataAmino[];
    events?: EventAmino[];
    confirmed_event_queue?: QueueStateAmino;
    legacy_confirmed_deposits?: ERC20DepositAmino[];
    legacy_burned_deposits?: ERC20DepositAmino[];
}
export interface GenesisState_ChainAminoMsg {
    type: "/axelar.evm.v1beta1.Chain";
    value: GenesisState_ChainAmino;
}
export interface GenesisState_ChainSDKType {
    params: ParamsSDKType;
    burner_infos: BurnerInfoSDKType[];
    command_queue: QueueStateSDKType;
    confirmed_deposits: ERC20DepositSDKType[];
    burned_deposits: ERC20DepositSDKType[];
    command_batches: CommandBatchMetadataSDKType[];
    gateway: GatewaySDKType;
    tokens: ERC20TokenMetadataSDKType[];
    events: EventSDKType[];
    confirmed_event_queue: QueueStateSDKType;
    legacy_confirmed_deposits: ERC20DepositSDKType[];
    legacy_burned_deposits: ERC20DepositSDKType[];
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
export declare const GenesisState_Chain: {
    typeUrl: string;
    encode(message: GenesisState_Chain, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_Chain;
    fromPartial(object: Partial<GenesisState_Chain>): GenesisState_Chain;
    fromAmino(object: GenesisState_ChainAmino): GenesisState_Chain;
    toAmino(message: GenesisState_Chain): GenesisState_ChainAmino;
    fromAminoMsg(object: GenesisState_ChainAminoMsg): GenesisState_Chain;
    fromProtoMsg(message: GenesisState_ChainProtoMsg): GenesisState_Chain;
    toProto(message: GenesisState_Chain): Uint8Array;
    toProtoMsg(message: GenesisState_Chain): GenesisState_ChainProtoMsg;
};

import { ChainConfigurations, ChainConfigurationsAmino, ChainConfigurationsSDKType, CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ScheduledAxelarCorks, ScheduledAxelarCorksAmino, ScheduledAxelarCorksSDKType, AxelarCorkResults, AxelarCorkResultsAmino, AxelarCorkResultsSDKType, AxelarContractCallNonce, AxelarContractCallNonceAmino, AxelarContractCallNonceSDKType, AxelarUpgradeData, AxelarUpgradeDataAmino, AxelarUpgradeDataSDKType } from "./axelarcork";
import { BinaryWriter } from "../../binary";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
    params?: Params;
    chainConfigurations: ChainConfigurations;
    cellarIds: CellarIDSet[];
    scheduledCorks?: ScheduledAxelarCorks;
    corkResults?: AxelarCorkResults;
    axelarContractCallNonces: AxelarContractCallNonce[];
    axelarUpgradeData: AxelarUpgradeData[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/axelarcork.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    chain_configurations?: ChainConfigurationsAmino;
    cellar_ids?: CellarIDSetAmino[];
    scheduled_corks?: ScheduledAxelarCorksAmino;
    cork_results?: AxelarCorkResultsAmino;
    axelar_contract_call_nonces?: AxelarContractCallNonceAmino[];
    axelar_upgrade_data?: AxelarUpgradeDataAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/axelarcork.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    chain_configurations: ChainConfigurationsSDKType;
    cellar_ids: CellarIDSetSDKType[];
    scheduled_corks?: ScheduledAxelarCorksSDKType;
    cork_results?: AxelarCorkResultsSDKType;
    axelar_contract_call_nonces: AxelarContractCallNonceSDKType[];
    axelar_upgrade_data: AxelarUpgradeDataSDKType[];
}
export interface Params {
    enabled: boolean;
    ibcChannel: string;
    ibcPort: string;
    gmpAccount: string;
    executorAccount: string;
    timeoutDuration: bigint;
    corkTimeoutBlocks: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/axelarcork.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    enabled?: boolean;
    ibc_channel?: string;
    ibc_port?: string;
    gmp_account?: string;
    executor_account?: string;
    timeout_duration?: string;
    cork_timeout_blocks?: string;
}
export interface ParamsAminoMsg {
    type: "/axelarcork.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    enabled: boolean;
    ibc_channel: string;
    ibc_port: string;
    gmp_account: string;
    executor_account: string;
    timeout_duration: bigint;
    cork_timeout_blocks: bigint;
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

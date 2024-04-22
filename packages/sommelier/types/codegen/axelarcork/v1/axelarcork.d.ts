import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
export interface AxelarCork {
    /** call body containing the ABI encoded bytes to send to the contract */
    encodedContractCall: Uint8Array;
    /** the chain ID of the evm target chain */
    chainId: bigint;
    /** address of the contract to send the call */
    targetContractAddress: string;
    /**
     * unix timestamp before which the contract call must be executed.
     * enforced by the proxy contract.
     */
    deadline: bigint;
}
export interface AxelarCorkProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarCork";
    value: Uint8Array;
}
export interface AxelarCorkAmino {
    /** call body containing the ABI encoded bytes to send to the contract */
    encoded_contract_call?: string;
    /** the chain ID of the evm target chain */
    chain_id?: string;
    /** address of the contract to send the call */
    target_contract_address?: string;
    /**
     * unix timestamp before which the contract call must be executed.
     * enforced by the proxy contract.
     */
    deadline?: string;
}
export interface AxelarCorkAminoMsg {
    type: "/axelarcork.v1.AxelarCork";
    value: AxelarCorkAmino;
}
export interface AxelarCorkSDKType {
    encoded_contract_call: Uint8Array;
    chain_id: bigint;
    target_contract_address: string;
    deadline: bigint;
}
export interface ScheduledAxelarCork {
    cork?: AxelarCork;
    blockHeight: bigint;
    validator: string;
    id: string;
}
export interface ScheduledAxelarCorkProtoMsg {
    typeUrl: "/axelarcork.v1.ScheduledAxelarCork";
    value: Uint8Array;
}
export interface ScheduledAxelarCorkAmino {
    cork?: AxelarCorkAmino;
    block_height?: string;
    validator?: string;
    id?: string;
}
export interface ScheduledAxelarCorkAminoMsg {
    type: "/axelarcork.v1.ScheduledAxelarCork";
    value: ScheduledAxelarCorkAmino;
}
export interface ScheduledAxelarCorkSDKType {
    cork?: AxelarCorkSDKType;
    block_height: bigint;
    validator: string;
    id: string;
}
export interface ScheduledAxelarCorks {
    scheduledCorks: ScheduledAxelarCork[];
}
export interface ScheduledAxelarCorksProtoMsg {
    typeUrl: "/axelarcork.v1.ScheduledAxelarCorks";
    value: Uint8Array;
}
export interface ScheduledAxelarCorksAmino {
    scheduled_corks?: ScheduledAxelarCorkAmino[];
}
export interface ScheduledAxelarCorksAminoMsg {
    type: "/axelarcork.v1.ScheduledAxelarCorks";
    value: ScheduledAxelarCorksAmino;
}
export interface ScheduledAxelarCorksSDKType {
    scheduled_corks: ScheduledAxelarCorkSDKType[];
}
export interface AxelarCorkResult {
    cork?: AxelarCork;
    blockHeight: bigint;
    approved: boolean;
    approvalPercentage: string;
}
export interface AxelarCorkResultProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarCorkResult";
    value: Uint8Array;
}
export interface AxelarCorkResultAmino {
    cork?: AxelarCorkAmino;
    block_height?: string;
    approved?: boolean;
    approval_percentage?: string;
}
export interface AxelarCorkResultAminoMsg {
    type: "/axelarcork.v1.AxelarCorkResult";
    value: AxelarCorkResultAmino;
}
export interface AxelarCorkResultSDKType {
    cork?: AxelarCorkSDKType;
    block_height: bigint;
    approved: boolean;
    approval_percentage: string;
}
export interface AxelarCorkResults {
    corkResults: AxelarCorkResult[];
}
export interface AxelarCorkResultsProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarCorkResults";
    value: Uint8Array;
}
export interface AxelarCorkResultsAmino {
    cork_results?: AxelarCorkResultAmino[];
}
export interface AxelarCorkResultsAminoMsg {
    type: "/axelarcork.v1.AxelarCorkResults";
    value: AxelarCorkResultsAmino;
}
export interface AxelarCorkResultsSDKType {
    cork_results: AxelarCorkResultSDKType[];
}
export interface CellarIDSet {
    chainId: bigint;
    ids: string[];
}
export interface CellarIDSetProtoMsg {
    typeUrl: "/axelarcork.v1.CellarIDSet";
    value: Uint8Array;
}
export interface CellarIDSetAmino {
    chain_id?: string;
    ids?: string[];
}
export interface CellarIDSetAminoMsg {
    type: "/axelarcork.v1.CellarIDSet";
    value: CellarIDSetAmino;
}
export interface CellarIDSetSDKType {
    chain_id: bigint;
    ids: string[];
}
export interface ChainConfiguration {
    name: string;
    id: bigint;
    proxyAddress: string;
    /**
     * pure token transfers have a fixed fee deducted from the amount sent in the ICS-20 message depending
     * on the asset and destination chain
     * they can be calculated here: https://docs.axelar.dev/resources/mainnet#cross-chain-relayer-gas-fee
     */
    bridgeFees: Coin[];
}
export interface ChainConfigurationProtoMsg {
    typeUrl: "/axelarcork.v1.ChainConfiguration";
    value: Uint8Array;
}
export interface ChainConfigurationAmino {
    name?: string;
    id?: string;
    proxy_address?: string;
    /**
     * pure token transfers have a fixed fee deducted from the amount sent in the ICS-20 message depending
     * on the asset and destination chain
     * they can be calculated here: https://docs.axelar.dev/resources/mainnet#cross-chain-relayer-gas-fee
     */
    bridge_fees?: CoinAmino[];
}
export interface ChainConfigurationAminoMsg {
    type: "/axelarcork.v1.ChainConfiguration";
    value: ChainConfigurationAmino;
}
export interface ChainConfigurationSDKType {
    name: string;
    id: bigint;
    proxy_address: string;
    bridge_fees: CoinSDKType[];
}
export interface ChainConfigurations {
    configurations: ChainConfiguration[];
}
export interface ChainConfigurationsProtoMsg {
    typeUrl: "/axelarcork.v1.ChainConfigurations";
    value: Uint8Array;
}
export interface ChainConfigurationsAmino {
    configurations?: ChainConfigurationAmino[];
}
export interface ChainConfigurationsAminoMsg {
    type: "/axelarcork.v1.ChainConfigurations";
    value: ChainConfigurationsAmino;
}
export interface ChainConfigurationsSDKType {
    configurations: ChainConfigurationSDKType[];
}
/** Used to enforce strictly newer call ordering per contract */
export interface AxelarContractCallNonce {
    chainId: bigint;
    contractAddress: string;
    nonce: bigint;
}
export interface AxelarContractCallNonceProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarContractCallNonce";
    value: Uint8Array;
}
/** Used to enforce strictly newer call ordering per contract */
export interface AxelarContractCallNonceAmino {
    chain_id?: string;
    contract_address?: string;
    nonce?: string;
}
export interface AxelarContractCallNonceAminoMsg {
    type: "/axelarcork.v1.AxelarContractCallNonce";
    value: AxelarContractCallNonceAmino;
}
/** Used to enforce strictly newer call ordering per contract */
export interface AxelarContractCallNonceSDKType {
    chain_id: bigint;
    contract_address: string;
    nonce: bigint;
}
/**
 * Represents a proxy contract upgrade approved by governance with a delay in
 * execution in case of an error.
 */
export interface AxelarUpgradeData {
    chainId: bigint;
    payload: Uint8Array;
    executableHeightThreshold: bigint;
}
export interface AxelarUpgradeDataProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarUpgradeData";
    value: Uint8Array;
}
/**
 * Represents a proxy contract upgrade approved by governance with a delay in
 * execution in case of an error.
 */
export interface AxelarUpgradeDataAmino {
    chain_id?: string;
    payload?: string;
    executable_height_threshold?: string;
}
export interface AxelarUpgradeDataAminoMsg {
    type: "/axelarcork.v1.AxelarUpgradeData";
    value: AxelarUpgradeDataAmino;
}
/**
 * Represents a proxy contract upgrade approved by governance with a delay in
 * execution in case of an error.
 */
export interface AxelarUpgradeDataSDKType {
    chain_id: bigint;
    payload: Uint8Array;
    executable_height_threshold: bigint;
}
/** Represents a cork that has received enough votes to be executed */
export interface WinningAxelarCork {
    cork?: AxelarCork;
    blockHeight: bigint;
}
export interface WinningAxelarCorkProtoMsg {
    typeUrl: "/axelarcork.v1.WinningAxelarCork";
    value: Uint8Array;
}
/** Represents a cork that has received enough votes to be executed */
export interface WinningAxelarCorkAmino {
    cork?: AxelarCorkAmino;
    block_height?: string;
}
export interface WinningAxelarCorkAminoMsg {
    type: "/axelarcork.v1.WinningAxelarCork";
    value: WinningAxelarCorkAmino;
}
/** Represents a cork that has received enough votes to be executed */
export interface WinningAxelarCorkSDKType {
    cork?: AxelarCorkSDKType;
    block_height: bigint;
}
export declare const AxelarCork: {
    typeUrl: string;
    encode(message: AxelarCork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarCork;
    fromPartial(object: Partial<AxelarCork>): AxelarCork;
    fromAmino(object: AxelarCorkAmino): AxelarCork;
    toAmino(message: AxelarCork): AxelarCorkAmino;
    fromAminoMsg(object: AxelarCorkAminoMsg): AxelarCork;
    fromProtoMsg(message: AxelarCorkProtoMsg): AxelarCork;
    toProto(message: AxelarCork): Uint8Array;
    toProtoMsg(message: AxelarCork): AxelarCorkProtoMsg;
};
export declare const ScheduledAxelarCork: {
    typeUrl: string;
    encode(message: ScheduledAxelarCork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduledAxelarCork;
    fromPartial(object: Partial<ScheduledAxelarCork>): ScheduledAxelarCork;
    fromAmino(object: ScheduledAxelarCorkAmino): ScheduledAxelarCork;
    toAmino(message: ScheduledAxelarCork): ScheduledAxelarCorkAmino;
    fromAminoMsg(object: ScheduledAxelarCorkAminoMsg): ScheduledAxelarCork;
    fromProtoMsg(message: ScheduledAxelarCorkProtoMsg): ScheduledAxelarCork;
    toProto(message: ScheduledAxelarCork): Uint8Array;
    toProtoMsg(message: ScheduledAxelarCork): ScheduledAxelarCorkProtoMsg;
};
export declare const ScheduledAxelarCorks: {
    typeUrl: string;
    encode(message: ScheduledAxelarCorks, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduledAxelarCorks;
    fromPartial(object: Partial<ScheduledAxelarCorks>): ScheduledAxelarCorks;
    fromAmino(object: ScheduledAxelarCorksAmino): ScheduledAxelarCorks;
    toAmino(message: ScheduledAxelarCorks): ScheduledAxelarCorksAmino;
    fromAminoMsg(object: ScheduledAxelarCorksAminoMsg): ScheduledAxelarCorks;
    fromProtoMsg(message: ScheduledAxelarCorksProtoMsg): ScheduledAxelarCorks;
    toProto(message: ScheduledAxelarCorks): Uint8Array;
    toProtoMsg(message: ScheduledAxelarCorks): ScheduledAxelarCorksProtoMsg;
};
export declare const AxelarCorkResult: {
    typeUrl: string;
    encode(message: AxelarCorkResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarCorkResult;
    fromPartial(object: Partial<AxelarCorkResult>): AxelarCorkResult;
    fromAmino(object: AxelarCorkResultAmino): AxelarCorkResult;
    toAmino(message: AxelarCorkResult): AxelarCorkResultAmino;
    fromAminoMsg(object: AxelarCorkResultAminoMsg): AxelarCorkResult;
    fromProtoMsg(message: AxelarCorkResultProtoMsg): AxelarCorkResult;
    toProto(message: AxelarCorkResult): Uint8Array;
    toProtoMsg(message: AxelarCorkResult): AxelarCorkResultProtoMsg;
};
export declare const AxelarCorkResults: {
    typeUrl: string;
    encode(message: AxelarCorkResults, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarCorkResults;
    fromPartial(object: Partial<AxelarCorkResults>): AxelarCorkResults;
    fromAmino(object: AxelarCorkResultsAmino): AxelarCorkResults;
    toAmino(message: AxelarCorkResults): AxelarCorkResultsAmino;
    fromAminoMsg(object: AxelarCorkResultsAminoMsg): AxelarCorkResults;
    fromProtoMsg(message: AxelarCorkResultsProtoMsg): AxelarCorkResults;
    toProto(message: AxelarCorkResults): Uint8Array;
    toProtoMsg(message: AxelarCorkResults): AxelarCorkResultsProtoMsg;
};
export declare const CellarIDSet: {
    typeUrl: string;
    encode(message: CellarIDSet, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CellarIDSet;
    fromPartial(object: Partial<CellarIDSet>): CellarIDSet;
    fromAmino(object: CellarIDSetAmino): CellarIDSet;
    toAmino(message: CellarIDSet): CellarIDSetAmino;
    fromAminoMsg(object: CellarIDSetAminoMsg): CellarIDSet;
    fromProtoMsg(message: CellarIDSetProtoMsg): CellarIDSet;
    toProto(message: CellarIDSet): Uint8Array;
    toProtoMsg(message: CellarIDSet): CellarIDSetProtoMsg;
};
export declare const ChainConfiguration: {
    typeUrl: string;
    encode(message: ChainConfiguration, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainConfiguration;
    fromPartial(object: Partial<ChainConfiguration>): ChainConfiguration;
    fromAmino(object: ChainConfigurationAmino): ChainConfiguration;
    toAmino(message: ChainConfiguration): ChainConfigurationAmino;
    fromAminoMsg(object: ChainConfigurationAminoMsg): ChainConfiguration;
    fromProtoMsg(message: ChainConfigurationProtoMsg): ChainConfiguration;
    toProto(message: ChainConfiguration): Uint8Array;
    toProtoMsg(message: ChainConfiguration): ChainConfigurationProtoMsg;
};
export declare const ChainConfigurations: {
    typeUrl: string;
    encode(message: ChainConfigurations, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainConfigurations;
    fromPartial(object: Partial<ChainConfigurations>): ChainConfigurations;
    fromAmino(object: ChainConfigurationsAmino): ChainConfigurations;
    toAmino(message: ChainConfigurations): ChainConfigurationsAmino;
    fromAminoMsg(object: ChainConfigurationsAminoMsg): ChainConfigurations;
    fromProtoMsg(message: ChainConfigurationsProtoMsg): ChainConfigurations;
    toProto(message: ChainConfigurations): Uint8Array;
    toProtoMsg(message: ChainConfigurations): ChainConfigurationsProtoMsg;
};
export declare const AxelarContractCallNonce: {
    typeUrl: string;
    encode(message: AxelarContractCallNonce, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarContractCallNonce;
    fromPartial(object: Partial<AxelarContractCallNonce>): AxelarContractCallNonce;
    fromAmino(object: AxelarContractCallNonceAmino): AxelarContractCallNonce;
    toAmino(message: AxelarContractCallNonce): AxelarContractCallNonceAmino;
    fromAminoMsg(object: AxelarContractCallNonceAminoMsg): AxelarContractCallNonce;
    fromProtoMsg(message: AxelarContractCallNonceProtoMsg): AxelarContractCallNonce;
    toProto(message: AxelarContractCallNonce): Uint8Array;
    toProtoMsg(message: AxelarContractCallNonce): AxelarContractCallNonceProtoMsg;
};
export declare const AxelarUpgradeData: {
    typeUrl: string;
    encode(message: AxelarUpgradeData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarUpgradeData;
    fromPartial(object: Partial<AxelarUpgradeData>): AxelarUpgradeData;
    fromAmino(object: AxelarUpgradeDataAmino): AxelarUpgradeData;
    toAmino(message: AxelarUpgradeData): AxelarUpgradeDataAmino;
    fromAminoMsg(object: AxelarUpgradeDataAminoMsg): AxelarUpgradeData;
    fromProtoMsg(message: AxelarUpgradeDataProtoMsg): AxelarUpgradeData;
    toProto(message: AxelarUpgradeData): Uint8Array;
    toProtoMsg(message: AxelarUpgradeData): AxelarUpgradeDataProtoMsg;
};
export declare const WinningAxelarCork: {
    typeUrl: string;
    encode(message: WinningAxelarCork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WinningAxelarCork;
    fromPartial(object: Partial<WinningAxelarCork>): WinningAxelarCork;
    fromAmino(object: WinningAxelarCorkAmino): WinningAxelarCork;
    toAmino(message: WinningAxelarCork): WinningAxelarCorkAmino;
    fromAminoMsg(object: WinningAxelarCorkAminoMsg): WinningAxelarCork;
    fromProtoMsg(message: WinningAxelarCorkProtoMsg): WinningAxelarCork;
    toProto(message: WinningAxelarCork): Uint8Array;
    toProtoMsg(message: WinningAxelarCork): WinningAxelarCorkProtoMsg;
};

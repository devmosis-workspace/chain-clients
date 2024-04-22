import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ChainConfiguration, ChainConfigurationAmino, ChainConfigurationSDKType } from "./axelarcork";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
export interface AddAxelarManagedCellarIDsProposal {
    title: string;
    description: string;
    chainId: bigint;
    cellarIds?: CellarIDSet;
    publisherDomain: string;
}
export interface AddAxelarManagedCellarIDsProposalProtoMsg {
    typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposal";
    value: Uint8Array;
}
export interface AddAxelarManagedCellarIDsProposalAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    cellar_ids?: CellarIDSetAmino;
    publisher_domain?: string;
}
export interface AddAxelarManagedCellarIDsProposalAminoMsg {
    type: "/axelarcork.v1.AddAxelarManagedCellarIDsProposal";
    value: AddAxelarManagedCellarIDsProposalAmino;
}
export interface AddAxelarManagedCellarIDsProposalSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    cellar_ids?: CellarIDSetSDKType;
    publisher_domain: string;
}
/** AddAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddAxelarManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    chainId: bigint;
    cellarIds: string[];
    publisherDomain: string;
    deposit: string;
}
export interface AddAxelarManagedCellarIDsProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.AddAxelarManagedCellarIDsProposalWithDeposit";
    value: Uint8Array;
}
/** AddAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddAxelarManagedCellarIDsProposalWithDepositAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    cellar_ids?: string[];
    publisher_domain?: string;
    deposit?: string;
}
export interface AddAxelarManagedCellarIDsProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.AddAxelarManagedCellarIDsProposalWithDeposit";
    value: AddAxelarManagedCellarIDsProposalWithDepositAmino;
}
/** AddAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface AddAxelarManagedCellarIDsProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    cellar_ids: string[];
    publisher_domain: string;
    deposit: string;
}
export interface RemoveAxelarManagedCellarIDsProposal {
    title: string;
    description: string;
    chainId: bigint;
    cellarIds?: CellarIDSet;
}
export interface RemoveAxelarManagedCellarIDsProposalProtoMsg {
    typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposal";
    value: Uint8Array;
}
export interface RemoveAxelarManagedCellarIDsProposalAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    cellar_ids?: CellarIDSetAmino;
}
export interface RemoveAxelarManagedCellarIDsProposalAminoMsg {
    type: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposal";
    value: RemoveAxelarManagedCellarIDsProposalAmino;
}
export interface RemoveAxelarManagedCellarIDsProposalSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    cellar_ids?: CellarIDSetSDKType;
}
/** RemoveAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveAxelarManagedCellarIDsProposalWithDeposit {
    title: string;
    description: string;
    chainId: bigint;
    cellarIds: string[];
    deposit: string;
}
export interface RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposalWithDeposit";
    value: Uint8Array;
}
/** RemoveAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveAxelarManagedCellarIDsProposalWithDepositAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    cellar_ids?: string[];
    deposit?: string;
}
export interface RemoveAxelarManagedCellarIDsProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.RemoveAxelarManagedCellarIDsProposalWithDeposit";
    value: RemoveAxelarManagedCellarIDsProposalWithDepositAmino;
}
/** RemoveAxelarManagedCellarIDsProposalWithDeposit is a specific definition for CLI commands */
export interface RemoveAxelarManagedCellarIDsProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    cellar_ids: string[];
    deposit: string;
}
export interface AxelarScheduledCorkProposal {
    title: string;
    description: string;
    blockHeight: bigint;
    chainId: bigint;
    targetContractAddress: string;
    /**
     * The JSON representation of a ScheduleRequest defined in the Steward protos
     *
     * Example: The following is the JSON form of a ScheduleRequest containing a steward.v2.cellar_v1.TrustPosition
     * message, which maps to the `trustPosition(address)` function of the the V1 Cellar contract.
     *
     * {
     *   "cellar_id": "0x1234567890000000000000000000000000000000",
     *   "cellar_v1": {
     *     "trust_position": {
     *       "erc20_address": "0x1234567890000000000000000000000000000000"
     *     }
     *   },
     *   "block_height": 1000000
     * }
     *
     * You can use the Steward CLI to generate the required JSON rather than constructing it by hand
     * https://github.com/peggyjv/steward
     */
    contractCallProtoJson: string;
    /**
     * unix timestamp before which the contract call must be executed.
     * enforced by the Axelar proxy contract
     */
    deadline: bigint;
}
export interface AxelarScheduledCorkProposalProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposal";
    value: Uint8Array;
}
export interface AxelarScheduledCorkProposalAmino {
    title?: string;
    description?: string;
    block_height?: string;
    chain_id?: string;
    target_contract_address?: string;
    /**
     * The JSON representation of a ScheduleRequest defined in the Steward protos
     *
     * Example: The following is the JSON form of a ScheduleRequest containing a steward.v2.cellar_v1.TrustPosition
     * message, which maps to the `trustPosition(address)` function of the the V1 Cellar contract.
     *
     * {
     *   "cellar_id": "0x1234567890000000000000000000000000000000",
     *   "cellar_v1": {
     *     "trust_position": {
     *       "erc20_address": "0x1234567890000000000000000000000000000000"
     *     }
     *   },
     *   "block_height": 1000000
     * }
     *
     * You can use the Steward CLI to generate the required JSON rather than constructing it by hand
     * https://github.com/peggyjv/steward
     */
    contract_call_proto_json?: string;
    /**
     * unix timestamp before which the contract call must be executed.
     * enforced by the Axelar proxy contract
     */
    deadline?: string;
}
export interface AxelarScheduledCorkProposalAminoMsg {
    type: "/axelarcork.v1.AxelarScheduledCorkProposal";
    value: AxelarScheduledCorkProposalAmino;
}
export interface AxelarScheduledCorkProposalSDKType {
    title: string;
    description: string;
    block_height: bigint;
    chain_id: bigint;
    target_contract_address: string;
    contract_call_proto_json: string;
    deadline: bigint;
}
/** AxelarScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface AxelarScheduledCorkProposalWithDeposit {
    title: string;
    description: string;
    blockHeight: bigint;
    chainId: bigint;
    targetContractAddress: string;
    contractCallProtoJson: string;
    deadline: bigint;
    deposit: string;
}
export interface AxelarScheduledCorkProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarScheduledCorkProposalWithDeposit";
    value: Uint8Array;
}
/** AxelarScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface AxelarScheduledCorkProposalWithDepositAmino {
    title?: string;
    description?: string;
    block_height?: string;
    chain_id?: string;
    target_contract_address?: string;
    contract_call_proto_json?: string;
    deadline?: string;
    deposit?: string;
}
export interface AxelarScheduledCorkProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.AxelarScheduledCorkProposalWithDeposit";
    value: AxelarScheduledCorkProposalWithDepositAmino;
}
/** AxelarScheduledCorkProposalWithDeposit is a specific definition for CLI commands */
export interface AxelarScheduledCorkProposalWithDepositSDKType {
    title: string;
    description: string;
    block_height: bigint;
    chain_id: bigint;
    target_contract_address: string;
    contract_call_proto_json: string;
    deadline: bigint;
    deposit: string;
}
export interface AxelarCommunityPoolSpendProposal {
    title: string;
    description: string;
    recipient: string;
    chainId: bigint;
    amount: Coin;
}
export interface AxelarCommunityPoolSpendProposalProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposal";
    value: Uint8Array;
}
export interface AxelarCommunityPoolSpendProposalAmino {
    title?: string;
    description?: string;
    recipient?: string;
    chain_id?: string;
    amount?: CoinAmino;
}
export interface AxelarCommunityPoolSpendProposalAminoMsg {
    type: "/axelarcork.v1.AxelarCommunityPoolSpendProposal";
    value: AxelarCommunityPoolSpendProposalAmino;
}
export interface AxelarCommunityPoolSpendProposalSDKType {
    title: string;
    description: string;
    recipient: string;
    chain_id: bigint;
    amount: CoinSDKType;
}
/**
 * This format of the Axelar community spend Ethereum proposal is specifically for
 * the CLI to allow simple text serialization.
 */
export interface AxelarCommunityPoolSpendProposalForCLI {
    title: string;
    description: string;
    recipient: string;
    chainId: bigint;
    amount: string;
    deposit: string;
}
export interface AxelarCommunityPoolSpendProposalForCLIProtoMsg {
    typeUrl: "/axelarcork.v1.AxelarCommunityPoolSpendProposalForCLI";
    value: Uint8Array;
}
/**
 * This format of the Axelar community spend Ethereum proposal is specifically for
 * the CLI to allow simple text serialization.
 */
export interface AxelarCommunityPoolSpendProposalForCLIAmino {
    title?: string;
    description?: string;
    recipient?: string;
    chain_id?: string;
    amount?: string;
    deposit?: string;
}
export interface AxelarCommunityPoolSpendProposalForCLIAminoMsg {
    type: "/axelarcork.v1.AxelarCommunityPoolSpendProposalForCLI";
    value: AxelarCommunityPoolSpendProposalForCLIAmino;
}
/**
 * This format of the Axelar community spend Ethereum proposal is specifically for
 * the CLI to allow simple text serialization.
 */
export interface AxelarCommunityPoolSpendProposalForCLISDKType {
    title: string;
    description: string;
    recipient: string;
    chain_id: bigint;
    amount: string;
    deposit: string;
}
export interface AddChainConfigurationProposal {
    title: string;
    description: string;
    chainConfiguration?: ChainConfiguration;
}
export interface AddChainConfigurationProposalProtoMsg {
    typeUrl: "/axelarcork.v1.AddChainConfigurationProposal";
    value: Uint8Array;
}
export interface AddChainConfigurationProposalAmino {
    title?: string;
    description?: string;
    chain_configuration?: ChainConfigurationAmino;
}
export interface AddChainConfigurationProposalAminoMsg {
    type: "/axelarcork.v1.AddChainConfigurationProposal";
    value: AddChainConfigurationProposalAmino;
}
export interface AddChainConfigurationProposalSDKType {
    title: string;
    description: string;
    chain_configuration?: ChainConfigurationSDKType;
}
export interface AddChainConfigurationProposalWithDeposit {
    title: string;
    description: string;
    chainConfiguration?: ChainConfiguration;
    deposit: string;
}
export interface AddChainConfigurationProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.AddChainConfigurationProposalWithDeposit";
    value: Uint8Array;
}
export interface AddChainConfigurationProposalWithDepositAmino {
    title?: string;
    description?: string;
    chain_configuration?: ChainConfigurationAmino;
    deposit?: string;
}
export interface AddChainConfigurationProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.AddChainConfigurationProposalWithDeposit";
    value: AddChainConfigurationProposalWithDepositAmino;
}
export interface AddChainConfigurationProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_configuration?: ChainConfigurationSDKType;
    deposit: string;
}
export interface RemoveChainConfigurationProposal {
    title: string;
    description: string;
    chainId: bigint;
}
export interface RemoveChainConfigurationProposalProtoMsg {
    typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposal";
    value: Uint8Array;
}
export interface RemoveChainConfigurationProposalAmino {
    title?: string;
    description?: string;
    chain_id?: string;
}
export interface RemoveChainConfigurationProposalAminoMsg {
    type: "/axelarcork.v1.RemoveChainConfigurationProposal";
    value: RemoveChainConfigurationProposalAmino;
}
export interface RemoveChainConfigurationProposalSDKType {
    title: string;
    description: string;
    chain_id: bigint;
}
export interface RemoveChainConfigurationProposalWithDeposit {
    title: string;
    description: string;
    chainId: bigint;
    deposit: string;
}
export interface RemoveChainConfigurationProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.RemoveChainConfigurationProposalWithDeposit";
    value: Uint8Array;
}
export interface RemoveChainConfigurationProposalWithDepositAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    deposit?: string;
}
export interface RemoveChainConfigurationProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.RemoveChainConfigurationProposalWithDeposit";
    value: RemoveChainConfigurationProposalWithDepositAmino;
}
export interface RemoveChainConfigurationProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    deposit: string;
}
export interface UpgradeAxelarProxyContractProposal {
    title: string;
    description: string;
    chainId: bigint;
    newProxyAddress: string;
}
export interface UpgradeAxelarProxyContractProposalProtoMsg {
    typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposal";
    value: Uint8Array;
}
export interface UpgradeAxelarProxyContractProposalAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    new_proxy_address?: string;
}
export interface UpgradeAxelarProxyContractProposalAminoMsg {
    type: "/axelarcork.v1.UpgradeAxelarProxyContractProposal";
    value: UpgradeAxelarProxyContractProposalAmino;
}
export interface UpgradeAxelarProxyContractProposalSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    new_proxy_address: string;
}
export interface UpgradeAxelarProxyContractProposalWithDeposit {
    title: string;
    description: string;
    chainId: bigint;
    newProxyAddress: string;
    deposit: string;
}
export interface UpgradeAxelarProxyContractProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.UpgradeAxelarProxyContractProposalWithDeposit";
    value: Uint8Array;
}
export interface UpgradeAxelarProxyContractProposalWithDepositAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    new_proxy_address?: string;
    deposit?: string;
}
export interface UpgradeAxelarProxyContractProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.UpgradeAxelarProxyContractProposalWithDeposit";
    value: UpgradeAxelarProxyContractProposalWithDepositAmino;
}
export interface UpgradeAxelarProxyContractProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    new_proxy_address: string;
    deposit: string;
}
export interface CancelAxelarProxyContractUpgradeProposal {
    title: string;
    description: string;
    chainId: bigint;
}
export interface CancelAxelarProxyContractUpgradeProposalProtoMsg {
    typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposal";
    value: Uint8Array;
}
export interface CancelAxelarProxyContractUpgradeProposalAmino {
    title?: string;
    description?: string;
    chain_id?: string;
}
export interface CancelAxelarProxyContractUpgradeProposalAminoMsg {
    type: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposal";
    value: CancelAxelarProxyContractUpgradeProposalAmino;
}
export interface CancelAxelarProxyContractUpgradeProposalSDKType {
    title: string;
    description: string;
    chain_id: bigint;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDeposit {
    title: string;
    description: string;
    chainId: bigint;
    deposit: string;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg {
    typeUrl: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposalWithDeposit";
    value: Uint8Array;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositAmino {
    title?: string;
    description?: string;
    chain_id?: string;
    deposit?: string;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositAminoMsg {
    type: "/axelarcork.v1.CancelAxelarProxyContractUpgradeProposalWithDeposit";
    value: CancelAxelarProxyContractUpgradeProposalWithDepositAmino;
}
export interface CancelAxelarProxyContractUpgradeProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_id: bigint;
    deposit: string;
}
export declare const AddAxelarManagedCellarIDsProposal: {
    typeUrl: string;
    encode(message: AddAxelarManagedCellarIDsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddAxelarManagedCellarIDsProposal;
    fromPartial(object: Partial<AddAxelarManagedCellarIDsProposal>): AddAxelarManagedCellarIDsProposal;
    fromAmino(object: AddAxelarManagedCellarIDsProposalAmino): AddAxelarManagedCellarIDsProposal;
    toAmino(message: AddAxelarManagedCellarIDsProposal): AddAxelarManagedCellarIDsProposalAmino;
    fromAminoMsg(object: AddAxelarManagedCellarIDsProposalAminoMsg): AddAxelarManagedCellarIDsProposal;
    fromProtoMsg(message: AddAxelarManagedCellarIDsProposalProtoMsg): AddAxelarManagedCellarIDsProposal;
    toProto(message: AddAxelarManagedCellarIDsProposal): Uint8Array;
    toProtoMsg(message: AddAxelarManagedCellarIDsProposal): AddAxelarManagedCellarIDsProposalProtoMsg;
};
export declare const AddAxelarManagedCellarIDsProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddAxelarManagedCellarIDsProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddAxelarManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<AddAxelarManagedCellarIDsProposalWithDeposit>): AddAxelarManagedCellarIDsProposalWithDeposit;
    fromAmino(object: AddAxelarManagedCellarIDsProposalWithDepositAmino): AddAxelarManagedCellarIDsProposalWithDeposit;
    toAmino(message: AddAxelarManagedCellarIDsProposalWithDeposit): AddAxelarManagedCellarIDsProposalWithDepositAmino;
    fromAminoMsg(object: AddAxelarManagedCellarIDsProposalWithDepositAminoMsg): AddAxelarManagedCellarIDsProposalWithDeposit;
    fromProtoMsg(message: AddAxelarManagedCellarIDsProposalWithDepositProtoMsg): AddAxelarManagedCellarIDsProposalWithDeposit;
    toProto(message: AddAxelarManagedCellarIDsProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddAxelarManagedCellarIDsProposalWithDeposit): AddAxelarManagedCellarIDsProposalWithDepositProtoMsg;
};
export declare const RemoveAxelarManagedCellarIDsProposal: {
    typeUrl: string;
    encode(message: RemoveAxelarManagedCellarIDsProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveAxelarManagedCellarIDsProposal;
    fromPartial(object: Partial<RemoveAxelarManagedCellarIDsProposal>): RemoveAxelarManagedCellarIDsProposal;
    fromAmino(object: RemoveAxelarManagedCellarIDsProposalAmino): RemoveAxelarManagedCellarIDsProposal;
    toAmino(message: RemoveAxelarManagedCellarIDsProposal): RemoveAxelarManagedCellarIDsProposalAmino;
    fromAminoMsg(object: RemoveAxelarManagedCellarIDsProposalAminoMsg): RemoveAxelarManagedCellarIDsProposal;
    fromProtoMsg(message: RemoveAxelarManagedCellarIDsProposalProtoMsg): RemoveAxelarManagedCellarIDsProposal;
    toProto(message: RemoveAxelarManagedCellarIDsProposal): Uint8Array;
    toProtoMsg(message: RemoveAxelarManagedCellarIDsProposal): RemoveAxelarManagedCellarIDsProposalProtoMsg;
};
export declare const RemoveAxelarManagedCellarIDsProposalWithDeposit: {
    typeUrl: string;
    encode(message: RemoveAxelarManagedCellarIDsProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveAxelarManagedCellarIDsProposalWithDeposit;
    fromPartial(object: Partial<RemoveAxelarManagedCellarIDsProposalWithDeposit>): RemoveAxelarManagedCellarIDsProposalWithDeposit;
    fromAmino(object: RemoveAxelarManagedCellarIDsProposalWithDepositAmino): RemoveAxelarManagedCellarIDsProposalWithDeposit;
    toAmino(message: RemoveAxelarManagedCellarIDsProposalWithDeposit): RemoveAxelarManagedCellarIDsProposalWithDepositAmino;
    fromAminoMsg(object: RemoveAxelarManagedCellarIDsProposalWithDepositAminoMsg): RemoveAxelarManagedCellarIDsProposalWithDeposit;
    fromProtoMsg(message: RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg): RemoveAxelarManagedCellarIDsProposalWithDeposit;
    toProto(message: RemoveAxelarManagedCellarIDsProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RemoveAxelarManagedCellarIDsProposalWithDeposit): RemoveAxelarManagedCellarIDsProposalWithDepositProtoMsg;
};
export declare const AxelarScheduledCorkProposal: {
    typeUrl: string;
    encode(message: AxelarScheduledCorkProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarScheduledCorkProposal;
    fromPartial(object: Partial<AxelarScheduledCorkProposal>): AxelarScheduledCorkProposal;
    fromAmino(object: AxelarScheduledCorkProposalAmino): AxelarScheduledCorkProposal;
    toAmino(message: AxelarScheduledCorkProposal): AxelarScheduledCorkProposalAmino;
    fromAminoMsg(object: AxelarScheduledCorkProposalAminoMsg): AxelarScheduledCorkProposal;
    fromProtoMsg(message: AxelarScheduledCorkProposalProtoMsg): AxelarScheduledCorkProposal;
    toProto(message: AxelarScheduledCorkProposal): Uint8Array;
    toProtoMsg(message: AxelarScheduledCorkProposal): AxelarScheduledCorkProposalProtoMsg;
};
export declare const AxelarScheduledCorkProposalWithDeposit: {
    typeUrl: string;
    encode(message: AxelarScheduledCorkProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarScheduledCorkProposalWithDeposit;
    fromPartial(object: Partial<AxelarScheduledCorkProposalWithDeposit>): AxelarScheduledCorkProposalWithDeposit;
    fromAmino(object: AxelarScheduledCorkProposalWithDepositAmino): AxelarScheduledCorkProposalWithDeposit;
    toAmino(message: AxelarScheduledCorkProposalWithDeposit): AxelarScheduledCorkProposalWithDepositAmino;
    fromAminoMsg(object: AxelarScheduledCorkProposalWithDepositAminoMsg): AxelarScheduledCorkProposalWithDeposit;
    fromProtoMsg(message: AxelarScheduledCorkProposalWithDepositProtoMsg): AxelarScheduledCorkProposalWithDeposit;
    toProto(message: AxelarScheduledCorkProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AxelarScheduledCorkProposalWithDeposit): AxelarScheduledCorkProposalWithDepositProtoMsg;
};
export declare const AxelarCommunityPoolSpendProposal: {
    typeUrl: string;
    encode(message: AxelarCommunityPoolSpendProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarCommunityPoolSpendProposal;
    fromPartial(object: Partial<AxelarCommunityPoolSpendProposal>): AxelarCommunityPoolSpendProposal;
    fromAmino(object: AxelarCommunityPoolSpendProposalAmino): AxelarCommunityPoolSpendProposal;
    toAmino(message: AxelarCommunityPoolSpendProposal): AxelarCommunityPoolSpendProposalAmino;
    fromAminoMsg(object: AxelarCommunityPoolSpendProposalAminoMsg): AxelarCommunityPoolSpendProposal;
    fromProtoMsg(message: AxelarCommunityPoolSpendProposalProtoMsg): AxelarCommunityPoolSpendProposal;
    toProto(message: AxelarCommunityPoolSpendProposal): Uint8Array;
    toProtoMsg(message: AxelarCommunityPoolSpendProposal): AxelarCommunityPoolSpendProposalProtoMsg;
};
export declare const AxelarCommunityPoolSpendProposalForCLI: {
    typeUrl: string;
    encode(message: AxelarCommunityPoolSpendProposalForCLI, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarCommunityPoolSpendProposalForCLI;
    fromPartial(object: Partial<AxelarCommunityPoolSpendProposalForCLI>): AxelarCommunityPoolSpendProposalForCLI;
    fromAmino(object: AxelarCommunityPoolSpendProposalForCLIAmino): AxelarCommunityPoolSpendProposalForCLI;
    toAmino(message: AxelarCommunityPoolSpendProposalForCLI): AxelarCommunityPoolSpendProposalForCLIAmino;
    fromAminoMsg(object: AxelarCommunityPoolSpendProposalForCLIAminoMsg): AxelarCommunityPoolSpendProposalForCLI;
    fromProtoMsg(message: AxelarCommunityPoolSpendProposalForCLIProtoMsg): AxelarCommunityPoolSpendProposalForCLI;
    toProto(message: AxelarCommunityPoolSpendProposalForCLI): Uint8Array;
    toProtoMsg(message: AxelarCommunityPoolSpendProposalForCLI): AxelarCommunityPoolSpendProposalForCLIProtoMsg;
};
export declare const AddChainConfigurationProposal: {
    typeUrl: string;
    encode(message: AddChainConfigurationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddChainConfigurationProposal;
    fromPartial(object: Partial<AddChainConfigurationProposal>): AddChainConfigurationProposal;
    fromAmino(object: AddChainConfigurationProposalAmino): AddChainConfigurationProposal;
    toAmino(message: AddChainConfigurationProposal): AddChainConfigurationProposalAmino;
    fromAminoMsg(object: AddChainConfigurationProposalAminoMsg): AddChainConfigurationProposal;
    fromProtoMsg(message: AddChainConfigurationProposalProtoMsg): AddChainConfigurationProposal;
    toProto(message: AddChainConfigurationProposal): Uint8Array;
    toProtoMsg(message: AddChainConfigurationProposal): AddChainConfigurationProposalProtoMsg;
};
export declare const AddChainConfigurationProposalWithDeposit: {
    typeUrl: string;
    encode(message: AddChainConfigurationProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddChainConfigurationProposalWithDeposit;
    fromPartial(object: Partial<AddChainConfigurationProposalWithDeposit>): AddChainConfigurationProposalWithDeposit;
    fromAmino(object: AddChainConfigurationProposalWithDepositAmino): AddChainConfigurationProposalWithDeposit;
    toAmino(message: AddChainConfigurationProposalWithDeposit): AddChainConfigurationProposalWithDepositAmino;
    fromAminoMsg(object: AddChainConfigurationProposalWithDepositAminoMsg): AddChainConfigurationProposalWithDeposit;
    fromProtoMsg(message: AddChainConfigurationProposalWithDepositProtoMsg): AddChainConfigurationProposalWithDeposit;
    toProto(message: AddChainConfigurationProposalWithDeposit): Uint8Array;
    toProtoMsg(message: AddChainConfigurationProposalWithDeposit): AddChainConfigurationProposalWithDepositProtoMsg;
};
export declare const RemoveChainConfigurationProposal: {
    typeUrl: string;
    encode(message: RemoveChainConfigurationProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveChainConfigurationProposal;
    fromPartial(object: Partial<RemoveChainConfigurationProposal>): RemoveChainConfigurationProposal;
    fromAmino(object: RemoveChainConfigurationProposalAmino): RemoveChainConfigurationProposal;
    toAmino(message: RemoveChainConfigurationProposal): RemoveChainConfigurationProposalAmino;
    fromAminoMsg(object: RemoveChainConfigurationProposalAminoMsg): RemoveChainConfigurationProposal;
    fromProtoMsg(message: RemoveChainConfigurationProposalProtoMsg): RemoveChainConfigurationProposal;
    toProto(message: RemoveChainConfigurationProposal): Uint8Array;
    toProtoMsg(message: RemoveChainConfigurationProposal): RemoveChainConfigurationProposalProtoMsg;
};
export declare const RemoveChainConfigurationProposalWithDeposit: {
    typeUrl: string;
    encode(message: RemoveChainConfigurationProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RemoveChainConfigurationProposalWithDeposit;
    fromPartial(object: Partial<RemoveChainConfigurationProposalWithDeposit>): RemoveChainConfigurationProposalWithDeposit;
    fromAmino(object: RemoveChainConfigurationProposalWithDepositAmino): RemoveChainConfigurationProposalWithDeposit;
    toAmino(message: RemoveChainConfigurationProposalWithDeposit): RemoveChainConfigurationProposalWithDepositAmino;
    fromAminoMsg(object: RemoveChainConfigurationProposalWithDepositAminoMsg): RemoveChainConfigurationProposalWithDeposit;
    fromProtoMsg(message: RemoveChainConfigurationProposalWithDepositProtoMsg): RemoveChainConfigurationProposalWithDeposit;
    toProto(message: RemoveChainConfigurationProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RemoveChainConfigurationProposalWithDeposit): RemoveChainConfigurationProposalWithDepositProtoMsg;
};
export declare const UpgradeAxelarProxyContractProposal: {
    typeUrl: string;
    encode(message: UpgradeAxelarProxyContractProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpgradeAxelarProxyContractProposal;
    fromPartial(object: Partial<UpgradeAxelarProxyContractProposal>): UpgradeAxelarProxyContractProposal;
    fromAmino(object: UpgradeAxelarProxyContractProposalAmino): UpgradeAxelarProxyContractProposal;
    toAmino(message: UpgradeAxelarProxyContractProposal): UpgradeAxelarProxyContractProposalAmino;
    fromAminoMsg(object: UpgradeAxelarProxyContractProposalAminoMsg): UpgradeAxelarProxyContractProposal;
    fromProtoMsg(message: UpgradeAxelarProxyContractProposalProtoMsg): UpgradeAxelarProxyContractProposal;
    toProto(message: UpgradeAxelarProxyContractProposal): Uint8Array;
    toProtoMsg(message: UpgradeAxelarProxyContractProposal): UpgradeAxelarProxyContractProposalProtoMsg;
};
export declare const UpgradeAxelarProxyContractProposalWithDeposit: {
    typeUrl: string;
    encode(message: UpgradeAxelarProxyContractProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UpgradeAxelarProxyContractProposalWithDeposit;
    fromPartial(object: Partial<UpgradeAxelarProxyContractProposalWithDeposit>): UpgradeAxelarProxyContractProposalWithDeposit;
    fromAmino(object: UpgradeAxelarProxyContractProposalWithDepositAmino): UpgradeAxelarProxyContractProposalWithDeposit;
    toAmino(message: UpgradeAxelarProxyContractProposalWithDeposit): UpgradeAxelarProxyContractProposalWithDepositAmino;
    fromAminoMsg(object: UpgradeAxelarProxyContractProposalWithDepositAminoMsg): UpgradeAxelarProxyContractProposalWithDeposit;
    fromProtoMsg(message: UpgradeAxelarProxyContractProposalWithDepositProtoMsg): UpgradeAxelarProxyContractProposalWithDeposit;
    toProto(message: UpgradeAxelarProxyContractProposalWithDeposit): Uint8Array;
    toProtoMsg(message: UpgradeAxelarProxyContractProposalWithDeposit): UpgradeAxelarProxyContractProposalWithDepositProtoMsg;
};
export declare const CancelAxelarProxyContractUpgradeProposal: {
    typeUrl: string;
    encode(message: CancelAxelarProxyContractUpgradeProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CancelAxelarProxyContractUpgradeProposal;
    fromPartial(object: Partial<CancelAxelarProxyContractUpgradeProposal>): CancelAxelarProxyContractUpgradeProposal;
    fromAmino(object: CancelAxelarProxyContractUpgradeProposalAmino): CancelAxelarProxyContractUpgradeProposal;
    toAmino(message: CancelAxelarProxyContractUpgradeProposal): CancelAxelarProxyContractUpgradeProposalAmino;
    fromAminoMsg(object: CancelAxelarProxyContractUpgradeProposalAminoMsg): CancelAxelarProxyContractUpgradeProposal;
    fromProtoMsg(message: CancelAxelarProxyContractUpgradeProposalProtoMsg): CancelAxelarProxyContractUpgradeProposal;
    toProto(message: CancelAxelarProxyContractUpgradeProposal): Uint8Array;
    toProtoMsg(message: CancelAxelarProxyContractUpgradeProposal): CancelAxelarProxyContractUpgradeProposalProtoMsg;
};
export declare const CancelAxelarProxyContractUpgradeProposalWithDeposit: {
    typeUrl: string;
    encode(message: CancelAxelarProxyContractUpgradeProposalWithDeposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CancelAxelarProxyContractUpgradeProposalWithDeposit;
    fromPartial(object: Partial<CancelAxelarProxyContractUpgradeProposalWithDeposit>): CancelAxelarProxyContractUpgradeProposalWithDeposit;
    fromAmino(object: CancelAxelarProxyContractUpgradeProposalWithDepositAmino): CancelAxelarProxyContractUpgradeProposalWithDeposit;
    toAmino(message: CancelAxelarProxyContractUpgradeProposalWithDeposit): CancelAxelarProxyContractUpgradeProposalWithDepositAmino;
    fromAminoMsg(object: CancelAxelarProxyContractUpgradeProposalWithDepositAminoMsg): CancelAxelarProxyContractUpgradeProposalWithDeposit;
    fromProtoMsg(message: CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg): CancelAxelarProxyContractUpgradeProposalWithDeposit;
    toProto(message: CancelAxelarProxyContractUpgradeProposalWithDeposit): Uint8Array;
    toProtoMsg(message: CancelAxelarProxyContractUpgradeProposalWithDeposit): CancelAxelarProxyContractUpgradeProposalWithDepositProtoMsg;
};

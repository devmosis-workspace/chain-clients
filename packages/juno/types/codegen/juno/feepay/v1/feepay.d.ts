import { BinaryWriter } from "../../../binary";
/**
 * This defines the address, balance, and wallet limit
 * of a fee pay contract.
 */
export interface FeePayContract {
    /** The address of the contract. */
    contractAddress: string;
    /** The ledger balance of the contract. */
    balance: bigint;
    /** The number of times a wallet may interact with the contract. */
    walletLimit: bigint;
}
export interface FeePayContractProtoMsg {
    typeUrl: "/juno.feepay.v1.FeePayContract";
    value: Uint8Array;
}
/**
 * This defines the address, balance, and wallet limit
 * of a fee pay contract.
 */
export interface FeePayContractAmino {
    /** The address of the contract. */
    contract_address?: string;
    /** The ledger balance of the contract. */
    balance?: string;
    /** The number of times a wallet may interact with the contract. */
    wallet_limit?: string;
}
export interface FeePayContractAminoMsg {
    type: "/juno.feepay.v1.FeePayContract";
    value: FeePayContractAmino;
}
/**
 * This defines the address, balance, and wallet limit
 * of a fee pay contract.
 */
export interface FeePayContractSDKType {
    contract_address: string;
    balance: bigint;
    wallet_limit: bigint;
}
/**
 * This object is used to store the number of times a wallet has
 * interacted with a contract.
 */
export interface FeePayWalletUsage {
    /** The contract address. */
    contractAddress: string;
    /** The wallet address. */
    walletAddress: string;
    /** The number of uses corresponding to a wallet. */
    uses: bigint;
}
export interface FeePayWalletUsageProtoMsg {
    typeUrl: "/juno.feepay.v1.FeePayWalletUsage";
    value: Uint8Array;
}
/**
 * This object is used to store the number of times a wallet has
 * interacted with a contract.
 */
export interface FeePayWalletUsageAmino {
    /** The contract address. */
    contract_address?: string;
    /** The wallet address. */
    wallet_address?: string;
    /** The number of uses corresponding to a wallet. */
    uses?: string;
}
export interface FeePayWalletUsageAminoMsg {
    type: "/juno.feepay.v1.FeePayWalletUsage";
    value: FeePayWalletUsageAmino;
}
/**
 * This object is used to store the number of times a wallet has
 * interacted with a contract.
 */
export interface FeePayWalletUsageSDKType {
    contract_address: string;
    wallet_address: string;
    uses: bigint;
}
export declare const FeePayContract: {
    typeUrl: string;
    encode(message: FeePayContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeePayContract;
    fromPartial(object: Partial<FeePayContract>): FeePayContract;
    fromAmino(object: FeePayContractAmino): FeePayContract;
    toAmino(message: FeePayContract): FeePayContractAmino;
    fromAminoMsg(object: FeePayContractAminoMsg): FeePayContract;
    fromProtoMsg(message: FeePayContractProtoMsg): FeePayContract;
    toProto(message: FeePayContract): Uint8Array;
    toProtoMsg(message: FeePayContract): FeePayContractProtoMsg;
};
export declare const FeePayWalletUsage: {
    typeUrl: string;
    encode(message: FeePayWalletUsage, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeePayWalletUsage;
    fromPartial(object: Partial<FeePayWalletUsage>): FeePayWalletUsage;
    fromAmino(object: FeePayWalletUsageAmino): FeePayWalletUsage;
    toAmino(message: FeePayWalletUsage): FeePayWalletUsageAmino;
    fromAminoMsg(object: FeePayWalletUsageAminoMsg): FeePayWalletUsage;
    fromProtoMsg(message: FeePayWalletUsageProtoMsg): FeePayWalletUsage;
    toProto(message: FeePayWalletUsage): Uint8Array;
    toProtoMsg(message: FeePayWalletUsage): FeePayWalletUsageProtoMsg;
};

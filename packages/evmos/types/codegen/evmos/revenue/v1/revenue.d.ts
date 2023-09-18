import { BinaryWriter } from "../../../binary";
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface Revenue {
    /** contract_address is the hex address of a registered contract */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the transaction fees it defaults to
     * deployer_address
     */
    withdrawerAddress: string;
}
export interface RevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.Revenue";
    value: Uint8Array;
}
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface RevenueAmino {
    /** contract_address is the hex address of a registered contract */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the transaction fees it defaults to
     * deployer_address
     */
    withdrawer_address: string;
}
export interface RevenueAminoMsg {
    type: "/evmos.revenue.v1.Revenue";
    value: RevenueAmino;
}
/**
 * Revenue defines an instance that organizes fee distribution conditions for
 * the owner of a given smart contract
 */
export interface RevenueSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
export declare const Revenue: {
    typeUrl: string;
    encode(message: Revenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Revenue;
    fromPartial(object: Partial<Revenue>): Revenue;
    fromAmino(object: RevenueAmino): Revenue;
    toAmino(message: Revenue): RevenueAmino;
    fromAminoMsg(object: RevenueAminoMsg): Revenue;
    fromProtoMsg(message: RevenueProtoMsg): Revenue;
    toProto(message: Revenue): Uint8Array;
    toProtoMsg(message: Revenue): RevenueProtoMsg;
};

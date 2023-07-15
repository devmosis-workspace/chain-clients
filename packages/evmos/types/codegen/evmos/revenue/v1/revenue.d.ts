import * as _m0 from "protobufjs/minimal";
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
    encode(message: Revenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Revenue;
    fromPartial(object: Partial<Revenue>): Revenue;
};

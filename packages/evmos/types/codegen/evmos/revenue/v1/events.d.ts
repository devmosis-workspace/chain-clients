import * as _m0 from "protobufjs/minimal";
/** EventRegisterRevenue is an event emitted when a contract is registered to receive a percentage of tx fees. */
export interface EventRegisterRevenue {
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /** contract_address in hex format */
    contractAddress: string;
    /**
     * effective_withdrawer is the withdrawer address that is stored after the
     * revenue registration is completed. It defaults to the deployer address if
     * the withdrawer address in the msg is omitted. When omitted, the withdraw map
     * doesn't need to be set.
     */
    effectiveWithdrawer: string;
}
/** EventRegisterRevenue is an event emitted when a contract is registered to receive a percentage of tx fees. */
export interface EventRegisterRevenueSDKType {
    deployer_address: string;
    contract_address: string;
    effective_withdrawer: string;
}
/** EventUpdateRevenue is an event emitted when a withdrawer address is updated for a contract. */
export interface EventUpdateRevenue {
    /** contract_address in hex format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawerAddress: string;
}
/** EventUpdateRevenue is an event emitted when a withdrawer address is updated for a contract. */
export interface EventUpdateRevenueSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
/** EventCancelRevenue is an event emitted when a contract is unregistered from receiving tx fees. */
export interface EventCancelRevenue {
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployerAddress: string;
    /** contract_address in hex format */
    contractAddress: string;
}
/** EventCancelRevenue is an event emitted when a contract is unregistered from receiving tx fees. */
export interface EventCancelRevenueSDKType {
    deployer_address: string;
    contract_address: string;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenue {
    /** sender is the address of message sender. */
    sender: string;
    /** contract address in hex format */
    contract: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawerAddress: string;
    /** amount of revenue distributed */
    amount: string;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenueSDKType {
    sender: string;
    contract: string;
    withdrawer_address: string;
    amount: string;
}
export declare const EventRegisterRevenue: {
    encode(message: EventRegisterRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRegisterRevenue;
    fromPartial(object: Partial<EventRegisterRevenue>): EventRegisterRevenue;
};
export declare const EventUpdateRevenue: {
    encode(message: EventUpdateRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateRevenue;
    fromPartial(object: Partial<EventUpdateRevenue>): EventUpdateRevenue;
};
export declare const EventCancelRevenue: {
    encode(message: EventCancelRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCancelRevenue;
    fromPartial(object: Partial<EventCancelRevenue>): EventCancelRevenue;
};
export declare const EventDistributeRevenue: {
    encode(message: EventDistributeRevenue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDistributeRevenue;
    fromPartial(object: Partial<EventDistributeRevenue>): EventDistributeRevenue;
};

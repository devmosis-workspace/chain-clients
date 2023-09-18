import { BinaryWriter } from "../../../binary";
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
export interface EventRegisterRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.EventRegisterRevenue";
    value: Uint8Array;
}
/** EventRegisterRevenue is an event emitted when a contract is registered to receive a percentage of tx fees. */
export interface EventRegisterRevenueAmino {
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
    /** contract_address in hex format */
    contract_address: string;
    /**
     * effective_withdrawer is the withdrawer address that is stored after the
     * revenue registration is completed. It defaults to the deployer address if
     * the withdrawer address in the msg is omitted. When omitted, the withdraw map
     * doesn't need to be set.
     */
    effective_withdrawer: string;
}
export interface EventRegisterRevenueAminoMsg {
    type: "/evmos.revenue.v1.EventRegisterRevenue";
    value: EventRegisterRevenueAmino;
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
export interface EventUpdateRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.EventUpdateRevenue";
    value: Uint8Array;
}
/** EventUpdateRevenue is an event emitted when a withdrawer address is updated for a contract. */
export interface EventUpdateRevenueAmino {
    /** contract_address in hex format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawer_address: string;
}
export interface EventUpdateRevenueAminoMsg {
    type: "/evmos.revenue.v1.EventUpdateRevenue";
    value: EventUpdateRevenueAmino;
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
export interface EventCancelRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.EventCancelRevenue";
    value: Uint8Array;
}
/** EventCancelRevenue is an event emitted when a contract is unregistered from receiving tx fees. */
export interface EventCancelRevenueAmino {
    /**
     * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
     * sending the transaction which deploys the contract
     */
    deployer_address: string;
    /** contract_address in hex format */
    contract_address: string;
}
export interface EventCancelRevenueAminoMsg {
    type: "/evmos.revenue.v1.EventCancelRevenue";
    value: EventCancelRevenueAmino;
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
export interface EventDistributeRevenueProtoMsg {
    typeUrl: "/evmos.revenue.v1.EventDistributeRevenue";
    value: Uint8Array;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenueAmino {
    /** sender is the address of message sender. */
    sender: string;
    /** contract address in hex format */
    contract: string;
    /** withdrawer_address is the bech32 address of account receiving the transaction fees */
    withdrawer_address: string;
    /** amount of revenue distributed */
    amount: string;
}
export interface EventDistributeRevenueAminoMsg {
    type: "/evmos.revenue.v1.EventDistributeRevenue";
    value: EventDistributeRevenueAmino;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenueSDKType {
    sender: string;
    contract: string;
    withdrawer_address: string;
    amount: string;
}
export declare const EventRegisterRevenue: {
    typeUrl: string;
    encode(message: EventRegisterRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRegisterRevenue;
    fromPartial(object: Partial<EventRegisterRevenue>): EventRegisterRevenue;
    fromAmino(object: EventRegisterRevenueAmino): EventRegisterRevenue;
    toAmino(message: EventRegisterRevenue): EventRegisterRevenueAmino;
    fromAminoMsg(object: EventRegisterRevenueAminoMsg): EventRegisterRevenue;
    fromProtoMsg(message: EventRegisterRevenueProtoMsg): EventRegisterRevenue;
    toProto(message: EventRegisterRevenue): Uint8Array;
    toProtoMsg(message: EventRegisterRevenue): EventRegisterRevenueProtoMsg;
};
export declare const EventUpdateRevenue: {
    typeUrl: string;
    encode(message: EventUpdateRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateRevenue;
    fromPartial(object: Partial<EventUpdateRevenue>): EventUpdateRevenue;
    fromAmino(object: EventUpdateRevenueAmino): EventUpdateRevenue;
    toAmino(message: EventUpdateRevenue): EventUpdateRevenueAmino;
    fromAminoMsg(object: EventUpdateRevenueAminoMsg): EventUpdateRevenue;
    fromProtoMsg(message: EventUpdateRevenueProtoMsg): EventUpdateRevenue;
    toProto(message: EventUpdateRevenue): Uint8Array;
    toProtoMsg(message: EventUpdateRevenue): EventUpdateRevenueProtoMsg;
};
export declare const EventCancelRevenue: {
    typeUrl: string;
    encode(message: EventCancelRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCancelRevenue;
    fromPartial(object: Partial<EventCancelRevenue>): EventCancelRevenue;
    fromAmino(object: EventCancelRevenueAmino): EventCancelRevenue;
    toAmino(message: EventCancelRevenue): EventCancelRevenueAmino;
    fromAminoMsg(object: EventCancelRevenueAminoMsg): EventCancelRevenue;
    fromProtoMsg(message: EventCancelRevenueProtoMsg): EventCancelRevenue;
    toProto(message: EventCancelRevenue): Uint8Array;
    toProtoMsg(message: EventCancelRevenue): EventCancelRevenueProtoMsg;
};
export declare const EventDistributeRevenue: {
    typeUrl: string;
    encode(message: EventDistributeRevenue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDistributeRevenue;
    fromPartial(object: Partial<EventDistributeRevenue>): EventDistributeRevenue;
    fromAmino(object: EventDistributeRevenueAmino): EventDistributeRevenue;
    toAmino(message: EventDistributeRevenue): EventDistributeRevenueAmino;
    fromAminoMsg(object: EventDistributeRevenueAminoMsg): EventDistributeRevenue;
    fromProtoMsg(message: EventDistributeRevenueProtoMsg): EventDistributeRevenue;
    toProto(message: EventDistributeRevenue): Uint8Array;
    toProtoMsg(message: EventDistributeRevenue): EventDistributeRevenueProtoMsg;
};

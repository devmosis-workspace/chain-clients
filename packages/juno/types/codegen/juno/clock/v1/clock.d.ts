import { BinaryWriter } from "../../../binary";
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContract {
    /** The address of the contract. */
    contractAddress: string;
    /** The jail status of the contract. */
    isJailed: boolean;
}
export interface ClockContractProtoMsg {
    typeUrl: "/juno.clock.v1.ClockContract";
    value: Uint8Array;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContractAmino {
    /** The address of the contract. */
    contract_address?: string;
    /** The jail status of the contract. */
    is_jailed?: boolean;
}
export interface ClockContractAminoMsg {
    type: "/juno.clock.v1.ClockContract";
    value: ClockContractAmino;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface ClockContractSDKType {
    contract_address: string;
    is_jailed: boolean;
}
export declare const ClockContract: {
    typeUrl: string;
    encode(message: ClockContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClockContract;
    fromPartial(object: Partial<ClockContract>): ClockContract;
    fromAmino(object: ClockContractAmino): ClockContract;
    toAmino(message: ClockContract): ClockContractAmino;
    fromAminoMsg(object: ClockContractAminoMsg): ClockContract;
    fromProtoMsg(message: ClockContractProtoMsg): ClockContract;
    toProto(message: ClockContract): Uint8Array;
    toProtoMsg(message: ClockContract): ClockContractProtoMsg;
};

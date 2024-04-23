import { BinaryWriter } from "../../binary";
export interface Cork {
    /** call body containing the ABI encoded bytes to send to the contract */
    encodedContractCall: Uint8Array;
    /** address of the contract to send the call */
    targetContractAddress: string;
}
export interface CorkProtoMsg {
    typeUrl: "/cork.v2.Cork";
    value: Uint8Array;
}
export interface CorkAmino {
    /** call body containing the ABI encoded bytes to send to the contract */
    encoded_contract_call?: string;
    /** address of the contract to send the call */
    target_contract_address?: string;
}
export interface CorkAminoMsg {
    type: "/cork.v2.Cork";
    value: CorkAmino;
}
export interface CorkSDKType {
    encoded_contract_call: Uint8Array;
    target_contract_address: string;
}
export interface ScheduledCork {
    cork?: Cork;
    blockHeight: bigint;
    validator: string;
    id: Uint8Array;
}
export interface ScheduledCorkProtoMsg {
    typeUrl: "/cork.v2.ScheduledCork";
    value: Uint8Array;
}
export interface ScheduledCorkAmino {
    cork?: CorkAmino;
    block_height?: string;
    validator?: string;
    id?: string;
}
export interface ScheduledCorkAminoMsg {
    type: "/cork.v2.ScheduledCork";
    value: ScheduledCorkAmino;
}
export interface ScheduledCorkSDKType {
    cork?: CorkSDKType;
    block_height: bigint;
    validator: string;
    id: Uint8Array;
}
export interface CorkResult {
    cork?: Cork;
    blockHeight: bigint;
    approved: boolean;
    approvalPercentage: string;
}
export interface CorkResultProtoMsg {
    typeUrl: "/cork.v2.CorkResult";
    value: Uint8Array;
}
export interface CorkResultAmino {
    cork?: CorkAmino;
    block_height?: string;
    approved?: boolean;
    approval_percentage?: string;
}
export interface CorkResultAminoMsg {
    type: "/cork.v2.CorkResult";
    value: CorkResultAmino;
}
export interface CorkResultSDKType {
    cork?: CorkSDKType;
    block_height: bigint;
    approved: boolean;
    approval_percentage: string;
}
export interface CellarIDSet {
    ids: string[];
}
export interface CellarIDSetProtoMsg {
    typeUrl: "/cork.v2.CellarIDSet";
    value: Uint8Array;
}
export interface CellarIDSetAmino {
    ids?: string[];
}
export interface CellarIDSetAminoMsg {
    type: "/cork.v2.CellarIDSet";
    value: CellarIDSetAmino;
}
export interface CellarIDSetSDKType {
    ids: string[];
}
export declare const Cork: {
    typeUrl: string;
    encode(message: Cork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Cork;
    fromPartial(object: Partial<Cork>): Cork;
    fromAmino(object: CorkAmino): Cork;
    toAmino(message: Cork): CorkAmino;
    fromAminoMsg(object: CorkAminoMsg): Cork;
    fromProtoMsg(message: CorkProtoMsg): Cork;
    toProto(message: Cork): Uint8Array;
    toProtoMsg(message: Cork): CorkProtoMsg;
};
export declare const ScheduledCork: {
    typeUrl: string;
    encode(message: ScheduledCork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduledCork;
    fromPartial(object: Partial<ScheduledCork>): ScheduledCork;
    fromAmino(object: ScheduledCorkAmino): ScheduledCork;
    toAmino(message: ScheduledCork): ScheduledCorkAmino;
    fromAminoMsg(object: ScheduledCorkAminoMsg): ScheduledCork;
    fromProtoMsg(message: ScheduledCorkProtoMsg): ScheduledCork;
    toProto(message: ScheduledCork): Uint8Array;
    toProtoMsg(message: ScheduledCork): ScheduledCorkProtoMsg;
};
export declare const CorkResult: {
    typeUrl: string;
    encode(message: CorkResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CorkResult;
    fromPartial(object: Partial<CorkResult>): CorkResult;
    fromAmino(object: CorkResultAmino): CorkResult;
    toAmino(message: CorkResult): CorkResultAmino;
    fromAminoMsg(object: CorkResultAminoMsg): CorkResult;
    fromProtoMsg(message: CorkResultProtoMsg): CorkResult;
    toProto(message: CorkResult): Uint8Array;
    toProtoMsg(message: CorkResult): CorkResultProtoMsg;
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

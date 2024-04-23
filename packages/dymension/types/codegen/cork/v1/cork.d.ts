import { BinaryWriter } from "../../binary";
export interface Cork {
    /** call body containing the ABI encoded bytes to send to the contract */
    encodedContractCall: Uint8Array;
    /** address of the contract to send the call */
    targetContractAddress: string;
}
export interface CorkProtoMsg {
    typeUrl: "/cork.v1.Cork";
    value: Uint8Array;
}
export interface CorkAmino {
    /** call body containing the ABI encoded bytes to send to the contract */
    encoded_contract_call: Uint8Array;
    /** address of the contract to send the call */
    target_contract_address: string;
}
export interface CorkAminoMsg {
    type: "/cork.v1.Cork";
    value: CorkAmino;
}
export interface CorkSDKType {
    encoded_contract_call: Uint8Array;
    target_contract_address: string;
}
export interface ValidatorCork {
    cork: Cork;
    validator: string;
}
export interface ValidatorCorkProtoMsg {
    typeUrl: "/cork.v1.ValidatorCork";
    value: Uint8Array;
}
export interface ValidatorCorkAmino {
    cork?: CorkAmino;
    validator: string;
}
export interface ValidatorCorkAminoMsg {
    type: "/cork.v1.ValidatorCork";
    value: ValidatorCorkAmino;
}
export interface ValidatorCorkSDKType {
    cork: CorkSDKType;
    validator: string;
}
export interface ScheduledCork {
    cork: Cork;
    blockHeight: bigint;
    validator: string;
}
export interface ScheduledCorkProtoMsg {
    typeUrl: "/cork.v1.ScheduledCork";
    value: Uint8Array;
}
export interface ScheduledCorkAmino {
    cork?: CorkAmino;
    block_height: string;
    validator: string;
}
export interface ScheduledCorkAminoMsg {
    type: "/cork.v1.ScheduledCork";
    value: ScheduledCorkAmino;
}
export interface ScheduledCorkSDKType {
    cork: CorkSDKType;
    block_height: bigint;
    validator: string;
}
export interface CellarIDSet {
    ids: string[];
}
export interface CellarIDSetProtoMsg {
    typeUrl: "/cork.v1.CellarIDSet";
    value: Uint8Array;
}
export interface CellarIDSetAmino {
    ids: string[];
}
export interface CellarIDSetAminoMsg {
    type: "/cork.v1.CellarIDSet";
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
export declare const ValidatorCork: {
    typeUrl: string;
    encode(message: ValidatorCork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ValidatorCork;
    fromPartial(object: Partial<ValidatorCork>): ValidatorCork;
    fromAmino(object: ValidatorCorkAmino): ValidatorCork;
    toAmino(message: ValidatorCork): ValidatorCorkAmino;
    fromAminoMsg(object: ValidatorCorkAminoMsg): ValidatorCork;
    fromProtoMsg(message: ValidatorCorkProtoMsg): ValidatorCork;
    toProto(message: ValidatorCork): Uint8Array;
    toProtoMsg(message: ValidatorCork): ValidatorCorkProtoMsg;
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

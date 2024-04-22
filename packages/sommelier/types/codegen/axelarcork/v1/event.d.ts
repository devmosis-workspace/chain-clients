import { BinaryWriter } from "../../binary";
export interface ScheduleCorkEvent {
    signer: string;
    validator: string;
    cork: string;
    blockHeight: bigint;
    chainId: bigint;
}
export interface ScheduleCorkEventProtoMsg {
    typeUrl: "/axelarcork.v1.ScheduleCorkEvent";
    value: Uint8Array;
}
export interface ScheduleCorkEventAmino {
    signer?: string;
    validator?: string;
    cork?: string;
    block_height?: string;
    chain_id?: string;
}
export interface ScheduleCorkEventAminoMsg {
    type: "/axelarcork.v1.ScheduleCorkEvent";
    value: ScheduleCorkEventAmino;
}
export interface ScheduleCorkEventSDKType {
    signer: string;
    validator: string;
    cork: string;
    block_height: bigint;
    chain_id: bigint;
}
export declare const ScheduleCorkEvent: {
    typeUrl: string;
    encode(message: ScheduleCorkEvent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduleCorkEvent;
    fromPartial(object: Partial<ScheduleCorkEvent>): ScheduleCorkEvent;
    fromAmino(object: ScheduleCorkEventAmino): ScheduleCorkEvent;
    toAmino(message: ScheduleCorkEvent): ScheduleCorkEventAmino;
    fromAminoMsg(object: ScheduleCorkEventAminoMsg): ScheduleCorkEvent;
    fromProtoMsg(message: ScheduleCorkEventProtoMsg): ScheduleCorkEvent;
    toProto(message: ScheduleCorkEvent): Uint8Array;
    toProtoMsg(message: ScheduleCorkEvent): ScheduleCorkEventProtoMsg;
};

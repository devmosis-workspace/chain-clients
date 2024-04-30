import { BinaryWriter } from "../binary";
export interface Pauser {
    address: string;
}
export interface PauserProtoMsg {
    typeUrl: "/noble.tokenfactory.Pauser";
    value: Uint8Array;
}
export interface PauserAmino {
    address?: string;
}
export interface PauserAminoMsg {
    type: "/noble.tokenfactory.Pauser";
    value: PauserAmino;
}
export interface PauserSDKType {
    address: string;
}
export declare const Pauser: {
    typeUrl: string;
    encode(message: Pauser, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pauser;
    fromPartial(object: Partial<Pauser>): Pauser;
    fromAmino(object: PauserAmino): Pauser;
    toAmino(message: Pauser): PauserAmino;
    fromAminoMsg(object: PauserAminoMsg): Pauser;
    fromProtoMsg(message: PauserProtoMsg): Pauser;
    toProto(message: Pauser): Uint8Array;
    toProtoMsg(message: Pauser): PauserProtoMsg;
};

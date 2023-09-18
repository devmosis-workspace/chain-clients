import { BinaryWriter } from "../binary";
export interface MinterController {
    minter: string;
    controller: string;
}
export interface MinterControllerProtoMsg {
    typeUrl: "/noble.tokenfactory.MinterController";
    value: Uint8Array;
}
export interface MinterControllerAmino {
    minter: string;
    controller: string;
}
export interface MinterControllerAminoMsg {
    type: "/noble.tokenfactory.MinterController";
    value: MinterControllerAmino;
}
export interface MinterControllerSDKType {
    minter: string;
    controller: string;
}
export declare const MinterController: {
    typeUrl: string;
    encode(message: MinterController, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MinterController;
    fromPartial(object: Partial<MinterController>): MinterController;
    fromAmino(object: MinterControllerAmino): MinterController;
    toAmino(message: MinterController): MinterControllerAmino;
    fromAminoMsg(object: MinterControllerAminoMsg): MinterController;
    fromProtoMsg(message: MinterControllerProtoMsg): MinterController;
    toProto(message: MinterController): Uint8Array;
    toProtoMsg(message: MinterController): MinterControllerProtoMsg;
};

import { BinaryWriter } from "../binary";
export declare enum OwnerType {
    USER = 0,
    DAO = 1,
    UNRECOGNIZED = -1
}
export declare const OwnerTypeSDKType: typeof OwnerType;
export declare const OwnerTypeAmino: typeof OwnerType;
export declare function ownerTypeFromJSON(object: any): OwnerType;
export declare function ownerTypeToJSON(object: OwnerType): string;
export interface Whois {
    creator: string;
    id: bigint;
    name: string;
    address: string;
    ownerType: OwnerType;
}
export interface WhoisProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Whois";
    value: Uint8Array;
}
export interface WhoisAmino {
    creator?: string;
    id?: string;
    name?: string;
    address?: string;
    ownerType?: OwnerType;
}
export interface WhoisAminoMsg {
    type: "/gitopia.gitopia.gitopia.Whois";
    value: WhoisAmino;
}
export interface WhoisSDKType {
    creator: string;
    id: bigint;
    name: string;
    address: string;
    ownerType: OwnerType;
}
export declare const Whois: {
    typeUrl: string;
    encode(message: Whois, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Whois;
    fromPartial(object: Partial<Whois>): Whois;
    fromAmino(object: WhoisAmino): Whois;
    toAmino(message: Whois): WhoisAmino;
    fromAminoMsg(object: WhoisAminoMsg): Whois;
    fromProtoMsg(message: WhoisProtoMsg): Whois;
    toProto(message: Whois): Uint8Array;
    toProtoMsg(message: Whois): WhoisProtoMsg;
};

import { BinaryWriter } from "../binary";
export declare enum MemberRole {
    MEMBER = 0,
    OWNER = 1,
    UNRECOGNIZED = -1
}
export declare const MemberRoleSDKType: typeof MemberRole;
export declare const MemberRoleAmino: typeof MemberRole;
export declare function memberRoleFromJSON(object: any): MemberRole;
export declare function memberRoleToJSON(object: MemberRole): string;
export interface Member {
    id: bigint;
    address: string;
    daoAddress: string;
    role: MemberRole;
}
export interface MemberProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Member";
    value: Uint8Array;
}
export interface MemberAmino {
    id?: string;
    address?: string;
    daoAddress?: string;
    role?: MemberRole;
}
export interface MemberAminoMsg {
    type: "/gitopia.gitopia.gitopia.Member";
    value: MemberAmino;
}
export interface MemberSDKType {
    id: bigint;
    address: string;
    daoAddress: string;
    role: MemberRole;
}
export declare const Member: {
    typeUrl: string;
    encode(message: Member, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Member;
    fromPartial(object: Partial<Member>): Member;
    fromAmino(object: MemberAmino): Member;
    toAmino(message: Member): MemberAmino;
    fromAminoMsg(object: MemberAminoMsg): Member;
    fromProtoMsg(message: MemberProtoMsg): Member;
    toProto(message: Member): Uint8Array;
    toProtoMsg(message: Member): MemberProtoMsg;
};

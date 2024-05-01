import { BinaryWriter } from "../binary";
export interface Branch {
    id: bigint;
    repositoryId: bigint;
    name: string;
    sha: string;
    allowForcePush: boolean;
    createdAt: bigint;
    updatedAt: bigint;
}
export interface BranchProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Branch";
    value: Uint8Array;
}
export interface BranchAmino {
    id?: string;
    repositoryId?: string;
    name?: string;
    sha?: string;
    allowForcePush?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
export interface BranchAminoMsg {
    type: "/gitopia.gitopia.gitopia.Branch";
    value: BranchAmino;
}
export interface BranchSDKType {
    id: bigint;
    repositoryId: bigint;
    name: string;
    sha: string;
    allowForcePush: boolean;
    createdAt: bigint;
    updatedAt: bigint;
}
export declare const Branch: {
    typeUrl: string;
    encode(message: Branch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Branch;
    fromPartial(object: Partial<Branch>): Branch;
    fromAmino(object: BranchAmino): Branch;
    toAmino(message: Branch): BranchAmino;
    fromAminoMsg(object: BranchAminoMsg): Branch;
    fromProtoMsg(message: BranchProtoMsg): Branch;
    toProto(message: Branch): Uint8Array;
    toProtoMsg(message: Branch): BranchProtoMsg;
};

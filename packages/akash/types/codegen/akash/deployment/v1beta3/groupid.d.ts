import { BinaryWriter } from "../../../binary";
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: bigint;
    gseq: number;
}
export interface GroupIDProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.GroupID";
    value: Uint8Array;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
}
export interface GroupIDAminoMsg {
    type: "/akash.deployment.v1beta3.GroupID";
    value: GroupIDAmino;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
}
export declare const GroupID: {
    typeUrl: string;
    encode(message: GroupID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupID;
    fromPartial(object: Partial<GroupID>): GroupID;
    fromAmino(object: GroupIDAmino): GroupID;
    toAmino(message: GroupID): GroupIDAmino;
    fromAminoMsg(object: GroupIDAminoMsg): GroupID;
    fromProtoMsg(message: GroupIDProtoMsg): GroupID;
    toProto(message: GroupID): Uint8Array;
    toProtoMsg(message: GroupID): GroupIDProtoMsg;
};

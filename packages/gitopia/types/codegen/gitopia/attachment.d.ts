import { BinaryWriter } from "../binary";
export interface Attachment {
    name: string;
    size: bigint;
    sha: string;
    uploader: string;
}
export interface AttachmentProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Attachment";
    value: Uint8Array;
}
export interface AttachmentAmino {
    name?: string;
    size?: string;
    sha?: string;
    uploader?: string;
}
export interface AttachmentAminoMsg {
    type: "/gitopia.gitopia.gitopia.Attachment";
    value: AttachmentAmino;
}
export interface AttachmentSDKType {
    name: string;
    size: bigint;
    sha: string;
    uploader: string;
}
export declare const Attachment: {
    typeUrl: string;
    encode(message: Attachment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Attachment;
    fromPartial(object: Partial<Attachment>): Attachment;
    fromAmino(object: AttachmentAmino): Attachment;
    toAmino(message: Attachment): AttachmentAmino;
    fromAminoMsg(object: AttachmentAminoMsg): Attachment;
    fromProtoMsg(message: AttachmentProtoMsg): Attachment;
    toProto(message: Attachment): Uint8Array;
    toProtoMsg(message: Attachment): AttachmentProtoMsg;
};

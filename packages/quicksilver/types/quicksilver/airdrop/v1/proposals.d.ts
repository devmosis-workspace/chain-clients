import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType } from "./airdrop";
import { BinaryWriter } from "../../../binary";
export interface RegisterZoneDropProposal {
    title: string;
    description: string;
    zoneDrop?: ZoneDrop;
    claimRecords: Uint8Array;
}
export interface RegisterZoneDropProposalProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
    value: Uint8Array;
}
export interface RegisterZoneDropProposalAmino {
    title?: string;
    description?: string;
    zone_drop?: ZoneDropAmino;
    claim_records?: string;
}
export interface RegisterZoneDropProposalAminoMsg {
    type: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
    value: RegisterZoneDropProposalAmino;
}
export interface RegisterZoneDropProposalSDKType {
    title: string;
    description: string;
    zone_drop?: ZoneDropSDKType;
    claim_records: Uint8Array;
}
export declare const RegisterZoneDropProposal: {
    typeUrl: string;
    encode(message: RegisterZoneDropProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterZoneDropProposal;
    fromPartial(object: Partial<RegisterZoneDropProposal>): RegisterZoneDropProposal;
    fromAmino(object: RegisterZoneDropProposalAmino): RegisterZoneDropProposal;
    toAmino(message: RegisterZoneDropProposal): RegisterZoneDropProposalAmino;
    fromAminoMsg(object: RegisterZoneDropProposalAminoMsg): RegisterZoneDropProposal;
    fromProtoMsg(message: RegisterZoneDropProposalProtoMsg): RegisterZoneDropProposal;
    toProto(message: RegisterZoneDropProposal): Uint8Array;
    toProtoMsg(message: RegisterZoneDropProposal): RegisterZoneDropProposalProtoMsg;
};

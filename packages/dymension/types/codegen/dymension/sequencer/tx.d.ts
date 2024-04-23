import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Description, DescriptionAmino, DescriptionSDKType } from "./description";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Pubkey } from "@cosmjs/amino";
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencer {
    /** creator is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
    creator: string;
    /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
    dymintPubKey?: (Any) | undefined;
    /** rollappId defines the rollapp to which the sequencer belongs. */
    rollappId: string;
    /** description defines the descriptive terms for the sequencer. */
    description: Description;
}
export interface MsgCreateSequencerProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer";
    value: Uint8Array;
}
export type MsgCreateSequencerEncoded = Omit<MsgCreateSequencer, "dymintPubKey"> & {
    /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */ dymintPubKey?: AnyProtoMsg | undefined;
};
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencerAmino {
    /** creator is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
    creator?: string;
    /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
    dymintPubKey?: AnyAmino;
    /** rollappId defines the rollapp to which the sequencer belongs. */
    rollappId?: string;
    /** description defines the descriptive terms for the sequencer. */
    description?: DescriptionAmino;
}
export interface MsgCreateSequencerAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.MsgCreateSequencer";
    value: MsgCreateSequencerAmino;
}
/** MsgCreateSequencer defines a SDK message for creating a new sequencer. */
export interface MsgCreateSequencerSDKType {
    creator: string;
    dymintPubKey?: AnySDKType | undefined;
    rollappId: string;
    description: DescriptionSDKType;
}
export interface MsgCreateSequencerResponse {
}
export interface MsgCreateSequencerResponseProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse";
    value: Uint8Array;
}
export interface MsgCreateSequencerResponseAmino {
}
export interface MsgCreateSequencerResponseAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.MsgCreateSequencerResponse";
    value: MsgCreateSequencerResponseAmino;
}
export interface MsgCreateSequencerResponseSDKType {
}
export declare const MsgCreateSequencer: {
    typeUrl: string;
    encode(message: MsgCreateSequencer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateSequencer;
    fromPartial(object: Partial<MsgCreateSequencer>): MsgCreateSequencer;
    fromAmino(object: MsgCreateSequencerAmino): MsgCreateSequencer;
    toAmino(message: MsgCreateSequencer): MsgCreateSequencerAmino;
    fromAminoMsg(object: MsgCreateSequencerAminoMsg): MsgCreateSequencer;
    fromProtoMsg(message: MsgCreateSequencerProtoMsg): MsgCreateSequencer;
    toProto(message: MsgCreateSequencer): Uint8Array;
    toProtoMsg(message: MsgCreateSequencer): MsgCreateSequencerProtoMsg;
};
export declare const MsgCreateSequencerResponse: {
    typeUrl: string;
    encode(_: MsgCreateSequencerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateSequencerResponse;
    fromPartial(_: Partial<MsgCreateSequencerResponse>): MsgCreateSequencerResponse;
    fromAmino(_: MsgCreateSequencerResponseAmino): MsgCreateSequencerResponse;
    toAmino(_: MsgCreateSequencerResponse): MsgCreateSequencerResponseAmino;
    fromAminoMsg(object: MsgCreateSequencerResponseAminoMsg): MsgCreateSequencerResponse;
    fromProtoMsg(message: MsgCreateSequencerResponseProtoMsg): MsgCreateSequencerResponse;
    toProto(message: MsgCreateSequencerResponse): Uint8Array;
    toProtoMsg(message: MsgCreateSequencerResponse): MsgCreateSequencerResponseProtoMsg;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;

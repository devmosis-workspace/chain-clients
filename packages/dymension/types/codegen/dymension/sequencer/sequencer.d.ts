import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Description, DescriptionAmino, DescriptionSDKType } from "./description";
import { BinaryReader, BinaryWriter } from "../../binary";
import { Pubkey } from "@cosmjs/amino";
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface Sequencer {
    /** sequencerAddress is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
    sequencerAddress: string;
    /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
    dymintPubKey?: (Any) | undefined;
    /** rollappId defines the rollapp to which the sequencer belongs. */
    rollappIDs: string[];
    /** description defines the descriptive terms for the sequencer. */
    description: Description;
}
export interface SequencerProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.Sequencer";
    value: Uint8Array;
}
export type SequencerEncoded = Omit<Sequencer, "dymintPubKey"> & {
    /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */ dymintPubKey?: AnyProtoMsg | undefined;
};
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface SequencerAmino {
    /** sequencerAddress is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
    sequencerAddress?: string;
    /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
    dymintPubKey?: AnyAmino;
    /** rollappId defines the rollapp to which the sequencer belongs. */
    rollappIDs?: string[];
    /** description defines the descriptive terms for the sequencer. */
    description?: DescriptionAmino;
}
export interface SequencerAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.Sequencer";
    value: SequencerAmino;
}
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface SequencerSDKType {
    sequencerAddress: string;
    dymintPubKey?: AnySDKType | undefined;
    rollappIDs: string[];
    description: DescriptionSDKType;
}
export declare const Sequencer: {
    typeUrl: string;
    encode(message: Sequencer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Sequencer;
    fromPartial(object: Partial<Sequencer>): Sequencer;
    fromAmino(object: SequencerAmino): Sequencer;
    toAmino(message: Sequencer): SequencerAmino;
    fromAminoMsg(object: SequencerAminoMsg): Sequencer;
    fromProtoMsg(message: SequencerProtoMsg): Sequencer;
    toProto(message: Sequencer): Uint8Array;
    toProtoMsg(message: Sequencer): SequencerProtoMsg;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;

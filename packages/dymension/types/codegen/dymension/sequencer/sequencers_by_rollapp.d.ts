import { BinaryWriter } from "../../binary";
/**
 * SequencersByRollapp defines an map between rollappId to a list of
 * all sequencers that belongs to it.
 */
export interface SequencersByRollapp {
    /**
     * rollappId is the unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id.
     */
    rollappId: string;
    /**
     * list of sequencers' account address
     * repeated string sequencers = 2;
     */
    sequencers: Sequencers;
}
export interface SequencersByRollappProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.SequencersByRollapp";
    value: Uint8Array;
}
/**
 * SequencersByRollapp defines an map between rollappId to a list of
 * all sequencers that belongs to it.
 */
export interface SequencersByRollappAmino {
    /**
     * rollappId is the unique identifier of the rollapp chain.
     * The rollappId follows the same standard as cosmos chain_id.
     */
    rollappId?: string;
    /**
     * list of sequencers' account address
     * repeated string sequencers = 2;
     */
    sequencers?: SequencersAmino;
}
export interface SequencersByRollappAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.SequencersByRollapp";
    value: SequencersByRollappAmino;
}
/**
 * SequencersByRollapp defines an map between rollappId to a list of
 * all sequencers that belongs to it.
 */
export interface SequencersByRollappSDKType {
    rollappId: string;
    sequencers: SequencersSDKType;
}
/** Sequencers defines list of sequencers addresses. */
export interface Sequencers {
    addresses: string[];
}
export interface SequencersProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.Sequencers";
    value: Uint8Array;
}
/** Sequencers defines list of sequencers addresses. */
export interface SequencersAmino {
    addresses?: string[];
}
export interface SequencersAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.Sequencers";
    value: SequencersAmino;
}
/** Sequencers defines list of sequencers addresses. */
export interface SequencersSDKType {
    addresses: string[];
}
export declare const SequencersByRollapp: {
    typeUrl: string;
    encode(message: SequencersByRollapp, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SequencersByRollapp;
    fromPartial(object: Partial<SequencersByRollapp>): SequencersByRollapp;
    fromAmino(object: SequencersByRollappAmino): SequencersByRollapp;
    toAmino(message: SequencersByRollapp): SequencersByRollappAmino;
    fromAminoMsg(object: SequencersByRollappAminoMsg): SequencersByRollapp;
    fromProtoMsg(message: SequencersByRollappProtoMsg): SequencersByRollapp;
    toProto(message: SequencersByRollapp): Uint8Array;
    toProtoMsg(message: SequencersByRollapp): SequencersByRollappProtoMsg;
};
export declare const Sequencers: {
    typeUrl: string;
    encode(message: Sequencers, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Sequencers;
    fromPartial(object: Partial<Sequencers>): Sequencers;
    fromAmino(object: SequencersAmino): Sequencers;
    toAmino(message: Sequencers): SequencersAmino;
    fromAminoMsg(object: SequencersAminoMsg): Sequencers;
    fromProtoMsg(message: SequencersProtoMsg): Sequencers;
    toProto(message: Sequencers): Uint8Array;
    toProtoMsg(message: Sequencers): SequencersProtoMsg;
};

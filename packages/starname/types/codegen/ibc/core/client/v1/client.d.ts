import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryWriter } from "../../../../binary";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientState {
    /** client identifier */
    clientId: string;
    /** client state */
    clientState: Any;
}
export interface IdentifiedClientStateProtoMsg {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState";
    value: Uint8Array;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateAmino {
    /** client identifier */
    client_id: string;
    /** client state */
    client_state?: AnyAmino;
}
export interface IdentifiedClientStateAminoMsg {
    type: "cosmos-sdk/IdentifiedClientState";
    value: IdentifiedClientStateAmino;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */
export interface IdentifiedClientStateSDKType {
    client_id: string;
    client_state: AnySDKType;
}
/** ConsensusStateWithHeight defines a consensus state with an additional height field. */
export interface ConsensusStateWithHeight {
    /** consensus state height */
    height: Height;
    /** consensus state */
    consensusState: Any;
}
export interface ConsensusStateWithHeightProtoMsg {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight";
    value: Uint8Array;
}
/** ConsensusStateWithHeight defines a consensus state with an additional height field. */
export interface ConsensusStateWithHeightAmino {
    /** consensus state height */
    height?: HeightAmino;
    /** consensus state */
    consensus_state?: AnyAmino;
}
export interface ConsensusStateWithHeightAminoMsg {
    type: "cosmos-sdk/ConsensusStateWithHeight";
    value: ConsensusStateWithHeightAmino;
}
/** ConsensusStateWithHeight defines a consensus state with an additional height field. */
export interface ConsensusStateWithHeightSDKType {
    height: HeightSDKType;
    consensus_state: AnySDKType;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStates {
    /** client identifier */
    clientId: string;
    /** consensus states and their heights associated with the client */
    consensusStates: ConsensusStateWithHeight[];
}
export interface ClientConsensusStatesProtoMsg {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates";
    value: Uint8Array;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesAmino {
    /** client identifier */
    client_id: string;
    /** consensus states and their heights associated with the client */
    consensus_states: ConsensusStateWithHeightAmino[];
}
export interface ClientConsensusStatesAminoMsg {
    type: "cosmos-sdk/ClientConsensusStates";
    value: ClientConsensusStatesAmino;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */
export interface ClientConsensusStatesSDKType {
    client_id: string;
    consensus_states: ConsensusStateWithHeightSDKType[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the client is
 * updated with the provided header. The update may fail if the header is not
 * valid given certain conditions specified by the client implementation.
 */
export interface ClientUpdateProposal {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** the client identifier for the client to be updated if the proposal passes */
    clientId: string;
    /** the header used to update the client if the proposal passes */
    header: Any;
}
export interface ClientUpdateProposalProtoMsg {
    typeUrl: "/ibc.core.client.v1.ClientUpdateProposal";
    value: Uint8Array;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the client is
 * updated with the provided header. The update may fail if the header is not
 * valid given certain conditions specified by the client implementation.
 */
export interface ClientUpdateProposalAmino {
    /** the title of the update proposal */
    title: string;
    /** the description of the proposal */
    description: string;
    /** the client identifier for the client to be updated if the proposal passes */
    client_id: string;
    /** the header used to update the client if the proposal passes */
    header?: AnyAmino;
}
export interface ClientUpdateProposalAminoMsg {
    type: "cosmos-sdk/ClientUpdateProposal";
    value: ClientUpdateProposalAmino;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the client is
 * updated with the provided header. The update may fail if the header is not
 * valid given certain conditions specified by the client implementation.
 */
export interface ClientUpdateProposalSDKType {
    title: string;
    description: string;
    client_id: string;
    header: AnySDKType;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
 * the same. However some consensus algorithms may choose to reset the
 * height in certain conditions e.g. hard forks, state-machine breaking changes
 * In these cases, the RevisionNumber is incremented so that height continues to
 * be monitonically increasing even as the RevisionHeight gets reset
 */
export interface Height {
    /** the revision that the client is currently on */
    revisionNumber: bigint;
    /** the height within the given revision */
    revisionHeight: bigint;
}
export interface HeightProtoMsg {
    typeUrl: "/ibc.core.client.v1.Height";
    value: Uint8Array;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
 * the same. However some consensus algorithms may choose to reset the
 * height in certain conditions e.g. hard forks, state-machine breaking changes
 * In these cases, the RevisionNumber is incremented so that height continues to
 * be monitonically increasing even as the RevisionHeight gets reset
 */
export interface HeightAmino {
    /** the revision that the client is currently on */
    revision_number: string;
    /** the height within the given revision */
    revision_height: string;
}
export interface HeightAminoMsg {
    type: "cosmos-sdk/Height";
    value: HeightAmino;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping RevisionNumber
 * the same. However some consensus algorithms may choose to reset the
 * height in certain conditions e.g. hard forks, state-machine breaking changes
 * In these cases, the RevisionNumber is incremented so that height continues to
 * be monitonically increasing even as the RevisionHeight gets reset
 */
export interface HeightSDKType {
    revision_number: bigint;
    revision_height: bigint;
}
/** Params defines the set of IBC light client parameters. */
export interface Params {
    /** allowed_clients defines the list of allowed client state types. */
    allowedClients: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.core.client.v1.Params";
    value: Uint8Array;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsAmino {
    /** allowed_clients defines the list of allowed client state types. */
    allowed_clients: string[];
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params defines the set of IBC light client parameters. */
export interface ParamsSDKType {
    allowed_clients: string[];
}
export declare const IdentifiedClientState: {
    typeUrl: string;
    encode(message: IdentifiedClientState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IdentifiedClientState;
    fromPartial(object: Partial<IdentifiedClientState>): IdentifiedClientState;
    fromAmino(object: IdentifiedClientStateAmino): IdentifiedClientState;
    toAmino(message: IdentifiedClientState): IdentifiedClientStateAmino;
    fromAminoMsg(object: IdentifiedClientStateAminoMsg): IdentifiedClientState;
    toAminoMsg(message: IdentifiedClientState): IdentifiedClientStateAminoMsg;
    fromProtoMsg(message: IdentifiedClientStateProtoMsg): IdentifiedClientState;
    toProto(message: IdentifiedClientState): Uint8Array;
    toProtoMsg(message: IdentifiedClientState): IdentifiedClientStateProtoMsg;
};
export declare const ConsensusStateWithHeight: {
    typeUrl: string;
    encode(message: ConsensusStateWithHeight, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConsensusStateWithHeight;
    fromPartial(object: Partial<ConsensusStateWithHeight>): ConsensusStateWithHeight;
    fromAmino(object: ConsensusStateWithHeightAmino): ConsensusStateWithHeight;
    toAmino(message: ConsensusStateWithHeight): ConsensusStateWithHeightAmino;
    fromAminoMsg(object: ConsensusStateWithHeightAminoMsg): ConsensusStateWithHeight;
    toAminoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightAminoMsg;
    fromProtoMsg(message: ConsensusStateWithHeightProtoMsg): ConsensusStateWithHeight;
    toProto(message: ConsensusStateWithHeight): Uint8Array;
    toProtoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightProtoMsg;
};
export declare const ClientConsensusStates: {
    typeUrl: string;
    encode(message: ClientConsensusStates, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClientConsensusStates;
    fromPartial(object: Partial<ClientConsensusStates>): ClientConsensusStates;
    fromAmino(object: ClientConsensusStatesAmino): ClientConsensusStates;
    toAmino(message: ClientConsensusStates): ClientConsensusStatesAmino;
    fromAminoMsg(object: ClientConsensusStatesAminoMsg): ClientConsensusStates;
    toAminoMsg(message: ClientConsensusStates): ClientConsensusStatesAminoMsg;
    fromProtoMsg(message: ClientConsensusStatesProtoMsg): ClientConsensusStates;
    toProto(message: ClientConsensusStates): Uint8Array;
    toProtoMsg(message: ClientConsensusStates): ClientConsensusStatesProtoMsg;
};
export declare const ClientUpdateProposal: {
    typeUrl: string;
    encode(message: ClientUpdateProposal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClientUpdateProposal;
    fromPartial(object: Partial<ClientUpdateProposal>): ClientUpdateProposal;
    fromAmino(object: ClientUpdateProposalAmino): ClientUpdateProposal;
    toAmino(message: ClientUpdateProposal): ClientUpdateProposalAmino;
    fromAminoMsg(object: ClientUpdateProposalAminoMsg): ClientUpdateProposal;
    toAminoMsg(message: ClientUpdateProposal): ClientUpdateProposalAminoMsg;
    fromProtoMsg(message: ClientUpdateProposalProtoMsg): ClientUpdateProposal;
    toProto(message: ClientUpdateProposal): Uint8Array;
    toProtoMsg(message: ClientUpdateProposal): ClientUpdateProposalProtoMsg;
};
export declare const Height: {
    typeUrl: string;
    encode(message: Height, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Height;
    fromPartial(object: Partial<Height>): Height;
    fromAmino(object: HeightAmino): Height;
    toAmino(message: Height): HeightAmino;
    fromAminoMsg(object: HeightAminoMsg): Height;
    toAminoMsg(message: Height): HeightAminoMsg;
    fromProtoMsg(message: HeightProtoMsg): Height;
    toProto(message: Height): Uint8Array;
    toProtoMsg(message: Height): HeightProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};

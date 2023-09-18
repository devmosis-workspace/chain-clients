import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
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
function createBaseIdentifiedClientState(): IdentifiedClientState {
  return {
    clientId: "",
    clientState: Any.fromPartial({})
  };
}
export const IdentifiedClientState = {
  typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
  encode(message: IdentifiedClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): IdentifiedClientState {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined
    };
  },
  fromPartial(object: Partial<IdentifiedClientState>): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    return message;
  },
  fromAmino(object: IdentifiedClientStateAmino): IdentifiedClientState {
    return {
      clientId: object.client_id,
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined
    };
  },
  toAmino(message: IdentifiedClientState): IdentifiedClientStateAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentifiedClientStateAminoMsg): IdentifiedClientState {
    return IdentifiedClientState.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedClientState): IdentifiedClientStateAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedClientState",
      value: IdentifiedClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedClientStateProtoMsg): IdentifiedClientState {
    return IdentifiedClientState.decode(message.value);
  },
  toProto(message: IdentifiedClientState): Uint8Array {
    return IdentifiedClientState.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedClientState): IdentifiedClientStateProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
      value: IdentifiedClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusStateWithHeight(): ConsensusStateWithHeight {
  return {
    height: Height.fromPartial({}),
    consensusState: Any.fromPartial({})
  };
}
export const ConsensusStateWithHeight = {
  typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
  encode(message: ConsensusStateWithHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ConsensusStateWithHeight {
    return {
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined
    };
  },
  fromPartial(object: Partial<ConsensusStateWithHeight>): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    return message;
  },
  fromAmino(object: ConsensusStateWithHeightAmino): ConsensusStateWithHeight {
    return {
      height: object?.height ? Height.fromAmino(object.height) : undefined,
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined
    };
  },
  toAmino(message: ConsensusStateWithHeight): ConsensusStateWithHeightAmino {
    const obj: any = {};
    obj.height = message.height ? Height.toAmino(message.height) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateWithHeightAminoMsg): ConsensusStateWithHeight {
    return ConsensusStateWithHeight.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateWithHeightProtoMsg): ConsensusStateWithHeight {
    return ConsensusStateWithHeight.decode(message.value);
  },
  toProto(message: ConsensusStateWithHeight): Uint8Array {
    return ConsensusStateWithHeight.encode(message).finish();
  },
  toProtoMsg(message: ConsensusStateWithHeight): ConsensusStateWithHeightProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
      value: ConsensusStateWithHeight.encode(message).finish()
    };
  }
};
function createBaseClientConsensusStates(): ClientConsensusStates {
  return {
    clientId: "",
    consensusStates: []
  };
}
export const ClientConsensusStates = {
  typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
  encode(message: ClientConsensusStates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClientConsensusStates {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      consensusStates: Array.isArray(object?.consensusStates) ? object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ClientConsensusStates>): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    message.clientId = object.clientId ?? "";
    message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ClientConsensusStatesAmino): ClientConsensusStates {
    return {
      clientId: object.client_id,
      consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromAmino(e)) : []
    };
  },
  toAmino(message: ClientConsensusStates): ClientConsensusStatesAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
    } else {
      obj.consensus_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: ClientConsensusStatesAminoMsg): ClientConsensusStates {
    return ClientConsensusStates.fromAmino(object.value);
  },
  toAminoMsg(message: ClientConsensusStates): ClientConsensusStatesAminoMsg {
    return {
      type: "cosmos-sdk/ClientConsensusStates",
      value: ClientConsensusStates.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientConsensusStatesProtoMsg): ClientConsensusStates {
    return ClientConsensusStates.decode(message.value);
  },
  toProto(message: ClientConsensusStates): Uint8Array {
    return ClientConsensusStates.encode(message).finish();
  },
  toProtoMsg(message: ClientConsensusStates): ClientConsensusStatesProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
      value: ClientConsensusStates.encode(message).finish()
    };
  }
};
function createBaseClientUpdateProposal(): ClientUpdateProposal {
  return {
    title: "",
    description: "",
    clientId: "",
    header: Any.fromPartial({})
  };
}
export const ClientUpdateProposal = {
  typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
  encode(message: ClientUpdateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.clientId !== "") {
      writer.uint32(26).string(message.clientId);
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ClientUpdateProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined
    };
  },
  fromPartial(object: Partial<ClientUpdateProposal>): ClientUpdateProposal {
    const message = createBaseClientUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.clientId = object.clientId ?? "";
    message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
    return message;
  },
  fromAmino(object: ClientUpdateProposalAmino): ClientUpdateProposal {
    return {
      title: object.title,
      description: object.description,
      clientId: object.client_id,
      header: object?.header ? Any.fromAmino(object.header) : undefined
    };
  },
  toAmino(message: ClientUpdateProposal): ClientUpdateProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.client_id = message.clientId;
    obj.header = message.header ? Any.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClientUpdateProposalAminoMsg): ClientUpdateProposal {
    return ClientUpdateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ClientUpdateProposal): ClientUpdateProposalAminoMsg {
    return {
      type: "cosmos-sdk/ClientUpdateProposal",
      value: ClientUpdateProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientUpdateProposalProtoMsg): ClientUpdateProposal {
    return ClientUpdateProposal.decode(message.value);
  },
  toProto(message: ClientUpdateProposal): Uint8Array {
    return ClientUpdateProposal.encode(message).finish();
  },
  toProtoMsg(message: ClientUpdateProposal): ClientUpdateProposalProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
      value: ClientUpdateProposal.encode(message).finish()
    };
  }
};
function createBaseHeight(): Height {
  return {
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0)
  };
}
export const Height = {
  typeUrl: "/ibc.core.client.v1.Height",
  encode(message: Height, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(8).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionHeight);
    }
    return writer;
  },
  fromJSON(object: any): Height {
    return {
      revisionNumber: isSet(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
      revisionHeight: isSet(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Height>): Height {
    const message = createBaseHeight();
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: HeightAmino): Height {
    return {
      revisionNumber: BigInt(object.revision_number || "0"),
      revisionHeight: BigInt(object.revision_height || "0")
    };
  },
  toAmino(message: Height): HeightAmino {
    const obj: any = {};
    obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
    obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: HeightAminoMsg): Height {
    return Height.fromAmino(object.value);
  },
  toAminoMsg(message: Height): HeightAminoMsg {
    return {
      type: "cosmos-sdk/Height",
      value: Height.toAmino(message)
    };
  },
  fromProtoMsg(message: HeightProtoMsg): Height {
    return Height.decode(message.value);
  },
  toProto(message: Height): Uint8Array {
    return Height.encode(message).finish();
  },
  toProtoMsg(message: Height): HeightProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.Height",
      value: Height.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    allowedClients: []
  };
}
export const Params = {
  typeUrl: "/ibc.core.client.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedClients) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      allowedClients: Array.isArray(object?.allowedClients) ? object.allowedClients.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedClients = object.allowedClients?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      allowedClients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e: any) => e) : []
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedClients) {
      obj.allowed_clients = message.allowedClients.map(e => e);
    } else {
      obj.allowed_clients = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export enum ClaimType {
  /** CLAIM_TYPE_UNSPECIFIED - An unspecified claim type */
  CLAIM_TYPE_UNSPECIFIED = 0,
  /** CLAIM_TYPE_SEND_TO_COSMOS - A claim for a SendToCosmos transaction */
  CLAIM_TYPE_SEND_TO_COSMOS = 1,
  /** CLAIM_TYPE_BATCH_SEND_TO_ETH - A claim for when batches are relayed */
  CLAIM_TYPE_BATCH_SEND_TO_ETH = 2,
  /** CLAIM_TYPE_ERC20_DEPLOYED - A claim for when an erc20 contract has been deployed */
  CLAIM_TYPE_ERC20_DEPLOYED = 3,
  /** CLAIM_TYPE_LOGIC_CALL_EXECUTED - A claim for when a logic call has been executed */
  CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,
  /** CLAIM_TYPE_VALSET_UPDATED - A claim for when a valset update has happened */
  CLAIM_TYPE_VALSET_UPDATED = 5,
  UNRECOGNIZED = -1,
}
export const ClaimTypeSDKType = ClaimType;
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "CLAIM_TYPE_UNSPECIFIED":
      return ClaimType.CLAIM_TYPE_UNSPECIFIED;
    case 1:
    case "CLAIM_TYPE_SEND_TO_COSMOS":
      return ClaimType.CLAIM_TYPE_SEND_TO_COSMOS;
    case 2:
    case "CLAIM_TYPE_BATCH_SEND_TO_ETH":
      return ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH;
    case 3:
    case "CLAIM_TYPE_ERC20_DEPLOYED":
      return ClaimType.CLAIM_TYPE_ERC20_DEPLOYED;
    case 4:
    case "CLAIM_TYPE_LOGIC_CALL_EXECUTED":
      return ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED;
    case 5:
    case "CLAIM_TYPE_VALSET_UPDATED":
      return ClaimType.CLAIM_TYPE_VALSET_UPDATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClaimType.UNRECOGNIZED;
  }
}
export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.CLAIM_TYPE_UNSPECIFIED:
      return "CLAIM_TYPE_UNSPECIFIED";
    case ClaimType.CLAIM_TYPE_SEND_TO_COSMOS:
      return "CLAIM_TYPE_SEND_TO_COSMOS";
    case ClaimType.CLAIM_TYPE_BATCH_SEND_TO_ETH:
      return "CLAIM_TYPE_BATCH_SEND_TO_ETH";
    case ClaimType.CLAIM_TYPE_ERC20_DEPLOYED:
      return "CLAIM_TYPE_ERC20_DEPLOYED";
    case ClaimType.CLAIM_TYPE_LOGIC_CALL_EXECUTED:
      return "CLAIM_TYPE_LOGIC_CALL_EXECUTED";
    case ClaimType.CLAIM_TYPE_VALSET_UPDATED:
      return "CLAIM_TYPE_VALSET_UPDATED";
    case ClaimType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface Attestation {
  observed: boolean;
  votes: string[];
  height: bigint;
  claim: Any;
}
export interface AttestationProtoMsg {
  typeUrl: "/gravity.v1.Attestation";
  value: Uint8Array;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationAmino {
  observed: boolean;
  votes: string[];
  height: string;
  claim?: AnyAmino;
}
export interface AttestationAminoMsg {
  type: "/gravity.v1.Attestation";
  value: AttestationAmino;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 * 
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationSDKType {
  observed: boolean;
  votes: string[];
  height: bigint;
  claim: AnySDKType;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20Token {
  contract: string;
  amount: string;
}
export interface ERC20TokenProtoMsg {
  typeUrl: "/gravity.v1.ERC20Token";
  value: Uint8Array;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenAmino {
  contract: string;
  amount: string;
}
export interface ERC20TokenAminoMsg {
  type: "/gravity.v1.ERC20Token";
  value: ERC20TokenAmino;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenSDKType {
  contract: string;
  amount: string;
}
export interface EventObservation {
  attestationType: string;
  bridgeContract: string;
  bridgeChainId: string;
  attestationId: string;
  nonce: string;
}
export interface EventObservationProtoMsg {
  typeUrl: "/gravity.v1.EventObservation";
  value: Uint8Array;
}
export interface EventObservationAmino {
  attestation_type: string;
  bridge_contract: string;
  bridge_chain_id: string;
  attestation_id: string;
  nonce: string;
}
export interface EventObservationAminoMsg {
  type: "/gravity.v1.EventObservation";
  value: EventObservationAmino;
}
export interface EventObservationSDKType {
  attestation_type: string;
  bridge_contract: string;
  bridge_chain_id: string;
  attestation_id: string;
  nonce: string;
}
export interface EventInvalidSendToCosmosReceiver {
  amount: string;
  nonce: string;
  token: string;
  sender: string;
}
export interface EventInvalidSendToCosmosReceiverProtoMsg {
  typeUrl: "/gravity.v1.EventInvalidSendToCosmosReceiver";
  value: Uint8Array;
}
export interface EventInvalidSendToCosmosReceiverAmino {
  amount: string;
  nonce: string;
  token: string;
  sender: string;
}
export interface EventInvalidSendToCosmosReceiverAminoMsg {
  type: "/gravity.v1.EventInvalidSendToCosmosReceiver";
  value: EventInvalidSendToCosmosReceiverAmino;
}
export interface EventInvalidSendToCosmosReceiverSDKType {
  amount: string;
  nonce: string;
  token: string;
  sender: string;
}
export interface EventSendToCosmos {
  amount: string;
  nonce: string;
  token: string;
}
export interface EventSendToCosmosProtoMsg {
  typeUrl: "/gravity.v1.EventSendToCosmos";
  value: Uint8Array;
}
export interface EventSendToCosmosAmino {
  amount: string;
  nonce: string;
  token: string;
}
export interface EventSendToCosmosAminoMsg {
  type: "/gravity.v1.EventSendToCosmos";
  value: EventSendToCosmosAmino;
}
export interface EventSendToCosmosSDKType {
  amount: string;
  nonce: string;
  token: string;
}
export interface EventSendToCosmosLocal {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
}
export interface EventSendToCosmosLocalProtoMsg {
  typeUrl: "/gravity.v1.EventSendToCosmosLocal";
  value: Uint8Array;
}
export interface EventSendToCosmosLocalAmino {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
}
export interface EventSendToCosmosLocalAminoMsg {
  type: "/gravity.v1.EventSendToCosmosLocal";
  value: EventSendToCosmosLocalAmino;
}
export interface EventSendToCosmosLocalSDKType {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
}
export interface EventSendToCosmosPendingIbcAutoForward {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
}
export interface EventSendToCosmosPendingIbcAutoForwardProtoMsg {
  typeUrl: "/gravity.v1.EventSendToCosmosPendingIbcAutoForward";
  value: Uint8Array;
}
export interface EventSendToCosmosPendingIbcAutoForwardAmino {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
}
export interface EventSendToCosmosPendingIbcAutoForwardAminoMsg {
  type: "/gravity.v1.EventSendToCosmosPendingIbcAutoForward";
  value: EventSendToCosmosPendingIbcAutoForwardAmino;
}
export interface EventSendToCosmosPendingIbcAutoForwardSDKType {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
}
export interface EventSendToCosmosExecutedIbcAutoForward {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
  timeoutTime: string;
  timeoutHeight: string;
}
export interface EventSendToCosmosExecutedIbcAutoForwardProtoMsg {
  typeUrl: "/gravity.v1.EventSendToCosmosExecutedIbcAutoForward";
  value: Uint8Array;
}
export interface EventSendToCosmosExecutedIbcAutoForwardAmino {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
  timeout_time: string;
  timeout_height: string;
}
export interface EventSendToCosmosExecutedIbcAutoForwardAminoMsg {
  type: "/gravity.v1.EventSendToCosmosExecutedIbcAutoForward";
  value: EventSendToCosmosExecutedIbcAutoForwardAmino;
}
export interface EventSendToCosmosExecutedIbcAutoForwardSDKType {
  nonce: string;
  receiver: string;
  token: string;
  amount: string;
  channel: string;
  timeout_time: string;
  timeout_height: string;
}
function createBaseAttestation(): Attestation {
  return {
    observed: false,
    votes: [],
    height: BigInt(0),
    claim: Any.fromPartial({})
  };
}
export const Attestation = {
  typeUrl: "/gravity.v1.Attestation",
  encode(message: Attestation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.observed === true) {
      writer.uint32(8).bool(message.observed);
    }
    for (const v of message.votes) {
      writer.uint32(18).string(v!);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.claim !== undefined) {
      Any.encode(message.claim, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Attestation {
    return {
      observed: isSet(object.observed) ? Boolean(object.observed) : false,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => String(e)) : [],
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      claim: isSet(object.claim) ? Any.fromJSON(object.claim) : undefined
    };
  },
  fromPartial(object: Partial<Attestation>): Attestation {
    const message = createBaseAttestation();
    message.observed = object.observed ?? false;
    message.votes = object.votes?.map(e => e) || [];
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.claim = object.claim !== undefined && object.claim !== null ? Any.fromPartial(object.claim) : undefined;
    return message;
  },
  fromAmino(object: AttestationAmino): Attestation {
    return {
      observed: object.observed,
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => e) : [],
      height: BigInt(object.height),
      claim: object?.claim ? Any.fromAmino(object.claim) : undefined
    };
  },
  toAmino(message: Attestation): AttestationAmino {
    const obj: any = {};
    obj.observed = message.observed;
    if (message.votes) {
      obj.votes = message.votes.map(e => e);
    } else {
      obj.votes = [];
    }
    obj.height = message.height ? message.height.toString() : undefined;
    obj.claim = message.claim ? Any.toAmino(message.claim) : undefined;
    return obj;
  },
  fromAminoMsg(object: AttestationAminoMsg): Attestation {
    return Attestation.fromAmino(object.value);
  },
  fromProtoMsg(message: AttestationProtoMsg): Attestation {
    return Attestation.decode(message.value);
  },
  toProto(message: Attestation): Uint8Array {
    return Attestation.encode(message).finish();
  },
  toProtoMsg(message: Attestation): AttestationProtoMsg {
    return {
      typeUrl: "/gravity.v1.Attestation",
      value: Attestation.encode(message).finish()
    };
  }
};
function createBaseERC20Token(): ERC20Token {
  return {
    contract: "",
    amount: ""
  };
}
export const ERC20Token = {
  typeUrl: "/gravity.v1.ERC20Token",
  encode(message: ERC20Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): ERC20Token {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<ERC20Token>): ERC20Token {
    const message = createBaseERC20Token();
    message.contract = object.contract ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: ERC20TokenAmino): ERC20Token {
    return {
      contract: object.contract,
      amount: object.amount
    };
  },
  toAmino(message: ERC20Token): ERC20TokenAmino {
    const obj: any = {};
    obj.contract = message.contract;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: ERC20TokenAminoMsg): ERC20Token {
    return ERC20Token.fromAmino(object.value);
  },
  fromProtoMsg(message: ERC20TokenProtoMsg): ERC20Token {
    return ERC20Token.decode(message.value);
  },
  toProto(message: ERC20Token): Uint8Array {
    return ERC20Token.encode(message).finish();
  },
  toProtoMsg(message: ERC20Token): ERC20TokenProtoMsg {
    return {
      typeUrl: "/gravity.v1.ERC20Token",
      value: ERC20Token.encode(message).finish()
    };
  }
};
function createBaseEventObservation(): EventObservation {
  return {
    attestationType: "",
    bridgeContract: "",
    bridgeChainId: "",
    attestationId: "",
    nonce: ""
  };
}
export const EventObservation = {
  typeUrl: "/gravity.v1.EventObservation",
  encode(message: EventObservation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestationType !== "") {
      writer.uint32(10).string(message.attestationType);
    }
    if (message.bridgeContract !== "") {
      writer.uint32(18).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(26).string(message.bridgeChainId);
    }
    if (message.attestationId !== "") {
      writer.uint32(34).string(message.attestationId);
    }
    if (message.nonce !== "") {
      writer.uint32(42).string(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): EventObservation {
    return {
      attestationType: isSet(object.attestationType) ? String(object.attestationType) : "",
      bridgeContract: isSet(object.bridgeContract) ? String(object.bridgeContract) : "",
      bridgeChainId: isSet(object.bridgeChainId) ? String(object.bridgeChainId) : "",
      attestationId: isSet(object.attestationId) ? String(object.attestationId) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : ""
    };
  },
  fromPartial(object: Partial<EventObservation>): EventObservation {
    const message = createBaseEventObservation();
    message.attestationType = object.attestationType ?? "";
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.attestationId = object.attestationId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
  fromAmino(object: EventObservationAmino): EventObservation {
    return {
      attestationType: object.attestation_type,
      bridgeContract: object.bridge_contract,
      bridgeChainId: object.bridge_chain_id,
      attestationId: object.attestation_id,
      nonce: object.nonce
    };
  },
  toAmino(message: EventObservation): EventObservationAmino {
    const obj: any = {};
    obj.attestation_type = message.attestationType;
    obj.bridge_contract = message.bridgeContract;
    obj.bridge_chain_id = message.bridgeChainId;
    obj.attestation_id = message.attestationId;
    obj.nonce = message.nonce;
    return obj;
  },
  fromAminoMsg(object: EventObservationAminoMsg): EventObservation {
    return EventObservation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventObservationProtoMsg): EventObservation {
    return EventObservation.decode(message.value);
  },
  toProto(message: EventObservation): Uint8Array {
    return EventObservation.encode(message).finish();
  },
  toProtoMsg(message: EventObservation): EventObservationProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventObservation",
      value: EventObservation.encode(message).finish()
    };
  }
};
function createBaseEventInvalidSendToCosmosReceiver(): EventInvalidSendToCosmosReceiver {
  return {
    amount: "",
    nonce: "",
    token: "",
    sender: ""
  };
}
export const EventInvalidSendToCosmosReceiver = {
  typeUrl: "/gravity.v1.EventInvalidSendToCosmosReceiver",
  encode(message: EventInvalidSendToCosmosReceiver, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): EventInvalidSendToCosmosReceiver {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      token: isSet(object.token) ? String(object.token) : "",
      sender: isSet(object.sender) ? String(object.sender) : ""
    };
  },
  fromPartial(object: Partial<EventInvalidSendToCosmosReceiver>): EventInvalidSendToCosmosReceiver {
    const message = createBaseEventInvalidSendToCosmosReceiver();
    message.amount = object.amount ?? "";
    message.nonce = object.nonce ?? "";
    message.token = object.token ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
  fromAmino(object: EventInvalidSendToCosmosReceiverAmino): EventInvalidSendToCosmosReceiver {
    return {
      amount: object.amount,
      nonce: object.nonce,
      token: object.token,
      sender: object.sender
    };
  },
  toAmino(message: EventInvalidSendToCosmosReceiver): EventInvalidSendToCosmosReceiverAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.nonce = message.nonce;
    obj.token = message.token;
    obj.sender = message.sender;
    return obj;
  },
  fromAminoMsg(object: EventInvalidSendToCosmosReceiverAminoMsg): EventInvalidSendToCosmosReceiver {
    return EventInvalidSendToCosmosReceiver.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInvalidSendToCosmosReceiverProtoMsg): EventInvalidSendToCosmosReceiver {
    return EventInvalidSendToCosmosReceiver.decode(message.value);
  },
  toProto(message: EventInvalidSendToCosmosReceiver): Uint8Array {
    return EventInvalidSendToCosmosReceiver.encode(message).finish();
  },
  toProtoMsg(message: EventInvalidSendToCosmosReceiver): EventInvalidSendToCosmosReceiverProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventInvalidSendToCosmosReceiver",
      value: EventInvalidSendToCosmosReceiver.encode(message).finish()
    };
  }
};
function createBaseEventSendToCosmos(): EventSendToCosmos {
  return {
    amount: "",
    nonce: "",
    token: ""
  };
}
export const EventSendToCosmos = {
  typeUrl: "/gravity.v1.EventSendToCosmos",
  encode(message: EventSendToCosmos, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },
  fromJSON(object: any): EventSendToCosmos {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      token: isSet(object.token) ? String(object.token) : ""
    };
  },
  fromPartial(object: Partial<EventSendToCosmos>): EventSendToCosmos {
    const message = createBaseEventSendToCosmos();
    message.amount = object.amount ?? "";
    message.nonce = object.nonce ?? "";
    message.token = object.token ?? "";
    return message;
  },
  fromAmino(object: EventSendToCosmosAmino): EventSendToCosmos {
    return {
      amount: object.amount,
      nonce: object.nonce,
      token: object.token
    };
  },
  toAmino(message: EventSendToCosmos): EventSendToCosmosAmino {
    const obj: any = {};
    obj.amount = message.amount;
    obj.nonce = message.nonce;
    obj.token = message.token;
    return obj;
  },
  fromAminoMsg(object: EventSendToCosmosAminoMsg): EventSendToCosmos {
    return EventSendToCosmos.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToCosmosProtoMsg): EventSendToCosmos {
    return EventSendToCosmos.decode(message.value);
  },
  toProto(message: EventSendToCosmos): Uint8Array {
    return EventSendToCosmos.encode(message).finish();
  },
  toProtoMsg(message: EventSendToCosmos): EventSendToCosmosProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSendToCosmos",
      value: EventSendToCosmos.encode(message).finish()
    };
  }
};
function createBaseEventSendToCosmosLocal(): EventSendToCosmosLocal {
  return {
    nonce: "",
    receiver: "",
    token: "",
    amount: ""
  };
}
export const EventSendToCosmosLocal = {
  typeUrl: "/gravity.v1.EventSendToCosmosLocal",
  encode(message: EventSendToCosmosLocal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventSendToCosmosLocal {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? String(object.token) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<EventSendToCosmosLocal>): EventSendToCosmosLocal {
    const message = createBaseEventSendToCosmosLocal();
    message.nonce = object.nonce ?? "";
    message.receiver = object.receiver ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventSendToCosmosLocalAmino): EventSendToCosmosLocal {
    return {
      nonce: object.nonce,
      receiver: object.receiver,
      token: object.token,
      amount: object.amount
    };
  },
  toAmino(message: EventSendToCosmosLocal): EventSendToCosmosLocalAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    obj.receiver = message.receiver;
    obj.token = message.token;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventSendToCosmosLocalAminoMsg): EventSendToCosmosLocal {
    return EventSendToCosmosLocal.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToCosmosLocalProtoMsg): EventSendToCosmosLocal {
    return EventSendToCosmosLocal.decode(message.value);
  },
  toProto(message: EventSendToCosmosLocal): Uint8Array {
    return EventSendToCosmosLocal.encode(message).finish();
  },
  toProtoMsg(message: EventSendToCosmosLocal): EventSendToCosmosLocalProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSendToCosmosLocal",
      value: EventSendToCosmosLocal.encode(message).finish()
    };
  }
};
function createBaseEventSendToCosmosPendingIbcAutoForward(): EventSendToCosmosPendingIbcAutoForward {
  return {
    nonce: "",
    receiver: "",
    token: "",
    amount: "",
    channel: ""
  };
}
export const EventSendToCosmosPendingIbcAutoForward = {
  typeUrl: "/gravity.v1.EventSendToCosmosPendingIbcAutoForward",
  encode(message: EventSendToCosmosPendingIbcAutoForward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(42).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): EventSendToCosmosPendingIbcAutoForward {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? String(object.token) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<EventSendToCosmosPendingIbcAutoForward>): EventSendToCosmosPendingIbcAutoForward {
    const message = createBaseEventSendToCosmosPendingIbcAutoForward();
    message.nonce = object.nonce ?? "";
    message.receiver = object.receiver ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: EventSendToCosmosPendingIbcAutoForwardAmino): EventSendToCosmosPendingIbcAutoForward {
    return {
      nonce: object.nonce,
      receiver: object.receiver,
      token: object.token,
      amount: object.amount,
      channel: object.channel
    };
  },
  toAmino(message: EventSendToCosmosPendingIbcAutoForward): EventSendToCosmosPendingIbcAutoForwardAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    obj.receiver = message.receiver;
    obj.token = message.token;
    obj.amount = message.amount;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: EventSendToCosmosPendingIbcAutoForwardAminoMsg): EventSendToCosmosPendingIbcAutoForward {
    return EventSendToCosmosPendingIbcAutoForward.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToCosmosPendingIbcAutoForwardProtoMsg): EventSendToCosmosPendingIbcAutoForward {
    return EventSendToCosmosPendingIbcAutoForward.decode(message.value);
  },
  toProto(message: EventSendToCosmosPendingIbcAutoForward): Uint8Array {
    return EventSendToCosmosPendingIbcAutoForward.encode(message).finish();
  },
  toProtoMsg(message: EventSendToCosmosPendingIbcAutoForward): EventSendToCosmosPendingIbcAutoForwardProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSendToCosmosPendingIbcAutoForward",
      value: EventSendToCosmosPendingIbcAutoForward.encode(message).finish()
    };
  }
};
function createBaseEventSendToCosmosExecutedIbcAutoForward(): EventSendToCosmosExecutedIbcAutoForward {
  return {
    nonce: "",
    receiver: "",
    token: "",
    amount: "",
    channel: "",
    timeoutTime: "",
    timeoutHeight: ""
  };
}
export const EventSendToCosmosExecutedIbcAutoForward = {
  typeUrl: "/gravity.v1.EventSendToCosmosExecutedIbcAutoForward",
  encode(message: EventSendToCosmosExecutedIbcAutoForward, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.channel !== "") {
      writer.uint32(42).string(message.channel);
    }
    if (message.timeoutTime !== "") {
      writer.uint32(50).string(message.timeoutTime);
    }
    if (message.timeoutHeight !== "") {
      writer.uint32(58).string(message.timeoutHeight);
    }
    return writer;
  },
  fromJSON(object: any): EventSendToCosmosExecutedIbcAutoForward {
    return {
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      token: isSet(object.token) ? String(object.token) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeoutTime: isSet(object.timeoutTime) ? String(object.timeoutTime) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? String(object.timeoutHeight) : ""
    };
  },
  fromPartial(object: Partial<EventSendToCosmosExecutedIbcAutoForward>): EventSendToCosmosExecutedIbcAutoForward {
    const message = createBaseEventSendToCosmosExecutedIbcAutoForward();
    message.nonce = object.nonce ?? "";
    message.receiver = object.receiver ?? "";
    message.token = object.token ?? "";
    message.amount = object.amount ?? "";
    message.channel = object.channel ?? "";
    message.timeoutTime = object.timeoutTime ?? "";
    message.timeoutHeight = object.timeoutHeight ?? "";
    return message;
  },
  fromAmino(object: EventSendToCosmosExecutedIbcAutoForwardAmino): EventSendToCosmosExecutedIbcAutoForward {
    return {
      nonce: object.nonce,
      receiver: object.receiver,
      token: object.token,
      amount: object.amount,
      channel: object.channel,
      timeoutTime: object.timeout_time,
      timeoutHeight: object.timeout_height
    };
  },
  toAmino(message: EventSendToCosmosExecutedIbcAutoForward): EventSendToCosmosExecutedIbcAutoForwardAmino {
    const obj: any = {};
    obj.nonce = message.nonce;
    obj.receiver = message.receiver;
    obj.token = message.token;
    obj.amount = message.amount;
    obj.channel = message.channel;
    obj.timeout_time = message.timeoutTime;
    obj.timeout_height = message.timeoutHeight;
    return obj;
  },
  fromAminoMsg(object: EventSendToCosmosExecutedIbcAutoForwardAminoMsg): EventSendToCosmosExecutedIbcAutoForward {
    return EventSendToCosmosExecutedIbcAutoForward.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendToCosmosExecutedIbcAutoForwardProtoMsg): EventSendToCosmosExecutedIbcAutoForward {
    return EventSendToCosmosExecutedIbcAutoForward.decode(message.value);
  },
  toProto(message: EventSendToCosmosExecutedIbcAutoForward): Uint8Array {
    return EventSendToCosmosExecutedIbcAutoForward.encode(message).finish();
  },
  toProtoMsg(message: EventSendToCosmosExecutedIbcAutoForward): EventSendToCosmosExecutedIbcAutoForwardProtoMsg {
    return {
      typeUrl: "/gravity.v1.EventSendToCosmosExecutedIbcAutoForward",
      value: EventSendToCosmosExecutedIbcAutoForward.encode(message).finish()
    };
  }
};
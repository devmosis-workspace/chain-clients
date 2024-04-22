import { BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export enum RecoverResponse_Response {
  RESPONSE_UNSPECIFIED = 0,
  RESPONSE_SUCCESS = 1,
  RESPONSE_FAIL = 2,
  UNRECOGNIZED = -1,
}
export const RecoverResponse_ResponseSDKType = RecoverResponse_Response;
export const RecoverResponse_ResponseAmino = RecoverResponse_Response;
export function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response {
  switch (object) {
    case 0:
    case "RESPONSE_UNSPECIFIED":
      return RecoverResponse_Response.RESPONSE_UNSPECIFIED;
    case 1:
    case "RESPONSE_SUCCESS":
      return RecoverResponse_Response.RESPONSE_SUCCESS;
    case 2:
    case "RESPONSE_FAIL":
      return RecoverResponse_Response.RESPONSE_FAIL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RecoverResponse_Response.UNRECOGNIZED;
  }
}
export function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string {
  switch (object) {
    case RecoverResponse_Response.RESPONSE_UNSPECIFIED:
      return "RESPONSE_UNSPECIFIED";
    case RecoverResponse_Response.RESPONSE_SUCCESS:
      return "RESPONSE_SUCCESS";
    case RecoverResponse_Response.RESPONSE_FAIL:
      return "RESPONSE_FAIL";
    case RecoverResponse_Response.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum MessageOut_CriminalList_Criminal_CrimeType {
  CRIME_TYPE_UNSPECIFIED = 0,
  CRIME_TYPE_NON_MALICIOUS = 1,
  CRIME_TYPE_MALICIOUS = 2,
  UNRECOGNIZED = -1,
}
export const MessageOut_CriminalList_Criminal_CrimeTypeSDKType = MessageOut_CriminalList_Criminal_CrimeType;
export const MessageOut_CriminalList_Criminal_CrimeTypeAmino = MessageOut_CriminalList_Criminal_CrimeType;
export function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): MessageOut_CriminalList_Criminal_CrimeType {
  switch (object) {
    case 0:
    case "CRIME_TYPE_UNSPECIFIED":
      return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED;
    case 1:
    case "CRIME_TYPE_NON_MALICIOUS":
      return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS;
    case 2:
    case "CRIME_TYPE_MALICIOUS":
      return MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED;
  }
}
export function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: MessageOut_CriminalList_Criminal_CrimeType): string {
  switch (object) {
    case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_UNSPECIFIED:
      return "CRIME_TYPE_UNSPECIFIED";
    case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_NON_MALICIOUS:
      return "CRIME_TYPE_NON_MALICIOUS";
    case MessageOut_CriminalList_Criminal_CrimeType.CRIME_TYPE_MALICIOUS:
      return "CRIME_TYPE_MALICIOUS";
    case MessageOut_CriminalList_Criminal_CrimeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface RecoverRequest {
  keygenInit?: KeygenInit;
  keygenOutput?: KeygenOutput;
}
export interface RecoverRequestProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverRequest";
  value: Uint8Array;
}
export interface RecoverRequestAmino {
  keygen_init?: KeygenInitAmino;
  keygen_output?: KeygenOutputAmino;
}
export interface RecoverRequestAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.RecoverRequest";
  value: RecoverRequestAmino;
}
export interface RecoverRequestSDKType {
  keygen_init?: KeygenInitSDKType;
  keygen_output?: KeygenOutputSDKType;
}
export interface RecoverResponse {
  response: RecoverResponse_Response;
}
export interface RecoverResponseProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverResponse";
  value: Uint8Array;
}
export interface RecoverResponseAmino {
  response?: RecoverResponse_Response;
}
export interface RecoverResponseAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.RecoverResponse";
  value: RecoverResponseAmino;
}
export interface RecoverResponseSDKType {
  response: RecoverResponse_Response;
}
/** Keygen's success response */
export interface KeygenOutput {
  /** pub_key; common for all parties */
  pubKey: Uint8Array;
  /** recover info of all parties' shares; common for all parties */
  groupRecoverInfo: Uint8Array;
  /** private recover info of this party's shares; unique for each party */
  privateRecoverInfo: Uint8Array;
}
export interface KeygenOutputProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenOutput";
  value: Uint8Array;
}
/** Keygen's success response */
export interface KeygenOutputAmino {
  /** pub_key; common for all parties */
  pub_key?: string;
  /** recover info of all parties' shares; common for all parties */
  group_recover_info?: string;
  /** private recover info of this party's shares; unique for each party */
  private_recover_info?: string;
}
export interface KeygenOutputAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeygenOutput";
  value: KeygenOutputAmino;
}
/** Keygen's success response */
export interface KeygenOutputSDKType {
  pub_key: Uint8Array;
  group_recover_info: Uint8Array;
  private_recover_info: Uint8Array;
}
export interface MessageIn {
  /** first message only, Keygen */
  keygenInit?: KeygenInit;
  /** first message only, Sign */
  signInit?: SignInit;
  /** all subsequent messages */
  traffic?: TrafficIn;
  /** abort the protocol, ignore the bool value */
  abort?: boolean;
}
export interface MessageInProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.MessageIn";
  value: Uint8Array;
}
export interface MessageInAmino {
  /** first message only, Keygen */
  keygen_init?: KeygenInitAmino;
  /** first message only, Sign */
  sign_init?: SignInitAmino;
  /** all subsequent messages */
  traffic?: TrafficInAmino;
  /** abort the protocol, ignore the bool value */
  abort?: boolean;
}
export interface MessageInAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.MessageIn";
  value: MessageInAmino;
}
export interface MessageInSDKType {
  keygen_init?: KeygenInitSDKType;
  sign_init?: SignInitSDKType;
  traffic?: TrafficInSDKType;
  abort?: boolean;
}
export interface MessageOut {
  /** all but final message */
  traffic?: TrafficOut;
  /** final message only, Keygen */
  keygenResult?: MessageOut_KeygenResult;
  /** final message only, Sign */
  signResult?: MessageOut_SignResult;
  /** issue recover from client */
  needRecover?: boolean;
}
export interface MessageOutProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.MessageOut";
  value: Uint8Array;
}
export interface MessageOutAmino {
  /** all but final message */
  traffic?: TrafficOutAmino;
  /** final message only, Keygen */
  keygen_result?: MessageOut_KeygenResultAmino;
  /** final message only, Sign */
  sign_result?: MessageOut_SignResultAmino;
  /** issue recover from client */
  need_recover?: boolean;
}
export interface MessageOutAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.MessageOut";
  value: MessageOutAmino;
}
export interface MessageOutSDKType {
  traffic?: TrafficOutSDKType;
  keygen_result?: MessageOut_KeygenResultSDKType;
  sign_result?: MessageOut_SignResultSDKType;
  need_recover?: boolean;
}
/** Keygen's response types */
export interface MessageOut_KeygenResult {
  /** Success response */
  data?: KeygenOutput;
  /** Faiilure response */
  criminals?: MessageOut_CriminalList;
}
export interface MessageOut_KeygenResultProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResult";
  value: Uint8Array;
}
/** Keygen's response types */
export interface MessageOut_KeygenResultAmino {
  /** Success response */
  data?: KeygenOutputAmino;
  /** Faiilure response */
  criminals?: MessageOut_CriminalListAmino;
}
export interface MessageOut_KeygenResultAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeygenResult";
  value: MessageOut_KeygenResultAmino;
}
/** Keygen's response types */
export interface MessageOut_KeygenResultSDKType {
  data?: KeygenOutputSDKType;
  criminals?: MessageOut_CriminalListSDKType;
}
/** Sign's response types */
export interface MessageOut_SignResult {
  /** Success response */
  signature?: Uint8Array;
  /** Failure response */
  criminals?: MessageOut_CriminalList;
}
export interface MessageOut_SignResultProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignResult";
  value: Uint8Array;
}
/** Sign's response types */
export interface MessageOut_SignResultAmino {
  /** Success response */
  signature?: string;
  /** Failure response */
  criminals?: MessageOut_CriminalListAmino;
}
export interface MessageOut_SignResultAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.SignResult";
  value: MessageOut_SignResultAmino;
}
/** Sign's response types */
export interface MessageOut_SignResultSDKType {
  signature?: Uint8Array;
  criminals?: MessageOut_CriminalListSDKType;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
  criminals: MessageOut_CriminalList_Criminal[];
}
export interface MessageOut_CriminalListProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.CriminalList";
  value: Uint8Array;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalListAmino {
  criminals?: MessageOut_CriminalList_CriminalAmino[];
}
export interface MessageOut_CriminalListAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.CriminalList";
  value: MessageOut_CriminalListAmino;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalListSDKType {
  criminals: MessageOut_CriminalList_CriminalSDKType[];
}
export interface MessageOut_CriminalList_Criminal {
  partyUid: string;
  crimeType: MessageOut_CriminalList_Criminal_CrimeType;
}
export interface MessageOut_CriminalList_CriminalProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.Criminal";
  value: Uint8Array;
}
export interface MessageOut_CriminalList_CriminalAmino {
  party_uid?: string;
  crime_type?: MessageOut_CriminalList_Criminal_CrimeType;
}
export interface MessageOut_CriminalList_CriminalAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.Criminal";
  value: MessageOut_CriminalList_CriminalAmino;
}
export interface MessageOut_CriminalList_CriminalSDKType {
  party_uid: string;
  crime_type: MessageOut_CriminalList_Criminal_CrimeType;
}
export interface TrafficIn {
  fromPartyUid: string;
  payload: Uint8Array;
  isBroadcast: boolean;
}
export interface TrafficInProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficIn";
  value: Uint8Array;
}
export interface TrafficInAmino {
  from_party_uid?: string;
  payload?: string;
  is_broadcast?: boolean;
}
export interface TrafficInAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.TrafficIn";
  value: TrafficInAmino;
}
export interface TrafficInSDKType {
  from_party_uid: string;
  payload: Uint8Array;
  is_broadcast: boolean;
}
export interface TrafficOut {
  toPartyUid: string;
  payload: Uint8Array;
  isBroadcast: boolean;
}
export interface TrafficOutProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficOut";
  value: Uint8Array;
}
export interface TrafficOutAmino {
  to_party_uid?: string;
  payload?: string;
  is_broadcast?: boolean;
}
export interface TrafficOutAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.TrafficOut";
  value: TrafficOutAmino;
}
export interface TrafficOutSDKType {
  to_party_uid: string;
  payload: Uint8Array;
  is_broadcast: boolean;
}
export interface KeygenInit {
  newKeyUid: string;
  partyUids: string[];
  partyShareCounts: number[];
  /** parties[my_party_index] belongs to the server */
  myPartyIndex: number;
  threshold: number;
}
export interface KeygenInitProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenInit";
  value: Uint8Array;
}
export interface KeygenInitAmino {
  new_key_uid?: string;
  party_uids?: string[];
  party_share_counts?: number[];
  /** parties[my_party_index] belongs to the server */
  my_party_index?: number;
  threshold?: number;
}
export interface KeygenInitAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.KeygenInit";
  value: KeygenInitAmino;
}
export interface KeygenInitSDKType {
  new_key_uid: string;
  party_uids: string[];
  party_share_counts: number[];
  my_party_index: number;
  threshold: number;
}
export interface SignInit {
  newSigUid: string;
  keyUid: string;
  /** TODO replace this with a subset of indices? */
  partyUids: string[];
  messageToSign: Uint8Array;
}
export interface SignInitProtoMsg {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignInit";
  value: Uint8Array;
}
export interface SignInitAmino {
  new_sig_uid?: string;
  key_uid?: string;
  /** TODO replace this with a subset of indices? */
  party_uids?: string[];
  message_to_sign?: string;
}
export interface SignInitAminoMsg {
  type: "/axelar.tss.tofnd.v1beta1.SignInit";
  value: SignInitAmino;
}
export interface SignInitSDKType {
  new_sig_uid: string;
  key_uid: string;
  party_uids: string[];
  message_to_sign: Uint8Array;
}
function createBaseRecoverRequest(): RecoverRequest {
  return {
    keygenInit: undefined,
    keygenOutput: undefined
  };
}
export const RecoverRequest = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverRequest",
  encode(message: RecoverRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keygenInit !== undefined) {
      KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
    }
    if (message.keygenOutput !== undefined) {
      KeygenOutput.encode(message.keygenOutput, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RecoverRequest {
    return {
      keygenInit: isSet(object.keygenInit) ? KeygenInit.fromJSON(object.keygenInit) : undefined,
      keygenOutput: isSet(object.keygenOutput) ? KeygenOutput.fromJSON(object.keygenOutput) : undefined
    };
  },
  fromPartial(object: Partial<RecoverRequest>): RecoverRequest {
    const message = createBaseRecoverRequest();
    message.keygenInit = object.keygenInit !== undefined && object.keygenInit !== null ? KeygenInit.fromPartial(object.keygenInit) : undefined;
    message.keygenOutput = object.keygenOutput !== undefined && object.keygenOutput !== null ? KeygenOutput.fromPartial(object.keygenOutput) : undefined;
    return message;
  },
  fromAmino(object: RecoverRequestAmino): RecoverRequest {
    const message = createBaseRecoverRequest();
    if (object.keygen_init !== undefined && object.keygen_init !== null) {
      message.keygenInit = KeygenInit.fromAmino(object.keygen_init);
    }
    if (object.keygen_output !== undefined && object.keygen_output !== null) {
      message.keygenOutput = KeygenOutput.fromAmino(object.keygen_output);
    }
    return message;
  },
  toAmino(message: RecoverRequest): RecoverRequestAmino {
    const obj: any = {};
    obj.keygen_init = message.keygenInit ? KeygenInit.toAmino(message.keygenInit) : undefined;
    obj.keygen_output = message.keygenOutput ? KeygenOutput.toAmino(message.keygenOutput) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecoverRequestAminoMsg): RecoverRequest {
    return RecoverRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoverRequestProtoMsg): RecoverRequest {
    return RecoverRequest.decode(message.value);
  },
  toProto(message: RecoverRequest): Uint8Array {
    return RecoverRequest.encode(message).finish();
  },
  toProtoMsg(message: RecoverRequest): RecoverRequestProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverRequest",
      value: RecoverRequest.encode(message).finish()
    };
  }
};
function createBaseRecoverResponse(): RecoverResponse {
  return {
    response: 0
  };
}
export const RecoverResponse = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverResponse",
  encode(message: RecoverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },
  fromJSON(object: any): RecoverResponse {
    return {
      response: isSet(object.response) ? recoverResponse_ResponseFromJSON(object.response) : -1
    };
  },
  fromPartial(object: Partial<RecoverResponse>): RecoverResponse {
    const message = createBaseRecoverResponse();
    message.response = object.response ?? 0;
    return message;
  },
  fromAmino(object: RecoverResponseAmino): RecoverResponse {
    const message = createBaseRecoverResponse();
    if (object.response !== undefined && object.response !== null) {
      message.response = recoverResponse_ResponseFromJSON(object.response);
    }
    return message;
  },
  toAmino(message: RecoverResponse): RecoverResponseAmino {
    const obj: any = {};
    obj.response = message.response;
    return obj;
  },
  fromAminoMsg(object: RecoverResponseAminoMsg): RecoverResponse {
    return RecoverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RecoverResponseProtoMsg): RecoverResponse {
    return RecoverResponse.decode(message.value);
  },
  toProto(message: RecoverResponse): Uint8Array {
    return RecoverResponse.encode(message).finish();
  },
  toProtoMsg(message: RecoverResponse): RecoverResponseProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverResponse",
      value: RecoverResponse.encode(message).finish()
    };
  }
};
function createBaseKeygenOutput(): KeygenOutput {
  return {
    pubKey: new Uint8Array(),
    groupRecoverInfo: new Uint8Array(),
    privateRecoverInfo: new Uint8Array()
  };
}
export const KeygenOutput = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenOutput",
  encode(message: KeygenOutput, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey.length !== 0) {
      writer.uint32(10).bytes(message.pubKey);
    }
    if (message.groupRecoverInfo.length !== 0) {
      writer.uint32(18).bytes(message.groupRecoverInfo);
    }
    if (message.privateRecoverInfo.length !== 0) {
      writer.uint32(26).bytes(message.privateRecoverInfo);
    }
    return writer;
  },
  fromJSON(object: any): KeygenOutput {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      groupRecoverInfo: isSet(object.groupRecoverInfo) ? bytesFromBase64(object.groupRecoverInfo) : new Uint8Array(),
      privateRecoverInfo: isSet(object.privateRecoverInfo) ? bytesFromBase64(object.privateRecoverInfo) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<KeygenOutput>): KeygenOutput {
    const message = createBaseKeygenOutput();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.groupRecoverInfo = object.groupRecoverInfo ?? new Uint8Array();
    message.privateRecoverInfo = object.privateRecoverInfo ?? new Uint8Array();
    return message;
  },
  fromAmino(object: KeygenOutputAmino): KeygenOutput {
    const message = createBaseKeygenOutput();
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = bytesFromBase64(object.pub_key);
    }
    if (object.group_recover_info !== undefined && object.group_recover_info !== null) {
      message.groupRecoverInfo = bytesFromBase64(object.group_recover_info);
    }
    if (object.private_recover_info !== undefined && object.private_recover_info !== null) {
      message.privateRecoverInfo = bytesFromBase64(object.private_recover_info);
    }
    return message;
  },
  toAmino(message: KeygenOutput): KeygenOutputAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
    obj.group_recover_info = message.groupRecoverInfo ? base64FromBytes(message.groupRecoverInfo) : undefined;
    obj.private_recover_info = message.privateRecoverInfo ? base64FromBytes(message.privateRecoverInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeygenOutputAminoMsg): KeygenOutput {
    return KeygenOutput.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenOutputProtoMsg): KeygenOutput {
    return KeygenOutput.decode(message.value);
  },
  toProto(message: KeygenOutput): Uint8Array {
    return KeygenOutput.encode(message).finish();
  },
  toProtoMsg(message: KeygenOutput): KeygenOutputProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenOutput",
      value: KeygenOutput.encode(message).finish()
    };
  }
};
function createBaseMessageIn(): MessageIn {
  return {
    keygenInit: undefined,
    signInit: undefined,
    traffic: undefined,
    abort: undefined
  };
}
export const MessageIn = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.MessageIn",
  encode(message: MessageIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keygenInit !== undefined) {
      KeygenInit.encode(message.keygenInit, writer.uint32(10).fork()).ldelim();
    }
    if (message.signInit !== undefined) {
      SignInit.encode(message.signInit, writer.uint32(18).fork()).ldelim();
    }
    if (message.traffic !== undefined) {
      TrafficIn.encode(message.traffic, writer.uint32(26).fork()).ldelim();
    }
    if (message.abort !== undefined) {
      writer.uint32(32).bool(message.abort);
    }
    return writer;
  },
  fromJSON(object: any): MessageIn {
    return {
      keygenInit: isSet(object.keygenInit) ? KeygenInit.fromJSON(object.keygenInit) : undefined,
      signInit: isSet(object.signInit) ? SignInit.fromJSON(object.signInit) : undefined,
      traffic: isSet(object.traffic) ? TrafficIn.fromJSON(object.traffic) : undefined,
      abort: isSet(object.abort) ? Boolean(object.abort) : undefined
    };
  },
  fromPartial(object: Partial<MessageIn>): MessageIn {
    const message = createBaseMessageIn();
    message.keygenInit = object.keygenInit !== undefined && object.keygenInit !== null ? KeygenInit.fromPartial(object.keygenInit) : undefined;
    message.signInit = object.signInit !== undefined && object.signInit !== null ? SignInit.fromPartial(object.signInit) : undefined;
    message.traffic = object.traffic !== undefined && object.traffic !== null ? TrafficIn.fromPartial(object.traffic) : undefined;
    message.abort = object.abort ?? undefined;
    return message;
  },
  fromAmino(object: MessageInAmino): MessageIn {
    const message = createBaseMessageIn();
    if (object.keygen_init !== undefined && object.keygen_init !== null) {
      message.keygenInit = KeygenInit.fromAmino(object.keygen_init);
    }
    if (object.sign_init !== undefined && object.sign_init !== null) {
      message.signInit = SignInit.fromAmino(object.sign_init);
    }
    if (object.traffic !== undefined && object.traffic !== null) {
      message.traffic = TrafficIn.fromAmino(object.traffic);
    }
    if (object.abort !== undefined && object.abort !== null) {
      message.abort = object.abort;
    }
    return message;
  },
  toAmino(message: MessageIn): MessageInAmino {
    const obj: any = {};
    obj.keygen_init = message.keygenInit ? KeygenInit.toAmino(message.keygenInit) : undefined;
    obj.sign_init = message.signInit ? SignInit.toAmino(message.signInit) : undefined;
    obj.traffic = message.traffic ? TrafficIn.toAmino(message.traffic) : undefined;
    obj.abort = message.abort;
    return obj;
  },
  fromAminoMsg(object: MessageInAminoMsg): MessageIn {
    return MessageIn.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageInProtoMsg): MessageIn {
    return MessageIn.decode(message.value);
  },
  toProto(message: MessageIn): Uint8Array {
    return MessageIn.encode(message).finish();
  },
  toProtoMsg(message: MessageIn): MessageInProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.MessageIn",
      value: MessageIn.encode(message).finish()
    };
  }
};
function createBaseMessageOut(): MessageOut {
  return {
    traffic: undefined,
    keygenResult: undefined,
    signResult: undefined,
    needRecover: undefined
  };
}
export const MessageOut = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.MessageOut",
  encode(message: MessageOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.traffic !== undefined) {
      TrafficOut.encode(message.traffic, writer.uint32(10).fork()).ldelim();
    }
    if (message.keygenResult !== undefined) {
      MessageOut_KeygenResult.encode(message.keygenResult, writer.uint32(18).fork()).ldelim();
    }
    if (message.signResult !== undefined) {
      MessageOut_SignResult.encode(message.signResult, writer.uint32(26).fork()).ldelim();
    }
    if (message.needRecover !== undefined) {
      writer.uint32(32).bool(message.needRecover);
    }
    return writer;
  },
  fromJSON(object: any): MessageOut {
    return {
      traffic: isSet(object.traffic) ? TrafficOut.fromJSON(object.traffic) : undefined,
      keygenResult: isSet(object.keygenResult) ? MessageOut_KeygenResult.fromJSON(object.keygenResult) : undefined,
      signResult: isSet(object.signResult) ? MessageOut_SignResult.fromJSON(object.signResult) : undefined,
      needRecover: isSet(object.needRecover) ? Boolean(object.needRecover) : undefined
    };
  },
  fromPartial(object: Partial<MessageOut>): MessageOut {
    const message = createBaseMessageOut();
    message.traffic = object.traffic !== undefined && object.traffic !== null ? TrafficOut.fromPartial(object.traffic) : undefined;
    message.keygenResult = object.keygenResult !== undefined && object.keygenResult !== null ? MessageOut_KeygenResult.fromPartial(object.keygenResult) : undefined;
    message.signResult = object.signResult !== undefined && object.signResult !== null ? MessageOut_SignResult.fromPartial(object.signResult) : undefined;
    message.needRecover = object.needRecover ?? undefined;
    return message;
  },
  fromAmino(object: MessageOutAmino): MessageOut {
    const message = createBaseMessageOut();
    if (object.traffic !== undefined && object.traffic !== null) {
      message.traffic = TrafficOut.fromAmino(object.traffic);
    }
    if (object.keygen_result !== undefined && object.keygen_result !== null) {
      message.keygenResult = MessageOut_KeygenResult.fromAmino(object.keygen_result);
    }
    if (object.sign_result !== undefined && object.sign_result !== null) {
      message.signResult = MessageOut_SignResult.fromAmino(object.sign_result);
    }
    if (object.need_recover !== undefined && object.need_recover !== null) {
      message.needRecover = object.need_recover;
    }
    return message;
  },
  toAmino(message: MessageOut): MessageOutAmino {
    const obj: any = {};
    obj.traffic = message.traffic ? TrafficOut.toAmino(message.traffic) : undefined;
    obj.keygen_result = message.keygenResult ? MessageOut_KeygenResult.toAmino(message.keygenResult) : undefined;
    obj.sign_result = message.signResult ? MessageOut_SignResult.toAmino(message.signResult) : undefined;
    obj.need_recover = message.needRecover;
    return obj;
  },
  fromAminoMsg(object: MessageOutAminoMsg): MessageOut {
    return MessageOut.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOutProtoMsg): MessageOut {
    return MessageOut.decode(message.value);
  },
  toProto(message: MessageOut): Uint8Array {
    return MessageOut.encode(message).finish();
  },
  toProtoMsg(message: MessageOut): MessageOutProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.MessageOut",
      value: MessageOut.encode(message).finish()
    };
  }
};
function createBaseMessageOut_KeygenResult(): MessageOut_KeygenResult {
  return {
    data: undefined,
    criminals: undefined
  };
}
export const MessageOut_KeygenResult = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResult",
  encode(message: MessageOut_KeygenResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data !== undefined) {
      KeygenOutput.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.criminals !== undefined) {
      MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MessageOut_KeygenResult {
    return {
      data: isSet(object.data) ? KeygenOutput.fromJSON(object.data) : undefined,
      criminals: isSet(object.criminals) ? MessageOut_CriminalList.fromJSON(object.criminals) : undefined
    };
  },
  fromPartial(object: Partial<MessageOut_KeygenResult>): MessageOut_KeygenResult {
    const message = createBaseMessageOut_KeygenResult();
    message.data = object.data !== undefined && object.data !== null ? KeygenOutput.fromPartial(object.data) : undefined;
    message.criminals = object.criminals !== undefined && object.criminals !== null ? MessageOut_CriminalList.fromPartial(object.criminals) : undefined;
    return message;
  },
  fromAmino(object: MessageOut_KeygenResultAmino): MessageOut_KeygenResult {
    const message = createBaseMessageOut_KeygenResult();
    if (object.data !== undefined && object.data !== null) {
      message.data = KeygenOutput.fromAmino(object.data);
    }
    if (object.criminals !== undefined && object.criminals !== null) {
      message.criminals = MessageOut_CriminalList.fromAmino(object.criminals);
    }
    return message;
  },
  toAmino(message: MessageOut_KeygenResult): MessageOut_KeygenResultAmino {
    const obj: any = {};
    obj.data = message.data ? KeygenOutput.toAmino(message.data) : undefined;
    obj.criminals = message.criminals ? MessageOut_CriminalList.toAmino(message.criminals) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageOut_KeygenResultAminoMsg): MessageOut_KeygenResult {
    return MessageOut_KeygenResult.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOut_KeygenResultProtoMsg): MessageOut_KeygenResult {
    return MessageOut_KeygenResult.decode(message.value);
  },
  toProto(message: MessageOut_KeygenResult): Uint8Array {
    return MessageOut_KeygenResult.encode(message).finish();
  },
  toProtoMsg(message: MessageOut_KeygenResult): MessageOut_KeygenResultProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenResult",
      value: MessageOut_KeygenResult.encode(message).finish()
    };
  }
};
function createBaseMessageOut_SignResult(): MessageOut_SignResult {
  return {
    signature: undefined,
    criminals: undefined
  };
}
export const MessageOut_SignResult = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignResult",
  encode(message: MessageOut_SignResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature !== undefined) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.criminals !== undefined) {
      MessageOut_CriminalList.encode(message.criminals, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MessageOut_SignResult {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
      criminals: isSet(object.criminals) ? MessageOut_CriminalList.fromJSON(object.criminals) : undefined
    };
  },
  fromPartial(object: Partial<MessageOut_SignResult>): MessageOut_SignResult {
    const message = createBaseMessageOut_SignResult();
    message.signature = object.signature ?? undefined;
    message.criminals = object.criminals !== undefined && object.criminals !== null ? MessageOut_CriminalList.fromPartial(object.criminals) : undefined;
    return message;
  },
  fromAmino(object: MessageOut_SignResultAmino): MessageOut_SignResult {
    const message = createBaseMessageOut_SignResult();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.criminals !== undefined && object.criminals !== null) {
      message.criminals = MessageOut_CriminalList.fromAmino(object.criminals);
    }
    return message;
  },
  toAmino(message: MessageOut_SignResult): MessageOut_SignResultAmino {
    const obj: any = {};
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.criminals = message.criminals ? MessageOut_CriminalList.toAmino(message.criminals) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageOut_SignResultAminoMsg): MessageOut_SignResult {
    return MessageOut_SignResult.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOut_SignResultProtoMsg): MessageOut_SignResult {
    return MessageOut_SignResult.decode(message.value);
  },
  toProto(message: MessageOut_SignResult): Uint8Array {
    return MessageOut_SignResult.encode(message).finish();
  },
  toProtoMsg(message: MessageOut_SignResult): MessageOut_SignResultProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.SignResult",
      value: MessageOut_SignResult.encode(message).finish()
    };
  }
};
function createBaseMessageOut_CriminalList(): MessageOut_CriminalList {
  return {
    criminals: []
  };
}
export const MessageOut_CriminalList = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.CriminalList",
  encode(message: MessageOut_CriminalList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.criminals) {
      MessageOut_CriminalList_Criminal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MessageOut_CriminalList {
    return {
      criminals: Array.isArray(object?.criminals) ? object.criminals.map((e: any) => MessageOut_CriminalList_Criminal.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MessageOut_CriminalList>): MessageOut_CriminalList {
    const message = createBaseMessageOut_CriminalList();
    message.criminals = object.criminals?.map(e => MessageOut_CriminalList_Criminal.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MessageOut_CriminalListAmino): MessageOut_CriminalList {
    const message = createBaseMessageOut_CriminalList();
    message.criminals = object.criminals?.map(e => MessageOut_CriminalList_Criminal.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MessageOut_CriminalList): MessageOut_CriminalListAmino {
    const obj: any = {};
    if (message.criminals) {
      obj.criminals = message.criminals.map(e => e ? MessageOut_CriminalList_Criminal.toAmino(e) : undefined);
    } else {
      obj.criminals = [];
    }
    return obj;
  },
  fromAminoMsg(object: MessageOut_CriminalListAminoMsg): MessageOut_CriminalList {
    return MessageOut_CriminalList.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOut_CriminalListProtoMsg): MessageOut_CriminalList {
    return MessageOut_CriminalList.decode(message.value);
  },
  toProto(message: MessageOut_CriminalList): Uint8Array {
    return MessageOut_CriminalList.encode(message).finish();
  },
  toProtoMsg(message: MessageOut_CriminalList): MessageOut_CriminalListProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.CriminalList",
      value: MessageOut_CriminalList.encode(message).finish()
    };
  }
};
function createBaseMessageOut_CriminalList_Criminal(): MessageOut_CriminalList_Criminal {
  return {
    partyUid: "",
    crimeType: 0
  };
}
export const MessageOut_CriminalList_Criminal = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.Criminal",
  encode(message: MessageOut_CriminalList_Criminal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.partyUid !== "") {
      writer.uint32(10).string(message.partyUid);
    }
    if (message.crimeType !== 0) {
      writer.uint32(16).int32(message.crimeType);
    }
    return writer;
  },
  fromJSON(object: any): MessageOut_CriminalList_Criminal {
    return {
      partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
      crimeType: isSet(object.crimeType) ? messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crimeType) : -1
    };
  },
  fromPartial(object: Partial<MessageOut_CriminalList_Criminal>): MessageOut_CriminalList_Criminal {
    const message = createBaseMessageOut_CriminalList_Criminal();
    message.partyUid = object.partyUid ?? "";
    message.crimeType = object.crimeType ?? 0;
    return message;
  },
  fromAmino(object: MessageOut_CriminalList_CriminalAmino): MessageOut_CriminalList_Criminal {
    const message = createBaseMessageOut_CriminalList_Criminal();
    if (object.party_uid !== undefined && object.party_uid !== null) {
      message.partyUid = object.party_uid;
    }
    if (object.crime_type !== undefined && object.crime_type !== null) {
      message.crimeType = messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crime_type);
    }
    return message;
  },
  toAmino(message: MessageOut_CriminalList_Criminal): MessageOut_CriminalList_CriminalAmino {
    const obj: any = {};
    obj.party_uid = message.partyUid;
    obj.crime_type = message.crimeType;
    return obj;
  },
  fromAminoMsg(object: MessageOut_CriminalList_CriminalAminoMsg): MessageOut_CriminalList_Criminal {
    return MessageOut_CriminalList_Criminal.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageOut_CriminalList_CriminalProtoMsg): MessageOut_CriminalList_Criminal {
    return MessageOut_CriminalList_Criminal.decode(message.value);
  },
  toProto(message: MessageOut_CriminalList_Criminal): Uint8Array {
    return MessageOut_CriminalList_Criminal.encode(message).finish();
  },
  toProtoMsg(message: MessageOut_CriminalList_Criminal): MessageOut_CriminalList_CriminalProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.Criminal",
      value: MessageOut_CriminalList_Criminal.encode(message).finish()
    };
  }
};
function createBaseTrafficIn(): TrafficIn {
  return {
    fromPartyUid: "",
    payload: new Uint8Array(),
    isBroadcast: false
  };
}
export const TrafficIn = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficIn",
  encode(message: TrafficIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromPartyUid !== "") {
      writer.uint32(10).string(message.fromPartyUid);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.isBroadcast === true) {
      writer.uint32(24).bool(message.isBroadcast);
    }
    return writer;
  },
  fromJSON(object: any): TrafficIn {
    return {
      fromPartyUid: isSet(object.fromPartyUid) ? String(object.fromPartyUid) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false
    };
  },
  fromPartial(object: Partial<TrafficIn>): TrafficIn {
    const message = createBaseTrafficIn();
    message.fromPartyUid = object.fromPartyUid ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.isBroadcast = object.isBroadcast ?? false;
    return message;
  },
  fromAmino(object: TrafficInAmino): TrafficIn {
    const message = createBaseTrafficIn();
    if (object.from_party_uid !== undefined && object.from_party_uid !== null) {
      message.fromPartyUid = object.from_party_uid;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.is_broadcast !== undefined && object.is_broadcast !== null) {
      message.isBroadcast = object.is_broadcast;
    }
    return message;
  },
  toAmino(message: TrafficIn): TrafficInAmino {
    const obj: any = {};
    obj.from_party_uid = message.fromPartyUid;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.is_broadcast = message.isBroadcast;
    return obj;
  },
  fromAminoMsg(object: TrafficInAminoMsg): TrafficIn {
    return TrafficIn.fromAmino(object.value);
  },
  fromProtoMsg(message: TrafficInProtoMsg): TrafficIn {
    return TrafficIn.decode(message.value);
  },
  toProto(message: TrafficIn): Uint8Array {
    return TrafficIn.encode(message).finish();
  },
  toProtoMsg(message: TrafficIn): TrafficInProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficIn",
      value: TrafficIn.encode(message).finish()
    };
  }
};
function createBaseTrafficOut(): TrafficOut {
  return {
    toPartyUid: "",
    payload: new Uint8Array(),
    isBroadcast: false
  };
}
export const TrafficOut = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficOut",
  encode(message: TrafficOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.toPartyUid !== "") {
      writer.uint32(10).string(message.toPartyUid);
    }
    if (message.payload.length !== 0) {
      writer.uint32(18).bytes(message.payload);
    }
    if (message.isBroadcast === true) {
      writer.uint32(24).bool(message.isBroadcast);
    }
    return writer;
  },
  fromJSON(object: any): TrafficOut {
    return {
      toPartyUid: isSet(object.toPartyUid) ? String(object.toPartyUid) : "",
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      isBroadcast: isSet(object.isBroadcast) ? Boolean(object.isBroadcast) : false
    };
  },
  fromPartial(object: Partial<TrafficOut>): TrafficOut {
    const message = createBaseTrafficOut();
    message.toPartyUid = object.toPartyUid ?? "";
    message.payload = object.payload ?? new Uint8Array();
    message.isBroadcast = object.isBroadcast ?? false;
    return message;
  },
  fromAmino(object: TrafficOutAmino): TrafficOut {
    const message = createBaseTrafficOut();
    if (object.to_party_uid !== undefined && object.to_party_uid !== null) {
      message.toPartyUid = object.to_party_uid;
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    if (object.is_broadcast !== undefined && object.is_broadcast !== null) {
      message.isBroadcast = object.is_broadcast;
    }
    return message;
  },
  toAmino(message: TrafficOut): TrafficOutAmino {
    const obj: any = {};
    obj.to_party_uid = message.toPartyUid;
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    obj.is_broadcast = message.isBroadcast;
    return obj;
  },
  fromAminoMsg(object: TrafficOutAminoMsg): TrafficOut {
    return TrafficOut.fromAmino(object.value);
  },
  fromProtoMsg(message: TrafficOutProtoMsg): TrafficOut {
    return TrafficOut.decode(message.value);
  },
  toProto(message: TrafficOut): Uint8Array {
    return TrafficOut.encode(message).finish();
  },
  toProtoMsg(message: TrafficOut): TrafficOutProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.TrafficOut",
      value: TrafficOut.encode(message).finish()
    };
  }
};
function createBaseKeygenInit(): KeygenInit {
  return {
    newKeyUid: "",
    partyUids: [],
    partyShareCounts: [],
    myPartyIndex: 0,
    threshold: 0
  };
}
export const KeygenInit = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenInit",
  encode(message: KeygenInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newKeyUid !== "") {
      writer.uint32(10).string(message.newKeyUid);
    }
    for (const v of message.partyUids) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(42).fork();
    for (const v of message.partyShareCounts) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.myPartyIndex !== 0) {
      writer.uint32(24).uint32(message.myPartyIndex);
    }
    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold);
    }
    return writer;
  },
  fromJSON(object: any): KeygenInit {
    return {
      newKeyUid: isSet(object.newKeyUid) ? String(object.newKeyUid) : "",
      partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e: any) => String(e)) : [],
      partyShareCounts: Array.isArray(object?.partyShareCounts) ? object.partyShareCounts.map((e: any) => Number(e)) : [],
      myPartyIndex: isSet(object.myPartyIndex) ? Number(object.myPartyIndex) : 0,
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0
    };
  },
  fromPartial(object: Partial<KeygenInit>): KeygenInit {
    const message = createBaseKeygenInit();
    message.newKeyUid = object.newKeyUid ?? "";
    message.partyUids = object.partyUids?.map(e => e) || [];
    message.partyShareCounts = object.partyShareCounts?.map(e => e) || [];
    message.myPartyIndex = object.myPartyIndex ?? 0;
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: KeygenInitAmino): KeygenInit {
    const message = createBaseKeygenInit();
    if (object.new_key_uid !== undefined && object.new_key_uid !== null) {
      message.newKeyUid = object.new_key_uid;
    }
    message.partyUids = object.party_uids?.map(e => e) || [];
    message.partyShareCounts = object.party_share_counts?.map(e => e) || [];
    if (object.my_party_index !== undefined && object.my_party_index !== null) {
      message.myPartyIndex = object.my_party_index;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    return message;
  },
  toAmino(message: KeygenInit): KeygenInitAmino {
    const obj: any = {};
    obj.new_key_uid = message.newKeyUid;
    if (message.partyUids) {
      obj.party_uids = message.partyUids.map(e => e);
    } else {
      obj.party_uids = [];
    }
    if (message.partyShareCounts) {
      obj.party_share_counts = message.partyShareCounts.map(e => e);
    } else {
      obj.party_share_counts = [];
    }
    obj.my_party_index = message.myPartyIndex;
    obj.threshold = message.threshold;
    return obj;
  },
  fromAminoMsg(object: KeygenInitAminoMsg): KeygenInit {
    return KeygenInit.fromAmino(object.value);
  },
  fromProtoMsg(message: KeygenInitProtoMsg): KeygenInit {
    return KeygenInit.decode(message.value);
  },
  toProto(message: KeygenInit): Uint8Array {
    return KeygenInit.encode(message).finish();
  },
  toProtoMsg(message: KeygenInit): KeygenInitProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.KeygenInit",
      value: KeygenInit.encode(message).finish()
    };
  }
};
function createBaseSignInit(): SignInit {
  return {
    newSigUid: "",
    keyUid: "",
    partyUids: [],
    messageToSign: new Uint8Array()
  };
}
export const SignInit = {
  typeUrl: "/axelar.tss.tofnd.v1beta1.SignInit",
  encode(message: SignInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newSigUid !== "") {
      writer.uint32(10).string(message.newSigUid);
    }
    if (message.keyUid !== "") {
      writer.uint32(18).string(message.keyUid);
    }
    for (const v of message.partyUids) {
      writer.uint32(26).string(v!);
    }
    if (message.messageToSign.length !== 0) {
      writer.uint32(34).bytes(message.messageToSign);
    }
    return writer;
  },
  fromJSON(object: any): SignInit {
    return {
      newSigUid: isSet(object.newSigUid) ? String(object.newSigUid) : "",
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      partyUids: Array.isArray(object?.partyUids) ? object.partyUids.map((e: any) => String(e)) : [],
      messageToSign: isSet(object.messageToSign) ? bytesFromBase64(object.messageToSign) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<SignInit>): SignInit {
    const message = createBaseSignInit();
    message.newSigUid = object.newSigUid ?? "";
    message.keyUid = object.keyUid ?? "";
    message.partyUids = object.partyUids?.map(e => e) || [];
    message.messageToSign = object.messageToSign ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SignInitAmino): SignInit {
    const message = createBaseSignInit();
    if (object.new_sig_uid !== undefined && object.new_sig_uid !== null) {
      message.newSigUid = object.new_sig_uid;
    }
    if (object.key_uid !== undefined && object.key_uid !== null) {
      message.keyUid = object.key_uid;
    }
    message.partyUids = object.party_uids?.map(e => e) || [];
    if (object.message_to_sign !== undefined && object.message_to_sign !== null) {
      message.messageToSign = bytesFromBase64(object.message_to_sign);
    }
    return message;
  },
  toAmino(message: SignInit): SignInitAmino {
    const obj: any = {};
    obj.new_sig_uid = message.newSigUid;
    obj.key_uid = message.keyUid;
    if (message.partyUids) {
      obj.party_uids = message.partyUids.map(e => e);
    } else {
      obj.party_uids = [];
    }
    obj.message_to_sign = message.messageToSign ? base64FromBytes(message.messageToSign) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignInitAminoMsg): SignInit {
    return SignInit.fromAmino(object.value);
  },
  fromProtoMsg(message: SignInitProtoMsg): SignInit {
    return SignInit.decode(message.value);
  },
  toProto(message: SignInit): Uint8Array {
    return SignInit.encode(message).finish();
  },
  toProtoMsg(message: SignInit): SignInitProtoMsg {
    return {
      typeUrl: "/axelar.tss.tofnd.v1beta1.SignInit",
      value: SignInit.encode(message).finish()
    };
  }
};
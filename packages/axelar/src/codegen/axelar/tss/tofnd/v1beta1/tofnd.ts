import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../../helpers";
export enum RecoverResponse_Response {
  RESPONSE_UNSPECIFIED = 0,
  RESPONSE_SUCCESS = 1,
  RESPONSE_FAIL = 2,
  UNRECOGNIZED = -1,
}
export const RecoverResponse_ResponseSDKType = RecoverResponse_Response;
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
export interface RecoverRequestSDKType {
  keygen_init?: KeygenInitSDKType;
  keygen_output?: KeygenOutputSDKType;
}
export interface RecoverResponse {
  response: RecoverResponse_Response;
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
/** Sign's response types */
export interface MessageOut_SignResultSDKType {
  signature?: Uint8Array;
  criminals?: MessageOut_CriminalListSDKType;
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalList {
  criminals: MessageOut_CriminalList_Criminal[];
}
/** Keygen/Sign failure response message */
export interface MessageOut_CriminalListSDKType {
  criminals: MessageOut_CriminalList_CriminalSDKType[];
}
export interface MessageOut_CriminalList_Criminal {
  partyUid: string;
  crimeType: MessageOut_CriminalList_Criminal_CrimeType;
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
  encode(message: RecoverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRecoverResponse(): RecoverResponse {
  return {
    response: 0
  };
}
export const RecoverResponse = {
  encode(message: RecoverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }
    return writer;
  },
  fromJSON(object: any): RecoverResponse {
    return {
      response: isSet(object.response) ? recoverResponse_ResponseFromJSON(object.response) : 0
    };
  },
  fromPartial(object: Partial<RecoverResponse>): RecoverResponse {
    const message = createBaseRecoverResponse();
    message.response = object.response ?? 0;
    return message;
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
  encode(message: KeygenOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MessageIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: MessageOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMessageOut_KeygenResult(): MessageOut_KeygenResult {
  return {
    data: undefined,
    criminals: undefined
  };
}
export const MessageOut_KeygenResult = {
  encode(message: MessageOut_KeygenResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMessageOut_SignResult(): MessageOut_SignResult {
  return {
    signature: undefined,
    criminals: undefined
  };
}
export const MessageOut_SignResult = {
  encode(message: MessageOut_SignResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMessageOut_CriminalList(): MessageOut_CriminalList {
  return {
    criminals: []
  };
}
export const MessageOut_CriminalList = {
  encode(message: MessageOut_CriminalList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseMessageOut_CriminalList_Criminal(): MessageOut_CriminalList_Criminal {
  return {
    partyUid: "",
    crimeType: 0
  };
}
export const MessageOut_CriminalList_Criminal = {
  encode(message: MessageOut_CriminalList_Criminal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      crimeType: isSet(object.crimeType) ? messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object.crimeType) : 0
    };
  },
  fromPartial(object: Partial<MessageOut_CriminalList_Criminal>): MessageOut_CriminalList_Criminal {
    const message = createBaseMessageOut_CriminalList_Criminal();
    message.partyUid = object.partyUid ?? "";
    message.crimeType = object.crimeType ?? 0;
    return message;
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
  encode(message: TrafficIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: TrafficOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: KeygenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: SignInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
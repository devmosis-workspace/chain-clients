import { BinaryWriter } from "../../../../binary";
export declare enum RecoverResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_SUCCESS = 1,
    RESPONSE_FAIL = 2,
    UNRECOGNIZED = -1
}
export declare const RecoverResponse_ResponseSDKType: typeof RecoverResponse_Response;
export declare const RecoverResponse_ResponseAmino: typeof RecoverResponse_Response;
export declare function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response;
export declare function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string;
export declare enum MessageOut_CriminalList_Criminal_CrimeType {
    CRIME_TYPE_UNSPECIFIED = 0,
    CRIME_TYPE_NON_MALICIOUS = 1,
    CRIME_TYPE_MALICIOUS = 2,
    UNRECOGNIZED = -1
}
export declare const MessageOut_CriminalList_Criminal_CrimeTypeSDKType: typeof MessageOut_CriminalList_Criminal_CrimeType;
export declare const MessageOut_CriminalList_Criminal_CrimeTypeAmino: typeof MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: MessageOut_CriminalList_Criminal_CrimeType): string;
export interface RecoverRequest {
    keygenInit: KeygenInit;
    keygenOutput: KeygenOutput;
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
    keygen_init: KeygenInitSDKType;
    keygen_output: KeygenOutputSDKType;
}
export interface RecoverResponse {
    response: RecoverResponse_Response;
}
export interface RecoverResponseProtoMsg {
    typeUrl: "/axelar.tss.tofnd.v1beta1.RecoverResponse";
    value: Uint8Array;
}
export interface RecoverResponseAmino {
    response: RecoverResponse_Response;
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
    pub_key: Uint8Array;
    /** recover info of all parties' shares; common for all parties */
    group_recover_info: Uint8Array;
    /** private recover info of this party's shares; unique for each party */
    private_recover_info: Uint8Array;
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
    signature?: Uint8Array;
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
    criminals: MessageOut_CriminalList_CriminalAmino[];
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
    party_uid: string;
    crime_type: MessageOut_CriminalList_Criminal_CrimeType;
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
    from_party_uid: string;
    payload: Uint8Array;
    is_broadcast: boolean;
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
    to_party_uid: string;
    payload: Uint8Array;
    is_broadcast: boolean;
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
    new_key_uid: string;
    party_uids: string[];
    party_share_counts: number[];
    /** parties[my_party_index] belongs to the server */
    my_party_index: number;
    threshold: number;
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
    new_sig_uid: string;
    key_uid: string;
    /** TODO replace this with a subset of indices? */
    party_uids: string[];
    message_to_sign: Uint8Array;
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
export declare const RecoverRequest: {
    typeUrl: string;
    encode(message: RecoverRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RecoverRequest;
    fromPartial(object: Partial<RecoverRequest>): RecoverRequest;
    fromAmino(object: RecoverRequestAmino): RecoverRequest;
    toAmino(message: RecoverRequest): RecoverRequestAmino;
    fromAminoMsg(object: RecoverRequestAminoMsg): RecoverRequest;
    fromProtoMsg(message: RecoverRequestProtoMsg): RecoverRequest;
    toProto(message: RecoverRequest): Uint8Array;
    toProtoMsg(message: RecoverRequest): RecoverRequestProtoMsg;
};
export declare const RecoverResponse: {
    typeUrl: string;
    encode(message: RecoverResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RecoverResponse;
    fromPartial(object: Partial<RecoverResponse>): RecoverResponse;
    fromAmino(object: RecoverResponseAmino): RecoverResponse;
    toAmino(message: RecoverResponse): RecoverResponseAmino;
    fromAminoMsg(object: RecoverResponseAminoMsg): RecoverResponse;
    fromProtoMsg(message: RecoverResponseProtoMsg): RecoverResponse;
    toProto(message: RecoverResponse): Uint8Array;
    toProtoMsg(message: RecoverResponse): RecoverResponseProtoMsg;
};
export declare const KeygenOutput: {
    typeUrl: string;
    encode(message: KeygenOutput, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenOutput;
    fromPartial(object: Partial<KeygenOutput>): KeygenOutput;
    fromAmino(object: KeygenOutputAmino): KeygenOutput;
    toAmino(message: KeygenOutput): KeygenOutputAmino;
    fromAminoMsg(object: KeygenOutputAminoMsg): KeygenOutput;
    fromProtoMsg(message: KeygenOutputProtoMsg): KeygenOutput;
    toProto(message: KeygenOutput): Uint8Array;
    toProtoMsg(message: KeygenOutput): KeygenOutputProtoMsg;
};
export declare const MessageIn: {
    typeUrl: string;
    encode(message: MessageIn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageIn;
    fromPartial(object: Partial<MessageIn>): MessageIn;
    fromAmino(object: MessageInAmino): MessageIn;
    toAmino(message: MessageIn): MessageInAmino;
    fromAminoMsg(object: MessageInAminoMsg): MessageIn;
    fromProtoMsg(message: MessageInProtoMsg): MessageIn;
    toProto(message: MessageIn): Uint8Array;
    toProtoMsg(message: MessageIn): MessageInProtoMsg;
};
export declare const MessageOut: {
    typeUrl: string;
    encode(message: MessageOut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageOut;
    fromPartial(object: Partial<MessageOut>): MessageOut;
    fromAmino(object: MessageOutAmino): MessageOut;
    toAmino(message: MessageOut): MessageOutAmino;
    fromAminoMsg(object: MessageOutAminoMsg): MessageOut;
    fromProtoMsg(message: MessageOutProtoMsg): MessageOut;
    toProto(message: MessageOut): Uint8Array;
    toProtoMsg(message: MessageOut): MessageOutProtoMsg;
};
export declare const MessageOut_KeygenResult: {
    typeUrl: string;
    encode(message: MessageOut_KeygenResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageOut_KeygenResult;
    fromPartial(object: Partial<MessageOut_KeygenResult>): MessageOut_KeygenResult;
    fromAmino(object: MessageOut_KeygenResultAmino): MessageOut_KeygenResult;
    toAmino(message: MessageOut_KeygenResult): MessageOut_KeygenResultAmino;
    fromAminoMsg(object: MessageOut_KeygenResultAminoMsg): MessageOut_KeygenResult;
    fromProtoMsg(message: MessageOut_KeygenResultProtoMsg): MessageOut_KeygenResult;
    toProto(message: MessageOut_KeygenResult): Uint8Array;
    toProtoMsg(message: MessageOut_KeygenResult): MessageOut_KeygenResultProtoMsg;
};
export declare const MessageOut_SignResult: {
    typeUrl: string;
    encode(message: MessageOut_SignResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageOut_SignResult;
    fromPartial(object: Partial<MessageOut_SignResult>): MessageOut_SignResult;
    fromAmino(object: MessageOut_SignResultAmino): MessageOut_SignResult;
    toAmino(message: MessageOut_SignResult): MessageOut_SignResultAmino;
    fromAminoMsg(object: MessageOut_SignResultAminoMsg): MessageOut_SignResult;
    fromProtoMsg(message: MessageOut_SignResultProtoMsg): MessageOut_SignResult;
    toProto(message: MessageOut_SignResult): Uint8Array;
    toProtoMsg(message: MessageOut_SignResult): MessageOut_SignResultProtoMsg;
};
export declare const MessageOut_CriminalList: {
    typeUrl: string;
    encode(message: MessageOut_CriminalList, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageOut_CriminalList;
    fromPartial(object: Partial<MessageOut_CriminalList>): MessageOut_CriminalList;
    fromAmino(object: MessageOut_CriminalListAmino): MessageOut_CriminalList;
    toAmino(message: MessageOut_CriminalList): MessageOut_CriminalListAmino;
    fromAminoMsg(object: MessageOut_CriminalListAminoMsg): MessageOut_CriminalList;
    fromProtoMsg(message: MessageOut_CriminalListProtoMsg): MessageOut_CriminalList;
    toProto(message: MessageOut_CriminalList): Uint8Array;
    toProtoMsg(message: MessageOut_CriminalList): MessageOut_CriminalListProtoMsg;
};
export declare const MessageOut_CriminalList_Criminal: {
    typeUrl: string;
    encode(message: MessageOut_CriminalList_Criminal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageOut_CriminalList_Criminal;
    fromPartial(object: Partial<MessageOut_CriminalList_Criminal>): MessageOut_CriminalList_Criminal;
    fromAmino(object: MessageOut_CriminalList_CriminalAmino): MessageOut_CriminalList_Criminal;
    toAmino(message: MessageOut_CriminalList_Criminal): MessageOut_CriminalList_CriminalAmino;
    fromAminoMsg(object: MessageOut_CriminalList_CriminalAminoMsg): MessageOut_CriminalList_Criminal;
    fromProtoMsg(message: MessageOut_CriminalList_CriminalProtoMsg): MessageOut_CriminalList_Criminal;
    toProto(message: MessageOut_CriminalList_Criminal): Uint8Array;
    toProtoMsg(message: MessageOut_CriminalList_Criminal): MessageOut_CriminalList_CriminalProtoMsg;
};
export declare const TrafficIn: {
    typeUrl: string;
    encode(message: TrafficIn, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TrafficIn;
    fromPartial(object: Partial<TrafficIn>): TrafficIn;
    fromAmino(object: TrafficInAmino): TrafficIn;
    toAmino(message: TrafficIn): TrafficInAmino;
    fromAminoMsg(object: TrafficInAminoMsg): TrafficIn;
    fromProtoMsg(message: TrafficInProtoMsg): TrafficIn;
    toProto(message: TrafficIn): Uint8Array;
    toProtoMsg(message: TrafficIn): TrafficInProtoMsg;
};
export declare const TrafficOut: {
    typeUrl: string;
    encode(message: TrafficOut, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TrafficOut;
    fromPartial(object: Partial<TrafficOut>): TrafficOut;
    fromAmino(object: TrafficOutAmino): TrafficOut;
    toAmino(message: TrafficOut): TrafficOutAmino;
    fromAminoMsg(object: TrafficOutAminoMsg): TrafficOut;
    fromProtoMsg(message: TrafficOutProtoMsg): TrafficOut;
    toProto(message: TrafficOut): Uint8Array;
    toProtoMsg(message: TrafficOut): TrafficOutProtoMsg;
};
export declare const KeygenInit: {
    typeUrl: string;
    encode(message: KeygenInit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeygenInit;
    fromPartial(object: Partial<KeygenInit>): KeygenInit;
    fromAmino(object: KeygenInitAmino): KeygenInit;
    toAmino(message: KeygenInit): KeygenInitAmino;
    fromAminoMsg(object: KeygenInitAminoMsg): KeygenInit;
    fromProtoMsg(message: KeygenInitProtoMsg): KeygenInit;
    toProto(message: KeygenInit): Uint8Array;
    toProtoMsg(message: KeygenInit): KeygenInitProtoMsg;
};
export declare const SignInit: {
    typeUrl: string;
    encode(message: SignInit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignInit;
    fromPartial(object: Partial<SignInit>): SignInit;
    fromAmino(object: SignInitAmino): SignInit;
    toAmino(message: SignInit): SignInitAmino;
    fromAminoMsg(object: SignInitAminoMsg): SignInit;
    fromProtoMsg(message: SignInitProtoMsg): SignInit;
    toProto(message: SignInit): Uint8Array;
    toProtoMsg(message: SignInit): SignInitProtoMsg;
};

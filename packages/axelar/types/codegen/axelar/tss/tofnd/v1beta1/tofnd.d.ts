import * as _m0 from "protobufjs/minimal";
export declare enum RecoverResponse_Response {
    RESPONSE_UNSPECIFIED = 0,
    RESPONSE_SUCCESS = 1,
    RESPONSE_FAIL = 2,
    UNRECOGNIZED = -1
}
export declare const RecoverResponse_ResponseSDKType: typeof RecoverResponse_Response;
export declare function recoverResponse_ResponseFromJSON(object: any): RecoverResponse_Response;
export declare function recoverResponse_ResponseToJSON(object: RecoverResponse_Response): string;
export declare enum MessageOut_CriminalList_Criminal_CrimeType {
    CRIME_TYPE_UNSPECIFIED = 0,
    CRIME_TYPE_NON_MALICIOUS = 1,
    CRIME_TYPE_MALICIOUS = 2,
    UNRECOGNIZED = -1
}
export declare const MessageOut_CriminalList_Criminal_CrimeTypeSDKType: typeof MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeFromJSON(object: any): MessageOut_CriminalList_Criminal_CrimeType;
export declare function messageOut_CriminalList_Criminal_CrimeTypeToJSON(object: MessageOut_CriminalList_Criminal_CrimeType): string;
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
export declare const RecoverRequest: {
    encode(message: RecoverRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecoverRequest;
    fromPartial(object: Partial<RecoverRequest>): RecoverRequest;
};
export declare const RecoverResponse: {
    encode(message: RecoverResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecoverResponse;
    fromPartial(object: Partial<RecoverResponse>): RecoverResponse;
};
export declare const KeygenOutput: {
    encode(message: KeygenOutput, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenOutput;
    fromPartial(object: Partial<KeygenOutput>): KeygenOutput;
};
export declare const MessageIn: {
    encode(message: MessageIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageIn;
    fromPartial(object: Partial<MessageIn>): MessageIn;
};
export declare const MessageOut: {
    encode(message: MessageOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageOut;
    fromPartial(object: Partial<MessageOut>): MessageOut;
};
export declare const MessageOut_KeygenResult: {
    encode(message: MessageOut_KeygenResult, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageOut_KeygenResult;
    fromPartial(object: Partial<MessageOut_KeygenResult>): MessageOut_KeygenResult;
};
export declare const MessageOut_SignResult: {
    encode(message: MessageOut_SignResult, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageOut_SignResult;
    fromPartial(object: Partial<MessageOut_SignResult>): MessageOut_SignResult;
};
export declare const MessageOut_CriminalList: {
    encode(message: MessageOut_CriminalList, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageOut_CriminalList;
    fromPartial(object: Partial<MessageOut_CriminalList>): MessageOut_CriminalList;
};
export declare const MessageOut_CriminalList_Criminal: {
    encode(message: MessageOut_CriminalList_Criminal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageOut_CriminalList_Criminal;
    fromPartial(object: Partial<MessageOut_CriminalList_Criminal>): MessageOut_CriminalList_Criminal;
};
export declare const TrafficIn: {
    encode(message: TrafficIn, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TrafficIn;
    fromPartial(object: Partial<TrafficIn>): TrafficIn;
};
export declare const TrafficOut: {
    encode(message: TrafficOut, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TrafficOut;
    fromPartial(object: Partial<TrafficOut>): TrafficOut;
};
export declare const KeygenInit: {
    encode(message: KeygenInit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeygenInit;
    fromPartial(object: Partial<KeygenInit>): KeygenInit;
};
export declare const SignInit: {
    encode(message: SignInit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignInit;
    fromPartial(object: Partial<SignInit>): SignInit;
};

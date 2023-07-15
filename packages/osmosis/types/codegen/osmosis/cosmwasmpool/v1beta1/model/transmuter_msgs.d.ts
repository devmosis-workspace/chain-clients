import * as _m0 from "protobufjs/minimal";
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequest {
}
/** ===================== JoinPoolExecuteMsg */
export interface EmptyRequestSDKType {
}
export interface JoinPoolExecuteMsgRequest {
    /**
     * join_pool is the structure containing all request fields of the join pool
     * execute message.
     */
    joinPool?: EmptyRequest;
}
export interface JoinPoolExecuteMsgRequestSDKType {
    join_pool?: EmptyRequestSDKType;
}
export interface JoinPoolExecuteMsgResponse {
}
export interface JoinPoolExecuteMsgResponseSDKType {
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequest {
    /**
     * exit_pool is the structure containing all request fields of the exit pool
     * execute message.
     */
    exitPool?: EmptyRequest;
}
/** ===================== ExitPoolExecuteMsg */
export interface ExitPoolExecuteMsgRequestSDKType {
    exit_pool?: EmptyRequestSDKType;
}
export interface ExitPoolExecuteMsgResponse {
}
export interface ExitPoolExecuteMsgResponseSDKType {
}
export declare const EmptyRequest: {
    encode(_: EmptyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): EmptyRequest;
    fromPartial(_: Partial<EmptyRequest>): EmptyRequest;
};
export declare const JoinPoolExecuteMsgRequest: {
    encode(message: JoinPoolExecuteMsgRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): JoinPoolExecuteMsgRequest;
    fromPartial(object: Partial<JoinPoolExecuteMsgRequest>): JoinPoolExecuteMsgRequest;
};
export declare const JoinPoolExecuteMsgResponse: {
    encode(_: JoinPoolExecuteMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): JoinPoolExecuteMsgResponse;
    fromPartial(_: Partial<JoinPoolExecuteMsgResponse>): JoinPoolExecuteMsgResponse;
};
export declare const ExitPoolExecuteMsgRequest: {
    encode(message: ExitPoolExecuteMsgRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExitPoolExecuteMsgRequest;
    fromPartial(object: Partial<ExitPoolExecuteMsgRequest>): ExitPoolExecuteMsgRequest;
};
export declare const ExitPoolExecuteMsgResponse: {
    encode(_: ExitPoolExecuteMsgResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ExitPoolExecuteMsgResponse;
    fromPartial(_: Partial<ExitPoolExecuteMsgResponse>): ExitPoolExecuteMsgResponse;
};

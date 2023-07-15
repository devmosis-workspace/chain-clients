import * as _m0 from "protobufjs/minimal";
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
    description: string;
    address: string;
    addedBy: string;
}
/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuperSDKType {
    description: string;
    address: string;
    added_by: string;
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {
}
/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponseSDKType {
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
    address: string;
    deletedBy: string;
}
/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuperSDKType {
    address: string;
    deleted_by: string;
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {
}
/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponseSDKType {
}
export declare const MsgAddSuper: {
    encode(message: MsgAddSuper, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddSuper;
    fromPartial(object: Partial<MsgAddSuper>): MsgAddSuper;
};
export declare const MsgAddSuperResponse: {
    encode(_: MsgAddSuperResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddSuperResponse;
    fromPartial(_: Partial<MsgAddSuperResponse>): MsgAddSuperResponse;
};
export declare const MsgDeleteSuper: {
    encode(message: MsgDeleteSuper, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDeleteSuper;
    fromPartial(object: Partial<MsgDeleteSuper>): MsgDeleteSuper;
};
export declare const MsgDeleteSuperResponse: {
    encode(_: MsgDeleteSuperResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDeleteSuperResponse;
    fromPartial(_: Partial<MsgDeleteSuperResponse>): MsgDeleteSuperResponse;
};

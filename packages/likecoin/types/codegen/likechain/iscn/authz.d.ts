import * as _m0 from "protobufjs/minimal";
export interface UpdateAuthorization {
    iscnIdPrefix: string;
}
export interface UpdateAuthorizationSDKType {
    iscn_id_prefix: string;
}
export declare const UpdateAuthorization: {
    encode(message: UpdateAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateAuthorization;
    fromPartial(object: Partial<UpdateAuthorization>): UpdateAuthorization;
};

import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface IscnIdPrefix {
    registryName: string;
    contentId: string;
}
export interface IscnIdPrefixSDKType {
    registry_name: string;
    content_id: string;
}
export interface IscnId {
    prefix?: IscnIdPrefix;
    version: Long;
}
export interface IscnIdSDKType {
    prefix?: IscnIdPrefixSDKType;
    version: Long;
}
export declare const IscnIdPrefix: {
    encode(message: IscnIdPrefix, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IscnIdPrefix;
    fromPartial(object: Partial<IscnIdPrefix>): IscnIdPrefix;
};
export declare const IscnId: {
    encode(message: IscnId, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IscnId;
    fromPartial(object: Partial<IscnId>): IscnId;
};

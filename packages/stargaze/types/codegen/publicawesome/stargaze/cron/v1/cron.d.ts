import { BinaryWriter } from "../../../../binary";
/** Params holds parameters for the cron module. */
export interface Params {
    /**
     * Addresses which act as admins of the module. They can promote and demote
     * contracts without having to go via governance.
     */
    adminAddresses: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the cron module. */
export interface ParamsAmino {
    /**
     * Addresses which act as admins of the module. They can promote and demote
     * contracts without having to go via governance.
     */
    admin_addresses?: string[];
}
export interface ParamsAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the cron module. */
export interface ParamsSDKType {
    admin_addresses: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};

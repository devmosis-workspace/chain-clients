import { Params, ParamsSDKType } from "./params";
import { PacketID, PacketIDSDKType, Fee, FeeSDKType } from "./fee";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
    params?: Params;
    feeInfos: FeeInfo[];
}
/** GenesisState defines the fee module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    fee_infos: FeeInfoSDKType[];
}
export interface FeeInfo {
    payer: string;
    packetId?: PacketID;
    fee?: Fee;
}
export interface FeeInfoSDKType {
    payer: string;
    packet_id?: PacketIDSDKType;
    fee?: FeeSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const FeeInfo: {
    encode(message: FeeInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeInfo;
    fromPartial(object: Partial<FeeInfo>): FeeInfo;
};

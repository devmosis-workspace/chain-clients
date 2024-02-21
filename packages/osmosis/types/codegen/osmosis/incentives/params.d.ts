import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** Params holds parameters for the incentives module */
export interface Params {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     */
    distrEpochIdentifier: string;
    /**
     * group_creation_fee is the fee required to create a new group
     * It is only charged to all addresses other than incentive module account
     * or addresses in the unrestricted_creator_whitelist
     */
    groupCreationFee: Coin[];
    /**
     * unrestricted_creator_whitelist is a list of addresses that are
     * allowed to bypass restrictions on permissionless Group
     * creation. In the future, we might expand these to creating gauges
     * as well.
     * The goal of this is to allow a subdao to manage incentives efficiently
     * without being stopped by 5 day governance process or a high fee.
     * At the same time, it prevents spam by having a fee for all
     * other users.
     */
    unrestrictedCreatorWhitelist: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.incentives.Params";
    value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     */
    distr_epoch_identifier?: string;
    /**
     * group_creation_fee is the fee required to create a new group
     * It is only charged to all addresses other than incentive module account
     * or addresses in the unrestricted_creator_whitelist
     */
    group_creation_fee?: CoinAmino[];
    /**
     * unrestricted_creator_whitelist is a list of addresses that are
     * allowed to bypass restrictions on permissionless Group
     * creation. In the future, we might expand these to creating gauges
     * as well.
     * The goal of this is to allow a subdao to manage incentives efficiently
     * without being stopped by 5 day governance process or a high fee.
     * At the same time, it prevents spam by having a fee for all
     * other users.
     */
    unrestricted_creator_whitelist?: string[];
}
export interface ParamsAminoMsg {
    type: "osmosis/incentives/params";
    value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    distr_epoch_identifier: string;
    group_creation_fee: CoinSDKType[];
    unrestricted_creator_whitelist: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};

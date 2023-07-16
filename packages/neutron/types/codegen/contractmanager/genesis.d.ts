import { Params, ParamsSDKType } from "./params";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface Failure {
    /** ChannelId */
    channelId: string;
    /** Address of the failed contract */
    address: string;
    /** id of the failure under specific address */
    id: Long;
    /** ACK id to restore */
    ackId: Long;
    /** Acknowledgement type */
    ackType: string;
}
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 */
export interface FailureSDKType {
    channel_id: string;
    address: string;
    id: Long;
    ack_id: Long;
    ack_type: string;
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisState {
    params?: Params;
    /** List of the contract failures */
    failuresList: Failure[];
}
/** GenesisState defines the contractmanager module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    failures_list: FailureSDKType[];
}
export declare const Failure: {
    encode(message: Failure, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Failure;
    fromPartial(object: Partial<Failure>): Failure;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};

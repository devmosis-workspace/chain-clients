import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: bigint;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
    params?: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.lockup.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
    last_lock_id?: string;
    locks?: PeriodLockAmino[];
    synthetic_locks?: SyntheticLockAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/lockup/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
    last_lock_id: bigint;
    locks: PeriodLockSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
    params?: ParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};

import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    lastLockId: Long;
    locks: PeriodLock[];
    syntheticLocks: SyntheticLock[];
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
    last_lock_id: Long;
    locks: PeriodLockSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
